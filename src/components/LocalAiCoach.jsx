import React, { useState, useEffect, useRef } from 'react';
import { Bot, Mic, MicOff, Send, Volume2, Sparkles, AlertCircle, CheckCircle2, RefreshCw, HelpCircle, Lightbulb, Languages, BookOpen, Layers, PhoneCall, PhoneOff } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

// Comprehensive dictionary for instant hover/click translation
const wordDictionary = {
  "hello": { pt: "olá", pos: "saudação" },
  "ruan": { pt: "Ruan (seu nome)", pos: "nome próprio" },
  "i": { pt: "eu", pos: "pronome" },
  "am": { pt: "sou / estou", pos: "verbo to be" },
  "your": { pt: "seu / sua", pos: "possessivo" },
  "live": { pt: "ao vivo", pos: "adjetivo" },
  "ai": { pt: "IA (Inteligência Artificial)", pos: "substantivo" },
  "coach": { pt: "tutor / treinador", pos: "substantivo" },
  "what": { pt: "qual / o que", pos: "pronome de pergunta" },
  "technology": { pt: "tecnologia", pos: "substantivo" },
  "do": { pt: "verbo auxiliar de pergunta", pos: "auxiliar" },
  "you": { pt: "você", pos: "pronome" },
  "like": { pt: "gostar", pos: "verbo" },
  "software": { pt: "programa / software", pos: "substantivo" },
  "development": { pt: "desenvolvimento", pos: "substantivo" },
  "and": { pt: "e", pos: "conjunção" },
  "english": { pt: "inglês", pos: "substantivo" },
  "go": { pt: "ir / caminhar", pos: "verbo" },
  "hand": { pt: "mão", pos: "substantivo" },
  "in": { pt: "em / dentro", pos: "preposição" },
  "favorite": { pt: "favorito / preferido", pos: "adjetivo" },
  "awesome": { pt: "incrível / sensacional", pos: "adjetivo" },
  "computer": { pt: "computador", pos: "substantivo" },
  "science": { pt: "ciência", pos: "substantivo" },
  "engineering": { pt: "engenharia", pos: "substantivo" },
  "are": { pt: "são / estão", pos: "verbo to be" },
  "great": { pt: "ótimo / grande", pos: "adjetivo" },
  "fields": { pt: "áreas / campos de atuação", pos: "substantivo" },
  "write": { pt: "escrever", pos: "verbo" },
  "code": { pt: "código / programar", pos: "substantivo/verbo" },
  "every": { pt: "todo / cada", pos: "adjetivo" },
  "day": { pt: "dia", pos: "substantivo" },
  "learning": { pt: "aprendendo", pos: "verbo gerúndio" },
  "step": { pt: "passo", pos: "substantivo" },
  "by": { pt: "por / através de", pos: "preposição" },
  "is": { pt: "é / está", pos: "verbo to be" },
  "main": { pt: "principal", pos: "adjetivo" },
  "goal": { pt: "meta / objetivo", pos: "substantivo" }
};

