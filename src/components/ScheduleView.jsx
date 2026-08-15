import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, BookOpen, Headphones, HelpCircle, Code2, Target } from 'lucide-react';
import { allWeeks, PHASES_META, FUTURE_ROADMAP } from '../data/phases';

export default function ScheduleView({ currentDay, setDay }) {
  const [selectedPhase, setSelectedPhase] = useState(0);

  // Primeiro dia de cada semana (ex: "Dias 91 a 97" -> 91)
  const firstDayOfWeek = (week) => {
    const nums = week.daysRange.match(/\d+/g);
    return nums ? parseInt(nums[0], 10) : 1;
  };

  // Fases 0-4 com dados reais + roadmap futuro (semanas 16-24)
  const phases = [
    ...PHASES_META.map(p => ({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      badgeClass: p.badgeClass,
      weeks: allWeeks.filter(w => p.weekNumbers.includes(w.weekNumber))
    })),
    {
      id: PHASES_META.length,
      title: FUTURE_ROADMAP.title,
      subtitle: FUTURE_ROADMAP.subtitle,
      badgeClass: FUTURE_ROADMAP.badgeClass,
      weeks: [
        {
          weekNumber: 25,
          daysRange: FUTURE_ROADMAP.daysRange,
          title: "Jornada contínua: B2 e além",
          grammar: FUTURE_ROADMAP.grammar,
          vocab: FUTURE_ROADMAP.vocab,
          reading: FUTURE_ROADMAP.reading,
          listening: FUTURE_ROADMAP.listening,
          speaking: FUTURE_ROADMAP.speaking,
          techBridge: FUTURE_ROADMAP.techBridge
        }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Roteiro Detalhado de Estudo (24 Semanas / 180 Dias)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Selecione a fase para visualizar o syllabus gramatical, metas de vocabulário, treino de escuta e a ponte para Engenharia de Computação.
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {phases.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedPhase(p.id)}
            className={`btn ${selectedPhase === p.id ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Selected Phase Overview Card */}
      <div className="card" style={{ borderColor: 'var(--accent-blue-glow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span className={`badge ${phases[selectedPhase].badgeClass}`} style={{ marginBottom: '0.4rem' }}>
              {phases[selectedPhase].title}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{phases[selectedPhase].subtitle}</h3>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {phases[selectedPhase].weeks.length} Semana(s) nesta etapa
          </span>
        </div>

        {/* Weeks Accordion / List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          {phases[selectedPhase].weeks.map((w, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--accent-blue-glow)',
                    color: 'var(--accent-blue)',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem'
                  }}>
                    S{w.weekNumber}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Semana {w.weekNumber}: {w.title}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{w.daysRange}</span>
                  </div>
                </div>
                <button 
                  className="btn btn-secondary" 
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                  onClick={() => setDay(firstDayOfWeek(w))}
                >
                  Definir como dia atual
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {/* Grammar */}
                <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <h5 style={{ color: 'var(--accent-amber)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BookOpen size={14} /> GRAMÁTICA & ESTRUTURA
                  </h5>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {w.grammar.map((g, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{g}</li>)}
                  </ul>
                </div>

                {/* Vocab & Reading */}
                <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <h5 style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Target size={14} /> VOCABULÁRIO & READING
                  </h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Vocabulário:</strong> {w.vocab}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong>Reading:</strong> {w.reading}
                  </p>
                </div>

                {/* Listening & Speaking */}
                <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <h5 style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Headphones size={14} /> LISTENING & SPEAKING
                  </h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Listening:</strong> {w.listening}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong>Speaking:</strong> {w.speaking}
                  </p>
                </div>

                {/* Tech Bridge */}
                <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', gridColumn: '1 / -1' }}>
                  <h5 style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Code2 size={14} /> PONTE PARA TECNOLOGIA & COMPUTAÇÃO
                  </h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    {w.techBridge}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}