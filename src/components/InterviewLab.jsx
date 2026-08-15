import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ClipboardCheck, Clock3, RotateCcw, Send, Volume2 } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

const questions = [
  { category: 'Apresentação', question: 'Tell me about yourself.', time: 60, prompt: 'Presente → experiência relevante → habilidade/projeto → objetivo.' },
  { category: 'Motivação', question: 'Why do you want to work here?', time: 75, prompt: 'Empresa → contribuição concreta → o que quer aprender.' },
  { category: 'Projeto técnico', question: 'Walk me through a project you are proud of.', time: 120, prompt: 'Problema → sua responsabilidade → tecnologias e decisões → resultado.' },
  { category: 'Comportamental', question: 'Tell me about a difficult problem you solved.', time: 120, prompt: 'Use STAR: Situation, Task, Action, Result. Dê um resultado verificável.' },
  { category: 'Comportamental', question: 'Tell me about a time you received difficult feedback.', time: 120, prompt: 'Contexto → como ouviu e agiu → mudança concreta → aprendizado.' },
  { category: 'Técnica', question: 'How would you explain an API from one of your projects?', time: 90, prompt: 'Objetivo → entrada/saída → tratamento de erros → exemplo simples.' },
  { category: 'Encerramento', question: 'What questions do you have for us?', time: 60, prompt: 'Pergunte sobre equipe, desafio da vaga, expectativas e processo — nunca diga “no questions”.' }
];

const rubric = [
  ['Clareza', 'A resposta tem começo, meio e fim?'],
  ['Conteúdo', 'Usei exemplos reais, responsabilidades e resultados?'],
  ['Inglês', 'Fui compreensível sem depender de português ou leitura?'],
  ['Interação', 'Respondi à pergunta e fiz uma pergunta de volta quando cabia?'],
  ['Tempo', 'Fiquei entre 45 e 120 segundos, sem resposta decorada longa?']
];

export default function InterviewLab() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [seconds, setSeconds] = useState(questions[0].time);
  const [running, setRunning] = useState(false);
  const [checks, setChecks] = useState({});
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('english_interview_practice') || '[]'));

  const current = questions[index];
  const readyScore = useMemo(() => Object.values(checks).filter(Boolean).length, [checks]);

  useEffect(() => {
    setSeconds(current.time);
    setRunning(false);
    setAnswer('');
    setChecks({});
  }, [index, current.time]);

  useEffect(() => {
    if (!running || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds(value => value - 1), 1000);
    return () => window.clearInterval(timer);
  }, [running, seconds]);

  const formatTime = (value) => `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
  const savePractice = () => {
    const entry = { id: Date.now(), question: current.question, score: readyScore, answer, date: new Date().toLocaleDateString('pt-BR') };
    const updated = [entry, ...history].slice(0, 12);
    setHistory(updated);
    localStorage.setItem('english_interview_practice', JSON.stringify(updated));
    setAnswer('');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <span className="badge badge-purple"><ClipboardCheck size={14} /> Preparação que mede desempenho</span>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginTop: '0.5rem' }}>Laboratório de Entrevista</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Responda sem roteiro, com tempo limitado, e avalie a resposta antes de avançar. Faça este treino 2 vezes por semana a partir do dia 150.</p>
      </div>

      <div className="card" style={{ borderColor: 'var(--accent-purple)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="badge badge-blue">{current.category} · Pergunta {index + 1}/{questions.length}</span>
          <strong style={{ color: seconds < 15 ? 'var(--accent-rose)' : 'var(--accent-amber)', fontSize: '1.35rem' }}><Clock3 size={18} /> {formatTime(seconds)}</strong>
        </div>
        <h3 style={{ margin: '1.25rem 0 0.4rem', fontSize: '1.35rem' }}>{current.question}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}><strong>Estrutura:</strong> {current.prompt}</p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <button className="btn btn-primary" onClick={() => speakNaturalEnglish(current.question, 0.92)}><Volume2 size={16} /> Ouvir pergunta</button>
          <button className={`btn ${running ? 'btn-amber' : 'btn-emerald'}`} onClick={() => setRunning(value => !value)}>{running ? 'Pausar resposta' : 'Iniciar resposta'}</button>
          <button className="btn btn-secondary" onClick={() => { setSeconds(current.time); setRunning(false); }}><RotateCcw size={16} /> Reiniciar</button>
        </div>
        <textarea className="input-field" rows={6} value={answer} onChange={event => setAnswer(event.target.value)} placeholder="Depois de falar, anote palavras ou frases que travaram — não escreva uma resposta para ler na próxima tentativa." />
      </div>

      <div className="card">
        <h3 className="card-title"><CheckCircle2 size={20} color="var(--accent-emerald)" /> Rubrica de autoavaliação: {readyScore}/5</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0 1rem' }}>Só marque se você conseguiu demonstrar isso falando. Meta: 4/5 ou 5/5 em pelo menos 10 respostas diferentes.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
          {rubric.map(([title, detail], itemIndex) => (
            <button key={title} className={`btn ${checks[itemIndex] ? 'btn-emerald' : 'btn-secondary'}`} onClick={() => setChecks(prev => ({ ...prev, [itemIndex]: !prev[itemIndex] }))} style={{ justifyContent: 'flex-start', textAlign: 'left', minHeight: '70px' }}>
              <CheckCircle2 size={17} /> <span><strong>{title}</strong><br /><small>{detail}</small></span>
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
          <button className="btn btn-emerald" onClick={savePractice}><Send size={16} /> Salvar tentativa</button>
          <button className="btn btn-primary" onClick={() => setIndex(value => (value + 1) % questions.length)}>Próxima pergunta</button>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Critério de prontidão para entrevista</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Você está pronto para uma entrevista inicial quando: conclui uma simulação de 20 minutos; responde 10 perguntas com média ≥ 4/5; explica um projeto sem roteiro; e recebe feedback de pelo menos uma pessoa fluente ou entrevistador simulado.</p>
        {history.length > 0 && <p style={{ marginTop: '0.75rem', color: 'var(--accent-blue)', fontSize: '0.85rem' }}>Tentativas salvas: {history.length}. Última: {history[0].score}/5 em “{history[0].question}”.</p>}
      </div>
    </div>
  );
}