export default function LocalAiCoach() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello Ruan! I am your Live AI Coach. What technology do you like?",
      ptTranslation: "Olá Ruan! Eu sou seu Tutor de IA Ao Vivo. De qual tecnologia você gosta?",
      suggestions: [
        { en: "I like Python and web development.", pt: "Eu gosto de Python e desenvolvimento web." },
        { en: "I use JavaScript on my computer.", pt: "Eu uso JavaScript no meu computador." },
        { en: "I am learning software engineering.", pt: "Estou aprendendo engenharia de software." }
      ]
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLiveCall, setIsLiveCall] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [activeWordHover, setActiveWordHover] = useState(null);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      setSpeechSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        handleSendMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        // If in Continuous Live Call mode, automatically restart listening after AI finishes!
        if (isLiveCall) {
          setTimeout(() => {
            try {
              recognitionRef.current?.start();
              setIsListening(true);
            } catch (e) {
              console.log("Recognition restart note:", e);
            }
          }, 1500);
        }
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }
  }, [isLiveCall]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleLiveCall = () => {
    if (isLiveCall) {
      setIsLiveCall(false);
      setIsListening(false);
      recognitionRef.current?.stop();
    } else {
      setIsLiveCall(true);
      setIsListening(true);
      speakNaturalEnglish("Hello Ruan! Live call active. Speak to me naturally in English!", 0.88);
      setTimeout(() => {
        try {
          recognitionRef.current?.start();
        } catch (e) {}
      }, 3500);
    }
  };

  const toggleMic = () => {
    if (!speechSupported) return;
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const handleSendMessage = (textToSend = inputMessage) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    setTimeout(() => {
      generateAiResponse(textToSend);
    }, 600);
  };

  const generateAiResponse = (userText) => {
    const lower = userText.toLowerCase();
    let replyEn = "Software development and English go hand in hand! What is your favorite technology?";
    let replyPt = "Desenvolvimento de software e inglês andam de mãos dadas! Qual é a sua tecnologia favorita?";
    let suggestions = [
      { en: "I like Python and web development.", pt: "Eu gosto de Python e dev web." },
      { en: "I use JavaScript on my computer.", pt: "Eu uso JavaScript no meu computador." },
      { en: "I am learning software engineering.", pt: "Estou aprendendo engenharia de software." }
    ];

    if (lower.includes("python") || lower.includes("code") || lower.includes("computer") || lower.includes("javascript")) {
      replyEn = "Awesome! Computer science and software engineering are great fields. Do you write code every day?";
      replyPt = "Incrível! Ciência da computação e engenharia de software são ótimas áreas. Você escreve código todos os dias?";
      suggestions = [
        { en: "Yes, I code every day.", pt: "Sim, eu programo todos os dias." },
        { en: "I am building a new project.", pt: "Estou construindo um projeto novo." },
        { en: "I want to work in tech.", pt: "Quero trabalhar na área de tecnologia." }
      ];
    } else if (lower.includes("english") || lower.includes("study") || lower.includes("hello") || lower.includes("hi")) {
      replyEn = "Learning English step by step is awesome! What is your main goal?";
      replyPt = "Aprender inglês passo a passo é incrível! Qual é o seu principal objetivo?";
      suggestions = [
        { en: "My goal is a tech job.", pt: "Meu objetivo é um emprego em tecnologia." },
        { en: "I want to speak fluently.", pt: "Quero falar com fluência." },
        { en: "I study 4 hours a day.", pt: "Estudo 4 horas por dia." }
      ];
    }

    const aiMsg = {
      id: Date.now() + 1,
      sender: 'ai',
      text: replyEn,
      ptTranslation: replyPt,
      suggestions: suggestions
    };

    setMessages(prev => [...prev, aiMsg]);
    speakNaturalEnglish(replyEn, 0.88);
  };

  const handleUseSuggestion = (sugEn) => {
    setInputMessage(sugEn);
    handleSendMessage(sugEn);
  };

  // Helper to render sentence with interactive clickable/hoverable words
  const renderInteractiveText = (text) => {
    const words = text.split(" ");
    return words.map((w, idx) => {
      const cleanWord = w.toLowerCase().replace(/[^a-z]/g, "");
      const dictInfo = wordDictionary[cleanWord];

      return (
        <span
          key={idx}
          onClick={() => {
            if (dictInfo) {
              setActiveWordHover({ word: cleanWord, info: dictInfo });
              speakNaturalEnglish(cleanWord, 0.82);
            }
          }}
          onMouseEnter={() => {
            if (dictInfo) setActiveWordHover({ word: cleanWord, info: dictInfo });
          }}
          style={{
            cursor: dictInfo ? 'pointer' : 'default',
            padding: '0 2px',
            borderRadius: '4px',
            textDecoration: dictInfo ? 'underline' : 'none',
            textDecorationColor: 'var(--accent-blue)',
            textUnderlineOffset: '3px',
            color: dictInfo ? 'var(--text-primary)' : 'var(--text-primary)',
            transition: 'all 0.15s ease'
          }}
          title={dictInfo ? `Clique ou passe o mouse: "${cleanWord}" = ${dictInfo.pt}` : undefined}
        >
          {w}{" "}
        </span>
      );
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 📞 LIVE VOICE CALL CONTROL BANNER */}
      <div style={{
        background: isLiveCall 
          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(2, 132, 199, 0.25) 100%)' 
          : 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(192, 132, 252, 0.18) 100%)',
        border: isLiveCall ? '2px solid var(--accent-emerald)' : '1px solid var(--accent-blue)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span className={`badge ${isLiveCall ? 'badge-emerald' : 'badge-blue'}`}>
              <PhoneCall size={14} /> {isLiveCall ? "📞 Chamada de Voz Ao Vivo Ativa (Full Duplex)" : "🤖 Tutor de IA por Voz & Texto"}
            </span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Tutor de Inglês por Voz Ao Vivo</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {isLiveCall 
              ? "A IA está te escutando continuamente pelo microfone! Fale em inglês naturalmente." 
              : "Clique em 'Iniciar Chamada de Voz ao Vivo' para conversar continuamente sem mãos!"}
          </p>
        </div>

        <button 
          className={`btn ${isLiveCall ? 'btn-emerald' : 'btn-emerald'}`} 
          onClick={toggleLiveCall}
          style={{ padding: '0.8rem 1.6rem', fontSize: '1rem', boxShadow: isLiveCall ? '0 0 20px var(--accent-emerald-glow)' : 'none' }}
        >
          {isLiveCall ? <><PhoneOff size={18} /> Encerrar Chamada</> : <><PhoneCall size={18} /> Iniciar Chamada de Voz ao Vivo</>}
        </button>
      </div>

      {/* 🔍 INSTANT WORD DICTIONARY POPOVER BAR (Hover or Click Word Translator) */}
      {activeWordHover && (
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--accent-blue)',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-blue">🔍 Dicionário Instantâneo</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
              "{activeWordHover.word}"
            </span>
            <span style={{ fontSize: '1rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
              = {activeWordHover.info.pt}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              ({activeWordHover.info.pos})
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }} onClick={() => speakNaturalEnglish(activeWordHover.word, 0.82)}>
              <Volume2 size={14} /> Ouvir Pronúncia
            </button>
            <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }} onClick={() => setActiveWordHover(null)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CHAT MESSAGES CONTAINER */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        minHeight: '400px',
        maxHeight: '600px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem'
      }}>
        {messages.map(msg => (
          <div key={msg.id} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 700 }}>
              {msg.sender === 'user' ? 'Você' : '🤖 Tutor de IA'}
            </span>

            <div style={{
              maxWidth: '85%',
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-lg)',
              background: msg.sender === 'user' 
                ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                : 'rgba(255, 255, 255, 0.06)',
              border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
              color: '#ffffff',
              fontSize: '0.95rem',
              lineHeight: 1.6
            }}>
              {/* Interactive Text with Hover/Click Translation */}
              <div style={{ fontWeight: 600 }}>
                {msg.sender === 'ai' ? renderInteractiveText(msg.text) : msg.text}
                {msg.sender === 'ai' && (
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', marginLeft: '0.4rem' }} onClick={() => speakNaturalEnglish(msg.text, 0.88)}>
                    <Volume2 size={16} color="var(--accent-blue)" />
                  </button>
                )}
              </div>

              {/* Translation Subtitle for AI */}
              {msg.sender === 'ai' && msg.ptTranslation && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: 'var(--accent-blue)' }}>
                  💬 <strong>Tradução em PT:</strong> "{msg.ptTranslation}"
                </div>
              )}
            </div>

            {/* 💡 RESPONSE SUGGESTIONS */}
            {msg.sender === 'ai' && msg.suggestions && (
              <div style={{ marginTop: '0.75rem', width: '100%', maxWidth: '85%' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                  💡 Dica do que responder (Clique para usar):
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {msg.suggestions.map((sug, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleUseSuggestion(sug.en)}
                      className="btn btn-secondary"
                      style={{
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        fontSize: '0.82rem',
                        padding: '0.5rem 0.8rem',
                        borderColor: 'var(--accent-emerald-glow)',
                        background: 'rgba(16, 185, 129, 0.06)'
                      }}
                    >
                      <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>"{sug.en}"</span>
                      <span style={{ color: 'var(--text-muted)', marginLeft: '0.4rem', fontSize: '0.75rem' }}>({sug.pt})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT CONTROLS */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button
          className={`btn ${isListening ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={toggleMic}
          style={{ padding: '0.8rem', borderRadius: '50%', width: '48px', height: '48px', flexShrink: 0 }}
          title={isListening ? "Escutando sua voz..." : "Falar pelo Microfone"}
        >
          <Mic size={20} color={isListening ? "#fff" : "var(--accent-blue)"} />
        </button>

        <input
          type="text"
          className="input-field"
          placeholder="Digite, use a chamada ao vivo ou escolha uma sugestão acima..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          style={{ flex: 1, padding: '0.85rem 1.25rem', fontSize: '0.95rem' }}
        />

        <button className="btn btn-primary" onClick={() => handleSendMessage()} style={{ padding: '0.85rem 1.5rem' }}>
          <Send size={18} /> Enviar
        </button>
      </div>
    </div>
  );
}
