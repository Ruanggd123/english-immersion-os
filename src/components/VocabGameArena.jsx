import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Heart, Flame, ArrowRight, RotateCcw, Eye, Headphones, Zap, Code2, CheckCircle2, XCircle, Sliders, Trophy, Star, Lock, Unlock, Map, Check, ChevronRight, ArrowLeft } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';
import { CEFR_LEVELS, BLOCKS_REGISTRY, getBlocksForLevel, getBlockById, getLevelStats } from '../data/blockVocabData';
import { syncStateToFirebase } from '../utils/firebaseSync';
import { triggerConfetti } from '../utils/confetti';

// Web Audio API Sound Synthesizer
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

export default function VocabGameArena() {
  // Navigation: 'game' (jogando) ou 'map' (mapa de trilha de blocos)
  const [viewMode, setViewMode] = useState('game');
  const [selectedLevelTab, setSelectedLevelTab] = useState('A1');
  const [gameMode, setGameMode] = useState('listening'); // 'listening' | 'blitz'
  const [speechSpeed, setSpeechSpeed] = useState(0.88);

  // 1. Persistent Unlocked Blocks List
  const [unlockedBlocks, setUnlockedBlocks] = useState(() => {
    const saved = localStorage.getItem('english_unlocked_blocks');
    return saved ? JSON.parse(saved) : ['block_1'];
  });

  // 2. Persistent Active Block ID
  const [activeBlockId, setActiveBlockId] = useState(() => {
    return localStorage.getItem('english_active_block_id') || 'block_1';
  });

  // 3. Persistent SRS Word State
  const [srsState, setSrsState] = useState(() => {
    const saved = localStorage.getItem('english_vocab_srs_state');
    return saved ? JSON.parse(saved) : {};
  });

  // 4. Persistent Daily Goal
  const [dailyStats, setDailyStats] = useState(() => {
    const saved = localStorage.getItem('english_daily_vocab_goal');
    const todayStr = new Date().toISOString().split('T')[0];
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === todayStr) return parsed;
    }
    return { date: todayStr, masteredIds: [], count: 0, target: 100 };
  });

  // 5. Persistent Game Stats
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

  // Block completion modal state
  const [celebrationBlock, setCelebrationBlock] = useState(null);

  useEffect(() => {
    localStorage.setItem('english_unlocked_blocks', JSON.stringify(unlockedBlocks));
    localStorage.setItem('english_active_block_id', activeBlockId);
    localStorage.setItem('english_vocab_srs_state', JSON.stringify(srsState));
    localStorage.setItem('english_daily_vocab_goal', JSON.stringify(dailyStats));
    localStorage.setItem('english_game_stats', JSON.stringify(gameStats));
  }, [unlockedBlocks, activeBlockId, srsState, dailyStats, gameStats]);

  // Current active block object
  const currentBlock = getBlockById(activeBlockId);

  // Calculate mastery for any block
  const getBlockProgress = (block) => {
    const words = block.words || [];
    if (words.length === 0) return { mastered: 0, total: 0, pct: 0, isComplete: false };

    let mastered = 0;
    for (const w of words) {
      const state = srsState[w.id];
      if (state && (state.stage >= 3 || state.mastered)) {
        mastered++;
      }
    }

    const pct = Math.round((mastered / words.length) * 100);
    return {
      mastered,
      total: words.length,
      pct,
      isComplete: mastered === words.length
    };
  };

  const currentBlockProgress = getBlockProgress(currentBlock);

  // Build active queue for the current block
  const buildBlockQueue = (block, currentSrs) => {
    const words = block.words || [];
    // Prioritize unmastered words first
    const unmastered = words.filter(w => {
      const s = currentSrs[w.id];
      return !s || s.stage < 3;
    });

    const mastered = words.filter(w => {
      const s = currentSrs[w.id];
      return s && s.stage >= 3;
    });

    const sorted = [...unmastered, ...mastered];
    return sorted.length > 0 ? sorted : words;
  };

  const [activeQueue, setActiveQueue] = useState(() => buildBlockQueue(currentBlock, srsState));
  const [queueIndex, setQueueIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [revealEnglish, setRevealEnglish] = useState(false);
  const [neededSoundHelp, setNeededSoundHelp] = useState(false);

  // Re-build queue when activeBlockId changes
  useEffect(() => {
    const block = getBlockById(activeBlockId);
    setActiveQueue(buildBlockQueue(block, srsState));
    setQueueIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setRevealEnglish(gameMode !== 'listening');
    setNeededSoundHelp(false);
  }, [activeBlockId]);

  const currentQuestion = activeQueue[queueIndex] || activeQueue[0];
  const currentWordSrs = currentQuestion ? (srsState[currentQuestion.id] || { stage: 0, streak: 0, soundGap: false }) : { stage: 0, streak: 0, soundGap: false };

  // Auto-play audio on question load
  useEffect(() => {
    if (currentQuestion && viewMode === 'game' && !celebrationBlock) {
      const timer = setTimeout(() => {
        speakNaturalEnglish(currentQuestion.en, speechSpeed);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [queueIndex, activeBlockId, viewMode, celebrationBlock]);

  const handlePlayAudio = (rate = speechSpeed) => {
    if (currentQuestion) {
      speakNaturalEnglish(currentQuestion.en, rate);
    }
  };

  const handleRevealWithSoundGap = () => {
    setRevealEnglish(true);
    setNeededSoundHelp(true);
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

  // Check and unlock next block if current block completed
  const checkBlockUnlock = (newSrs) => {
    const block = getBlockById(activeBlockId);
    const words = block.words || [];
    const allMastered = words.every(w => {
      const s = newSrs[w.id];
      return s && (s.stage >= 3 || s.mastered);
    });

    if (allMastered) {
      const nextBlockNum = block.num + 1;
      const nextBlockId = `block_${nextBlockNum}`;
      const hasNextBlock = BLOCKS_REGISTRY.some(b => b.id === nextBlockId);

      if (hasNextBlock && !unlockedBlocks.includes(nextBlockId)) {
        setUnlockedBlocks(prev => [...prev, nextBlockId]);
        setCelebrationBlock({
          completedBlock: block,
          nextBlockId,
          nextBlockNum
        });
        playSoundEffect('victory');
        triggerConfetti(60);
      }
    }
  };

  // Handle Option Selection
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
      const newStage = neededSoundHelp ? Math.min(2, prevSrs.stage + 1) : Math.min(3, prevSrs.stage + 1);
      const newStreak = prevSrs.streak + 1;
      const isWordMastered = newStage >= 3;

      const updatedSrs = {
        ...srsState,
        [qId]: {
          stage: newStage,
          streak: newStreak,
          lastReviewed: Date.now(),
          mastered: isWordMastered,
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

      // Check if this answer completed the block
      if (isWordMastered) {
        checkBlockUnlock(updatedSrs);
      }

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

      // Re-insert penalty card 2 positions ahead
      const penaltyItem = { ...currentQuestion };
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

    setTimeout(() => {
      syncStateToFirebase();
    }, 150);
  };

  // Skip and mark as mastered (⭐ Já sei essa palavra)
  const handleMarkAsMastered = () => {
    if (!currentQuestion) return;
    const qId = currentQuestion.id;

    const updatedSrs = {
      ...srsState,
      [qId]: { stage: 3, streak: 3, lastReviewed: Date.now(), mastered: true, soundGap: false }
    };
    setSrsState(updatedSrs);

    if (!dailyStats.masteredIds.includes(qId)) {
      setDailyStats(prev => ({
        ...prev,
        masteredIds: [...prev.masteredIds, qId],
        count: prev.count + 1
      }));
    }

    checkBlockUnlock(updatedSrs);

    setTimeout(() => {
      syncStateToFirebase();
    }, 150);

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
      // Re-queue unmastered words in block
      const freshQueue = buildBlockQueue(currentBlock, srsState);
      setActiveQueue(freshQueue);
      setQueueIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setRevealEnglish(gameMode !== 'listening');
      setNeededSoundHelp(false);
    }
  };

  const handleSelectBlockFromMap = (blockId) => {
    if (!unlockedBlocks.includes(blockId)) return;
    setActiveBlockId(blockId);
    setViewMode('game');
  };

  const handleAdvanceToNextBlock = () => {
    if (celebrationBlock) {
      setActiveBlockId(celebrationBlock.nextBlockId);
      setCelebrationBlock(null);
      setViewMode('game');
    }
  };

  const renderStageBadge = (stage, hasSoundGap) => {
    if (hasSoundGap) return <span className="badge badge-amber">👂 Treinar Som</span>;
    if (stage >= 3) return <span className="badge badge-emerald">🟩 Dominada</span>;
    if (stage === 2) return <span className="badge badge-blue">🟨 Em Revisão (2/3)</span>;
    if (stage === 1) return <span className="badge badge-amber">🟧 Praticando (1/3)</span>;
    return <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-muted)' }}>🟥 Nova</span>;
  };

  const totalStats = getLevelStats();
  const dailyProgressPercent = Math.min(100, Math.round((dailyStats.count / dailyStats.target) * 100));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '950px', margin: '0 auto' }}>

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

      {/* 🗺️ TOGGLE BAR: JOGAR BLOCO ATUAL vs VER MAPA DE FASES */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        background: 'var(--bg-card)',
        padding: '0.75rem 1.25rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-blue)' }}>
            📍 {currentBlock.title}
          </span>
          <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
            {currentBlockProgress.mastered}/{currentBlockProgress.total} Dominadas ({currentBlockProgress.pct}%)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className={`btn ${viewMode === 'game' ? 'btn-emerald' : 'btn-secondary'}`}
            onClick={() => setViewMode('game')}
            style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
          >
            <Zap size={15} /> Jogar Bloco
          </button>

          <button
            className={`btn ${viewMode === 'map' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('map')}
            style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
          >
            <Map size={15} /> 🗺️ Mapa de Blocos
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🗺️ MAPA DE FASES / TRILHA DE BLOCOS POR NÍVEL (A1, A2, B1, B2)           */}
      {/* ========================================================================= */}
      {viewMode === 'map' && (
        <div className="card" style={{ borderColor: 'var(--accent-blue)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Level Tabs */}
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Selecione o Nível de Domínio:
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.6rem' }}>
              {CEFR_LEVELS.map(lvl => {
                const isSelected = selectedLevelTab === lvl.id;
                const levelBlocks = getBlocksForLevel(lvl.id);
                const masteredBlocksCount = levelBlocks.filter(b => getBlockProgress(b).isComplete).length;

                return (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevelTab(lvl.id)}
                    style={{
                      background: isSelected ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(16, 185, 129, 0.2) 100%)' : 'rgba(0,0,0,0.25)',
                      border: isSelected ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{lvl.icon} {lvl.name}</div>
                    <div style={{ fontSize: '0.78rem', color: isSelected ? 'var(--accent-emerald)' : 'var(--text-muted)', fontWeight: 700 }}>
                      {masteredBlocksCount} / {levelBlocks.length} Blocos Concluídos
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Level Description */}
          {(() => {
            const lvlObj = CEFR_LEVELS.find(l => l.id === selectedLevelTab);
            return (
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                💡 <strong>Objetivo do {lvlObj.name}:</strong> {lvlObj.description}
              </div>
            );
          })()}

          {/* Blocks Grid for Selected Level */}
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Blocos de Vocabulário do {selectedLevelTab} (Desbloqueio Progressivo):
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.85rem' }}>
              {getBlocksForLevel(selectedLevelTab).map(block => {
                const isUnlocked = unlockedBlocks.includes(block.id);
                const isActive = activeBlockId === block.id;
                const progress = getBlockProgress(block);

                let cardBg = 'rgba(0, 0, 0, 0.35)';
                let borderCol = 'var(--border-color)';
                let statusIcon = <Lock size={16} color="var(--text-muted)" />;
                let statusText = "Bloqueado";
                let statusColor = "var(--text-muted)";

                if (progress.isComplete) {
                  cardBg = 'rgba(16, 185, 129, 0.12)';
                  borderCol = 'var(--accent-emerald)';
                  statusIcon = <CheckCircle2 size={16} color="var(--accent-emerald)" />;
                  statusText = "100% Dominado!";
                  statusColor = "var(--accent-emerald)";
                } else if (isUnlocked) {
                  cardBg = isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)';
                  borderCol = isActive ? 'var(--accent-blue)' : 'rgba(56, 189, 248, 0.3)';
                  statusIcon = <Unlock size={16} color="var(--accent-blue)" />;
                  statusText = isActive ? "Jogando Agora" : "Disponível";
                  statusColor = "var(--accent-blue)";
                }

                return (
                  <div
                    key={block.id}
                    onClick={() => isUnlocked && handleSelectBlockFromMap(block.id)}
                    style={{
                      background: cardBg,
                      border: `1px solid ${borderCol}`,
                      borderRadius: 'var(--radius-md)',
                      padding: '1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      opacity: isUnlocked ? 1 : 0.6,
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 0 15px rgba(56, 189, 248, 0.2)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>
                        Bloco {block.num}
                      </span>
                      {statusIcon}
                    </div>

                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {block.wordsCount} Palavras • {block.level}
                    </div>

                    {/* Mini Progress Bar */}
                    <div className="progress-bar-bg" style={{ height: '6px' }}>
                      <div className="progress-bar-fill" style={{ width: `${progress.pct}%` }}></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                      <span style={{ color: statusColor, fontWeight: 700 }}>
                        {statusText}
                      </span>
                      <span style={{ color: 'var(--text-muted)' }}>
                        {progress.mastered}/{progress.total}
                      </span>
                    </div>

                    {isUnlocked && (
                      <button
                        className={`btn ${isActive ? 'btn-emerald' : 'btn-secondary'}`}
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', width: '100%', marginTop: '0.2rem' }}
                      >
                        {isActive ? "Continuar Jogando ➔" : "Treinar Este Bloco"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 🎮 JOGO ATIVO NO BLOCO SELECIONADO                                        */}
      {/* ========================================================================= */}
      {viewMode === 'game' && currentQuestion && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Top Block Header & Stage */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-blue">
                {currentBlock.title}
              </span>
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
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
                title="Já sabe esta palavra? Marque como dominada para avançar no bloco!"
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

                {/* 🗣️ COMO SE FALA (Pronúncia Figurada em Português) */}
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
                      💡 <strong>Dica:</strong> {currentQuestion.soundTip}
                    </div>
                  )}
                </div>

                {neededSoundHelp && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                    ⚠️ Você precisou ver a escrita: esta palavra reaparecerá no modo auditivo para fixar o som!
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
              {(currentQuestion.options || []).map((option, optIdx) => {
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

          {/* Feedback & Next Button */}
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
                  {isCorrect ? "🎯 Resposta Correta! (+10 XP)" : `❌ Você errou! (Re-inserida na fila de reforço)`}
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

      {/* ========================================================================= */}
      {/* 🎉 MODAL DE CELEBRAÇÃO: BLOCO 100% CONCLUÍDO & PRÓXIMO DESBLOQUEADO      */}
      {/* ========================================================================= */}
      {celebrationBlock && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(16px)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--accent-emerald)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 2rem',
            maxWidth: '520px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            boxShadow: '0 0 50px rgba(16, 185, 129, 0.4)'
          }}>
            <div style={{
              width: '75px',
              height: '75px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 35px rgba(16, 185, 129, 0.6)'
            }}>
              <Trophy size={40} />
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              🎉 BLOCO {celebrationBlock.completedBlock.num} CONCLUÍDO!
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Parabéns! Você memorizou e dominou todas as <strong>{celebrationBlock.completedBlock.wordsCount} palavras</strong> deste bloco!
            </p>

            <div style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid var(--accent-emerald)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: 'var(--accent-emerald)',
              fontWeight: 800,
              fontSize: '1rem'
            }}>
              <Unlock size={20} /> Bloco {celebrationBlock.nextBlockNum} Desbloqueado!
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', width: '100%', flexWrap: 'wrap' }}>
              <button
                className="btn btn-emerald"
                onClick={handleAdvanceToNextBlock}
                style={{ flex: 1, padding: '0.85rem', fontSize: '1rem' }}
              >
                Avançar para o Bloco {celebrationBlock.nextBlockNum} <ArrowRight size={18} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => {
                  setCelebrationBlock(null);
                  setViewMode('map');
                }}
                style={{ padding: '0.85rem', fontSize: '0.9rem' }}
              >
                Ver Mapa de Fases
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
