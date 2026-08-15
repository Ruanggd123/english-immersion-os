import React, { useState } from 'react';
import { BookOpen, Headphones, CheckCircle2, ArrowRight, Lightbulb, Sparkles, Volume2 } from 'lucide-react';

export default function MethodologyHelper() {
  const [activeTab, setActiveTab] = useState('reading');
  const [readingStep, setReadingStep] = useState(1);
  const [listeningStep, setListeningStep] = useState(1);

  const readingSteps = [
    {
      step: 1,
      title: "1ª Leitura (Sem Dicionário)",
      desc: "Leia o texto inteiro do início ao fim sem parar. Não consulte o dicionário mesmo que não saiba várias palavras.",
      goal: "Descobrir o assunto geral (gist) e a estrutura do texto.",
      tip: "Pergunte a si mesmo: 'Sobre o que é este texto? Quem são os personagens ou do que trata a tecnologia?'"
    },
    {
      step: 2,
      title: "2. Marcação de Desconhecidas",
      desc: "Sublinhe ou copie em um bloco de notas todas as palavras e expressões que você não compreendeu.",
      goal: "Mapear o seu 'gap' de vocabulário sem interromper a leitura fluida.",
      tip: "Não marque apenas palavras isoladas. Se houver um bloco como 'build an application', marque o bloco inteiro!"
    },
    {
      step: 3,
      title: "3. Descobrir o Significado",
      desc: "Busque os significados. Use dicionários simples (como Cambridge / Longman) ou tradutores de frases inteiras.",
      goal: "Entender a palavra DENTRO DO CONTEXTO da frase.",
      tip: "Prefira aprender frases completas. Exemplo: 'fix a bug' (corrigir um erro) em vez de apenas 'fix'."
    },
    {
      step: 4,
      title: "4. Segunda Leitura",
      desc: "Leia o texto novamente do início ao fim, agora sabendo o significado das palavras marcadas.",
      goal: "Experimentar a sensação de ler com compreensão fluida sem traduzir mentalmente.",
      tip: "Associe a palavra em inglês diretamente à imagem ou conceito mental, não à palavra em português."
    },
    {
      step: 5,
      title: "5. Explicação em Português",
      desc: "Feche o texto e explique a si mesmo em voz alta (ou por escrito) o que aconteceu no texto.",
      goal: "Garantir retenção e compreensão profunda da mensagem.",
      tip: "Resuma em 3 ou 4 frases simples."
    },
    {
      step: 6,
      title: "6. Explicação em Inglês Simples",
      desc: "Tente resumir o texto usando de 2 a 4 frases bem simples em inglês.",
      goal: "Ativar o vocabulário e treinar a produção escrita/falada.",
      tip: "Exemplo: 'This text is about a developer. He wrote code. He found a bug. He fixed the bug.'"
    }
  ];

  const listeningSteps = [
    {
      step: 1,
      title: "1ª Escuta (Sem Legenda)",
      desc: "Ouça o áudio ou assista ao vídeo com os olhos fechados ou sem olhar legendas.",
      goal: "Treinar a mente para decodificar os sons sem o apoio visual do texto.",
      tip: "Pergunte a si mesmo: 'Quem está falando? Onde eles estão? Qual o assunto principal?'"
    },
    {
      step: 2,
      title: "2ª Escuta (Com Legenda em Inglês)",
      desc: "Ouça com a legenda em INGLÊS ligada. Observe as palavras que você conhecia na leitura mas não reconheceu na fala.",
      goal: "Identificar o fenômeno da fala conectada (Connected Speech).",
      tip: "Note como 'what do you' soa como 'whatcha' ou 'going to' soa como 'gonna'."
    },
    {
      step: 3,
      title: "3ª Escuta (Sem Legenda)",
      desc: "Tire a legenda e ouça novamente a mesma parte.",
      goal: "Comprovar que as palavras antes 'invisíveis' agora são perfeitamente audíveis.",
      tip: "Você vai perceber que o seu cérebro já consegue 'separar' as palavras dentro do fluxo de áudio!"
    },
    {
      step: 4,
      title: "4ª Escuta — SHADOWING",
      desc: "Execute o áudio, pause frase por frase e REPITA EM VOZ ALTA exatamente com o mesmo ritmo e entonação.",
      goal: "Treinar a musculatura facial, entonação, velocidade e pronúncia natural.",
      tip: "Fale forte e com convicção. Não sussurre!"
    },
    {
      step: 5,
      title: "5ª Fala Solo (Sem Script)",
      desc: "Grave a sua voz explicando o assunto do áudio usando suas próprias palavras em inglês.",
      goal: "Consolidar a conversação solo e perder o medo de falar.",
      tip: "Ouça a sua própria gravação. Compare a sua pronúncia com a do áudio original."
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title */}
      <div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Assistente de Metodologias & Prática
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Siga os passos exatos para obter o máximo rendimento das suas sessões de Reading e Listening.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className={`btn ${activeTab === 'reading' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('reading')}
        >
          <BookOpen size={18} /> Método de Reading (6 Passos)
        </button>
        <button
          className={`btn ${activeTab === 'listening' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('listening')}
        >
          <Headphones size={18} /> Método de Listening & Shadowing (5 Passos)
        </button>
      </div>

      {/* Reading Helper */}
      {activeTab === 'reading' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Step Progress Tracker */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {readingSteps.map(s => (
              <button
                key={s.step}
                onClick={() => setReadingStep(s.step)}
                className={`btn ${readingStep === s.step ? 'btn-emerald' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', whiteSpace: 'nowrap' }}
              >
                Passo {s.step}
              </button>
            ))}
          </div>

          {/* Active Reading Step Card */}
          {(() => {
            const current = readingSteps.find(s => s.step === readingStep);
            return (
              <div className="card" style={{ borderColor: 'var(--accent-emerald-glow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-emerald">PASSO {current.step} DE 6</span>
                  <BookOpen size={24} color="var(--accent-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {current.desc}
                </p>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    🎯 Objetivo deste passo: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{current.goal}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-amber)', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Lightbulb size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Dica prática: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{current.tip}</span></span>
                  </div>
                </div>

                {/* Navigation inside steps */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button 
                    className="btn btn-secondary" 
                    disabled={readingStep === 1}
                    onClick={() => setReadingStep(prev => prev - 1)}
                  >
                    Passo Anterior
                  </button>
                  <button 
                    className="btn btn-emerald" 
                    disabled={readingStep === 6}
                    onClick={() => setReadingStep(prev => prev + 1)}
                  >
                    Próximo Passo <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Listening Helper */}
      {activeTab === 'listening' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Step Progress Tracker */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {listeningSteps.map(s => (
              <button
                key={s.step}
                onClick={() => setListeningStep(s.step)}
                className={`btn ${listeningStep === s.step ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', whiteSpace: 'nowrap' }}
              >
                Passo {s.step}
              </button>
            ))}
          </div>

          {/* Active Listening Step Card */}
          {(() => {
            const current = listeningSteps.find(s => s.step === listeningStep);
            return (
              <div className="card" style={{ borderColor: 'var(--accent-blue-glow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-blue">PASSO {current.step} DE 5</span>
                  <Headphones size={24} color="var(--accent-blue)" />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {current.desc}
                </p>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    🎯 Objetivo deste passo: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{current.goal}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-amber)', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Lightbulb size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Dica prática: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{current.tip}</span></span>
                  </div>
                </div>

                {/* Navigation inside steps */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button 
                    className="btn btn-secondary" 
                    disabled={listeningStep === 1}
                    onClick={() => setListeningStep(prev => prev - 1)}
                  >
                    Passo Anterior
                  </button>
                  <button 
                    className="btn btn-primary" 
                    disabled={listeningStep === 5}
                    onClick={() => setListeningStep(prev => prev + 1)}
                  >
                    Próximo Passo <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
