import React, { useState } from 'react';
import { BookOpen, FileText, CheckCircle2, Volume2, Search, Filter, Sparkles, Code2, Award, ChevronRight } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

export default function LearningLibrary() {
  const [activeTab, setActiveTab] = useState('texts');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showTranslationMap, setShowTranslationMap] = useState({});

  const handleSpeak = (text) => {
    speakNaturalEnglish(text, 0.88);
  };

  const toggleTranslation = (id) => {
    setShowTranslationMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. Graded Reading Texts Database
  const libraryTexts = [
    {
      id: 1,
      level: 'A1',
      title: "My Daily Routine as a Student",
      category: "General",
      text: "Every morning, I wake up at 7:00 AM. I have a cup of coffee and read English articles. At 8:30 AM, I study grammar rules. I practice listening in the afternoon. In the evening, I write in my journal. My routine is consistent and productive.",
      translation: "Toda manhã, eu me levanto às 7h. Eu tomo uma xícara de café e leio artigos em inglês. Às 8h30, estudo regras de gramática. Prático listening à tarde. À noite, escrevo no meu diário. Minha rotina é consistente e produtiva."
    },
    {
      id: 2,
      level: 'A1',
      title: "Introduction to Computers",
      category: "Tech",
      text: "A computer is an electronic machine. It receives input data from the user. It processes the data using the CPU. Then it displays the output on the screen or stores it in a database table.",
      translation: "Um computador é uma máquina eletrônica. Ele recebe dados de entrada do usuário. Ele processa os dados usando a CPU. Em seguida, exibe a saída na tela ou armazena em uma tabela de banco de dados."
    },
    {
      id: 3,
      level: 'A2',
      title: "How Developers Solve Bugs",
      category: "Tech",
      text: "When a developer finds a bug in production, they do not panic. First, they read the error logs to locate line numbers. Second, they isolate the problem in a local environment. Finally, they write a fix, run unit tests, and submit a pull request.",
      translation: "Quando um desenvolvedor encontra um bug em produção, ele não entra em pânico. Primeiro, lê os logs de erro para localizar a linha. Segundo, isola o problema em ambiente local. Por fim, escreve uma correção, roda testes unitários e envia um pull request."
    },
    {
      id: 4,
      level: 'A2',
      title: "The Power of Spaced Repetition",
      category: "Learning",
      text: "Human memory is naturally fragile. Without revision, we forget most of what we learn within twenty-four hours. Spaced repetition solves this by scheduling reviews just before your brain forgets. This technique locks vocabulary into long-term memory.",
      translation: "A memória humana é naturalmente frágil. Sem revisão, esquecemos a maior parte do que aprendemos em 24h. A repetição espaçada resolve isso agendando revisões antes do cérebro esquecer, fixando o vocabulário na memória de longo prazo."
    },
    {
      id: 5,
      level: 'B1',
      title: "Modern Web Architecture & APIs",
      category: "Tech",
      text: "Modern web applications rely on decoupled architectures. The frontend handles user interface interactions, while the backend API processes business logic. Data travels securely via JSON objects over HTTPS protocols, enabling scalability and high concurrency.",
      translation: "Aplicações web modernas dependem de arquiteturas desacopladas. O frontend cuida da interface do usuário, enquanto a API backend processa a lógica. Os dados viajam de forma segura via objetos JSON sobre HTTPS, permitindo escalabilidade e alta concorrência."
    }
  ];

  // 2. Complete Grammar Manual Database
  const grammarTopics = [
    {
      id: 1,
      module: "Módulo 1 — Fundação",
      title: "Verbo To Be (Presente)",
      formula: "Subject + AM / IS / ARE + Complement",
      explanation: "Usado para expressar estado, identidade, idade, localização ou profissão.",
      examples: [
        { en: "I am a software engineer.", pt: "Eu sou um engenheiro de software." },
        { en: "The server is online.", pt: "O servidor está online." },
        { en: "They are ready for the test.", pt: "Eles estão prontos para o teste." }
      ]
    },
    {
      id: 2,
      module: "Módulo 1 — Fundação",
      title: "Artigos A, AN e THE",
      formula: "A + Consoante | AN + Vogal | THE + Específico",
      explanation: "A/AN são artigos indefinidos (um/uma). THE é o artigo definido (o/a/os/as).",
      examples: [
        { en: "I use a laptop.", pt: "Eu uso um notebook." },
        { en: "She found an error.", pt: "Ela encontrou um erro." },
        { en: "The API is responding fast.", pt: "A API está respondendo rápido." }
      ]
    },
    {
      id: 3,
      module: "Módulo 2 — Frases & Rotina",
      title: "Present Simple (Hábitos & Fatos)",
      formula: "I/You/We/They + Verbo | He/She/It + Verbo(-s/-es)",
      explanation: "Descreve rotina, ações habituais e verdades absolutas de código/sistemas.",
      examples: [
        { en: "I write code every day.", pt: "Eu escrevo código todos os dias." },
        { en: "He fixes bugs quickly.", pt: "Ele corrige erros rapidamente." },
        { en: "Do you study English?", pt: "Você estuda inglês?" }
      ]
    },
    {
      id: 4,
      module: "Módulo 3 — Ações em Progresso",
      title: "Present Continuous (Ações Agora)",
      formula: "Subject + AM/IS/ARE + Verbo(-ING)",
      explanation: "Descreve o que está acontecendo exatamente no momento da fala.",
      examples: [
        { en: "The code is compiling now.", pt: "O código está compilando agora." },
        { en: "We are building a new feature.", pt: "Estamos construindo uma nova funcionalidade." }
      ]
    },
    {
      id: 5,
      module: "Módulo 4 — Passado",
      title: "Past Simple (Ações Concluídas)",
      formula: "Regulares: Verbo + -ED | Irregulares: Lista de Passado",
      explanation: "Usado para ações que começaram e terminaram no passado.",
      examples: [
        { en: "I compiled the project yesterday.", pt: "Eu compilei o projeto ontem." },
        { en: "She built a fullstack application.", pt: "Ela construiu um aplicativo fullstack." }
      ]
    }
  ];

  const filteredTexts = libraryTexts.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || t.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span className="badge badge-emerald">
            <BookOpen size={14} /> Biblioteca Completa de Aprendizagem
          </span>
        </div>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Acervo de Textos, Manual Gramatical & Áudios
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Todos os materiais necessários para o seu estudo diário organizados em um só lugar.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className={`btn ${activeTab === 'texts' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('texts')}
        >
          <FileText size={16} /> Biblioteca de Leitura Graduada
        </button>
        <button
          className={`btn ${activeTab === 'grammar' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('grammar')}
        >
          <BookOpen size={16} /> Manual de Gramática A a Z
        </button>
      </div>

      {/* Tab 1: Graded Reading Library */}
      {activeTab === 'texts' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Filters */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              className="input-field"
              placeholder="Pesquisar textos por palavra chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ flex: 1, minWidth: '260px' }}
            />

            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button className={`btn ${selectedLevel === 'all' ? 'btn-emerald' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedLevel('all')}>
                Todos os Níveis
              </button>
              <button className={`btn ${selectedLevel === 'A1' ? 'btn-emerald' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedLevel('A1')}>
                Nível A1 (Iniciante)
              </button>
              <button className={`btn ${selectedLevel === 'A2' ? 'btn-emerald' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedLevel('A2')}>
                Nível A2 (Elementar)
              </button>
              <button className={`btn ${selectedLevel === 'B1' ? 'btn-emerald' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedLevel('B1')}>
                Nível B1 (Intermediário / Tech)
              </button>
            </div>
          </div>

          {/* Text Cards Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filteredTexts.map(item => (
              <div key={item.id} className="card" style={{ borderColor: 'var(--border-color-active)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge badge-emerald">{item.level}</span>
                    <span className="badge badge-blue">{item.category}</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{item.title}</h3>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }} onClick={() => handleSpeak(item.text)}>
                      <Volume2 size={14} /> Reproduzir Áudio
                    </button>
                    <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }} onClick={() => toggleTranslation(item.id)}>
                      {showTranslationMap[item.id] ? "Ocultar Tradução" : "Mostrar Tradução PT"}
                    </button>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: '0.75rem'
                }}>
                  "{item.text}"
                </div>

                {showTranslationMap[item.id] && (
                  <div style={{
                    background: 'var(--accent-emerald-glow)',
                    border: '1px solid var(--accent-emerald)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <strong>Tradução em Português:</strong> "{item.translation}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Full Grammar Manual */}
      {activeTab === 'grammar' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {grammarTopics.map(g => (
            <div key={g.id} className="card" style={{ borderColor: 'var(--accent-amber-glow)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge badge-amber">{g.module}</span>
                <BookOpen size={18} color="var(--accent-amber)" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem' }}>{g.title}</h3>

              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-blue)',
                marginBottom: '0.75rem'
              }}>
                📐 Fórmulas: {g.formula}
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {g.explanation}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Exemplos em uso:</strong>
                {g.examples.map((ex, i) => (
                  <div key={i} style={{
                    padding: '0.6rem 0.85rem',
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontSize: '0.9rem' }}>{ex.en}</span>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{ex.pt}</div>
                    </div>
                    <button className="btn btn-secondary" style={{ padding: '0.25rem' }} onClick={() => handleSpeak(ex.en)}>
                      <Volume2 size={14} color="var(--accent-blue)" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
