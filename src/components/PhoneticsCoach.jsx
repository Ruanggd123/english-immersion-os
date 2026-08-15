import React, { useState } from 'react';
import { Volume2, Mic, Sparkles, CheckCircle2, BookOpen, ArrowRight, HelpCircle, Flame, Layers } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

export default function PhoneticsCoach() {
  const [activeCategory, setActiveCategory] = useState('minimal'); // 'minimal' | 'vowels' | 'consonants' | 'connected'
  const [selectedPair, setSelectedPair] = useState(0);

  const handleSpeak = (text) => {
    speakNaturalEnglish(text, 0.82); // Slightly slower for crisp phoneme learning
  };

  // 1. Minimal Pairs Database (Pares Mínimos)
  const minimalPairs = [
    {
      title: "Fonema /iː/ (Longo) vs /ɪ/ (Curto)",
      explanation: "/iː/ tem som de 'ii' esticado abrindo um sorriso. /ɪ/ é um som curto e relaxado entre 'i' e 'e'.",
      wordA: { en: "sheep", ipa: "/ʃiːp/", pt: "ovelha" },
      wordB: { en: "ship", ipa: "/ʃɪp/", pt: "navio" },
      sentenceA: "The sheep is white.",
      sentenceB: "The ship is in the ocean."
    },
    {
      title: "Fonema /θ/ (Semicondutor) vs /s/ ou /f/",
      explanation: "O som de TH (/θ/): coloque a ponta da língua entre os dentes e solte o ar. Não é 's' e nem 'f'!",
      wordA: { en: "think", ipa: "/θɪŋk/", pt: "pensar" },
      wordB: { en: "sink", ipa: "/sɪŋk/", pt: "pia / afundar" },
      sentenceA: "I think this code is good.",
      sentenceB: "The boat will sink."
    },
    {
      title: "Fonema /æ/ (A aberto de gato) vs /ʌ/ (A fechado de guarda-chuva)",
      explanation: "/æ/ é um 'a' bem aberto abrindo a boca. /ʌ/ é um 'â' gutural curto.",
      wordA: { en: "cat", ipa: "/kæt/", pt: "gato" },
      wordB: { en: "cut", ipa: "/kʌt/", pt: "cortar" },
      sentenceA: "The cat is on the table.",
      sentenceB: "Please cut the paper."
    },
    {
      title: "Fonema /w/ vs /v/",
      explanation: "O 'W' (/w/) faz biquinho de beijo ('uater', 'uork'). O 'V' (/v/) encosta o dente no lábio inferior e vibra ('very').",
      wordA: { en: "wet", ipa: "/wet/", pt: "molhado" },
      wordB: { en: "vet", ipa: "/vet/", pt: "veterinário" },
      sentenceA: "The towel is wet.",
      sentenceB: "Take the dog to the vet."
    },
    {
      title: "Flap T (O som do T americano entre vogais)",
      explanation: "Em inglês americano, quando o T fica entre vogais, ele soa como o 'r' brando de 'arara' em português.",
      wordA: { en: "water", ipa: "/ˈwɑː.t̬ɚ/", pt: "água (soa como 'uá-der')" },
      wordB: { en: "computer", ipa: "/kəmˈpjuː.t̬ɚ/", pt: "computador (soa como 'com-piú-der')" },
      sentenceA: "Drink a glass of water.",
      sentenceB: "My computer is very fast."
    }
  ];

  // 2. Vowels & Consonants Reference
  const phonemes = [
    { symbol: "/iː/", example: "see", ipa: "/siː/", pt: "ver (som de i longo)" },
    { symbol: "/ɪ/", example: "bit", ipa: "/bɪt/", pt: "pedaço (som de i curto)" },
    { symbol: "/æ/", example: "bad", ipa: "/bæd/", pt: "ruim (a aberto)" },
    { symbol: "/ɑː/", example: "car", ipa: "/kɑːr/", pt: "carro (a profundo)" },
    { symbol: "/θ/", example: "thanks", ipa: "/θæŋks/", pt: "obrigado (língua nos dentes sem som)" },
    { symbol: "/ð/", example: "this", ipa: "/ðɪs/", pt: "este (língua nos dentes com vibração)" },
    { symbol: "/ʃ/", example: "she", ipa: "/ʃiː/", pt: "ela (som de x)" },
    { symbol: "/tʃ/", example: "code / check", ipa: "/tʃek/", pt: "checar (som de tch)" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span className="badge badge-emerald">
            <Mic size={14} /> Treinador de Pronúncia & Fonética
          </span>
        </div>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Treinador de Fonemas & Pronúncia Nativa
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Entenda os sons exatos do inglês (IPA), os fonemas difíceis e treine seus ouvidos para ouvir a diferença real entre palavras parecidas!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
        <button
          className={`btn ${activeCategory === 'minimal' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => setActiveCategory('minimal')}
        >
          <Sparkles size={16} /> Pares Mínimos (Sons Parecidos)
        </button>
        <button
          className={`btn ${activeCategory === 'vowels' ? 'btn-emerald' : 'btn-secondary'}`}
          onClick={() => setActiveCategory('vowels')}
        >
          <BookOpen size={16} /> Tabela de Fonemas IPA
        </button>
      </div>

      {/* 1. Minimal Pairs Trainer */}
      {activeCategory === 'minimal' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Pair Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
            {minimalPairs.map((pair, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPair(idx)}
                className={`btn ${selectedPair === idx ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}
              >
                Par {idx + 1}: {pair.wordA.en} vs {pair.wordB.en}
              </button>
            ))}
          </div>

          {/* Active Minimal Pair Card */}
          {(() => {
            const current = minimalPairs[selectedPair];
            return (
              <div className="card" style={{ borderColor: 'var(--accent-emerald)', padding: '2rem' }}>
                <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                  TREINO DE FONEMA {selectedPair + 1} DE {minimalPairs.length}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, background: 'rgba(0, 0, 0, 0.3)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  💡 <strong>Segredo da Pronúncia:</strong> {current.explanation}
                </p>

                {/* Comparison Columns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  {/* Word A */}
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--accent-blue)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
                      {current.wordA.en}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      IPA: {current.wordA.ipa} • ({current.wordA.pt})
                    </span>
                    <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => handleSpeak(current.wordA.en)}>
                      <Volume2 size={16} /> Ouvir Pronúncia
                    </button>

                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                      Exemplo: "{current.sentenceA}"
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.4rem' }} onClick={() => handleSpeak(current.sentenceA)}>
                        <Volume2 size={14} color="var(--accent-blue)" />
                      </button>
                    </div>
                  </div>

                  {/* Word B */}
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--accent-emerald)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                      {current.wordB.en}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      IPA: {current.wordB.ipa} • ({current.wordB.pt})
                    </span>
                    <button className="btn btn-emerald" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => handleSpeak(current.wordB.en)}>
                      <Volume2 size={16} /> Ouvir Pronúncia
                    </button>

                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                      Exemplo: "{current.sentenceB}"
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.4rem' }} onClick={() => handleSpeak(current.sentenceB)}>
                        <Volume2 size={14} color="var(--accent-emerald)" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 2. Phoneme Reference List */}
      {activeCategory === 'vowels' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {phonemes.map((p, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                  {p.symbol}
                </span>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {p.example} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({p.ipa})</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {p.pt}
                </div>
              </div>
              <button className="btn btn-secondary" style={{ padding: '0.35rem', borderRadius: '50%' }} onClick={() => handleSpeak(p.example)}>
                <Volume2 size={16} color="var(--accent-blue)" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
