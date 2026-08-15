import React from 'react';
import { Calendar, Clock, Flame, Award, CheckCircle2, Play, Sparkles, BookOpen, Headphones, Mic, Code2, BookOpenCheck, Zap } from 'lucide-react';

export default function Dashboard({ progressData, toggleTask, setTab }) {
  const { currentDay, completedDays, totalHours, streak, todayTasks } = progressData;

  const listenStats = (() => {
    try {
      const s = JSON.parse(localStorage.getItem('english_listening_stats') || 'null');
      const w = JSON.parse(localStorage.getItem('english_listening_weak') || '{}');
      const today = new Date().toISOString().slice(0, 10);
      const done = s && s.date === today ? s.done : 0;
      const correct = s && s.date === today ? s.correct : 0;
      const weak = Object.values(w).filter(v => v >= 2).length;
      const pct = done > 0 ? Math.round((correct / done) * 100) : 0;
      return { done, correct, weak, pct };
    } catch {
      return { done: 0, correct: 0, weak: 0, pct: 0 };
    }
  })();

  const totalDays = 180;
  const progressPercent = Math.round((completedDays / totalDays) * 100);

  const currentPhaseName = currentDay <= 7 
    ? "Fase 0 — Fundação Absoluta" 
    : currentDay <= 28 
    ? "Fase 1 — Construção de Frases" 
    : currentDay <= 56 
    ? "Fase 2 — Foco em Listening" 
    : currentDay <= 84 
    ? "Fase 3 — Passado & Futuro + TI" 
    : currentDay <= 104 
    ? "Fase 4 — Consolidação A2 & Ambiente Inglês" 
    : "Fase 5/6 — A2 → B1 & Tech English";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(13, 148, 136, 0.15) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-blue">
              <Sparkles size={14} /> Imersão Flexível (4–6h/dia)
            </span>
            <span className="badge badge-emerald">{currentPhaseName}</span>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.4rem' }}>
            Seu Painel de Imersão em Inglês
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '0.95rem' }}>
            Dia {currentDay} de 180. Estude todo o conteúdo do dia em um **Bloco Mestre Unificado** no seu próprio ritmo, sem horários engessados!
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn btn-emerald" onClick={() => setTab('daily')} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
            <BookOpenCheck size={18} /> Acessar Bloco do Dia (Dia {currentDay})
          </button>
          <button className="btn btn-primary" onClick={() => setTab('live')}>
            <Play size={16} /> Sessão ao Vivo
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid-cards">
        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>PROGRESSO DOS 180 DIAS</span>
            <Calendar size={20} color="var(--accent-blue)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {completedDays} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ {totalDays} dias</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span>{progressPercent}% Concluído</span>
            <span>Restam {totalDays - completedDays} dias</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>HORAS LÍQUIDAS LOGADAS</span>
            <Clock size={20} color="var(--accent-emerald)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {totalHours}h <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>estudadas</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Meta flexível: <strong>4–6h líquidas por dia</strong>
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>SEQUÊNCIA ATIVA</span>
            <Flame size={20} color="var(--accent-amber)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>
            {streak} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>dias seguidos</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Seu progresso é salvo automaticamente no seu navegador.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>LISTENING LAB (HOJE)</span>
            <Headphones size={20} color="var(--accent-purple)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
            {listenStats.done} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ 30 frases</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            Precisão de hoje: <strong style={{ color: listenStats.pct >= 80 ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>{listenStats.pct}%</strong>
            {listenStats.weak > 0 && <> • <strong style={{ color: 'var(--accent-rose)' }}>{listenStats.weak} na fila de revisão</strong></>}
          </p>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setTab('listening')}>
            <Headphones size={15} /> Abrir Listening Lab
          </button>
        </div>
      </div>
      <div className="card" style={{ borderColor: 'var(--accent-emerald)', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.1) 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Zap size={18} color="var(--accent-emerald)" />
              <span className="badge badge-emerald">Bloco de Estudo Flexível</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Conteúdo Unificado do Dia {currentDay}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              Estude no seu tempo: Vocabulário, Gramática, Leitura, Quiz, Listening, Shadowing, Speaking e Diário reunidos em um só lugar.
            </p>
          </div>

          <button className="btn btn-emerald" onClick={() => setTab('daily')} style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
            <BookOpenCheck size={20} /> Abrir Aula do Dia {currentDay}
          </button>
        </div>
      </div>
    </div>
  );
}
