import React, { useState } from 'react';
import { Calendar, Clock, Flame, Award, CheckCircle2, Play, Sparkles, Gamepad2, Bot, Trophy, Download, Upload, Database, Check, ShieldCheck, Cloud, Wifi } from 'lucide-react';

export default function Dashboard({ progressData, setTab }) {
  const { currentDay, completedDays, totalHours, streak } = progressData;
  const [importSuccess, setImportSuccess] = useState(false);

  const gameStats = (() => {
    try {
      const s = JSON.parse(localStorage.getItem('english_game_stats') || '{}');
      const d = JSON.parse(localStorage.getItem('english_daily_vocab_goal') || '{}');
      const srs = JSON.parse(localStorage.getItem('english_vocab_srs_state') || '{}');
      
      const srsValues = Object.values(srs);
      const masteredCount = srsValues.filter(v => v.stage >= 3 || v.mastered).length;
      const reviewingCount = srsValues.filter(v => v.stage === 1 || v.stage === 2).length;
      const soundGapCount = srsValues.filter(v => v.soundGap).length;

      return {
        xp: s.xp || 0,
        level: s.level || 1,
        bestStreak: s.bestStreak || 0,
        todayCount: d.count || 0,
        todayTarget: d.target || 100,
        masteredCount,
        reviewingCount,
        soundGapCount,
        totalTracked: Object.keys(srs).length
      };
    } catch {
      return { xp: 0, level: 1, bestStreak: 0, todayCount: 0, todayTarget: 100, masteredCount: 0, reviewingCount: 0, soundGapCount: 0, totalTracked: 0 };
    }
  })();

  const progressPercent = Math.min(100, Math.round((gameStats.todayCount / gameStats.todayTarget) * 100));

  // Export all localStorage data to a downloadable JSON file
  const handleExportBackup = () => {
    const backupData = {
      version: "1.0",
      exportDate: new Date().toISOString(),
      english_immersion_progress: localStorage.getItem('english_immersion_progress'),
      english_game_stats: localStorage.getItem('english_game_stats'),
      english_daily_vocab_goal: localStorage.getItem('english_daily_vocab_goal'),
      english_vocab_srs_state: localStorage.getItem('english_vocab_srs_state')
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `english_immersion_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON backup
  const handleImportBackup = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.english_immersion_progress) localStorage.setItem('english_immersion_progress', parsed.english_immersion_progress);
        if (parsed.english_game_stats) localStorage.setItem('english_game_stats', parsed.english_game_stats);
        if (parsed.english_daily_vocab_goal) localStorage.setItem('english_daily_vocab_goal', parsed.english_daily_vocab_goal);
        if (parsed.english_vocab_srs_state) localStorage.setItem('english_vocab_srs_state', parsed.english_vocab_srs_state);
        
        setImportSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch (err) {
        alert("Erro ao ler o arquivo de backup. Verifique se o arquivo está correto.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
        border: '1px solid var(--accent-amber)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-amber">
              <Sparkles size={14} /> Imersão Acelerada (4 Meses)
            </span>
            <span className="badge badge-emerald">
              <Cloud size={14} /> Firebase Realtime Cloud: concursos-20cce
            </span>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.4rem' }}>
            Seu Progresso de Imersão & Fluência
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '0.95rem' }}>
            Sincronizado automaticamente pelo <strong>Firebase Realtime Database</strong> entre o seu Computador e Celular!
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn btn-emerald" onClick={() => setTab('game')} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
            <Gamepad2 size={18} /> Jogar Game de Escuta
          </button>
          <button className="btn btn-primary" onClick={() => setTab('ai')} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
            <Bot size={18} /> Conversar com IA por Voz
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid-cards">
        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>VOCABULÁRIO HOJE</span>
            <Trophy size={20} color="var(--accent-amber)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>
            {gameStats.todayCount} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ {gameStats.todayTarget} palavras</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span>{progressPercent}% da Meta de Hoje</span>
            <span>Faltam {Math.max(0, gameStats.todayTarget - gameStats.todayCount)} palavras</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>BANCO DE RETENÇÃO (SRS)</span>
            <Database size={20} color="var(--accent-emerald)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
            {gameStats.masteredCount} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>dominadas</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            🟨 <strong>{gameStats.reviewingCount}</strong> em revisão • 👂 <strong>{gameStats.soundGapCount}</strong> foco em pronúncia
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>NÍVEL & COMBO</span>
            <Flame size={20} color="var(--accent-amber)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            Nível {gameStats.level} <span style={{ fontSize: '1rem', color: 'var(--accent-amber)', fontWeight: 700 }}>({gameStats.xp} XP)</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Sequência: <strong>{streak} dias</strong> • Recorde: <strong>{gameStats.bestStreak}x combo 🔥</strong>
          </p>
        </div>
      </div>

      {/* ☁️ FIREBASE REALTIME CLOUD STATUS */}
      <div className="card" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.08) 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Cloud size={18} color="var(--accent-emerald)" />
              <span className="badge badge-emerald">Firebase Realtime Database Ativo</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Sincronização em Nuvem Global</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem', maxWidth: '650px' }}>
              Seu banco de dados do Firebase (<strong>concursos-20cce</strong>) está conectado. Você pode abrir o app em qualquer lugar do mundo no seu celular ou PC: o progresso sincroniza em milissegundos via WebSocket!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button className="btn btn-secondary" onClick={handleExportBackup} style={{ fontSize: '0.85rem' }}>
              <Download size={16} /> Baixar Backup Local (.json)
            </button>

            <label className="btn btn-primary" style={{ fontSize: '0.85rem', cursor: 'pointer', margin: 0 }}>
              <Upload size={16} /> Restaurar Arquivo
              <input type="file" accept=".json" onChange={handleImportBackup} style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        {importSuccess && (
          <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--accent-emerald-glow)', border: '1px solid var(--accent-emerald)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Check size={16} /> Backup restaurado e sincronizado com o Firebase com sucesso!
          </div>
        )}
      </div>

    </div>
  );
}
