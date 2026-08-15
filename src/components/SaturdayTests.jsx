import React, { useState, useEffect, useRef } from 'react';
import { Award, Mic, Square, Play, Volume2, CheckCircle2, RefreshCw, FileText, Headphones, Sparkles, Trash2, Calendar } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';
import { saturdayTests } from '../data/phases';

export default function SaturdayTests() {
  const [activeTest, setActiveTest] = useState('vocab');
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weekNumbers = Object.keys(saturdayTests).map(Number).sort((a, b) => a - b);
  const testData = saturdayTests[selectedWeek] || saturdayTests[weekNumbers[0]];

  // Test 1: Vocab recall state
  const [vocabAnswers, setVocabAnswers] = useState({});

  const handleVocabToggle = (idx) => {
    setVocabAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const resetVocab = () => setVocabAnswers({});

  const vocabScore = Object.values(vocabAnswers).filter(Boolean).length;

  // Test 4: Audio recorder state
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [savedRecordings, setSavedRecordings] = useState(() => {
    const local = localStorage.getItem('english_speaking_logs');
    return local ? JSON.parse(local) : [];
  });
  const [recordingTime, setRecordingTime] = useState(0);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (err) {
      alert("Permissão de microfone necessária para gravar o Speaking test.");
      console.error("Microphone error:", err);
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

  const saveRecordingLog = () => {
    if (!audioUrl) return;
    const newLog = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      duration: recordingTime,
      url: audioUrl,
      title: `Speaking Test — Semana ${selectedWeek}`
    };
    const updated = [newLog, ...savedRecordings];
    setSavedRecordings(updated);
    localStorage.setItem('english_speaking_logs', JSON.stringify(updated.map(r => ({ ...r, url: '' }))));
    alert("Gravação salva no seu histórico semanal!");
  };

  const deleteRecording = (id) => {
    const updated = savedRecordings.filter(r => r.id !== id);
    setSavedRecordings(updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span className="badge badge-amber">
            <Award size={14} /> Rotina Obrigatória de Sábado
          </span>
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Suíte de Avaliação Semanal (Saturday Test Protocol)
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Todo sábado de manhã execute estes 4 testes para auditar a sua retenção, leitura, escuta e evolução oral.
        </p>
      </div>

      {/* Week Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <span className="badge badge-blue" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <Calendar size={14} /> Semana selecionada:
        </span>
        <select
          className="input-field"
          style={{ width: 'auto', padding: '0.5rem 1rem', fontWeight: 700 }}
          value={selectedWeek}
          onChange={(e) => {
            setSelectedWeek(Number(e.target.value));
            setVocabAnswers({});
          }}
        >
          {weekNumbers.map(w => (
            <option key={w} value={w}>Semana {w} — {saturdayTests[w].title}</option>
          ))}
        </select>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testData.daysRange}</span>
      </div>

      {/* Test Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
        <button
          className={`btn ${activeTest === 'vocab' ? 'btn-amber' : 'btn-secondary'}`}
          onClick={() => setActiveTest('vocab')}
        >
          <Award size={16} /> 1. Vocabulário (Recall)
        </button>
        <button
          className={`btn ${activeTest === 'reading' ? 'btn-amber' : 'btn-secondary'}`}
          onClick={() => setActiveTest('reading')}
        >
          <FileText size={16} /> 2. Compreensão de Leitura
        </button>
        <button
          className={`btn ${activeTest === 'listening' ? 'btn-amber' : 'btn-secondary'}`}
          onClick={() => setActiveTest('listening')}
        >
          <Headphones size={16} /> 3. Listening Inédito
        </button>
        <button
          className={`btn ${activeTest === 'speaking' ? 'btn-amber' : 'btn-secondary'}`}
          onClick={() => setActiveTest('speaking')}
        >
          <Mic size={16} /> 4. Speaking Audit (Gravador de Voz)
        </button>
      </div>

      {/* Test 1: Vocab Recall */}
      {activeTest === 'vocab' && (
        <div className="card" style={{ borderColor: 'var(--accent-amber-glow)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 className="card-title">Recall de Vocabulário & Chunks da Semana {selectedWeek}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge badge-amber">
                Pontuação: {vocabScore} / {testData.recall.length} ({Math.round((vocabScore / testData.recall.length) * 100)}%)
              </span>
              <button className="btn btn-secondary" style={{ padding: '0.35rem 0.7rem', fontSize: '0.75rem' }} onClick={resetVocab}>
                <RefreshCw size={14} /> Reiniciar
              </button>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Leia a expressão em inglês e verifique se você lembra do significado/conceito antes de marcar a caixa. Meta recomendada: <strong>&gt; 85% de acertos</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {testData.recall.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleVocabToggle(idx)}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: vocabAnswers[idx] ? 'var(--accent-emerald-glow)' : 'rgba(0, 0, 0, 0.25)',
                  border: `1px solid ${vocabAnswers[idx] ? 'var(--accent-emerald)' : 'var(--border-color)'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  transition: 'var(--transition-fast)'
                }}
              >
                <div>
                  <span className="chunk-code">{item[0]}</span>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    {item[1]}
                  </div>
                </div>
                <CheckCircle2 size={20} color={vocabAnswers[idx] ? 'var(--accent-emerald)' : 'var(--text-muted)'} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Test 2: Reading Comprehension */}
      {activeTest === 'reading' && (
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '0.75rem' }}>Teste 2 — Leitura & Interpretação (Semana {selectedWeek})</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Leia o texto abaixo <strong>uma vez sem dicionário</strong> e responda às 5 perguntas de interpretação.
          </p>

          <div style={{
            background: 'var(--bg-card)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{testData.reading.title}</h4>
            "{testData.reading.text}"
            <div style={{ marginTop: '0.75rem' }}>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => speakNaturalEnglish(testData.reading.text, 0.88)}>
                <Volume2 size={14} /> Ouvir o texto
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {testData.reading.questions.map((q, idx) => (
              <div key={idx}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                  {idx + 1}. {q}
                </label>
                <input type="text" className="input-field" placeholder="Responda em inglês simples..." />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Test 3: Listening Q&A */}
      {activeTest === 'listening' && (
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '0.75rem' }}>Teste 3 — Listening Inédito (Semana {selectedWeek})</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Ouça o áudio abaixo <strong>apenas 2 vezes sem ler o script</strong> e responda às perguntas universais. Depois compare com o script.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => speakNaturalEnglish(testData.listening, 0.88)}>
              <Play size={16} /> Reproduzir Áudio do Teste
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const el = document.getElementById('sat-listening-script');
                if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
              }}
            >
              Ver / Ocultar Script
            </button>
          </div>

          <div
            id="sat-listening-script"
            style={{
              display: 'none',
              background: 'var(--bg-card)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}
          >
            "{testData.listening}"
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', display: 'block', marginBottom: '0.3rem' }}>
                1. WHO? (Quem está falando?)
              </label>
              <input type="text" className="input-field" placeholder="Ex: A developer talking about..." />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', display: 'block', marginBottom: '0.3rem' }}>
                2. WHAT? (Qual é o assunto principal?)
              </label>
              <input type="text" className="input-field" placeholder="Ex: Explaining a weekly routine" />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', display: 'block', marginBottom: '0.3rem' }}>
                3. HOW? (Como as coisas acontecem?)
              </label>
              <input type="text" className="input-field" placeholder="Ex: Step by step, with examples" />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', display: 'block', marginBottom: '0.3rem' }}>
                4. WHEN / WHY? (Quando e por quê?)
              </label>
              <input type="text" className="input-field" placeholder="Ex: To improve and reach fluency" />
            </div>
          </div>
        </div>
      )}

      {/* Test 4: Speaking Recorder */}
      {activeTest === 'speaking' && (
        <div className="card" style={{ borderColor: 'var(--accent-amber-glow)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '0.3rem' }}>Auditoria de Fala Oral</span>
              <h3 className="card-title"><Mic size={20} color="var(--accent-amber)" /> Teste 4 — Gravador de Voz (Speaking Log)</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Grave de 2 a 5 minutos</span>
          </div>

          <div style={{
            background: 'var(--accent-emerald-glow)',
            border: '1px solid var(--accent-emerald)',
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem'
          }}>
            <strong>Tema da Semana {selectedWeek}:</strong> {testData.speaking}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Pressione gravar e fale continuamente sobre o tema acima, sem parar para traduzir!
          </p>

          {/* Recorder Interface */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: isRecording ? 'var(--accent-rose)' : 'var(--text-primary)' }}>
              {Math.floor(recordingTime / 60).toString().padStart(2, '0')}:{(recordingTime % 60).toString().padStart(2, '0')}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {!isRecording ? (
                <button className="btn btn-emerald" onClick={startRecording} style={{ padding: '0.75rem 1.5rem' }}>
                  <Mic size={18} /> Iniciar Gravação
                </button>
              ) : (
                <button className="btn" onClick={stopRecording} style={{ background: 'var(--accent-rose)', color: '#fff', padding: '0.75rem 1.5rem' }}>
                  <Square size={18} /> Parar Gravação
                </button>
              )}
            </div>

            {/* Audio Preview & Save */}
            {audioUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem', width: '100%' }}>
                <audio src={audioUrl} controls style={{ width: '100%', maxWidth: '450px' }} />
                <button className="btn btn-primary" onClick={saveRecordingLog}>
                  <Sparkles size={16} /> Salvar Gravação no Histórico
                </button>
              </div>
            )}
          </div>

          {/* History of Recordings */}
          {savedRecordings.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Histórico de Gravações Semanais:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {savedRecordings.map(rec => (
                  <div key={rec.id} style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{rec.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Data: {rec.date} • Duração: {rec.duration}s</div>
                    </div>
                    <button className="btn btn-secondary" onClick={() => deleteRecording(rec.id)} style={{ padding: '0.35rem' }}>
                      <Trash2 size={16} color="var(--accent-rose)" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}