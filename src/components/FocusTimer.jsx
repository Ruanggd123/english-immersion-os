import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Check, Clock, Volume2, Award } from 'lucide-react';

export default function FocusTimer({ logHours }) {
  const presets = [
    { label: "30 Min (Vocab / Diário)", minutes: 30 },
    { label: "45 Min (Shadowing)", minutes: 45 },
    { label: "60 Min (Gramática / Listening / Reading)", minutes: 60 }
  ];

  const [selectedMinutes, setSelectedMinutes] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  useEffect(() => {
    setTimeLeft(selectedMinutes * 60);
    setIsRunning(false);
    setSessionCompleted(false);
  }, [selectedMinutes]);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      setSessionCompleted(true);
      // Play web audio chime
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.5); // A5
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);
      } catch (e) {
        console.log("Audio alert playback error", e);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(selectedMinutes * 60);
    setSessionCompleted(false);
  };

  const handleLogTime = () => {
    const hours = Math.round((selectedMinutes / 60) * 10) / 10;
    logHours(hours);
    alert(`🎉 Parabéns! ${hours} hora(s) registrada(s) com sucesso no seu painel!`);
    setSessionCompleted(false);
  };

  const progressPercent = Math.round(((selectedMinutes * 60 - timeLeft) / (selectedMinutes * 60)) * 100);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.4rem' }}>
          Timer de Foco & Imersão
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Selecione o tempo da sua sessão e mantenha o foco absoluto sem distrações.
        </p>
      </div>

      {/* Preset Selector */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedMinutes(p.minutes)}
            className={`btn ${selectedMinutes === p.minutes ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.85rem' }}
          >
            <Clock size={16} /> {p.label}
          </button>
        ))}
      </div>

      {/* Main Timer Display Card */}
      <div className="card" style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, rgba(17, 24, 39, 0.9) 100%)',
        border: '1px solid var(--border-color-active)'
      }}>
        {/* Timer Circle */}
        <div style={{
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          border: '6px solid var(--border-color)',
          borderTopColor: 'var(--accent-blue)',
          borderRightColor: progressPercent > 25 ? 'var(--accent-blue)' : 'var(--border-color)',
          borderBottomColor: progressPercent > 50 ? 'var(--accent-emerald)' : 'var(--border-color)',
          borderLeftColor: progressPercent > 75 ? 'var(--accent-emerald)' : 'var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem auto',
          boxShadow: '0 0 30px var(--accent-blue-glow)',
          transition: 'border-color 0.3s ease'
        }}>
          <span style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em' }}>
            {formatTime(timeLeft)}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isRunning ? 'Em Foco Total' : 'Pausado'}
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            className={`btn ${isRunning ? 'btn-secondary' : 'btn-emerald'}`}
            onClick={() => setIsRunning(!isRunning)}
            style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            {isRunning ? <><Pause size={20} /> Pausar</> : <><Play size={20} /> Iniciar Bloco</>}
          </button>
          
          <button
            className="btn btn-secondary"
            onClick={handleReset}
            style={{ padding: '0.85rem 1.5rem' }}
          >
            <RotateCcw size={20} /> Reiniciar
          </button>
        </div>

        {/* Session Finished Notification */}
        {sessionCompleted && (
          <div style={{
            marginTop: '2rem',
            padding: '1.25rem',
            background: 'var(--accent-emerald-glow)',
            border: '1px solid var(--accent-emerald)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
              <Award size={32} color="var(--accent-emerald)" />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>Sessão Concluída com Sucesso!</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Deseja adicionar estes {selectedMinutes} minutos ao seu contador geral de horas estudadas?</p>
              </div>
            </div>
            <button className="btn btn-emerald" onClick={handleLogTime}>
              <Check size={16} /> Registrar Horas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
