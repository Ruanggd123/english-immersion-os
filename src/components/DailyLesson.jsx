import React, { useState } from 'react';
import { BookOpen, Headphones, Mic, CheckSquare, ChevronRight, Volume2, Play, Calendar, Sliders, Zap, Bot } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';
import { allDays } from '../data/phases';

export default function DailyLesson({ currentDay, setDay, toggleTask, todayTasks, setTab }) {
  const [selectedDay, setSelectedDay] = useState(currentDay || 1);
  const [showTranslation, setShowTranslation] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState(0.88);
  const [userAnswers, setUserAnswers] = useState({});

  const handleSpeak = (text) => {
    speakNaturalEnglish(text, speechSpeed);
  };

  const getDateForDay = (dayNum) => {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + (dayNum - 1));
    const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayName = dayNames[targetDate.getDay()];
    const dateFormatted = targetDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `${dayName} (${dateFormatted})`;
  };

  const lesson = allDays[selectedDay] || allDays[1];

  const isDayCompleted = todayTasks.morning_vocab && todayTasks.afternoon_listening && todayTasks.evening_journal;

  const handleAnswerSelect = (qIdx, option) => {
    setUserAnswers(prev => ({ ...prev, [qIdx]: option }));
  };

  const toggleAllTasksForDay = () => {
    toggleTask('morning_vocab');
    toggleTask('morning_grammar');
    toggleTask('morning_reading');
    toggleTask('morning_exercises');
    toggleTask('afternoon_vocab');
    toggleTask('afternoon_listening');
    toggleTask('afternoon_shadowing');
    toggleTask('afternoon_speaking');
    toggleTask('evening_reading');
    toggleTask('evening_listening');
    toggleTask('evening_journal');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Controls Bar */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(2, 132, 199, 0.18) 100%)',
        border: '1px solid var(--accent-emerald)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span className="badge badge-emerald">
              <Zap size={14} /> Bloco Unificado de Estudo Diário (Flexível)
            </span>
            <span className="badge badge-amber">
              <Calendar size={14} /> {getDateForDay(selectedDay)}
            </span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            {lesson.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
            Estude todo o conteúdo do dia em um bloco único no seu próprio ritmo, sem horários engessados!
          </p>
        </div>

        {/* Controls: Voice Speed + Day Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0, 0, 0, 0.3)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Sliders size={16} color="var(--accent-blue)" />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Voz:</span>
            <select
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', outline: 'none' }}
              value={speechSpeed}
              onChange={(e) => setSpeechSpeed(Number(e.target.value))}
            >
              <option value={0.75} style={{ background: '#111' }}>0.75x (Lento)</option>
              <option value={0.88} style={{ background: '#111' }}>0.88x (Natural - Recomendado)</option>
              <option value={1.00} style={{ background: '#111' }}>1.00x (Velocidade Normal)</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <select
              className="input-field"
              style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem', background: 'var(--bg-card)', borderColor: 'var(--accent-emerald)', fontWeight: 700 }}
              value={selectedDay}
              onChange={(e) => setSelectedDay(Number(e.target.value))}
            >
              {Object.keys(allDays).map(d => {
                const day = allDays[d];
                const label = `Dia ${d} — ${day.title.length > 42 ? day.title.slice(0, 42) + '…' : day.title}`;
                return (
                  <option key={d} value={d} style={{ background: '#111' }}>{label}</option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      {/* SINGLE UNIFIED MASTER STUDY BLOCK */}
      <div className="card" style={{ borderColor: 'var(--accent-emerald)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Header of the Master Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>
              CONTEÚDO COMPLETO DO DIA
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
              Bloco Mestre de Imersão do Dia {selectedDay}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Faça a sequência completa no horário que for mais conveniente para você.
            </p>
          </div>

          <button
            className={`btn ${isDayCompleted ? 'btn-emerald' : 'btn-primary'}`}
            onClick={toggleAllTasksForDay}
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
          >
            <CheckSquare size={18} /> {isDayCompleted ? 'Dia Concluído com Sucesso!' : 'Marcar Estudo do Dia como Concluído'}
          </button>
        </div>

        {/* ETAPA 1: VOCABULÁRIO & GRAMÁTICA */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} /> ETAPA 1: Vocabulário & Regra Gramatical
          </h4>

          {/* Vocab Words */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              Palavras do Dia (Clique no som para ouvir a voz nativa):
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
              {lesson.vocab.map((v, i) => (
                <div key={i} style={{
                  padding: '0.6rem 0.8rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontSize: '0.9rem' }}>{v.en}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{v.pt}</div>
                  </div>
                  <button className="btn btn-secondary" style={{ padding: '0.3rem', borderRadius: '50%' }} title="Ouvir pronúncia" onClick={() => handleSpeak(v.en)}>
                    <Volume2 size={14} color="var(--accent-blue)" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Rule Table */}
          <div style={{ marginBottom: '1rem' }}>
            <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '0.4rem' }}>
              {lesson.grammar.title}
            </h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <strong>Regra:</strong> {lesson.grammar.rule}
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-card)', textAlign: 'left', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '0.6rem 1rem', color: 'var(--accent-blue)' }}>Forma</th>
                    <th style={{ padding: '0.6rem 1rem', color: 'var(--accent-emerald)' }}>Frase em Inglês</th>
                    <th style={{ padding: '0.6rem 1rem', color: 'var(--text-muted)' }}>Tradução PT</th>
                    <th style={{ padding: '0.6rem 1rem' }}>Áudio</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.grammar.table.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>{row.form}</td>
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{row.example}</td>
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--text-secondary)' }}>{row.pt}</td>
                      <td style={{ padding: '0.6rem 1rem' }}>
                        <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }} onClick={() => handleSpeak(row.example)}>
                          <Volume2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ETAPA 2: LEITURA INTENSIVA & QUIZ */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ETAPA 2: Reading Intensivo & Quiz de Fixação
          </h4>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h5 style={{ fontSize: '1rem', fontWeight: 700 }}>{lesson.reading.title}</h5>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => handleSpeak(lesson.reading.text)}>
                <Volume2 size={14} /> Ouvir Texto Completo
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => setShowTranslation(!showTranslation)}>
                {showTranslation ? "Ocultar Tradução" : "Mostrar Tradução PT"}
              </button>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '1rem'
          }}>
            "{lesson.reading.text}"
          </div>

          {showTranslation && (
            <div style={{
              background: 'var(--accent-emerald-glow)',
              border: '1px solid var(--accent-emerald)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '1rem'
            }}>
              <strong>Tradução em Português:</strong> "{lesson.reading.translation}"
            </div>
          )}

          {/* Mini Quiz */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Quiz de Fixação Rápida:</span>
            {lesson.quiz.map((q, qIdx) => (
              <div key={qIdx} style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{q.q}</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAnswers[qIdx] === opt;
                    const isCorrect = opt === q.ans;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswerSelect(qIdx, opt)}
                        className={`btn ${isSelected ? (isCorrect ? 'btn-emerald' : 'btn-secondary') : 'btn-secondary'}`}
                        style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
                      >
                        {opt} {isSelected && (isCorrect ? ' (Correto!)' : ' (Tente novamente)')}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ETAPA 3: LISTENING, CHUNKS & SHADOWING */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-purple)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Headphones size={18} /> ETAPA 3: Listening, Chunks & Shadowing
          </h4>

          {/* Chunks */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
              Chunks do Dia (Expressões prontas em bloco):
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {lesson.chunks.map((c, idx) => (
                <div key={idx} style={{ padding: '0.5rem 0.8rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <span className="chunk-code">{c.en}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({c.pt})</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.4rem' }} onClick={() => handleSpeak(c.en)}>
                    <Volume2 size={13} color="var(--accent-blue)" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Script */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Áudio de Escuta do Dia:</span>
              <button className="btn btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }} onClick={() => handleSpeak(lesson.listeningScript)}>
                <Play size={14} /> Reproduzir Áudio de Escuta
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', lineHeight: 1.6 }}>
              "{lesson.listeningScript}"
            </p>
          </div>
        </div>

        {/* ETAPA 4: SPEAKING SOLO & DIÁRIO NOTURNO */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mic size={18} /> ETAPA 4: Produção Oral (Speaking) & Diário
            </h4>
            {setTab && (
              <button className="btn btn-emerald" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem', boxShadow: '0 0 15px var(--accent-emerald-glow)' }} onClick={() => setTab('ai')}>
                <Bot size={16} /> Treinar com a IA ao Vivo
              </button>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-emerald)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                  Roteiro de Fala Oral (Speaking Solo)
                </h5>
                <button className="btn btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }} onClick={() => handleSpeak(lesson.speakingPrompt)}>
                  <Volume2 size={13} /> Ouvir Roteiro
                </button>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {lesson.speakingPrompt}
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.4rem' }}>
                Frase para o Diário de Inglês
              </h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                "{lesson.journalPrompt}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
