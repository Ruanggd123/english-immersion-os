import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Flame, Award, CheckCircle2, Play, Sparkles, Gamepad2, Bot, Trophy, Download, Upload, Database, Check, ShieldCheck, Cloud, Wifi, Activity, RefreshCw, Smartphone, Monitor } from 'lucide-react';
import { testFirebaseRealtimeConnection, syncStateToFirebase } from '../utils/firebaseSync';

export default function Dashboard({ progressData, setTab }) {
  const { currentDay, completedDays, totalHours, streak } = progressData;
  const [importSuccess, setImportSuccess] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [isTestingSync, setIsTestingSync] = useState(false);

  // Auto-run connection diagnostic on mount
  useEffect(() => {
    runConnectionTest();
  }, []);

  const runConnectionTest = async () => {
    setIsTestingSync(true);
    const res = await testFirebaseRealtimeConnection();
    setTestResult(res);
    setIsTestingSync(false);
  };

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
      english_vocab_srs_state: localStorage.getItem('english_vocab_srs_state'),
      english_journal_state: localStorage.getItem('english_journal_state'),
      english_saturday_tests: localStorage.getItem('english_saturday_tests')
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
        if (parsed.english_journal_state) localStorage.setItem('english_journal_state', parsed.english_journal_state);
        if (parsed.english_saturday_tests) localStorage.setItem('english_saturday_tests', parsed.english_saturday_tests);
        
        syncStateToFirebase();
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
        border: '1px solid var(--accent-amber)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-amber">
              <Sparkles size={14} /> Imersão Acelerada (180 Dias)
            </span>
            <span className="badge badge-emerald">
              <Cloud size={14} /> Firebase Realtime Database
            </span>
          </div>
          <h1 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.4rem', color: '#ffffff' }}>
            Seu Painel de Imersão & Fluência
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Sincronizado automaticamente em tempo real via <strong>Firebase WebSocket</strong> entre seu Computador e Celular!
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', width: '100%', maxWidth: '380px' }}>
          <button className="btn btn-emerald" onClick={() => setTab('game')} style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
            <Gamepad2 size={18} /> Jogar Game
          </button>
          <button className="btn btn-primary" onClick={() => setTab('ai')} style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
            <Bot size={18} /> Tutor IA por Voz
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
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>
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
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
            {gameStats.masteredCount} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>dominadas</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            🟨 <strong>{gameStats.reviewingCount}</strong> em revisão • 👂 <strong>{gameStats.soundGapCount}</strong> foco em som
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>NÍVEL & COMBO</span>
            <Flame size={20} color="var(--accent-amber)" />
          </div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            Nível {gameStats.level} <span style={{ fontSize: '1rem', color: 'var(--accent-amber)', fontWeight: 700 }}>({gameStats.xp} XP)</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Sequência: <strong>{streak} dias</strong> • Recorde: <strong>{gameStats.bestStreak}x combo 🔥</strong>
          </p>
        </div>
      </div>

      {/* ☁️ FIREBASE REALTIME DIAGNOSTIC & SYNC VERIFICATION CARD */}
      <div className="card" style={{ borderColor: testResult?.success ? 'rgba(16, 185, 129, 0.4)' : 'rgba(56, 189, 248, 0.3)', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.06) 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <Cloud size={18} color={testResult?.success ? "var(--accent-emerald)" : "var(--accent-blue)"} />
              <span className={`badge ${testResult?.success ? 'badge-emerald' : 'badge-blue'}`}>
                {testResult?.success ? "🟢 Realtime Database Ativo & Sincronizando" : "🟡 Verificando Conexão..."}
              </span>
              {testResult?.latencyMs && (
                <span className="badge badge-amber">
                  ⚡ Latência: {testResult.latencyMs} ms
                </span>
              )}
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
              Auditoria de Banco de Dados Firebase Realtime
            </h3>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem', maxWidth: '680px', lineHeight: 1.5 }}>
              URL do Banco: <strong style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>https://concursos-20cce-default-rtdb.firebaseio.com</strong>
              <br />
              Caminho de Sincronização: <code style={{ color: 'var(--accent-emerald)' }}>english_immersion_os/user_progress</code>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', width: '100%', maxWidth: '420px' }}>
            <button 
              className="btn btn-emerald" 
              onClick={runConnectionTest} 
              disabled={isTestingSync}
              style={{ flex: 1, fontSize: '0.88rem' }}
            >
              {isTestingSync ? <RefreshCw size={16} className="spin" /> : <Activity size={16} />}
              Testar Conexão Realtime Agora
            </button>

            <button className="btn btn-secondary" onClick={handleExportBackup} style={{ fontSize: '0.85rem' }}>
              <Download size={15} /> Backup (.json)
            </button>
          </div>
        </div>

        {/* Live Test Diagnostic Output */}
        {testResult && (
          <div style={{
            marginTop: '1.25rem',
            padding: '1rem 1.25rem',
            background: testResult.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
            border: testResult.success ? '1px solid var(--accent-emerald)' : '1px solid var(--accent-rose)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <CheckCircle2 size={20} color={testResult.success ? "var(--accent-emerald)" : "var(--accent-rose)"} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: testResult.success ? "var(--accent-emerald)" : "var(--accent-rose)" }}>
                  {testResult.success ? "✅ Teste de Leitura & Escrita Realtime Concluído com Sucesso!" : "❌ Falha no teste de conexão"}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Resposta em <strong>{testResult.latencyMs}ms</strong> às {testResult.timestamp}. Dados de progresso salvos continuamente via WebSocket!
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Monitor size={13} /> PC ↔ <Smartphone size={13} /> Celular
              </span>
            </div>
          </div>
        )}

        {importSuccess && (
          <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--accent-emerald-glow)', border: '1px solid var(--accent-emerald)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Check size={16} /> Backup restaurado e sincronizado com o Firebase com sucesso!
          </div>
        )}
      </div>

    </div>
  );
}

