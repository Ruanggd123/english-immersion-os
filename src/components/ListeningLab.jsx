import React, { useState, useEffect, useMemo } from 'react';
import {
  Headphones, Volume2, RefreshCw, CheckCircle2, XCircle, Lightbulb, Target,
  Award, ChevronRight, SquarePen, ListChecks, Gauge, Timer
} from 'lucide-react';
import { speakWebSpeech, stopSpeech } from '../utils/audio';
import { allDays } from '../data/phases';
import { buildPool, shuffled, pickDistractors, normalizeText } from '../utils/phraseGenerator';

const safeParse = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

const todayKey = () => new Date().toISOString().slice(0, 10);

const SOURCE_LABELS = {
  vocab: 'Vocabulário',
  chunk: 'Chunk',
  grammar: 'Gramática',
  listening: 'Listening',
  reading: 'Reading',
  speaking: 'Speaking',
  lightreading: 'Leitura leve',
  generated: 'Gerada'
};

const SESSION_SIZE = 30;
const SPEED_MIN = 0.6;
const SPEED_MAX = 1.0;

export default function ListeningLab({ currentDay = 1 }) {
  const dayNum = allDays[currentDay] ? currentDay : 1;

  const [scope, setScope] = useState('today');
  const [mode, setMode] = useState('choice');
  const [reviewFirst, setReviewFirst] = useState(() => safeParse('english_lab_settings', { reviewFirst: false }).reviewFirst);
  const [batchSeed, setBatchSeed] = useState(0);

  const [session, setSession] = useState([]);
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('answering');
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [speed, setSpeed] = useState(0.8);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dictText, setDictText] = useState('');
  const [hintLevel, setHintLevel] = useState(0);
  const [stats, setStats] = useState(() => safeParse('english_listening_stats', { date: todayKey(), done: 0, correct: 0 }));

  const weakMap = useMemo(() => safeParse('english_listening_weak', {}), [session, phase]);

  useEffect(() => {
    localStorage.setItem('english_listening_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('english_lab_settings', JSON.stringify({ reviewFirst }));
  }, [reviewFirst]);

  const scopeDays = useMemo(() => {
    if (scope === 'today') return [dayNum];
    if (scope === 'week') {
      const days = [];
      for (let d = Math.max(1, dayNum - 6); d <= dayNum; d++) days.push(d);
      return days;
    }
    if (scope === 'month') {
      const days = [];
      for (let d = Math.max(1, dayNum - 29); d <= dayNum; d++) days.push(d);
      return days;
    }
    const days = [];
    for (let d = 1; d <= 180; d++) days.push(d);
    return days;
  }, [scope, dayNum]);

  const pool = useMemo(() => buildPool(scopeDays), [scopeDays, batchSeed]);

  const newBatch = () => {
    setBatchSeed(s => s + 1);
  };

  useEffect(() => {
    const weak = safeParse('english_listening_weak', {});
    const weakPhrases = Object.keys(weak).filter(id => weak[id] >= 2);

    let batch = [];
    if (scope === 'review') {
      batch = pool
        .filter(p => weakPhrases.includes(p.id))
        .sort((a, b) => (weak[b.id] || 0) - (weak[a.id] || 0));
    } else if (reviewFirst && weakPhrases.length > 0) {
      const weakPool = pool.filter(p => weakPhrases.includes(p.id));
      batch = batch.concat(shuffled(weakPool).slice(0, 12));
      const rest = pool.filter(p => !weakPhrases.includes(p.id));
      batch = batch.concat(shuffled(rest));
    } else {
      batch = shuffled(pool);
    }

    batch = batch.slice(0, SESSION_SIZE);
    if (batch.length === 0 && scope !== 'review') {
      batch = shuffled(pool).slice(0, SESSION_SIZE);
    }
    setSession(batch);
    setIdx(0);
    setPhase('answering');
    setCorrectCount(0);
    setWrongCount(0);
    setStreak(0);
    setBestStreak(0);
    setSelected(null);
    setDictText('');
    setHintLevel(0);
  }, [pool, reviewFirst, scope, batchSeed]);

  const phrase = session[idx];
  const isDone = session.length > 0 && idx >= session.length;
  const weakTotal = Object.keys(weakMap).filter(id => weakMap[id] >= 2).length;

  useEffect(() => {
    if (!phrase || phase !== 'answering') return;
    setSelected(null);
    setDictText('');
    setHintLevel(0);
    if (mode === 'choice') {
      setOptions(shuffled([phrase, ...pickDistractors(pool, phrase, 3)]).map(p => p.en));
    }
  }, [phrase, phase, mode, pool]);

  const updateWeak = (id, delta) => {
    const map = safeParse('english_listening_weak', {});
    const next = (map[id] || 0) + delta;
    if (next <= 0) delete map[id];
    else map[id] = next;
    localStorage.setItem('english_listening_weak', JSON.stringify(map));
  };

  const adaptSpeed = (correct) => {
    setSpeed(s => {
      if (correct) return Math.min(SPEED_MAX, s + 0.05);
      return Math.max(SPEED_MIN, s - 0.05);
    });
  };

  const markResult = (isCorrect) => {
    if (!phrase || phase !== 'answering') return;
    if (isCorrect) {
      setCorrectCount(c => c + 1);
      setStreak(s => {
        const ns = s + 1;
        setBestStreak(b => Math.max(b, ns));
        return ns;
      });
      updateWeak(phrase.id, -1);
    } else {
      setWrongCount(w => w + 1);
      setStreak(0);
      updateWeak(phrase.id, 1);
    }
    adaptSpeed(isCorrect);
    setStats(prev => ({
      date: todayKey(),
      done: (prev.date === todayKey() ? prev.done : 0) + 1,
      correct: (prev.date === todayKey() ? prev.correct : 0) + (isCorrect ? 1 : 0)
    }));
    setPhase('feedback');
  };

  const handleChoice = (opt) => {
    if (phase !== 'answering') return;
    setSelected(opt);
    markResult(opt === phrase.en);
  };

  const checkDictation = () => {
    if (phase !== 'answering') return;
    const isCorrect = normalizeText(dictText) === normalizeText(phrase.en);
    markResult(isCorrect);
  };

  const handleSpeak = (text, rate) => speakWebSpeech(text, rate || speed);
  const nextPhrase = () => {
    setIdx(i => i + 1);
    setPhase('answering');
  };

  const dailyDone = stats.date === todayKey() ? stats.done : 0;
  const targetPct = Math.min(100, Math.round((dailyDone / SESSION_SIZE) * 100));
  const accuracy = correctCount + wrongCount > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;

  const hintText = (en) => {
    if (hintLevel === 0) return null;
    return en.split(' ').map(w => w.slice(0, hintLevel * 2)).join(' ');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '820px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span className="badge badge-blue">
              <Headphones size={14} /> Listening Lab
            </span>
            <span className="badge badge-emerald">Frases Ilimitadas</span>
          </div>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800 }}>
            Treinador de Audição
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Ouça a frase e adivinhe o que foi falado. {weakTotal > 0 ? `Você tem ${weakTotal} frases fracas para revisar.` : 'Sua precisão aumenta a velocidade automaticamente.'}
          </p>
        </div>
        <div style={{ textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '0.9rem 1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-emerald)', fontWeight: 800, fontSize: '1.4rem' }}>
            <Target size={18} /> {dailyDone}/{SESSION_SIZE}
          </div>
          <div className="progress-bar-bg" style={{ width: '130px', marginTop: '0.35rem' }}>
            <div className="progress-bar-fill" style={{ width: `${targetPct}%` }} />
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Meta de hoje</div>
        </div>
      </div>

      {/* Controls */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="badge badge-blue"><Gauge size={13} /> Velocidade {speed.toFixed(2)}x</span>
          <span className="badge badge-amber"><Timer size={13} /> {Math.round(speed * 100)}% natural</span>
          <span className="badge badge-emerald"><Award size={13} /> Sequência {streak}</span>
          <span className="badge badge-purple">Precisão {accuracy}%</span>
          <div style={{ flex: 1 }} />
          <button className="btn btn-secondary" onClick={() => { stopSpeech(); newBatch(); }}>
            <RefreshCw size={15} /> Novo Lote
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {['today', 'week', 'month', 'review'].map(sc => (
            <button
              key={sc}
              className={`btn ${scope === sc ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem' }}
              onClick={() => setScope(sc)}
            >
              {sc === 'today' ? 'Hoje' : sc === 'week' ? 'Últimos 7 dias' : sc === 'month' ? 'Últimos 30 dias' : `Só revisão (${weakTotal})`}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            className={`btn ${mode === 'choice' ? 'btn-emerald' : 'btn-secondary'}`}
            style={{ fontSize: '0.8rem' }}
            onClick={() => setMode('choice')}
          >
            <Target size={15} /> Múltipla escolha
          </button>
          <button
            className={`btn ${mode === 'dictation' ? 'btn-emerald' : 'btn-secondary'}`}
            style={{ fontSize: '0.8rem' }}
            onClick={() => setMode('dictation')}
          >
            <SquarePen size={15} /> Ditado por digitação
          </button>
          <div style={{ flex: 1 }} />
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={reviewFirst}
              onChange={(e) => setReviewFirst(e.target.checked)}
              style={{ accentColor: 'var(--accent-emerald)', width: '16px', height: '16px' }}
            />
            Revisar erros primeiro
          </label>
        </div>
      </div>

      {/* Session Area */}
      {!isDone && phrase && (
        <div className="card" style={{ borderColor: 'var(--accent-blue)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="badge badge-blue"><ListChecks size={13} /> Frase {idx + 1} de {session.length}</span>
            <span className="badge badge-amber">Dia {phrase.day} • {SOURCE_LABELS[phrase.source] || phrase.source}</span>
          </div>

          {/* Audio Controls */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <button className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }} onClick={() => handleSpeak(phrase.en)}>
              <Volume2 size={20} /> Ouvir ({mode === 'dictation' ? 'quantas vezes precisar' : 'e escolher'})
            </button>
            <button className="btn btn-secondary" onClick={() => handleSpeak(phrase.en, 0.6)}>
              <Gauge size={16} /> Ouvir devagar
            </button>
            {mode === 'dictation' && phase === 'answering' && (
              <button className="btn btn-secondary" onClick={() => setHintLevel(h => h + 1)}>
                <Lightbulb size={16} /> Dica
              </button>
            )}
            <div style={{ flex: 1 }} />
            <button className="btn btn-secondary" onClick={() => stopSpeech()}>
              Parar
            </button>
          </div>

          {mode === 'choice' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {options.map((opt, oi) => {
                const isTarget = opt === phrase.en;
                const isSelected = selected === opt;
                let bg = 'rgba(0,0,0,0.25)';
                let border = 'var(--border-color)';
                let color = 'var(--text-primary)';
                if (phase === 'feedback') {
                  if (isTarget) { bg = 'rgba(16,185,129,0.18)'; border = '#10b981'; color = '#10b981'; }
                  else if (isSelected) { bg = 'rgba(244,63,94,0.18)'; border = '#f43f5e'; color = '#f43f5e'; }
                  else { color = 'var(--text-muted)'; }
                }
                return (
                  <button
                    key={oi}
                    disabled={phase === 'feedback'}
                    onClick={() => handleChoice(opt)}
                    style={{
                      textAlign: 'left', background: bg, border: `1px solid ${border}`, borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem', color, fontWeight: 600, fontSize: '0.95rem', cursor: phase === 'answering' ? 'pointer' : 'default',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {opt} {phase === 'feedback' && isTarget && ' ✓'}
                  </button>
                );
              })}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {hintLevel > 0 && (
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.25)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)' }}>
                  Dica: {hintText(phrase.en)}
                </p>
              )}
              <input
                className="input-field"
                placeholder="Digite o que você ouviu em inglês..."
                value={dictText}
                onChange={(e) => setDictText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkDictation()}
                disabled={phase === 'feedback'}
                style={{ fontSize: '1rem', padding: '0.9rem 1.1rem' }}
              />
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-emerald" onClick={checkDictation} disabled={phase === 'feedback'}>
                  <CheckCircle2 size={16} /> Verificar
                </button>
                <button className="btn btn-secondary" onClick={() => markResult(false)} disabled={phase === 'feedback'}>
                  Não sei
                </button>
              </div>
            </div>
          )}

          {/* Feedback */}
          {phase === 'feedback' && (
            <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {selected === phrase.en || (mode === 'dictation' && normalizeText(dictText) === normalizeText(phrase.en)) ? (
                  <>
                    <CheckCircle2 size={20} color="var(--accent-emerald)" />
                    <span style={{ fontWeight: 800, color: 'var(--accent-emerald)' }}>Correto!</span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} color="#f43f5e" />
                    <span style={{ fontWeight: 800, color: '#f43f5e' }}>Não foi dessa vez — ouça de novo e repita em voz alta.</span>
                  </>
                )}
                <div style={{ flex: 1 }} />
                <button className="btn btn-primary" onClick={nextPhrase}>
                  {idx + 1 >= session.length ? 'Ver resultado' : 'Próxima frase'} <ChevronRight size={16} />
                </button>
              </div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                <div style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontSize: '1.05rem' }}>
                  "{phrase.en}"
                </div>
                {phrase.pt && (
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    {phrase.pt}
                  </div>
                )}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => handleSpeak(phrase.en)}>
                    <Volume2 size={13} /> Ouvir
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => handleSpeak(phrase.en, 0.6)}>
                    <Volume2 size={13} /> Devagar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Batch Complete */}
      {isDone && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <Award size={40} color="var(--accent-emerald)" style={{ marginBottom: '0.75rem' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>Lote concluído!</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {correctCount} de {correctCount + wrongCount} corretas • Precisão {accuracy}% • Melhor sequência: {bestStreak}
          </p>
          {accuracy >= 80 && (
            <p style={{ color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '1rem' }}>
              Excelente! A velocidade vai subir na próxima rodada.
            </p>
          )}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-emerald" onClick={newBatch}>
              <RefreshCw size={16} /> Gerar novo lote
            </button>
          </div>
        </div>
      )}

      {session.length === 0 && !phrase && (
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Nenhuma frase disponível neste filtro.</p>
        </div>
      )}
    </div>
  );
}
