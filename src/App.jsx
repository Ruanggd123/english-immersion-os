import React, { useState, useEffect } from 'react';
import { LayoutDashboard, BookOpenCheck, Calendar, Clock, BookOpen, Award, PenTool, Code2, Sparkles, Brain, Bot, Library, Mic, Headphones, PlayCircle, Briefcase, Compass } from 'lucide-react';
import Dashboard from './components/Dashboard';
import DailyLesson from './components/DailyLesson';
import ScheduleView from './components/ScheduleView';
import FocusTimer from './components/FocusTimer';
import SaturdayTests from './components/SaturdayTests';
import JournalEditor from './components/JournalEditor';
import TechVocab from './components/TechVocab';
import CognitiveTools from './components/CognitiveTools';
import LocalAiCoach from './components/LocalAiCoach';
import LearningLibrary from './components/LearningLibrary';
import PhoneticsCoach from './components/PhoneticsCoach';
import ListeningLab from './components/ListeningLab';
import LiveSession from './components/LiveSession';
import InterviewLab from './components/InterviewLab';
import MethodologyHelper from './components/MethodologyHelper';

export default function App() {
  const [currentTab, setCurrentTab] = useState('daily');

  // Persistent progress state
  const [progressData, setProgressData] = useState(() => {
    const saved = localStorage.getItem('english_immersion_progress');
    return saved ? JSON.parse(saved) : {
      currentDay: 1,
      completedDays: 0,
      totalHours: 0,
      streak: 1,
      todayTasks: {
        morning_vocab: false,
        morning_grammar: false,
        morning_reading: false,
        morning_exercises: false,
        afternoon_vocab: false,
        afternoon_listening: false,
        afternoon_shadowing: false,
        afternoon_speaking: false,
        evening_reading: false,
        evening_listening: false,
        evening_journal: false
      }
    };
  });

  useEffect(() => {
    localStorage.setItem('english_immersion_progress', JSON.stringify(progressData));
  }, [progressData]);

  // Toggle checklist tasks
  const toggleTask = (taskKey) => {
    setProgressData(prev => {
      const updatedTasks = {
        ...prev.todayTasks,
        [taskKey]: !prev.todayTasks[taskKey]
      };
      
      const totalCount = Object.keys(updatedTasks).length;
      const completedCount = Object.values(updatedTasks).filter(Boolean).length;
      const isDayComplete = completedCount === totalCount;

      return {
        ...prev,
        todayTasks: updatedTasks,
        completedDays: isDayComplete && prev.completedDays < prev.currentDay ? prev.currentDay : prev.completedDays
      };
    });
  };

  // Log study hours
  const logHours = (hours) => {
    setProgressData(prev => ({
      ...prev,
      totalHours: Math.round((prev.totalHours + hours) * 10) / 10
    }));
  };

  // Mark all tasks of the day as done (used by the Live Session completion)
  const markAllTasksDone = () => {
    setProgressData(prev => {
      const todayTasks = {};
      Object.keys(prev.todayTasks).forEach(key => {
        todayTasks[key] = true;
      });
      return {
        ...prev,
        todayTasks,
        completedDays: prev.completedDays < prev.currentDay ? prev.currentDay : prev.completedDays
      };
    });
  };

  const setDay = (dayNum) => {
    setProgressData(prev => ({
      ...prev,
      currentDay: dayNum
    }));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Bar */}
      <header className="app-header">
        <div className="header-container">
          <div className="logo-group">
            <div className="logo-icon">
              <Sparkles size={24} />
            </div>
            <div>
              <h1 className="brand-title">English Immersion OS</h1>
              <span className="brand-subtitle">Plano de 180 Dias • 4–6h Líquidas/Dia</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="nav-tabs">
            <button
              className={`tab-btn ${currentTab === 'daily' ? 'active' : ''}`}
              onClick={() => setCurrentTab('daily')}
            >
              <BookOpenCheck size={16} /> O Que Estudar Hoje
            </button>

            <button
              className={`tab-btn ${currentTab === 'live' ? 'active' : ''}`}
              onClick={() => setCurrentTab('live')}
            >
              <PlayCircle size={16} /> Sessão ao Vivo
            </button>

            <button
              className={`tab-btn ${currentTab === 'ai' ? 'active' : ''}`}
              onClick={() => setCurrentTab('ai')}
            >
              <Bot size={16} /> Tutor de IA Ao Vivo
            </button>

            <button
              className={`tab-btn ${currentTab === 'phonetics' ? 'active' : ''}`}
              onClick={() => setCurrentTab('phonetics')}
            >
              <Mic size={16} /> Treinador de Fonemas
            </button>

            <button
              className={`tab-btn ${currentTab === 'listening' ? 'active' : ''}`}
              onClick={() => setCurrentTab('listening')}
            >
              <Headphones size={16} /> Listening Lab
            </button>

            <button
              className={`tab-btn ${currentTab === 'library' ? 'active' : ''}`}
              onClick={() => setCurrentTab('library')}
            >
              <Library size={16} /> Biblioteca de Estudo
            </button>

            <button
              className={`tab-btn ${currentTab === 'cognitive' ? 'active' : ''}`}
              onClick={() => setCurrentTab('cognitive')}
            >
              <Brain size={16} /> Neurociência & Flashcards
            </button>

            <button
              className={`tab-btn ${currentTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentTab('dashboard')}
            >
              <LayoutDashboard size={16} /> Painel Diário
            </button>

            <button
              className={`tab-btn ${currentTab === 'schedule' ? 'active' : ''}`}
              onClick={() => setCurrentTab('schedule')}
            >
              <Calendar size={16} /> Cronograma 180D
            </button>

            <button
              className={`tab-btn ${currentTab === 'timer' ? 'active' : ''}`}
              onClick={() => setCurrentTab('timer')}
            >
              <Clock size={16} /> Timer de Foco
            </button>

            <button
              className={`tab-btn ${currentTab === 'saturday' ? 'active' : ''}`}
              onClick={() => setCurrentTab('saturday')}
            >
              <Award size={16} /> Teste dos Sábados
            </button>

            <button
              className={`tab-btn ${currentTab === 'journal' ? 'active' : ''}`}
              onClick={() => setCurrentTab('journal')}
            >
              <PenTool size={16} /> Diário Noturno
            </button>

            <button
              className={`tab-btn ${currentTab === 'tech' ? 'active' : ''}`}
              onClick={() => setCurrentTab('tech')}
            >
              <Code2 size={16} /> Chunks de TI
            </button>

            <button
              className={`tab-btn ${currentTab === 'interview' ? 'active' : ''}`}
              onClick={() => setCurrentTab('interview')}
            >
              <Briefcase size={16} /> Entrevistas
            </button>

            <button
              className={`tab-btn ${currentTab === 'methodology' ? 'active' : ''}`}
              onClick={() => setCurrentTab('methodology')}
            >
              <Compass size={16} /> Metodologia
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {currentTab === 'daily' && (
          <DailyLesson
            currentDay={progressData.currentDay}
            setDay={setDay}
            toggleTask={toggleTask}
            todayTasks={progressData.todayTasks}
            setTab={setCurrentTab}
          />
        )}

        {currentTab === 'live' && (
          <LiveSession
            currentDay={progressData.currentDay}
            setDay={setDay}
            toggleTask={toggleTask}
            markAllTasksDone={markAllTasksDone}
          />
        )}

        {currentTab === 'ai' && (
          <LocalAiCoach />
        )}

        {currentTab === 'phonetics' && (
          <PhoneticsCoach />
        )}

        {currentTab === 'listening' && (
          <ListeningLab currentDay={progressData.currentDay} />
        )}

        {currentTab === 'library' && (
          <LearningLibrary />
        )}

        {currentTab === 'cognitive' && (
          <CognitiveTools />
        )}

        {currentTab === 'dashboard' && (
          <Dashboard progressData={progressData} toggleTask={toggleTask} setTab={setCurrentTab} />
        )}

        {currentTab === 'schedule' && (
          <ScheduleView currentDay={progressData.currentDay} setDay={setDay} />
        )}

        {currentTab === 'timer' && (
          <FocusTimer logHours={logHours} />
        )}

        {currentTab === 'saturday' && (
          <SaturdayTests />
        )}

        {currentTab === 'journal' && (
          <JournalEditor />
        )}

        {currentTab === 'tech' && (
          <TechVocab />
        )}

        {currentTab === 'interview' && (
          <InterviewLab />
        )}

        {currentTab === 'methodology' && (
          <MethodologyHelper />
        )}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        English Immersion OS — Imersão Estruturada de 180 Dias com Treinador de Fonemas & Inteligência Artificial Local.
      </footer>
    </div>
  );
}
