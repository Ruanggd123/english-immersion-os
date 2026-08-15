import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Eye, EyeOff, CheckCircle2, ChevronRight, Award, BookOpen, Headphones, Mic, Square, Play, Target, Sparkles, Layers } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';
import { allDays } from '../data/phases';

const STEPS = [
  { id: 'vocab', label: 'Vocabulário', icon: 'Layers' },
  { id: 'grammar', label: 'Gramática', icon: 'BookOpen' },
  { id: 'reading', label: 'Leitura', icon: 'BookOpen' },
  { id: 'quiz', label: 'Quiz', icon: 'Target' },
  { id: 'chunks', label: 'Chunks', icon: 'Sparkles' },
  { id: 'listening', label: 'Listening', icon: 'Headphones' },
  { id: 'speaking', label: 'Speaking', icon: 'Mic' },
  { id: 'done', label: 'Conclusão', icon: 'Award' }
];

const TASK_KEYS = [
  'morning_vocab', 'morning_grammar', 'morning_reading', 'morning_exercises',
  'afternoon_vocab', 'afternoon_listening', 'afternoon_shadowing', 'afternoon_speaking',
  'evening_reading', 'evening_listening', 'evening_journal'
];

export default function LiveSession({ currentDay, setDay, toggleTask }) {
  const dayNum = allDays[currentDay] ? currentDay : 1;
  const lesson = allDays[dayNum];

  const [stepIndex, setStepIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [showTranslation, setShowTranslation] = useState(false);
  const [chunkChecked, setChunkChecked] = useState({});
  const [markedDone, setMarkedDone] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setElapsed(p => p + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const handleSpeak = (text) => speakNaturalEnglish(text, 0.9);

  const step = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const totalSteps = STEPS.length;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => { if (e.data.size > 0) audioChunksRef.current.push(e.data); };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => setRecordingTime(p => p + 1), 1000);
    } catch {
      alert('Permissão de microfone necessária para gravar o Speaking.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      clearInterval(timerRef.current);
    }
  };

  const saveRecording = () => {
    if (!audioUrl) return;
    const logs = JSON.parse(localStorage.getItem('english_speaking_logs') || '[]');
    logs.push({
      id: Date.now(),
      day: dayNum,
      date: new Date().toLocaleDateString('pt-BR'),
      url: audioUrl,
      duration: recordingTime
    });
    localStorage.setItem('english_speaking_logs', JSON.stringify(logs));
    setAudioUrl(null);
  };

  const markDayComplete = () => {
    TASK_KEYS.forEach(k => {
      if (toggleTask) toggleTask(k);
    });
    setMarkedDone(true);
  };

  const goNextDay = () => {
    if (dayNum < 180 && setDay) setDay(dayNum + 1);
  };

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const quizScore = Object.keys(quizAnswers).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '780px', margin: '0 auto', width: '100%' }}>
      {/* Header do dia */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
          <span className="badge badge-emerald">{lesson.dayName}</span>
          <span className="badge badge-blue">{lesson.title}</span>
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Sessão ao Vivo — Dia {dayNum}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          {lesson.focus} • Tempo de sessão: {formatTime(elapsed)}
        </p>
      </div>

      {/* Barra de progresso + stepper */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${((stepIndex) / (totalSteps - 1)) * 100}%`, background: 'linear-gradient(90deg, var(--accent-emerald), var(--accent-blue))', transition: 'width 0.4s ease' }} />
        </div>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {STEPS.map((s, i) => (
            <span
              key={s.id}
              onClick={() => i < stepIndex && setStepIndex(i)}
              style={{
                fontSize: '0.7rem', padding: '0.2rem 0.55rem', borderRadius: '99px', cursor: i < stepIndex ? 'pointer' : 'default',
                background: i === stepIndex ? 'var(--accent-emerald)' : i < stepIndex ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)',
                color: i === stepIndex ? '#052e16' : i < stepIndex ? 'var(--accent-emerald)' : 'var(--text-muted)',
                fontWeight: 700
              }}
            >
              {i < stepIndex ? '✓ ' : ''}{s.label}
            </span>
          ))}
        </div>
      </div>

      {/* STEP: VOCAB */}
      {step.id === 'vocab' && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)' }}>
          <h3 className="card-title" style={{ marginBottom: '1rem' }}>
            <Layers size={20} color="var(--accent-emerald)" /> Vocabulário do Dia (10 palavras)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {lesson.vocab.map((v, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(0,0,0,0.25)', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ width: '22px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>{i + 1}.</span>
                <span style={{ flex: 1, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontSize: '0.95rem' }}>{v.en}</span>
                <button className="btn btn-secondary" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }} onClick={() => handleSpeak(v.en)}>
                  <Volume2 size={13} /> Ouvir
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', color: revealed[i] ? 'var(--accent-emerald)' : 'var(--text-secondary)' }}
                  onClick={() => setRevealed(prev => ({ ...prev, [i]: !prev[i] }))}
                >
                  {revealed[i] ? <EyeOff size={13} /> : <Eye size={13} />} {revealed[i] ? v.pt : 'Revelar'}
                </button>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
            <button className="btn btn-primary" onClick={() => { setStepIndex(1); }}><ChevronRight size={16} /> Gramática</button>
          </div>
        </div>
      )}

      {/* STEP: GRAMMAR */}
      {step.id === 'grammar' && (
        <div className="card" style={{ borderColor: 'var(--accent-blue)' }}>
          <h3 className="card-title" style={{ marginBottom: '0.5rem' }}><BookOpen size={20} color="var(--accent-blue)" /> {lesson.grammar.title}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>{lesson.grammar.rule}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {lesson.grammar.table.map((row, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.25)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="badge badge-amber">{row.form}</span>
                  <button className="btn btn-secondary" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }} onClick={() => handleSpeak(row.example)}>
                    <Volume2 size={13} /> Ouvir
                  </button>
                </div>
                <div style={{ marginTop: '0.4rem', fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)' }}>{row.example}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{row.pt}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
            <button className="btn btn-primary" onClick={() => setStepIndex(2)}><ChevronRight size={16} /> Leitura</button>
          </div>
        </div>
      )}

      {/* STEP: READING */}
      {step.id === 'reading' && (
        <div className="card" style={{ borderColor: 'var(--accent-purple)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <h3 className="card-title" style={{ marginBottom: 0 }}><BookOpen size={20} color="var(--accent-purple)" /> {lesson.reading.title}</h3>
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => handleSpeak(lesson.reading.text)}>
              <Volume2 size={14} /> Ouvir o texto
            </button>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{lesson.reading.text}</p>
          <button
            className="btn btn-secondary"
            style={{ marginTop: '1rem', fontSize: '0.85rem' }}
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? <EyeOff size={14} /> : <Eye size={14} />} {showTranslation ? 'Ocultar tradução' : 'Ver tradução'}
          </button>
          {showTranslation && (
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--accent-amber)', fontStyle: 'italic', lineHeight: 1.7, background: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
              {lesson.reading.translation}
            </p>
          )}
          <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
            <button className="btn btn-primary" onClick={() => setStepIndex(3)}><ChevronRight size={16} /> Quiz</button>
          </div>
        </div>
      )}

      {/* STEP: QUIZ */}
      {step.id === 'quiz' && (
        <div className="card" style={{ borderColor: 'var(--accent-amber)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 className="card-title" style={{ marginBottom: 0 }}><Target size={20} color="var(--accent-amber)" /> Quiz do Dia</h3>
            <span className="badge badge-amber">Pergunta {quizIndex + 1} de {lesson.quiz.length}</span>
          </div>
          {quizIndex < lesson.quiz.length ? (
            <>
              <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem' }}>{lesson.quiz[quizIndex].q}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {lesson.quiz[quizIndex].options.map((opt, oi) => {
                  const selected = quizAnswers[quizIndex] === opt;
                  const correct = opt === lesson.quiz[quizIndex].ans;
                  const answered = quizAnswers[quizIndex] !== undefined;
                  let bg = 'rgba(0,0,0,0.25)';
                  let border = 'var(--border-color)';
                  let color = 'var(--text-primary)';
                  if (answered) {
                    if (correct) { bg = 'rgba(16,185,129,0.18)'; border = '#10b981'; color = '#10b981'; }
                    else if (selected) { bg = 'rgba(244,63,94,0.18)'; border = '#f43f5e'; color = '#f43f5e'; }
                    else { color = 'var(--text-muted)'; }
                  }
                  return (
                    <button
                      key={oi}
                      disabled={answered}
                      onClick={() => setQuizAnswers(prev => ({ ...prev, [quizIndex]: opt }))}
                      style={{ textAlign: 'left', background: bg, border: `1px solid ${border}`, borderRadius: 'var(--radius-sm)', padding: '0.7rem 0.9rem', color, fontWeight: 600, fontSize: '0.92rem', cursor: answered ? 'default' : 'pointer' }}
                    >
                      {opt} {answered && correct && ' ✓'}
                    </button>
                  );
                })}
              </div>
              {quizAnswers[quizIndex] !== undefined && (
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: quizAnswers[quizIndex] === lesson.quiz[quizIndex].ans ? 'var(--accent-emerald)' : '#f43f5e', fontWeight: 700 }}>
                    {quizAnswers[quizIndex] === lesson.quiz[quizIndex].ans ? 'Correto!' : `Correto: ${lesson.quiz[quizIndex].ans}`}
                  </span>
                  <button
                    className="btn btn-primary"
                    onClick={() => quizIndex + 1 < lesson.quiz.length ? setQuizIndex(quizIndex + 1) : setStepIndex(4)}
                  >
                    {quizIndex + 1 < lesson.quiz.length ? 'Próxima pergunta' : 'Ir para Chunks'} <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          ) : null}
        </div>
      )}

      {/* STEP: CHUNKS (shadowing) */}
      {step.id === 'chunks' && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)' }}>
          <h3 className="card-title" style={{ marginBottom: '0.25rem' }}><Sparkles size={20} color="var(--accent-emerald)" /> Chunks (Shadowing)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Ouça o chunk, repita em voz alta e marque quando conseguir falar sem olhar. Faça o mesmo em PT → EN.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {lesson.chunks.map((c, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.25)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontSize: '0.95rem' }}>{c.en}</span>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => handleSpeak(c.en)}>
                      <Volume2 size={13} /> Ouvir
                    </button>
                    <button
                      className="btn"
                      style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: chunkChecked[i] ? 'rgba(16,185,129,0.2)' : 'rgba(0,0,0,0.2)', color: chunkChecked[i] ? '#10b981' : 'var(--text-secondary)', border: `1px solid ${chunkChecked[i] ? '#10b981' : 'var(--border-color)'}` }}
                      onClick={() => setChunkChecked(prev => ({ ...prev, [i]: !prev[i] }))}
                    >
                      {chunkChecked[i] ? <CheckCircle2 size={13} /> : <Eye size={13} />} {chunkChecked[i] ? 'Repetido!' : 'Repetir'}
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{c.pt}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {Object.values(chunkChecked).filter(Boolean).length} de {lesson.chunks.length} chunks repetidos
            </span>
            <button className="btn btn-primary" onClick={() => setStepIndex(5)}><ChevronRight size={16} /> Listening</button>
          </div>
        </div>
      )}

      {/* STEP: LISTENING */}
      {step.id === 'listening' && (
        <div className="card" style={{ borderColor: 'var(--accent-blue)' }}>
          <h3 className="card-title" style={{ marginBottom: '0.75rem' }}><Headphones size={20} color="var(--accent-blue)" /> Listening (Escuta Ativa)</h3>
          <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem' }}>
            <button className="btn btn-emerald" style={{ fontSize: '0.9rem' }} onClick={() => handleSpeak(lesson.listeningScript)}>
              <Play size={16} /> Ouvir agora
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '0.9rem' }} onClick={() => handleSpeak(lesson.listeningScript)}>
              <Volume2 size={16} /> Repetir
            </button>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, fontStyle: 'italic' }}>
            "{lesson.listeningScript}"
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            Ouça 2 vezes. Na segunda, tente acompanhar dizendo as palavras em voz baixa (shadowing).
          </p>
          <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
            <button className="btn btn-primary" onClick={() => setStepIndex(6)}><ChevronRight size={16} /> Speaking</button>
          </div>
        </div>
      )}

      {/* STEP: SPEAKING */}
      {step.id === 'speaking' && (
        <div className="card" style={{ borderColor: 'var(--accent-purple)' }}>
          <h3 className="card-title" style={{ marginBottom: '0.5rem' }}><Mic size={20} color="var(--accent-purple)" /> Speaking (Gravação)</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
            {lesson.speakingPrompt}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            {!isRecording ? (
              <button className="btn btn-emerald" onClick={startRecording}><Mic size={16} /> Gravar resposta</button>
            ) : (
              <button className="btn" style={{ background: 'rgba(244,63,94,0.2)', color: '#f43f5e', border: '1px solid #f43f5e' }} onClick={stopRecording}>
                <Square size={16} /> Parar ({formatTime(recordingTime)})
              </button>
            )}
            {audioUrl && (
              <>
                <audio src={audioUrl} controls style={{ height: '40px', maxWidth: '260px' }} />
                <button className="btn btn-secondary" onClick={saveRecording}><CheckCircle2 size={15} /> Salvar gravação</button>
              </>
            )}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Grave em voz alta por pelo menos 1 minuto. As gravações salvas aparecem em "Testes de Sábado" para revisão.
          </p>
          <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
            <button className="btn btn-primary" onClick={() => setStepIndex(7)}><ChevronRight size={16} /> Concluir sessão</button>
          </div>
        </div>
      )}

      {/* STEP: DONE */}
      {step.id === 'done' && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)', textAlign: 'center', padding: '3rem 1.5rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            <Award size={14} /> Sessão ao Vivo Concluída
          </span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Dia {dayNum} finalizado!</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
            Você completou vocabulário, gramática, leitura, quiz, chunks, listening e speaking em {formatTime(elapsed)}.
            {quizScore > 0 && ` Você acertou ${Object.values(quizAnswers).filter((a, i) => a === lesson.quiz[i].ans).length} de ${lesson.quiz.length} perguntas do quiz.`}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-emerald" onClick={markDayComplete} disabled={markedDone}>
              <CheckCircle2 size={16} /> {markedDone ? 'Dia marcado como completo!' : 'Marcar dia completo'}
            </button>
            {dayNum < 180 && (
              <button className="btn btn-primary" onClick={goNextDay}>
                Próximo dia (Dia {dayNum + 1}) <ChevronRight size={16} />
              </button>
            )}
          </div>
          {markedDone && (
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
              Tarefas do dia marcadas. Continue assim: constância é tudo.
            </div>
          )}
          {dayNum === 180 && (
            <div style={{ marginTop: '1.25rem', padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(251,191,36,0.12)', border: '1px solid var(--accent-amber)' }}>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-amber)' }}>
                Parabéns! Você completou os 180 dias do plano B1.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Leia a carta do Dia 180 — os próximos capítulos serão escritos em inglês.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Botões de navegação inferiores */}
      {!isLastStep && stepIndex > 0 && (
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button className="btn btn-secondary" onClick={() => setStepIndex(stepIndex - 1)}>Voltar</button>
        </div>
      )}
    </div>
  );
}
