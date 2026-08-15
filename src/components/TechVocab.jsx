import React, { useState } from 'react';
import { Code2, Volume2, Search, Sparkles, Terminal, Cpu, Database, Network } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

export default function TechVocab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const chunks = [
    // Software Dev
    { id: 1, category: 'dev', chunk: 'write a function', translation: 'escrever uma função', example: 'I need to write a function to calculate the average speed.', level: 'A1' },
    { id: 2, category: 'dev', chunk: 'fix a bug', translation: 'corrigir um erro/bug', example: 'The developer spent two hours fixing a bug in the production code.', level: 'A1' },
    { id: 3, category: 'dev', chunk: 'deploy an application', translation: 'implantar/publicar uma aplicação', example: 'We will deploy the application to AWS tomorrow morning.', level: 'A2' },
    { id: 4, category: 'dev', chunk: 'run unit tests', translation: 'executar testes unitários', example: 'Always run unit tests before pushing your code to Git.', level: 'A2' },
    { id: 5, category: 'dev', chunk: 'pull request / code review', translation: 'solicitação de alteração / revisão de código', example: 'Can you check my pull request on GitHub?', level: 'A2' },
    
    // Databases
    { id: 6, category: 'db', chunk: 'fetch data from database', translation: 'buscar dados do banco de dados', example: 'The API fetches data from the database using SQL queries.', level: 'A2' },
    { id: 7, category: 'db', chunk: 'database schema', translation: 'esquema/estrutura do banco', example: 'We updated the database schema to store user profiles.', level: 'A2' },
    { id: 8, category: 'db', chunk: 'store user credentials', translation: 'armazenar credenciais do usuário', example: 'Never store plain text passwords in your database.', level: 'A1' },
    
    // Networks & Systems
    { id: 9, category: 'network', chunk: 'server response time', translation: 'tempo de resposta do servidor', example: 'Low server response time is essential for high performance.', level: 'A2' },
    { id: 10, category: 'network', chunk: 'encrypt network traffic', translation: 'criptografar o tráfego de rede', example: 'HTTPS is used to encrypt network traffic between client and server.', level: 'B1' },
    { id: 11, category: 'network', chunk: 'handle high concurrency', translation: 'lidar com alta concorrência de acessos', example: 'The architecture is designed to handle high concurrency.', level: 'B1' },

    // Hardware & Computer Science
    { id: 12, category: 'cs', chunk: 'memory allocation', translation: 'alocação de memória', example: 'C++ gives developers direct control over memory allocation.', level: 'A2' },
    { id: 13, category: 'cs', chunk: 'time complexity (Big O)', translation: 'complexidade de tempo de execução', example: 'This sorting algorithm has an O(n log n) time complexity.', level: 'B1' },
    { id: 14, category: 'cs', chunk: 'compiler error', translation: 'erro de compilação', example: 'The compiler error was caused by a missing semicolon.', level: 'A1' }
  ];

  const handleSpeak = (text) => {
    speakNaturalEnglish(text, 0.88);
  };

  const filteredChunks = chunks.filter(c => {
    const matchesSearch = c.chunk.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.example.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span className="badge badge-purple">
            <Terminal size={14} /> Transição para TI & Computação
          </span>
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Dicionário de Chunks de Tecnologia
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Aprenda o inglês profissional de Engenharia de Computação através de <strong>expressões em contexto com voz nativa clara</strong>.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="input-field"
            placeholder="Pesquisar termo tech em inglês ou português..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.4rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
          <button className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedCategory('all')}>
            Todos
          </button>
          <button className={`btn ${selectedCategory === 'dev' ? 'btn-primary' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedCategory('dev')}>
            Software
          </button>
          <button className={`btn ${selectedCategory === 'db' ? 'btn-primary' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedCategory('db')}>
            Databases
          </button>
          <button className={`btn ${selectedCategory === 'network' ? 'btn-primary' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedCategory('network')}>
            Redes/Cloud
          </button>
          <button className={`btn ${selectedCategory === 'cs' ? 'btn-primary' : 'btn-secondary'}`} style={{ fontSize: '0.8rem' }} onClick={() => setSelectedCategory('cs')}>
            Ciência/CS
          </button>
        </div>
      </div>

      {/* Chunks List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filteredChunks.map(c => (
          <div key={c.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="chunk-code">{c.chunk}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>{c.level}</span>
                  <button 
                    className="btn btn-secondary" 
                    style={{ padding: '0.3rem', borderRadius: '50%' }}
                    title="Ouvir voz clara"
                    onClick={() => handleSpeak(c.chunk)}
                  >
                    <Volume2 size={16} color="var(--accent-blue)" />
                  </button>
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '0.75rem' }}>
                💡 {c.translation}
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase', fontWeight: 600 }}>Exemplo em frase:</div>
                "{c.example}"
                <button
                  style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.4rem' }}
                  onClick={() => handleSpeak(c.example)}
                  title="Ouvir frase inteira"
                >
                  <Volume2 size={14} color="var(--accent-amber)" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
