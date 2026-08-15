import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Mic, MicOff, Volume2 } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
const ignoredWords = new Set(['a', 'an', 'the', 'i', 'am', 'is', 'are', 'to', 'of', 'and', 'at', 'in', 'on']);

export default function SpeakingVerifier({ targets = [] }) {
  const safeTargets = targets.length ? targets : ['I am ready to practice English.'];
  const [selected, setSelected] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);
  const target = safeTargets[selected] || safeTargets[0];

  const score = useMemo(() => {
    const wanted = normalize(target).split(' ').filter(word => word && !ignoredWords.has(word));
    const heard = new Set(normalize(transcript).split(' '));
    const found = wanted.filter(word => heard.has(word));
    return wanted.length ? Math.round((found.length / wanted.length) * 100) : 0;
  }, [target, transcript]);

  useEffect(() => () => {
    try { recognitionRef.current?.stop(); } catch (_) {}
  }, []);

  const startListening = () => {
    setError('');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Seu navegador não oferece reconhecimento de voz. Use Chrome ou Edge e permita o microfone.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      let text = '';
      for (let i = event.resultIndex; i < event.results.length; i++) text += event.results[i][0].transcript;
      setTranscript(text);
    };
    recognition.onerror = (event) => {
      setError(event.error === 'not-allowed' ? 'Permita o acesso ao microfone para praticar.' : 'Não foi possível entender sua fala. Tente mais devagar e perto do microfone.');
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    try { recognitionRef.current?.stop(); } catch (_) {}
  };

  return (
    <div style={{ background: 'var(--accent-emerald-glow)', border: '1px solid var(--accent-emerald)', borderRadius: 'var(--radius-sm)', padding: '1rem', gridColumn: '1 / -1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <h5 style={{ fontSize: '0.95rem', color: 'var(--accent-emerald)' }}><Mic size={17} /> Verificação guiada de fala</h5>
        <span className="badge badge-emerald">Inteligibilidade: {transcript ? `${score}%` : 'aguardando'}</span>
      </div>
      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '0.45rem 0 0.75rem' }}>Ouça, repita sem ler e veja o que o reconhecimento de voz entendeu. Ele mede se sua fala foi compreendida — não é uma nota perfeita de sotaque.</p>
      <select className="input-field" value={selected} onChange={(event) => { setSelected(Number(event.target.value)); setTranscript(''); }} style={{ marginBottom: '0.7rem', width: '100%' }}>
        {safeTargets.map((phrase, index) => <option value={index} key={phrase}>{phrase}</option>)}
      </select>
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => speakNaturalEnglish(target, 0.82)}><Volume2 size={16} /> Ouvir modelo</button>
        <button className={`btn ${isListening ? 'btn-amber' : 'btn-emerald'}`} onClick={isListening ? stopListening : startListening}>{isListening ? <><MicOff size={16} /> Parar</> : <><Mic size={16} /> Falar e verificar</>}</button>
      </div>
      {transcript && <p style={{ marginTop: '0.75rem', padding: '0.7rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}><CheckCircle2 size={15} color="var(--accent-emerald)" /> O navegador entendeu: <strong>“{transcript}”</strong></p>}
      {error && <p style={{ marginTop: '0.7rem', color: 'var(--accent-rose)', fontSize: '0.84rem' }}>{error}</p>}
    </div>
  );
}
