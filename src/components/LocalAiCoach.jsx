import React, { useState, useEffect, useRef } from 'react';
import { Bot, Mic, MicOff, Volume2, Sparkles, AlertCircle, PhoneCall, PhoneOff, CheckCircle2, MessageSquare, Code2, RefreshCw, Zap } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

export default function LocalAiCoach() {
  const [mode, setMode] = useState('general'); // 'general' | 'tech' | 'repair'
  const [isLiveCall, setIsLiveCall] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello Ruan! I am your Live Voice Tutor. Click 'Iniciar Chamada de Voz ao Vivo' and talk to me naturally in English!",
      correction: null,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputText, setInputText] = useState('');
  const recognitionRef = useRef(null);
  const isLiveCallRef = useRef(isLiveCall);
  const chatEndRef = useRef(null);

  useEffect(() => {
    isLiveCallRef.current = isLiveCall;
  }, [isLiveCall]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Setup Web Speech Recognition API
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = 'en-US';

      rec.onresult = (event) => {
        let interim = '';
        let final = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const trans = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            final += trans;
          } else {
            interim += trans;
          }
        }
        if (interim) {
          setTranscript(interim);
        }
        if (final) {
          setTranscript('');
          handleUserSpeechInput(final);
        }
      };

      rec.onerror = (event) => {
        console.warn("Speech recognition event error:", event.error);
        setIsListening(false);
        if (isLiveCallRef.current && event.error !== 'aborted') {
          setTimeout(() => restartListening(), 1000);
        }
      };

      rec.onend = () => {
        setIsListening(false);
        if (isLiveCallRef.current) {
          setTimeout(() => restartListening(), 800);
        }
      };

      recognitionRef.current = rec;
    }
  }, []);

  const restartListening = () => {
    if (recognitionRef.current && isLiveCallRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        // already active
      }
    }
  };

  const startLiveCall = () => {
    if (!recognitionRef.current) {
      alert("Seu navegador não suporta reconhecimento de voz direto. Você pode usar o chat por texto!");
      return;
    }
    setIsLiveCall(true);
    isLiveCallRef.current = true;

    const welcomeMsg = mode === 'tech'
      ? "Live Tech Interview started! Let's talk about software engineering. Tell me, what programming language do you use?"
      : "Live Call started! I am listening to you. Speak to me in English now!";

    speakAndListen(welcomeMsg);
  };

  const endLiveCall = () => {
    setIsLiveCall(false);
    isLiveCallRef.current = false;
    setIsListening(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch(e){}
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  // Local AI NLP Engine Response Generator
  const generateAiResponse = (userMsg) => {
    const lower = userMsg.toLowerCase().trim();
    let correction = null;
    let reply = "";

    // Live Grammar Corrections
    if (lower.includes("i is")) {
      correction = "💡 Dica Gramatical: Use 'I am' em vez de 'I is'. Ex: 'I am studying.'";
    } else if (lower.includes("you is")) {
      correction = "💡 Dica Gramatical: Use 'You are' em vez de 'You is'.";
    } else if (lower.includes("he are") || lower.includes("she are")) {
      correction = "💡 Dica Gramatical: Use 'He is' ou 'She is'.";
    } else if (lower.includes("i have 20 years") || lower.includes("i have 25 years")) {
      correction = "💡 Dica Gramatical: Para idade use o verbo To Be: 'I am 20 years old'.";
    } else if (lower.includes("i don't know nothing")) {
      correction = "💡 Dica Gramatical: Em inglês evite dupla negativa. Use: 'I don't know anything'.";
    }

    if (mode === 'general') {
      if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        reply = "Hello Ruan! Great to hear your voice. What did you study today?";
      } else if (lower.includes("good morning") || lower.includes("good afternoon")) {
        reply = "Good morning! How are your English studies going today?";
      } else if (lower.includes("fine") || lower.includes("good") || lower.includes("happy") || lower.includes("great")) {
        reply = "That is awesome! I am glad you are feeling motivated. Tell me about your routine!";
      } else if (lower.includes("study") || lower.includes("english") || lower.includes("code")) {
        reply = "Software development and English go hand in hand! What is your favorite technology?";
      } else if (lower.includes("computer") || lower.includes("tech") || lower.includes("python") || lower.includes("react")) {
        reply = "That is a powerful tech stack! How long have you been studying computer science?";
      } else {
        reply = "I understand! That is very interesting. Can you tell me more about it?";
      }
    } else if (mode === 'tech') {
      if (lower.includes("api") || lower.includes("fetch") || lower.includes("rest")) {
        reply = "APIs are fundamental! How do you handle database connections and error codes in your code?";
      } else if (lower.includes("bug") || lower.includes("error") || lower.includes("fix")) {
        reply = "Debugging is a vital skill! What steps do you take when you encounter a bug in production?";
      } else if (lower.includes("database") || lower.includes("sql") || lower.includes("data")) {
        reply = "Databases store crucial state! Do you prefer relational SQL or NoSQL databases?";
      } else {
        reply = "Clear technical communication is key in engineering! How would you explain your current code project?";
      }
    } else {
      reply = correction 
        ? `I understood you! Notice the grammar detail I highlighted above.`
        : `Your sentence "${userMsg}" sounds very natural and correct! Excellent pronunciation!`;
    }

    return { reply, correction };
  };

  const handleUserSpeechInput = (text) => {
    if (!text.trim()) return;

    const userMsgObj = {
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    const { reply, correction } = generateAiResponse(text);

    const aiMsgObj = {
      sender: 'ai',
      text: reply,
      correction: correction,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsgObj, aiMsgObj]);

    if (isLiveCallRef.current) {
      speakAndListen(reply);
    } else {
      speakNaturalEnglish(reply, 0.88);
    }
  };

  const speakAndListen = (textToSpeak) => {
    setIsAiSpeaking(true);
    // Pause speech recognition while AI is speaking to prevent AI hearing itself
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch(e){}
    }

    speakNaturalEnglish(textToSpeak, 0.88);

    // Estimate duration and resume mic automatically
    const wordsCount = textToSpeak.split(' ').length;
    const estimatedDurationMs = Math.max(2000, (wordsCount / 2.5) * 1000);

    setTimeout(() => {
      setIsAiSpeaking(false);
      if (isLiveCallRef.current) {
        restartListening();
      }
    }, estimatedDurationMs);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleUserSpeechInput(text);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Top Banner & Mode */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span className="badge badge-emerald">
              <Bot size={14} /> Tutor de IA Ao Vivo em Tempo Real
            </span>
            <span className="badge badge-blue">Fala + Escuta Automática</span>
          </div>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800 }}>
            Tutor de Inglês por Voz Ao Vivo
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Inicie a chamada de voz ao vivo para conversar continuamente por áudio em inglês. A IA te escuta e responde falando!
          </p>
        </div>

        {/* Call Toggle Button */}
        <div>
          {!isLiveCall ? (
            <button className="btn btn-emerald" onClick={startLiveCall} style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', boxShadow: '0 0 20px var(--accent-emerald-glow)' }}>
              <PhoneCall size={20} /> Iniciar Chamada de Voz ao Vivo
            </button>
          ) : (
            <button className="btn" onClick={endLiveCall} style={{ background: 'var(--accent-rose)', color: '#fff', padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
              <PhoneOff size={20} /> Encerrar Chamada de Voz
            </button>
          )}
        </div>
      </div>

      {/* Live Call Active Screen Visualizer */}
      {isLiveCall && (
        <div className="card" style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(2, 132, 199, 0.2) 100%)',
          borderColor: 'var(--accent-emerald)',
          textAlign: 'center',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: isAiSpeaking ? 'var(--accent-amber)' : 'var(--accent-emerald)',
              boxShadow: isAiSpeaking ? '0 0 15px var(--accent-amber)' : '0 0 15px var(--accent-emerald)',
              animation: 'pulse 1.5s infinite'
            }}></div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
              {isAiSpeaking ? '🤖 Tutor de IA Falando...' : isListening ? '🎙️ Escutando Sua Voz em Inglês...' : 'Conectado em Chamada de Voz'}
            </span>
          </div>

          {transcript && (
            <div style={{ fontSize: '1rem', color: 'var(--accent-blue)', background: 'rgba(0, 0, 0, 0.4)', padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)' }}>
              "Ouvindo: {transcript}..."
            </div>
          )}

          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Fale naturalmente em inglês no seu microfone. A IA responderá em áudio e reabrirá a escuta em seguida!
          </p>
        </div>
      )}

      {/* Mode Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
        <button
          className={`btn ${mode === 'general' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.8rem' }}
          onClick={() => setMode('general')}
        >
          <MessageSquare size={14} /> Conversa Geral A1/A2
        </button>
        <button
          className={`btn ${mode === 'tech' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.8rem' }}
          onClick={() => setMode('tech')}
        >
          <Code2 size={14} /> Entrevista Tech TI
        </button>
        <button
          className={`btn ${mode === 'repair' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.8rem' }}
          onClick={() => setMode('repair')}
        >
          <Sparkles size={14} /> Corretor de Frases
        </button>
      </div>

      {/* Messages Log */}
      <div className="card" style={{ padding: '0', overflow: 'hidden', borderColor: 'var(--border-color-active)', display: 'flex', flexDirection: 'column', height: 'min(480px, 65vh)' }}>
        <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0, 0, 0, 0.15)' }}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem'
              }}
            >
              <div style={{
                background: msg.sender === 'user' ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : 'var(--bg-card)',
                color: '#fff',
                padding: '0.85rem 1.15rem',
                borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                border: msg.sender === 'ai' ? '1px solid var(--border-color)' : 'none',
                fontSize: '0.95rem',
                lineHeight: 1.5
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 700 }}>
                    {msg.sender === 'user' ? 'Você' : '🤖 AI Coach'}
                  </span>
                  {msg.sender === 'ai' && (
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-blue)' }} onClick={() => speakNaturalEnglish(msg.text)}>
                      <Volume2 size={15} />
                    </button>
                  )}
                </div>
                {msg.text}
              </div>

              {msg.correction && (
                <div style={{
                  background: 'var(--accent-amber-glow)',
                  border: '1px solid var(--accent-amber)',
                  color: 'var(--accent-amber)',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <AlertCircle size={14} style={{ flexShrink: 0 }} />
                  {msg.correction}
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Text Input Option */}
        <form onSubmit={handleTextSubmit} style={{ padding: '1rem', background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <input
            type="text"
            className="input-field"
            placeholder="Digite sua resposta em inglês aqui..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ borderRadius: '24px' }}
          />
          <button type="submit" className="btn btn-primary" style={{ borderRadius: '24px', padding: '0.75rem 1.25rem' }}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
