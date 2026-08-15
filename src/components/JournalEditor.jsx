import React, { useState, useEffect } from 'react';
import { PenTool, Calendar, Save, Trash2, Sparkles, BookOpen } from 'lucide-react';

export default function JournalEditor() {
  const [entries, setEntries] = useState(() => {
    const local = localStorage.getItem('english_journal_entries');
    return local ? JSON.parse(local) : [
      {
        id: 1,
        date: '14/08/2026',
        content: `Today I studied English grammar and listened to basic dialogs.\nI learned new words about computers and routines.\nI am tired but happy with my progress!`,
        mood: '😊 Happy'
      }
    ];
  });

  const [currentText, setCurrentText] = useState('');
  const [selectedMood, setSelectedMood] = useState('🔥 Motivated');

  useEffect(() => {
    localStorage.setItem('english_journal_entries', JSON.stringify(entries));
  }, [entries]);

  const addTemplateSentence = (sentence) => {
    setCurrentText(prev => (prev ? `${prev}\n${sentence}` : sentence));
  };

  const handleSaveEntry = () => {
    if (!currentText.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      content: currentText,
      mood: selectedMood
    };
    setEntries([newEntry, ...entries]);
    setCurrentText('');
    alert("Entrada do Diário salva no seu histórico!");
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.3rem' }}>
          Diário Noturno de Inglês (20:00 – 20:20)
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Escreva de 3 a 5 frases simples descrevendo como foi o seu dia. Isso fixa o vocabulário passivo em produção escrita ativa.
        </p>
      </div>

      {/* Editor & Templates Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Editor Card */}
        <div className="card" style={{ borderColor: 'var(--accent-purple)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 className="card-title"><PenTool size={18} color="var(--accent-purple)" /> Nova Entrada no Diário</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{new Date().toLocaleDateString('pt-BR')}</span>
          </div>

          {/* Quick Prompts / Template Chips */}
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
              Inserir Frases de Apoio (Clique para adicionar):
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => addTemplateSentence("Today I studied English.")}>
                + Today I studied...
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => addTemplateSentence("I learned new words about...")}>
                + I learned new words...
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => addTemplateSentence("I watched a video on YouTube.")}>
                + I watched a video...
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => addTemplateSentence("I wrote code for my computer project.")}>
                + I wrote code...
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => addTemplateSentence("I am tired but happy.")}>
                + I am tired but happy.
              </button>
            </div>
          </div>

          <textarea
            className="input-field"
            rows={7}
            placeholder="Write your day in English here... (Ex: Today I worked hard. I listened to a podcast. English is becoming easier every day!)"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            style={{ marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <select
              className="input-field"
              style={{ width: 'auto', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
            >
              <option value="🔥 Motivated">🔥 Motivated</option>
              <option value="😊 Happy">😊 Happy</option>
              <option value="🧠 Focused">🧠 Focused</option>
              <option value="😴 Tired">😴 Tired</option>
            </select>

            <button className="btn btn-emerald" onClick={handleSaveEntry}>
              <Save size={16} /> Salvar no Histórico
            </button>
          </div>
        </div>

        {/* History Card */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '1rem' }}><BookOpen size={18} color="var(--accent-blue)" /> Entradas Anteriores</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '420px', overflowY: 'auto' }}>
            {entries.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Nenhuma entrada registrada ainda.</p>
            ) : (
              entries.map(entry => (
                <div key={entry.id} style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 700 }}>
                      <Calendar size={12} /> {entry.date} • {entry.mood}
                    </span>
                    <button className="btn btn-secondary" style={{ padding: '0.2rem 0.4rem' }} onClick={() => handleDeleteEntry(entry.id)}>
                      <Trash2 size={14} color="var(--accent-rose)" />
                    </button>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', whitespace: 'pre-line', lineHeight: 1.5 }}>
                    {entry.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
