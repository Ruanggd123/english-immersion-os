import React, { useState, useEffect, useMemo } from 'react';
import { Brain, Sparkles, RefreshCw, Eye, EyeOff, Award, CheckCircle2, Zap, BookOpen, Layers, Lightbulb, Volume2, Plus } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';
import { allDays } from '../data/phases';

const safeParse = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

export default function CognitiveTools() {
  const [activeTab, setActiveTab] = useState('srs');

  // Filtros do baralho real (180 dias de chunks)
  const [source, setSource] = useState('all');
  const [targetDay, setTargetDay] = useState(1);
  const [sessionSize, setSessionSize] = useState(20);
  const [direction, setDirection] = useState('en2pt');

  // Cartões personalizados + intervalos (Repetição Espaçada)
  const [customCards, setCustomCards] = useState(() => safeParse('english_srs_custom', []));
  const [customForm, setCustomForm] = useState({ front: '', back: '', context: '' });
  const [intervals, setIntervals] = useState(() => safeParse('english_srs_intervals', {}));

  useEffect(() => {
    localStorage.setItem('english_srs_custom', JSON.stringify(customCards));
  }, [customCards]);

  useEffect(() => {
    localStorage.setItem('english_srs_intervals', JSON.stringify(intervals));
  }, [intervals]);

  // Baralho completo a partir dos chunks reais de todos os dias
  const pool = useMemo(() => {
    let days;
    if (source === 'all') {
      days = Object.keys(allDays).map(Number).sort((a, b) => a - b);
    } else if (source === 'dia') {
      days = [targetDay];
    } else {
      const [s, e] = source === 'fase5' ? [105, 132] : source === 'fase6' ? [133, 160] : [161, 180];
      days = [];
      for (let d = s; d <= e; d++) days.push(d);
    }
    const p = [];
    for (const d of days) {
      const day = allDays[d];
      if (!day || !day.chunks) continue;
      day.chunks.forEach((c, i) => p.push({
        id: `d${d}c${i}`,
        front: c.en,
        back: c.pt,
        context: `Dia ${d} — ${day.title}`
      }));
    }
    return p.concat(customCards);
  }, [source, targetDay, customCards]);

  const [session, setSession] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);

  const newSession = () => {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const limit = sessionSize > 9999 ? shuffled.length : sessionSize;
    setSession(shuffled.slice(0, limit));
    setCardIndex(0);
    setIsFlipped(false);
    setSessionScore(0);
  };

  useEffect(() => {
    newSession();
  }, [pool, sessionSize]);

  const sessionCard = session[cardIndex];
  const cardFront = sessionCard ? (direction === 'en2pt' ? sessionCard.front : sessionCard.back) : '';
  const cardBack = sessionCard ? (direction === 'en2pt' ? sessionCard.back : sessionCard.front) : '';

  const handleRateCard = (rating) => {
    const card = session[cardIndex];
    if (!card) return;
    setIntervals(prev => {
      const base = prev[card.id] || 1;
      return { ...prev, [card.id]: rating === 3 ? base + 2 : rating === 1 ? 1 : base + 1 };
    });
    setSessionScore(prev => prev + (rating * 10));
    setIsFlipped(false);
    setCardIndex(prev => prev + 1);
  };

  const addCustomCard = () => {
    if (!customForm.front.trim() || !customForm.back.trim()) return;
    setCustomCards(prev => [...prev, {
      id: `custom${Date.now()}`,
      front: customForm.front.trim(),
      back: customForm.back.trim(),
      context: customForm.context.trim() || 'Cartão pessoal'
    }]);
    setCustomForm({ front: '', back: '', context: '' });
  };

  const handleSpeak = (text) => {
    speakNaturalEnglish(text, 0.88);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span className="badge badge-emerald">
            <Brain size={14} /> Neurociência da Aprendizagem
          </span>
        </div>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Ciência da Memória & Prática de Alto Rendimento
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Técnicas baseadas em neurociência para reter 90%+ do conteúdo e construir uma base definitiva sem esquecimento.
        </p>
      </div>

      {/* Subtabs */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
        <button
          className={`btn ${activeTab === 'srs' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => setActiveTab('srs')}
        >
          <Zap size={16} /> 1. Repetição Espaçada & Active Recall
        </button>
        <button
          className={`btn ${activeTab === 'feynman' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => setActiveTab('feynman')}
        >
          <Lightbulb size={16} /> 2. Técnica Feynman de Simplificação
        </button>
        <button
          className={`btn ${activeTab === 'rules' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => setActiveTab('rules')}
        >
          <Award size={16} /> 3. As 7 Leis Científicas de Estudo
        </button>
      </div>

      {/* Tab 1: SRS Flashcard System */}
      {activeTab === 'srs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          {/* Deck Controls */}
          <div className="card" style={{ borderColor: 'var(--accent-blue)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-blue"><Layers size={14} /> Baralho Real dos 180 Dias</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {pool.length} chunks disponíveis no filtro
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <select
                className="input-field"
                style={{ width: 'auto', fontSize: '0.85rem', background: 'var(--bg-card)', borderColor: 'var(--accent-blue)' }}
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="all">Todas as Fases (Dias 1-180)</option>
                <option value="fase5">Fase 5 — Present Perfect (105-132)</option>
                <option value="fase6">Fase 6 — Condicionais & Passiva (133-160)</option>
                <option value="fase7">Fase 7 — Entrevistas & Final (161-180)</option>
                <option value="dia">Dia específico</option>
              </select>
              {source === 'dia' && (
                <select
                  className="input-field"
                  style={{ width: 'auto', fontSize: '0.85rem', background: 'var(--bg-card)', borderColor: 'var(--accent-blue)', maxWidth: '280px' }}
                  value={targetDay}
                  onChange={(e) => setTargetDay(Number(e.target.value))}
                >
                  {Object.keys(allDays).map(Number).sort((a, b) => a - b).map(d => (
                    <option key={d} value={d}>Dia {d} — {allDays[d].title}</option>
                  ))}
                </select>
              )}
              <select
                className="input-field"
                style={{ width: 'auto', fontSize: '0.85rem', background: 'var(--bg-card)', borderColor: 'var(--accent-blue)' }}
                value={sessionSize}
                onChange={(e) => setSessionSize(Number(e.target.value))}
              >
                <option value={10}>Sessão: 10 cartas</option>
                <option value={20}>Sessão: 20 cartas</option>
                <option value={40}>Sessão: 40 cartas</option>
                <option value={999999}>Sessão: Todas</option>
              </select>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  className={`btn ${direction === 'en2pt' ? 'btn-emerald' : 'btn-secondary'}`}
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.7rem' }}
                  onClick={() => setDirection('en2pt')}
                >
                  EN → PT
                </button>
                <button
                  className={`btn ${direction === 'pt2en' ? 'btn-emerald' : 'btn-secondary'}`}
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.7rem' }}
                  onClick={() => setDirection('pt2en')}
                >
                  PT → EN
                </button>
              </div>
              <button className="btn btn-primary" style={{ fontSize: '0.85rem' }} onClick={newSession}>
                <RefreshCw size={15} /> Nova Sessão
              </button>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
              <input
                className="input-field"
                style={{ flex: 2, minWidth: '160px', fontSize: '0.85rem' }}
                placeholder="Cartão novo (EN) — ex: run a command"
                value={customForm.front}
                onChange={(e) => setCustomForm({ ...customForm, front: e.target.value })}
              />
              <input
                className="input-field"
                style={{ flex: 1, minWidth: '140px', fontSize: '0.85rem' }}
                placeholder="Tradução (PT)"
                value={customForm.back}
                onChange={(e) => setCustomForm({ ...customForm, back: e.target.value })}
              />
              <input
                className="input-field"
                style={{ flex: 2, minWidth: '160px', fontSize: '0.85rem' }}
                placeholder="Contexto (opcional)"
                value={customForm.context}
                onChange={(e) => setCustomForm({ ...customForm, context: e.target.value })}
              />
              <button className="btn btn-secondary" style={{ fontSize: '0.85rem' }} onClick={addCustomCard}>
                <Plus size={15} /> Adicionar
              </button>
            </div>
          </div>

          {session.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--text-secondary)' }}>Nenhum chunk disponível neste filtro.</p>
              <button className="btn btn-primary" onClick={newSession} style={{ marginTop: '1rem' }}>
                <RefreshCw size={15} /> Criar Sessão
              </button>
            </div>
          ) : cardIndex >= session.length ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem', borderColor: 'var(--accent-emerald)' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
                <Award size={14} /> Sessão Concluída
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {sessionScore} pts de retenção
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {session.length} cartas revisadas. O baralho completo tem {pool.length} chunks.
              </p>
              <button className="btn btn-emerald" onClick={newSession}>
                <RefreshCw size={16} /> Nova Sessão
              </button>
            </div>
          ) : (
            <div className="card" style={{ borderColor: 'var(--accent-emerald)', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="badge badge-emerald">FLASHCARD {cardIndex + 1} DE {session.length}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                  XP de Retenção: {sessionScore} pts
                </span>
              </div>

              {/* Flashcard Box */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  minHeight: '220px',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(17, 24, 39, 0.8) 100%)',
                  border: `2px dashed ${isFlipped ? 'var(--accent-emerald)' : 'var(--accent-blue)'}`,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justify: 'center',
                  padding: '2rem',
                  cursor: 'pointer',
                  marginBottom: '1.5rem',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
              >
                {!isFlipped ? (
                  <>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      Frente (Force sua mente a lembrar!)
                    </span>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem', wordBreak: 'break-word' }}>
                      {cardFront}
                    </div>
                    <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={(e) => { e.stopPropagation(); handleSpeak(cardFront); }}>
                      <Volume2 size={14} color="var(--accent-blue)" /> Ouvir Pronúncia
                    </button>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Eye size={14} /> Clique no cartão para revelar a resposta e o contexto
                    </div>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      Verso (Resposta & Contexto)
                    </span>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
                      {cardBack}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', background: 'rgba(0, 0, 0, 0.3)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                      "{sessionCard.context}"
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.9rem' }}>
                      Intervalo atual: {intervals[sessionCard.id] || 1} dia(s)
                    </div>
                  </>
                )}
              </div>

              {/* Rating Buttons */}
              {isFlipped ? (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button className="btn" style={{ background: 'rgba(244, 63, 94, 0.2)', color: '#f43f5e', border: '1px solid #f43f5e' }} onClick={() => handleRateCard(1)}>
                    🔴 Difícil (Rever Amanhã)
                  </button>
                  <button className="btn" style={{ background: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24', border: '1px solid #fbbf24' }} onClick={() => handleRateCard(2)}>
                    🟡 Bom (Rever em 3 dias)
                  </button>
                  <button className="btn btn-emerald" onClick={() => handleRateCard(3)}>
                    🟢 Fácil (Rever em 7 dias)
                  </button>
                </div>
              ) : (
                <button className="btn btn-primary" onClick={() => setIsFlipped(true)}>
                  <Eye size={16} /> Revelar Resposta (Active Recall)
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Feynman Method */}
      {activeTab === 'feynman' && (
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '0.75rem' }}><Lightbulb size={20} color="var(--accent-amber)" /> Técnica Feynman de Consolidação</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            O físico Richard Feynman provou que a forma mais rápida de aprender algo é <strong>explicar o conceito em termos ultra simples</strong> como se estivesse ensinando uma criança ou iniciante.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Passo 1</span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Escolha um Tópico do Dia</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Exemplo: Verbo To Be, Preposições IN/ON/AT, ou o termo "Database".</p>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Passo 2</span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Escreva uma Explicação Simples</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Use apenas frases curtas em inglês sem termos difíceis. Ex: "A database stores information. It is like a big library."</p>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>Passo 3</span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Identifique as Lacunas</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Onde você travou ao tentar explicar? Volte ao material do dia e revise apenas essa parte.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: The 7 Laws of Scientific Learning */}
      {activeTab === 'rules' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          <div className="card">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.4rem' }}>
              1. Repetição Espaçada (Spaced Repetition)
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              A mente humana esquece 70% das informações em 24h se não houver revisão. Revisando nos dias 1, 3, 7 e 14, a curva de esquecimento de Ebbinghaus é interrompida e a informação vira memória de longo prazo.
            </p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.4rem' }}>
              2. Recuperação Ativa (Active Recall)
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Ler passivamente dá uma falsa sensação de aprendizado. Esforçar a mente para lembrar antes de olhar a resposta cria conexões neurais fortíssimas.
            </p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '0.4rem' }}>
              3. Aprendizado em Chunks (Blocos de Contexto)
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Nunca decore palavras isoladas (ex: <em>run = correr</em>). Aprenda expressões completas com verbo + objeto (ex: <em>run a test</em>, <em>run a command</em>).
            </p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.4rem' }}>
              4. Input Compreensível (i + 1 Principle)
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Estude materiais onde você entenda ~85% do contexto e apenas 15% seja novo. Isso permite que o cérebro absorva vocabulário sem estresse.
            </p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.4rem' }}>
              5. Codificação Dupla (Texto + Áudio)
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Sempre leia ouvindo o som da palavra. O cérebro conecta o córtex visual e o córtex auditivo simultaneamente, dobrando a taxa de retenção.
            </p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.4rem' }}>
              6. Prática Intercalada (Interleaving)
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Alterne entre Gramática, Listening, Reading e Speaking no mesmo dia. Isso mantém o cérebro engajado e evita saturação mental.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
