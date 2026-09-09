import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Sparkles, Bot, Gamepad2, Flame, Cloud, RefreshCw, ShieldCheck, Zap, Activity, Volume2, Mic, X, Smartphone, Download, Check, Share2, PlusSquare, MoreVertical } from 'lucide-react';
import Dashboard from './components/Dashboard';
import LocalAiCoach from './components/LocalAiCoach';
import VocabGameArena from './components/VocabGameArena';
import { syncStateToFirebase, subscribeToFirebaseRealtime, testFirebaseRealtimeConnection } from './utils/firebaseSync';
import { speakNaturalEnglish } from './utils/audio';

export default function App() {
  const [currentTab, setCurrentTab] = useState('game');
  const [isFirebaseConnected, setIsFirebaseConnected] = useState(false);
  const [showFabModal, setShowFabModal] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const [fabStatusText, setFabStatusText] = useState('');
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null);

  // Persistent progress state
  const [progressData, setProgressData] = useState(() => {
    const saved = localStorage.getItem('english_immersion_progress');
    return saved ? JSON.parse(saved) : {
      currentDay: 1,
      completedDays: 0,
      totalHours: 0,
      streak: 1,
      todayTasks: {
        game_practice: true,
        ai_speaking: false
      }
    };
  });

  // Listen for native PWA install prompt (Android/Chrome)
  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setDeferredInstallPrompt(null);
      }
    } else {
      setShowInstallGuide(true);
    }
  };

  // Subscribe to Firebase Realtime Database updates
  useEffect(() => {
    // Initial sync upload of current state
    syncStateToFirebase();
    setIsFirebaseConnected(true);

    // Live reactive WebSocket subscription
    const unsubscribe = subscribeToFirebaseRealtime((data) => {
      if (data.english_immersion_progress) {
        try {
          setProgressData(JSON.parse(data.english_immersion_progress));
        } catch (e) {}
      }
      setIsFirebaseConnected(true);
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('english_immersion_progress', JSON.stringify(progressData));
    syncStateToFirebase();
  }, [progressData]);

  // Toggle checklist tasks
  const toggleTask = (taskKey) => {
    setProgressData(prev => ({
      ...prev,
      todayTasks: {
        ...prev.todayTasks,
        [taskKey]: !prev.todayTasks[taskKey]
      }
    }));
  };

  const handleFabPingTest = async () => {
    setFabStatusText('Testando conexão com Firebase Realtime Database...');
    const res = await testFirebaseRealtimeConnection();
    if (res.success) {
      setFabStatusText(`✅ Conectado em tempo real! Latência: ${res.latencyMs}ms`);
    } else {
      setFabStatusText(`❌ Erro de conexão: ${res.error}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Clean Minimal Header Bar */}
      <header className="app-header">
        <div className="header-container">
          <div className="logo-group">
            <div className="logo-icon">
              <Sparkles size={20} />
            </div>
            <div>
              <h1 className="brand-title">English Immersion OS</h1>
              <span className="brand-subtitle">Firebase Realtime Cloud • PC ↔ Celular</span>
            </div>
          </div>

          {/* Clean 3-Pill Desktop Nav */}
          <nav className="nav-tabs desktop-nav-tabs">
            <button
              className={`tab-btn ${currentTab === 'game' ? 'active' : ''}`}
              onClick={() => setCurrentTab('game')}
              style={{
                color: currentTab === 'game' ? 'var(--accent-amber)' : 'var(--text-secondary)',
                background: currentTab === 'game' ? 'rgba(251, 191, 36, 0.15)' : 'transparent',
                border: currentTab === 'game' ? '1px solid rgba(251, 191, 36, 0.3)' : 'none'
              }}
            >
              <Gamepad2 size={16} /> 🎮 1. Game de Escuta
            </button>

            <button
              className={`tab-btn ${currentTab === 'ai' ? 'active' : ''}`}
              onClick={() => setCurrentTab('ai')}
            >
              <Bot size={16} /> 🤖 2. Tutor IA (Voz)
            </button>

            <button
              className={`tab-btn ${currentTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentTab('dashboard')}
            >
              <LayoutDashboard size={16} /> 📊 3. Progresso
            </button>
          </nav>

          {/* Cloud Status, Install Button & Streak Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handleInstallApp}
              className="btn btn-secondary"
              style={{
                padding: '0.3rem 0.65rem',
                fontSize: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                borderColor: 'rgba(56, 189, 248, 0.4)',
                color: 'var(--accent-blue)',
                background: 'rgba(56, 189, 248, 0.12)'
              }}
              title="Instalar no Celular como Aplicativo Nativo"
            >
              <Smartphone size={14} /> <span className="hide-on-mobile-tiny">Instalar App</span>
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                color: isFirebaseConnected ? 'var(--accent-emerald)' : 'var(--text-muted)',
                background: 'rgba(16, 185, 129, 0.12)',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
              title="Conectado ao Firebase Realtime Database"
            >
              <Cloud size={13} color="var(--accent-emerald)" /> <span className="hide-on-mobile-tiny">Nuvem Conectada</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }} className="mobile-streak-pill">
              <Flame size={16} color="var(--accent-amber)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-amber)' }}>
                {progressData.streak}d
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {currentTab === 'game' && (
          <VocabGameArena />
        )}

        {currentTab === 'ai' && (
          <LocalAiCoach />
        )}

        {currentTab === 'dashboard' && (
          <Dashboard progressData={progressData} toggleTask={toggleTask} setTab={setCurrentTab} />
        )}
      </main>

      {/* FLOATING QUICK ACTION BUTTON (FAB) */}
      <button 
        className="fab-button pulse-glow"
        onClick={() => setShowFabModal(true)}
        title="Menu Rápido de Ações"
      >
        <Zap size={22} />
      </button>

      {/* QUICK ACTIONS MODAL */}
      {showFabModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            maxWidth: '460px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={20} color="var(--accent-amber)" />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Ações Rápidas & Diagnóstico</h3>
              </div>
              <button 
                onClick={() => { setShowFabModal(false); setFabStatusText(''); }}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button 
                className="btn btn-emerald" 
                onClick={handleInstallApp}
                style={{ justifyContent: 'flex-start' }}
              >
                <Smartphone size={18} /> Instalar no Celular como Aplicativo
              </button>

              <button 
                className="btn btn-primary" 
                onClick={handleFabPingTest}
                style={{ justifyContent: 'flex-start' }}
              >
                <Activity size={18} /> Testar Conexão Firebase em Tempo Real
              </button>

              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  speakNaturalEnglish("Welcome to English Immersion OS! Daily practice leads to fluency.", 0.88);
                  setFabStatusText("🔊 Pronúnciando frase de teste em áudio natural!");
                }}
                style={{ justifyContent: 'flex-start' }}
              >
                <Volume2 size={18} /> Testar Pronúncia de Áudio (TTS)
              </button>
            </div>

            {fabStatusText && (
              <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid var(--accent-blue)', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--accent-blue)' }}>
                {fabStatusText}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 📱 MODAL: COMO INSTALAR NO CELULAR (PWA) */}
      {showInstallGuide && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.82)',
          backdropFilter: 'blur(12px)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--accent-blue)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 1.75rem',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 0 40px rgba(56, 189, 248, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Smartphone size={24} color="var(--accent-blue)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                  Colocar na Tela do Celular
                </h3>
              </div>
              <button 
                onClick={() => setShowInstallGuide(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={22} />
              </button>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              O <strong>English Immersion OS</strong> pode ser instalado como um aplicativo nativo no seu smartphone (Android ou iPhone), funcionando em <strong>tela cheia</strong> com som e carregamento instantâneo:
            </p>

            {/* Android Instructions */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                🤖 No Android (Google Chrome):
              </div>
              <ol style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Abra o link no navegador <strong>Chrome</strong>.</li>
                <li>Toque nos <strong>3 pontinhos (⋮)</strong> no canto superior direito.</li>
                <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
              </ol>
            </div>

            {/* iPhone Instructions */}
            <div style={{
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                🍏 No iPhone / iPad (Safari):
              </div>
              <ol style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Abra o link no navegador <strong>Safari</strong>.</li>
                <li>Toque no botão de <strong>Compartilhar 📤</strong> (quadrado com seta para cima).</li>
                <li>Role para baixo e toque em <strong>"Adicionar à Tela de Início" ➕</strong>.</li>
                <li>Toque em <strong>"Adicionar"</strong> no canto superior.</li>
              </ol>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setShowInstallGuide(false)}
              style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', fontWeight: 800 }}
            >
              Entendido! <Check size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 📱 MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="mobile-bottom-nav">
        <button
          className={`mobile-nav-item ${currentTab === 'game' ? 'active-game' : ''}`}
          onClick={() => setCurrentTab('game')}
        >
          <Gamepad2 size={20} color={currentTab === 'game' ? "var(--accent-amber)" : "inherit"} />
          <span>Game</span>
        </button>

        <button
          className={`mobile-nav-item ${currentTab === 'ai' ? 'active-ai' : ''}`}
          onClick={() => setCurrentTab('ai')}
        >
          <Bot size={20} color={currentTab === 'ai' ? "var(--accent-blue)" : "inherit"} />
          <span>Tutor IA</span>
        </button>

        <button
          className={`mobile-nav-item ${currentTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentTab('dashboard')}
        >
          <LayoutDashboard size={20} />
          <span>Progresso</span>
        </button>
      </nav>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        English Immersion OS — Sincronização em Nuvem em Tempo Real com Firebase Database.
      </footer>
    </div>
  );
}
