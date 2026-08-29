import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, Heart, Flame, Award, ArrowRight, RotateCcw, Eye, EyeOff, Headphones, Zap, Code2, CheckCircle2, XCircle, Sliders, Play, Trophy, Check, Star, RefreshCw, BarChart2, Mic, Info } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';
import { gameVocabData } from '../data/gameVocabData';
import { syncStateToFirebase, subscribeToFirebaseRealtime } from '../utils/firebaseSync';

// Web Audio API Sound Effects Synthesizer
const playSoundEffect = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'correct') {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.4);
      });
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(175, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'victory') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.55);
      });
    }
  } catch (e) {
    console.warn("Sound effect note:", e);
  }
};

export default function VocabGameArena({ initialMode = 'listening' }) {
  const [gameMode, setGameMode] = useState(initialMode);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [revealEnglish, setRevealEnglish] = useState(false);
  const [neededSoundHelp, setNeededSoundHelp] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState(0.88);

  // 1. Persistent Memory Mastery State (SRS / Anki Engine)
  const [srsState, setSrsState] = useState(() => {
    const saved = localStorage.getItem('english_vocab_srs_state');
    return saved ? JSON.parse(saved) : {};
  });

  // 2. Persistent Daily Learned Counter (Tracks 100+ words/day goal)
  const [dailyStats, setDailyStats] = useState(() => {
    const saved = localStorage.getItem('english_daily_vocab_goal');
    const todayStr = new Date().toISOString().split('T')[0];
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === todayStr) return parsed;
    }
    return { date: todayStr, masteredIds: [], count: 0, target: 100 };
  });

  // 3. Persistent General Game Stats
  const [gameStats, setGameStats] = useState(() => {
    const saved = localStorage.getItem('english_game_stats');
    return saved ? JSON.parse(saved) : {
      xp: 0,
      level: 1,
      streak: 0,
      bestStreak: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      lives: 3
    };
  });

  // 4. Dynamic Queue of Questions
  const buildSmartQueue = (mode, currentSrs) => {
    let pool = gameVocabData.essentialWords;
    if (mode === 'tech') pool = gameVocabData.techWords;
    if (mode === 'sentences') pool = gameVocabData.sentences;
    if (mode === 'blitz') pool = [...gameVocabData.essentialWords, ...gameVocabData.techWords];

    const unmastered = pool.filter(item => {
      const state = currentSrs[item.id];
      return !state || state.stage < 3;
    });

    const mastered = pool.filter(item => {
      const state = currentSrs[item.id];
      return state && state.stage >= 3;
    });

    const sorted = [...unmastered, ...mastered].map(item => ({
      ...item,
      shuffledOptions: [...item.options].sort(() => Math.random() - 0.5)
    }));

    return sorted.length > 0 ? sorted : pool;
  };

  const [activeQueue, setActiveQueue] = useState(() => buildSmartQueue(gameMode, srsState));
  const [queueIndex, setQueueIndex] = useState(0);

  const currentQuestion = activeQueue[queueIndex] || activeQueue[0];
  const currentWordSrs = currentQuestion ? (srsState[currentQuestion.id] || { stage: 0, streak: 0, soundGap: false }) : { stage: 0, streak: 0, soundGap: false };

  useEffect(() => {
    localStorage.setItem('english_vocab_srs_state', JSON.stringify(srsState));
  }, [srsState]);

  useEffect(() => {
    localStorage.setItem('english_daily_vocab_goal', JSON.stringify(dailyStats));
  }, [dailyStats]);

  useEffect(() => {
    localStorage.setItem('english_game_stats', JSON.stringify(gameStats));
  }, [gameStats]);

  // Auto-play audio on question load
  useEffect(() => {
    if (currentQuestion) {
      const timer = setTimeout(() => {
        speakNaturalEnglish(currentQuestion.en, speechSpeed);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [queueIndex, gameMode]);

  // Switch mode
  const handleSwitchMode = (mode) => {
    setGameMode(mode);
    const newQueue = buildSmartQueue(mode, srsState);
    setActiveQueue(newQueue);
    setQueueIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setRevealEnglish(mode !== 'listening');
    setNeededSoundHelp(false);
  };

  const handlePlayAudio = (rate = speechSpeed) => {
    if (currentQuestion) {
      speakNaturalEnglish(currentQuestion.en, rate);
    }
  };

  const handleRevealWithSoundGap = () => {
    setRevealEnglish(true);
    setNeededSoundHelp(true);
    // Flag this word as having a sound gap so it repeats for listening reinforcement
    if (currentQuestion) {
      const qId = currentQuestion.id;
      setSrsState(prev => ({
        ...prev,
        [qId]: {
          ...(prev[qId] || { stage: 0, streak: 0 }),
          soundGap: true
        }
      }));
    }
  };

  // Handle Option Select (With SRS State Updates & Penalty Reinsertion on Error)
  const handleSelectOption = (option) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(option);
    setIsAnswered(true);

    const correct = option === currentQuestion.pt;
    setIsCorrect(correct);

    const qId = currentQuestion.id;
    const prevSrs = srsState[qId] || { stage: 0, streak: 0 };

    if (correct) {
      playSoundEffect('correct');
      // If user had to reveal spelling because they couldn't recognize the sound, advance stage more gently
      const newStage = neededSoundHelp ? Math.min(2, prevSrs.stage + 1) : Math.min(3, prevSrs.stage + 1);
      const newStreak = prevSrs.streak + 1;

      const updatedSrs = {
        ...srsState,
        [qId]: {
          stage: newStage,
          streak: newStreak,
          lastReviewed: Date.now(),
          mastered: newStage >= 3,
          soundGap: neededSoundHelp
        }
      };
      setSrsState(updatedSrs);

      if (!dailyStats.masteredIds.includes(qId)) {
        setDailyStats(prev => ({
          ...prev,
          masteredIds: [...prev.masteredIds, qId],
          count: prev.count + 1
        }));
      }

      const comboStreak = gameStats.streak + 1;
      const xpGained = 10 + (comboStreak >= 3 ? 5 : 0);
      const newXp = gameStats.xp + xpGained;
      const newLevel = Math.floor(newXp / 100) + 1;

      setGameStats(prev => ({
        ...prev,
        xp: newXp,
        level: newLevel,
        streak: comboStreak,
        bestStreak: Math.max(prev.bestStreak, comboStreak),
        totalAnswered: prev.totalAnswered + 1,
        totalCorrect: prev.totalCorrect + 1
      }));

    } else {
      playSoundEffect('wrong');
      const updatedSrs = {
        ...srsState,
        [qId]: {
          stage: 0,
          streak: 0,
          lastReviewed: Date.now(),
          mastered: false,
          soundGap: true
        }
      };
      setSrsState(updatedSrs);

      // Re-insert 2 positions ahead
      const penaltyItem = { ...currentQuestion, shuffledOptions: [...currentQuestion.options].sort(() => Math.random() - 0.5) };
      const newQueue = [...activeQueue];
      const insertAt = Math.min(newQueue.length, queueIndex + 3);
      newQueue.splice(insertAt, 0, penaltyItem);
      setActiveQueue(newQueue);

      setGameStats(prev => ({
        ...prev,
        streak: 0,
        lives: Math.max(0, prev.lives - 1),
        totalAnswered: prev.totalAnswered + 1
      }));
    }
    
    // Auto-sync across PC and Mobile via Firebase Realtime Database
    setTimeout(() => {
      syncStateToFirebase();
    }, 100);
  };

  const handleMarkAsMastered = () => {
    if (!currentQuestion) return;
    const qId = currentQuestion.id;
    
    setSrsState(prev => ({
      ...prev,
      [qId]: { stage: 3, streak: 3, lastReviewed: Date.now(), mastered: true, soundGap: false }
    }));

    if (!dailyStats.masteredIds.includes(qId)) {
      setDailyStats(prev => ({
        ...prev,
        masteredIds: [...prev.masteredIds, qId],
        count: prev.count + 1
      }));
    }

    setTimeout(() => {
      syncStateToFirebase();
    }, 100);

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (queueIndex + 1 < activeQueue.length) {
      setQueueIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setRevealEnglish(gameMode !== 'listening');
      setNeededSoundHelp(false);
    } else {
      const freshQueue = buildSmartQueue(gameMode, srsState);
      setActiveQueue(freshQueue);
      setQueueIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setRevealEnglish(gameMode !== 'listening');
      setNeededSoundHelp(false);
      playSoundEffect('victory');
    }
  };

  const renderStageBadge = (stage, hasSoundGap) => {
    if (hasSoundGap) return <span className="badge badge-amber">👂 Treinar Pronúncia/Som</span>;
    if (stage >= 3) return <span className="badge badge-emerald">🟩 Dominada</span>;
    if (stage === 2) return <span className="badge badge-blue">🟨 Em Revisão (2/3)</span>;
    if (stage === 1) return <span className="badge badge-amber">🟧 Praticando (1/3)</span>;
    return <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-muted)' }}>🟥 Palavra Nova</span>;
  };

  const dailyProgressPercent = Math.min(100, Math.round((dailyStats.count / dailyStats.target) * 100));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* 🎯 DAILY 100 WORDS GOAL PROGRESS BAR */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(16, 185, 129, 0.18) 100%)',
        border: '1px solid var(--accent-emerald)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Trophy size={20} color="var(--accent-amber)" />
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>
              🎯 Meta do Dia: 100 Palavras
            </span>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
            {dailyStats.count} / {dailyStats.target} Palavras Aprendidas Hoje ({dailyProgressPercent}%)
          </div>
        </div>

        <div className="progress-bar-bg" style={{ height: '10px' }}>
          <div className="progress-bar-fill" style={{ width: `${dailyProgressPercent}%` }}></div>
        </div>
      </div>

      {/* 🏆 STATS ROW */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: 800,
            fontSize: '1rem'
          }}>
            Lv.{gameStats.level}
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800 }}>PONTUAÇÃO</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-amber)' }}>⚡ {gameStats.xp} XP</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Flame size={20} color={gameStats.streak > 0 ? "var(--accent-amber)" : "var(--text-muted)"} />
            <span style={{ fontSize: '1rem', fontWeight: 800, color: gameStats.streak > 0 ? "var(--accent-amber)" : "var(--text-muted)" }}>
              {gameStats.streak}x Combo
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
            {[1, 2, 3].map(heartNum => (
              <Heart
                key={heartNum}
                size={20}
                fill={heartNum <= gameStats.lives ? "var(--accent-rose)" : "none"}
                color={heartNum <= gameStats.lives ? "var(--accent-rose)" : "var(--text-muted)"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🕹️ MODE SELECTOR */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
        <button
          className={`btn ${gameMode === 'listening' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => handleSwitchMode('listening')}
          style={{ flex: 1, fontSize: '0.82rem', whiteSpace: 'nowrap' }}
        >
          <Headphones size={15} /> 🎧 1. Desafio Auditivo
        </button>

        <button
          className={`btn ${gameMode === 'blitz' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => handleSwitchMode('blitz')}
          style={{ flex: 1, fontSize: '0.82rem', whiteSpace: 'nowrap' }}
        >
          <Zap size={15} /> ⚡ 2. Flash Blitz
        </button>

        <button
          className={`btn ${gameMode === 'sentences' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => handleSwitchMode('sentences')}
          style={{ flex: 1, fontSize: '0.82rem', whiteSpace: 'nowrap' }}
        >
          <Sparkles size={15} /> 🧩 3. Frases
        </button>

        <button
          className={`btn ${gameMode === 'tech' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => handleSwitchMode('tech')}
          style={{ flex: 1, fontSize: '0.82rem', whiteSpace: 'nowrap' }}
        >
          <Code2 size={15} /> 💻 4. TI & Código
        </button>
      </div>

      {/* 🎮 MAIN QUESTION CARD */}
      {currentQuestion && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Top Stage & Category Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {renderStageBadge(currentWordSrs.stage, currentWordSrs.soundGap)}
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                • {currentQuestion.category || "Vocabulário"}
              </span>
            </div>

            {!isAnswered && (
              <button
                onClick={handleMarkAsMastered}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
                title="Pular e marcar como dominada"
              >
                <Star size={13} color="var(--accent-amber)" /> Já sei essa palavra
              </button>
            )}
          </div>

          {/* Audio & Phonetic Pronunciation Stage */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.15rem'
          }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn btn-primary"
                onClick={() => handlePlayAudio(speechSpeed)}
                style={{
                  padding: '0.9rem 1.8rem',
                  fontSize: '1.05rem',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 0 25px rgba(2, 132, 199, 0.4)'
                }}
              >
                <Volume2 size={22} /> Ouvir Pronúncia
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => handlePlayAudio(0.68)}
                style={{ padding: '0.8rem 1.1rem', fontSize: '0.85rem', borderRadius: 'var(--radius-xl)' }}
              >
                🐢 0.68x Bem Lento
              </button>
            </div>

            {/* Hidden Mask vs Revealed with Phonetic Guide */}
            {gameMode === 'listening' && !revealEnglish && !isAnswered ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginTop: '0.3rem' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.25em' }}>
                  🔊 • • • • • •
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  (Identifique o significado <strong>apenas escutando</strong>!)
                </span>
                <button
                  onClick={handleRevealWithSoundGap}
                  style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: 'var(--accent-blue)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginTop: '0.4rem'
                  }}
                >
                  <Eye size={14} /> Espiar escrita & Pronúncia
                </button>
              </div>
            ) : (
              <div style={{ marginTop: '0.3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                {/* English Word */}
                <div style={{
                  fontSize: '1.9rem',
                  fontWeight: 800,
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  "{currentQuestion.en}"
                </div>

                {/* 🗣️ COMO SE FALA (Pronúncia Figurada em Português + IPA) */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid var(--accent-emerald)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1.25rem',
                  maxWidth: '550px',
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      🗣️ Como se fala:
                    </span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                      "{currentQuestion.phoneticPt || currentQuestion.en}"
                    </span>
                    {currentQuestion.ipa && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {currentQuestion.ipa}
                      </span>
                    )}
                  </div>

                  {currentQuestion.soundTip && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      💡 <strong>Dica de Som:</strong> {currentQuestion.soundTip}
                    </div>
                  )}
                </div>

                {neededSoundHelp && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                    ⚠️ Você precisou ver a escrita: o sistema agendou esta palavra para mais treinos auditivos!
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 800, display: 'block', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Qual é o significado correto em português?
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {(currentQuestion.shuffledOptions || currentQuestion.options).map((option, optIdx) => {
                const isThisSelected = selectedOption === option;
                const isThisTheCorrectAnswer = option === currentQuestion.pt;

                let btnStyle = {
                  padding: '1rem 1.15rem',
                  fontSize: '0.92rem',
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.15s ease',
                  fontWeight: 700
                };

                if (isAnswered) {
                  if (isThisTheCorrectAnswer) {
                    return (
                      <button
                        key={optIdx}
                        className="btn btn-emerald"
                        style={{ ...btnStyle, boxShadow: '0 0 15px var(--accent-emerald-glow)' }}
                      >
                        <CheckCircle2 size={18} /> {option} (Correto! 🎉)
                      </button>
                    );
                  } else if (isThisSelected && !isCorrect) {
                    return (
                      <button
                        key={optIdx}
                        className="btn btn-secondary"
                        style={{ ...btnStyle, borderColor: 'var(--accent-rose)', color: 'var(--accent-rose)', background: 'rgba(244, 63, 94, 0.15)' }}
                      >
                        <XCircle size={18} /> {option} (Incorreto)
                      </button>
                    );
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(option)}
                    disabled={isAnswered}
                    className="btn btn-secondary"
                    style={{
                      ...btnStyle,
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-card)'
                    }}
                  >
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', marginRight: '0.5rem' }}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback on Answer */}
          {isAnswered && (
            <div style={{
              background: isCorrect ? 'var(--accent-emerald-glow)' : 'rgba(244, 63, 94, 0.12)',
              border: isCorrect ? '1px solid var(--accent-emerald)' : '1px solid var(--accent-rose)',
              borderRadius: 'var(--radius-md)',
              padding: '1.15rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>
                  {isCorrect ? "🎯 Resposta Correta! (+10 XP)" : `❌ Você errou! (Palavra re-inserida na fila de reforço)`}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  "{currentQuestion.en}" = <strong>"{currentQuestion.pt}"</strong>
                </div>
              </div>

              <button
                className="btn btn-primary"
                onClick={handleNextQuestion}
                style={{ padding: '0.7rem 1.6rem', fontSize: '0.95rem', fontWeight: 800 }}
              >
                Próxima Palavra <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
