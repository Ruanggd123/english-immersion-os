import React, { useState } from 'react';
import { BookOpen, Headphones, Mic, CheckCircle2, ChevronRight, Volume2, Sparkles, HelpCircle, Award, Play, Calendar, Sliders, BarChart3, CheckSquare, Clock, Zap, Target, Bot } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

export default function DailyLesson({ currentDay, setDay, toggleTask, todayTasks, setTab }) {
  const [selectedDay, setSelectedDay] = useState(currentDay || 1);
  const [showTranslation, setShowTranslation] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState(0.88);
  const [userAnswers, setUserAnswers] = useState({});

  const handleSpeak = (text) => {
    speakNaturalEnglish(text, speechSpeed);
  };

  // Helper to format date relative to today
  const getDateForDay = (dayNum) => {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + (dayNum - 1));
    const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayName = dayNames[targetDate.getDay()];
    const dateFormatted = targetDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `${dayName} (${dateFormatted})`;
  };

  // Comprehensive Database of Lessons for Week 1 (Days 1 to 7)
  const lessons = {
    1: {
      dayName: "Dia 1 — Segunda-feira",
      title: "Verbo To Be (Afirmativa) & Apresentação Pessoal",
      focus: "Aprender a se apresentar em inglês e usar o Verbo To Be no presente.",
      phonemeTip: {
        title: "Fonema do Dia: /iː/ (Longo de Sorriso) vs /ɪ/ (Curto Relaxado)",
        rule: "Na palavra 'He' ou 'She', o som é /iː/ (sorrindo). Na palavra 'It' ou 'Is', o som é /ɪ/ curto e relaxado.",
        exampleA: "She /ʃiː/ (Ela)",
        exampleB: "It /ɪt/ (Ele/Ela para objetos)"
      },
      vocab: [
        { en: "Hello / Hi", pt: "Olá / Oi" },
        { en: "Good morning", pt: "Bom dia" },
        { en: "My name is...", pt: "Meu nome é..." },
        { en: "I am...", pt: "Eu sou / Eu estou..." },
        { en: "Student", pt: "Estudante / Aluno" },
        { en: "Teacher", pt: "Professor(a)" },
        { en: "Computer", pt: "Computador" },
        { en: "Code", pt: "Código / Programar" },
        { en: "File", pt: "Arquivo" },
        { en: "Yes / No", pt: "Sim / Não" }
      ],
      grammar: {
        title: "Verbo To Be (Afirmativa)",
        rule: "O verbo 'To Be' significa SER ou ESTAR. No presente ele assume 3 formas: AM, IS, ARE.",
        table: [
          { pronoun: "I am (I'm)", example: "I am a student.", pt: "Eu sou um estudante." },
          { pronoun: "You are (You're)", example: "You are smart.", pt: "Você é inteligente." },
          { pronoun: "He is (He's)", example: "He is a developer.", pt: "Ele é um desenvolvedor." },
          { pronoun: "She is (She's)", example: "She is at home.", pt: "Ela está em casa." },
          { pronoun: "It is (It's)", example: "It is a computer.", pt: "É um computador." },
          { pronoun: "We are (We're)", example: "We are ready.", pt: "Nós estamos prontos." },
          { pronoun: "They are (They're)", example: "They are happy.", pt: "Eles são / estão felizes." }
        ]
      },
      reading: {
        title: "Texto do Dia 1: My First Day",
        text: "Hello! My name is Ruan. I am a student. I live in Brazil. I have a computer. The computer is on the table. I am happy today.",
        translation: "Olá! Meu nome é Ruan. Eu sou um estudante. Eu moro no Brasil. Eu tenho um computador. O computador está sobre a mesa. Eu estou feliz hoje."
      },
      quiz: [
        { q: "1. Completes: 'I ___ a student.'", options: ["am", "is", "are"], ans: "am" },
        { q: "2. Completes: 'She ___ a developer.'", options: ["am", "is", "are"], ans: "is" },
        { q: "3. Completes: 'The computers ___ new.'", options: ["am", "is", "are"], ans: "are" }
      ],
      chunks: [
        { en: "I am a student.", pt: "Eu sou um estudante." },
        { en: "I live in Brazil.", pt: "Eu moro no Brasil." },
        { en: "I am happy to learn.", pt: "Estou feliz em aprender." }
      ],
      listeningScript: "Hello! My name is John. I am a software engineer. I live in New York. My computer is fast. I love programming.",
      speakingPrompt: "Responda em voz alta: 'Hello! My name is Ruan. I am a student. I live in Brazil. I study English and Computer Science.'",
      lightReading: "Computers are electronic devices that process data according to instructions.",
      journalPrompt: "Today is Day 1. I studied the verb to be. I am happy to start."
    },
    2: {
      dayName: "Dia 2 — Terça-feira",
      title: "Verbo To Be (Negativa & Perguntas)",
      focus: "Aprender a negar (isn't, aren't) e fazer perguntas cotidianas.",
      phonemeTip: {
        title: "Fonema do Dia: O som do TH (/θ/ em 'think' vs /ð/ em 'this')",
        rule: "Coloque a ponta da língua levemente entre os dentes frontais e solte o ar.",
        exampleA: "Think /θɪŋk/ (Pensar)",
        exampleB: "This /ðɪs/ (Este/Esta)"
      },
      vocab: [
        { en: "Not", pt: "Não" },
        { en: "Tired", pt: "Cansado(a)" },
        { en: "Busy", pt: "Ocupado(a)" },
        { en: "Ready", pt: "Pronto(a)" },
        { en: "Where", pt: "Onde" },
        { en: "Who", pt: "Quem" },
        { en: "What", pt: "O que / Qual" },
        { en: "Office", pt: "Escritório" },
        { en: "Home", pt: "Casa / Lar" },
        { en: "Work", pt: "Trabalho" }
      ],
      grammar: {
        title: "Verbo To Be (Negativa & Perguntas)",
        rule: "Negativa: adicione NOT (is not = isn't / are not = aren't). Perguntas: coloque AM/IS/ARE antes do sujeito.",
        table: [
          { pronoun: "Negativa", example: "I am not tired. He isn't busy.", pt: "Eu não estou cansado. Ele não está ocupado." },
          { pronoun: "Pergunta", example: "Are you ready? Is it online?", pt: "Você está pronto? Está online?" },
          { pronoun: "Resposta Curta", example: "Yes, I am. / No, it isn't.", pt: "Sim, estou. / Não, não está." }
        ]
      },
      reading: {
        title: "Texto do Dia 2: At the Office",
        text: "Is Paul at work today? No, he is not. He is at home. He is sick. But Maria is in the office. She is not sick. She is very busy.",
        translation: "O Paul está no trabalho hoje? Não, ele não está. Ele está em casa. Ele está doente. Mas a Maria está no escritório. Ela não está doente. Ela está muito ocupada."
      },
      quiz: [
        { q: "1. Negativa de 'He is busy':", options: ["He not is busy", "He isn't busy", "He don't busy"], ans: "He isn't busy" },
        { q: "2. Pergunta correta:", options: ["You are ready?", "Are you ready?", "Is you ready?"], ans: "Are you ready?" }
      ],
      chunks: [
        { en: "I am not tired.", pt: "Eu não estou cansado." },
        { en: "Are you ready?", pt: "Você está pronto?" },
        { en: "No, it is not online.", pt: "Não, não está online." }
      ],
      listeningScript: "Is the server online? No, it is offline right now. Are we ready for the team meeting? Yes, we are ready.",
      speakingPrompt: "Responda oralmente: 'Are you a student? Yes, I am. Are you tired today? No, I am not tired.'",
      lightReading: "Software is not physical hardware. It consists of logical code instructions.",
      journalPrompt: "Today is Day 2. I learned negative sentences and short answers in English."
    },
    3: {
      dayName: "Dia 3 — Quarta-feira",
      title: "Pronome IT & Hardware de Computadores",
      focus: "Usar o pronome IT para objetos e aprender nomes de peças de computador.",
      phonemeTip: {
        title: "Fonema do Dia: Flap T Americano (T entre vogais = som de 'r' brando)",
        rule: "Na palavra 'Computer' ou 'Water', o T entre duas vogais soa como o 'r' brando de 'arara' em português ('compiúder').",
        exampleA: "Computer /kəmˈpjuː.t̬ɚ/",
        exampleB: "Water /ˈwɑː.t̬ɚ/"
      },
      vocab: [
        { en: "Keyboard", pt: "Teclado" },
        { en: "Mouse", pt: "Mouse" },
        { en: "Screen / Monitor", pt: "Tela / Monitor" },
        { en: "Memory / RAM", pt: "Memória RAM" },
        { en: "Processor / CPU", pt: "Processador" },
        { en: "Fast", pt: "Rápido(a)" },
        { en: "Slow", pt: "Lento(a)" },
        { en: "New", pt: "Novo(a)" },
        { en: "Old", pt: "Velho(a)" },
        { en: "System", pt: "Sistema" }
      ],
      grammar: {
        title: "Uso de IT e THEY para Objetos",
        rule: "Usamos IT para objetos no singular. No plural usamos THEY.",
        table: [
          { pronoun: "Singular (IT)", example: "The computer is fast. -> It is fast.", pt: "O computador é rápido. -> Ele é rápido." },
          { pronoun: "Plural (THEY)", example: "The screens are new. -> They are new.", pt: "As telas são novas. -> Elas são novas." }
        ]
      },
      reading: {
        title: "Texto do Dia 3: My New Laptop",
        text: "I have a new laptop. It is very fast. The screen is big and clear. The keyboard is quiet. My old computer was slow, but this laptop is great for programming.",
        translation: "Eu tenho um notebook novo. Ele é muito rápido. A tela é grande e clara. O teclado é silencioso. Meu computador antigo era lento, mas este notebook é ótimo para programação."
      },
      quiz: [
        { q: "1. Substitua 'The keyboard':", options: ["He", "She", "It"], ans: "It" },
        { q: "2. Substitua 'The servers':", options: ["It", "They", "We"], ans: "They" }
      ],
      chunks: [
        { en: "It is very fast.", pt: "Ele é muito rápido." },
        { en: "The screen is big.", pt: "A tela é grande." },
        { en: "They are online.", pt: "Eles estão online." }
      ],
      listeningScript: "My laptop is brand new. It has sixteen gigabytes of RAM. The CPU is fast. It is perfect for software engineering.",
      speakingPrompt: "Descreva seu computador: 'My computer is fast. The screen is big. It has good memory.'",
      lightReading: "A central processing unit carries out instructions of a computer program.",
      journalPrompt: "Today is Day 3. I learned how to describe my computer in English."
    },
    4: {
      dayName: "Dia 4 — Quinta-feira",
      title: "Artigos A, AN & THE (Singular & Plural)",
      focus: "Dominar quando usar A (consoante), AN (vogal) e THE (específico).",
      phonemeTip: {
        title: "Fonema do Dia: Conexão da Palavra (Connected Speech em 'An App')",
        rule: "Quando uma palavra termina em consoante ('an') e a próxima começa em vogal ('app'), ligamos o som: 'an-app'!",
        exampleA: "an application -> /ən.æp.lɪˈkeɪ.ʃən/",
        exampleB: "an engineer -> /ən.en.dʒɪˈnɪr/"
      },
      vocab: [
        { en: "A / An", pt: "Um / Uma" },
        { en: "The", pt: "O / A / Os / As" },
        { en: "Application / App", pt: "Aplicativo" },
        { en: "Engineer", pt: "Engenheiro(a)" },
        { en: "Developer", pt: "Desenvolvedor(a)" },
        { en: "User", pt: "Usuário(a)" },
        { en: "Error / Bug", pt: "Erro" },
        { en: "Algorithm", pt: "Algoritmo" },
        { en: "Database", pt: "Banco de dados" },
        { en: "Project", pt: "Projeto" }
      ],
      grammar: {
        title: "Regra dos Artigos A, AN e THE",
        rule: "Usamos A antes de som de consoante (a computer). Usamos AN antes de som de vogal (an app, an error). Usamos THE para especificar (the server).",
        table: [
          { pronoun: "A (Consoante)", example: "a developer, a system", pt: "um desenvolvedor, um sistema" },
          { pronoun: "AN (Vogal)", example: "an application, an engineer, an error", pt: "um aplicativo, um engenheiro, um erro" },
          { pronoun: "THE (Específico)", example: "The database is online.", pt: "O banco de dados está online." }
        ]
      },
      reading: {
        title: "Texto do Dia 4: An Engineer at Work",
        text: "Alex is an engineer. He works at a software company. Today he found an error in an application. He fixed the error. The application is now working perfectly.",
        translation: "Alex é um engenheiro. Ele trabalha em uma empresa de software. Hoje ele encontrou um erro em um aplicativo. Ele corrigiu o erro. O aplicativo agora está funcionando perfeitamente."
      },
      quiz: [
        { q: "1. Completes: 'She is ___ engineer.'", options: ["a", "an", "the"], ans: "an" },
        { q: "2. Completes: 'I use ___ computer.'", options: ["a", "an", "the"], ans: "a" }
      ],
      chunks: [
        { en: "an application", pt: "um aplicativo" },
        { en: "a software engineer", pt: "um engenheiro de software" },
        { en: "fix the error", pt: "corrigir o erro" }
      ],
      listeningScript: "An engineer designs systems. A developer writes code. The code must be clean, safe, and efficient.",
      speakingPrompt: "Diga 3 frases com A, AN e THE: 'I am a student. I use an app. The app is fast.'",
      lightReading: "An algorithm is a step-by-step procedure designed to perform a specific task.",
      journalPrompt: "Today is Day 4. I mastered the articles A, AN and THE."
    },
    5: {
      dayName: "Dia 5 — Sexta-feira",
      title: "Demonstrativos (This, That, These, Those)",
      focus: "Saber apontar coisas perto e longe no singular e no plural.",
      phonemeTip: {
        title: "Fonema do Dia: O som do 'TH' com vibração /ð/ (This, That, These, Those)",
        rule: "Diferente de 'think' (sem som), o TH de 'this' faz as cordas vocais vibrarem como um zumbido de abelha na língua.",
        exampleA: "This /ðɪs/ (Este)",
        exampleB: "Those /ðoʊz/ (Aqueles)"
      },
      vocab: [
        { en: "This", pt: "Este / Esta (Perto - Singular)" },
        { en: "That", pt: "Aquele / Aquela (Longe - Singular)" },
        { en: "These", pt: "Estes / Estas (Perto - Plural)" },
        { en: "Those", pt: "Aqueles / Aquelas (Longe - Plural)" },
        { en: "Here / There", pt: "Aqui / Lá" },
        { en: "Near / Far", pt: "Perto / Longe" },
        { en: "Desk", pt: "Mesa de trabalho" },
        { en: "Folder", pt: "Pasta de arquivos" },
        { en: "Line of code", pt: "Linha de código" },
        { en: "Document", pt: "Documento" }
      ],
      grammar: {
        title: "Demonstrativos Perto vs Longe",
        rule: "Perto: THIS (singular) e THESE (plural). Longe: THAT (singular) e THOSE (plural).",
        table: [
          { pronoun: "This (Perto, 1)", example: "This is my computer.", pt: "Este é o meu computador." },
          { pronoun: "That (Longe, 1)", example: "That is a server.", pt: "Aquele é um servidor." },
          { pronoun: "These (Perto, +1)", example: "These are my files.", pt: "Estes são os meus arquivos." },
          { pronoun: "Those (Longe, +1)", example: "Those are old systems.", pt: "Aqueles são sistemas antigos." }
        ]
      },
      reading: {
        title: "Texto do Dia 5: Organizing the Desk",
        text: "Look at this computer on my desk. This is my main workspace. These files here are new projects. Those documents on that shelf are old. I need to organize them today.",
        translation: "Olhe para este computador na minha mesa. Esta é minha área de trabalho principal. Estes arquivos aqui são projetos novos. Aqueles documentos naquela prateleira são antigos. Preciso organizá-los hoje."
      },
      quiz: [
        { q: "1. Objeto perto no singular:", options: ["This", "That", "These"], ans: "This" },
        { q: "2. Vários objetos longe:", options: ["These", "Those", "This"], ans: "Those" }
      ],
      chunks: [
        { en: "This is my code.", pt: "Este é o meu código." },
        { en: "These are new features.", pt: "Estas são novas funcionalidades." },
        { en: "That is an old server.", pt: "Aquele é um servidor antigo." }
      ],
      listeningScript: "This is line 10 of the program. These variables hold data. That function computes the result.",
      speakingPrompt: "Aponte para objetos ao seu redor: 'This is my phone. These are my books. That is the door.'",
      lightReading: "These data structures hold memory elements. Those functions operate on them.",
      journalPrompt: "Today is Day 5. I learned how to use This, That, These and Those."
    },
    6: {
      dayName: "Dia 6 — Sábado",
      title: "Possessivos (My, Your, His, Her, Our, Their) & TESTE DE SÁBADO",
      focus: "Indicar posse e realizar a suíte de avaliação semanal (Speaking Audit com Gravador).",
      phonemeTip: {
        title: "Fonema do Dia: O 'R' Enrolado Americano (/r/ em 'Our', 'Her', 'Their')",
        rule: "O 'R' americano puxa a língua para trás em direção ao céu da boca sem encostar: 'ou-er', 'herr', 'th-eir'.",
        exampleA: "Our /ˈaʊ.ɚ/ (Nosso)",
        exampleB: "Her /hɝː/ (Dela)"
      },
      vocab: [
        { en: "My / Your", pt: "Meu / Seu" },
        { en: "His / Her", pt: "Dele / Dela" },
        { en: "Its", pt: "Dele/Dela (objeto)" },
        { en: "Our / Their", pt: "Nosso / Deles" },
        { en: "Team", pt: "Equipe" },
        { en: "Company", pt: "Empresa" },
        { en: "Skill", pt: "Habilidade" },
        { en: "Goal", pt: "Meta" },
        { en: "Leader", pt: "Líder" },
        { en: "Product", pt: "Produto" }
      ],
      grammar: {
        title: "Possessivos em Inglês",
        rule: "Usamos os adjetivos possessivos antes de nomes: My computer, His code, Her app, Our team.",
        table: [
          { pronoun: "I -> My", example: "My project is ready.", pt: "Meu projeto está pronto." },
          { pronoun: "He -> His", example: "His code is clean.", pt: "O código dele é limpo." },
          { pronoun: "She -> Her", example: "Her app is live.", pt: "O app dela está no ar." },
          { pronoun: "We -> Our", example: "Our team is great.", pt: "Nossa equipe é ótima." }
        ]
      },
      reading: {
        title: "Texto do Dia 6: Our Software Team",
        text: "We work in a software company. Our team has four developers. Maria is our team leader. Her coding skills are amazing. Lucas is a frontend dev. His code is very neat.",
        translation: "Nós trabalhamos em uma empresa de software. Nossa equipe tem quatro desenvolvedores. Maria é nossa líder de equipe. As habilidades de código dela são incríveis. Lucas é um dev frontend. O código dele é muito organizado."
      },
      quiz: [
        { q: "1. 'John and ___ laptop' (notebook dele):", options: ["his", "her", "their"], ans: "his" },
        { q: "2. 'We love ___ studies' (nossos estudos):", options: ["my", "our", "their"], ans: "our" }
      ],
      chunks: [
        { en: "our dev team", pt: "nossa equipe de desenvolvimento" },
        { en: "his code is clean", pt: "o código dele é limpo" },
        { en: "her app is live", pt: "o app dela está no ar" }
      ],
      listeningScript: "Welcome to our engineering department. My name is Mark. This is our team. Their project is an AI system.",
      speakingPrompt: "Grave seu áudio de 2 minutos no Teste do Sábado na aba 'Teste dos Sábados'!",
      lightReading: "Our repositories are stored on GitHub. Their access is protected by tokens.",
      journalPrompt: "Today is Day 6. I finished my Saturday Test Protocol!"
    },
    7: {
      dayName: "Dia 7 — Domingo",
      title: "Revisão Geral da Semana 1 & Imersão Leve",
      focus: "Consolidar a Semana 1, assistir conteúdos leves em inglês e recarregar para a Semana 2.",
      phonemeTip: {
        title: "Fonema do Dia: Conexão de Frases (Connected Speech Geral)",
        rule: "Palavras em inglês não são faladas isoladamente. 'I am a student' soa como uma palavra única: 'I-am-a-student'.",
        exampleA: "I am a -> /aɪ.æm.ə/",
        exampleB: "ready for -> /red.i.fɔːr/"
      },
      vocab: [
        { en: "Review", pt: "Revisão" },
        { en: "Week 1", pt: "Semana 1" },
        { en: "Foundation", pt: "Fundação" },
        { en: "Confidence", pt: "Confiança" },
        { en: "Goal", pt: "Meta" },
        { en: "Achievement", pt: "Conquista" },
        { en: "Rest", pt: "Descanso" },
        { en: "Movie", pt: "Filme" },
        { en: "Podcast", pt: "Podcast" },
        { en: "Success", pt: "Sucesso" }
      ],
      grammar: {
        title: "Resumo Completo da Semana 1",
        rule: "Você concluiu 7 dias de imersão! Dominou To Be, Artigos (A, An, The), Demonstrativos e Possessivos.",
        table: [
          { pronoun: "To Be", example: "I am a student. Are you ready?", pt: "Sou estudante. Você está pronto?" },
          { pronoun: "Objetos & Possessivos", example: "This is my laptop. Our code is clean.", pt: "Este é meu notebook. Nosso código é limpo." }
        ]
      },
      reading: {
        title: "Texto do Dia 7: Seven Days Complete!",
        text: "Today is the seventh day of my English immersion. I studied every single day for 4 to 6 hours. I know the verb To Be, articles, pronouns, and technical words. I am confident and ready for Week 2!",
        translation: "Hoje é o sétimo dia da minha imersão em inglês. Eu estudei todos os dias por 4 a 6 horas. Eu sei o verbo To Be, artigos, pronomes e palavras técnicas. Estou confiante e pronto para a Semana 2!"
      },
      quiz: [
        { q: "1. Frase correta:", options: ["I am ready", "I is ready", "I be ready"], ans: "I am ready" },
        { q: "2. Artigo correto:", options: ["an algorithm", "a algorithm", "the algorithm error"], ans: "an algorithm" }
      ],
      chunks: [
        { en: "Week 1 is complete!", pt: "A Semana 1 está completa!" },
        { en: "I am ready for Week 2.", pt: "Estou pronto para a Semana 2." },
        { en: "My progress is awesome.", pt: "Meu progresso é incrível." }
      ],
      listeningScript: "Congratulations! You completed week one of your English immersion journey. You have built a solid foundation.",
      speakingPrompt: "Fale em voz alta: 'I finished week 1. I am proud of my dedication. Next week will be even better!'",
      lightReading: "Relax and watch a video in English with English subtitles today.",
      journalPrompt: "Today is Day 7. I completed my first intensive week. I am happy and proud!"
    }
  };

  const currentLesson = lessons[selectedDay] || lessons[1];

  const isDayCompleted = todayTasks.morning_vocab && todayTasks.afternoon_listening && todayTasks.evening_journal;

  const handleAnswerSelect = (qIdx, option) => {
    setUserAnswers(prev => ({ ...prev, [qIdx]: option }));
  };

  const toggleAllTasksForDay = () => {
    toggleTask('morning_vocab');
    toggleTask('morning_grammar');
    toggleTask('morning_reading');
    toggleTask('morning_exercises');
    toggleTask('afternoon_vocab');
    toggleTask('afternoon_listening');
    toggleTask('afternoon_shadowing');
    toggleTask('afternoon_speaking');
    toggleTask('evening_reading');
    toggleTask('evening_listening');
    toggleTask('evening_journal');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Controls Bar */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(2, 132, 199, 0.18) 100%)',
        border: '1px solid var(--accent-emerald)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span className="badge badge-emerald">
              <Zap size={14} /> Bloco Unificado de Estudo Diário (Flexível)
            </span>
            <span className="badge badge-amber">
              <Calendar size={14} /> {getDateForDay(selectedDay)}
            </span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            {currentLesson.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
            Estude todo o conteúdo do dia em um **bloco único no seu próprio ritmo**, sem horários engessados!
          </p>
        </div>

        {/* Controls: Voice Speed + Day Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0, 0, 0, 0.3)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Sliders size={16} color="var(--accent-blue)" />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Voz:</span>
            <select
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', outline: 'none' }}
              value={speechSpeed}
              onChange={(e) => setSpeechSpeed(Number(e.target.value))}
            >
              <option value={0.75} style={{ background: '#111' }}>0.75x (Lento)</option>
              <option value={0.88} style={{ background: '#111' }}>0.88x (Natural - Recomendado)</option>
              <option value={1.00} style={{ background: '#111' }}>1.00x (Velocidade Normal)</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <select
              className="input-field"
              style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem', background: 'var(--bg-card)', borderColor: 'var(--accent-emerald)', fontWeight: 700 }}
              value={selectedDay}
              onChange={(e) => setSelectedDay(Number(e.target.value))}
            >
              <option value={1}>Dia 1 — Segunda: To Be Afirmativa</option>
              <option value={2}>Dia 2 — Terça: To Be Negativa & Perguntas</option>
              <option value={3}>Dia 3 — Quarta: Pronome IT & Computadores</option>
              <option value={4}>Dia 4 — Quinta: Artigos (A, An, The)</option>
              <option value={5}>Dia 5 — Sexta: Demonstrativos (This/That)</option>
              <option value={6}>Dia 6 — Sábado: Possessivos & Teste Semanal</option>
              <option value={7}>Dia 7 — Domingo: Revisão & Imersão Leve</option>
            </select>
          </div>
        </div>
      </div>

      {/* 📌 SINGLE UNIFIED MASTER STUDY BLOCK */}
      <div className="card" style={{ borderColor: 'var(--accent-emerald)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Header of the Master Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>
              CONTEÚDO COMPLETO DO DIA
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
              Bloco Mestre de Imersão do Dia {selectedDay}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Faça a sequência completa no horário que for mais conveniente para você.
            </p>
          </div>

          <button 
            className={`btn ${isDayCompleted ? 'btn-emerald' : 'btn-primary'}`} 
            onClick={toggleAllTasksForDay}
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
          >
            <CheckSquare size={18} /> {isDayCompleted ? 'Dia Concluído com Sucesso! 🎉' : 'Marcar Estudo do Dia como Concluído ✓'}
          </button>
        </div>

        {/* 🗣️ FONEMA & PRONÚNCIA DO DIA (NEW FEATURE!) */}
        {currentLesson.phonemeTip && (
          <div style={{ background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(56, 189, 248, 0.15) 100%)', border: '1px solid var(--accent-purple)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-purple" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Mic size={14} /> FONEMA & PRONÚNCIA NATIVA DO DIA
              </span>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => setTab('phonetics')}>
                Ver Tabela de Fonemas IPA completos →
              </button>
            </div>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-purple)', marginBottom: '0.3rem' }}>
              {currentLesson.phonemeTip.title}
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
              💡 {currentLesson.phonemeTip.rule}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{currentLesson.phonemeTip.exampleA}</span>
                <button className="btn btn-secondary" style={{ padding: '0.2rem' }} onClick={() => handleSpeak(currentLesson.phonemeTip.exampleA)}>
                  <Volume2 size={14} />
                </button>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{currentLesson.phonemeTip.exampleB}</span>
                <button className="btn btn-secondary" style={{ padding: '0.2rem' }} onClick={() => handleSpeak(currentLesson.phonemeTip.exampleB)}>
                  <Volume2 size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 1: VOCABULÁRIO & GRAMÁTICA */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} /> ETAPA 1: Vocabulário & Regra Gramatical
          </h4>

          {/* Vocab Words */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              Palavras do Dia (Clique no som para ouvir a voz nativa):
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
              {currentLesson.vocab.map((v, i) => (
                <div key={i} style={{
                  padding: '0.6rem 0.8rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontSize: '0.9rem' }}>{v.en}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{v.pt}</div>
                  </div>
                  <button className="btn btn-secondary" style={{ padding: '0.3rem', borderRadius: '50%' }} title="Ouvir pronúncia" onClick={() => handleSpeak(v.en)}>
                    <Volume2 size={14} color="var(--accent-blue)" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Rule Table */}
          <div style={{ marginBottom: '1rem' }}>
            <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '0.4rem' }}>
              {currentLesson.grammar.title}
            </h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <strong>Regra:</strong> {currentLesson.grammar.rule}
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-card)', textAlign: 'left', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '0.6rem 1rem', color: 'var(--accent-blue)' }}>Forma</th>
                    <th style={{ padding: '0.6rem 1rem', color: 'var(--accent-emerald)' }}>Frase em Inglês</th>
                    <th style={{ padding: '0.6rem 1rem', color: 'var(--text-muted)' }}>Tradução PT</th>
                    <th style={{ padding: '0.6rem 1rem' }}>Áudio</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLesson.grammar.table.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.6rem 1rem', fontWeight: 700 }}>{row.pronoun}</td>
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{row.example}</td>
                      <td style={{ padding: '0.6rem 1rem', color: 'var(--text-secondary)' }}>{row.pt}</td>
                      <td style={{ padding: '0.6rem 1rem' }}>
                        <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }} onClick={() => handleSpeak(row.example)}>
                          <Volume2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ETAPA 2: LEITURA INTENSIVA & QUIZ */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📖 ETAPA 2: Reading Intensivo & Quiz de Fixação
          </h4>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h5 style={{ fontSize: '1rem', fontWeight: 700 }}>{currentLesson.reading.title}</h5>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => handleSpeak(currentLesson.reading.text)}>
                <Volume2 size={14} /> Ouvir Texto Completo
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }} onClick={() => setShowTranslation(!showTranslation)}>
                {showTranslation ? "Ocultar Tradução" : "Mostrar Tradução PT"}
              </button>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '1rem'
          }}>
            "{currentLesson.reading.text}"
          </div>

          {showTranslation && (
            <div style={{
              background: 'var(--accent-emerald-glow)',
              border: '1px solid var(--accent-emerald)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '1rem'
            }}>
              <strong>Tradução em Português:</strong> "{currentLesson.reading.translation}"
            </div>
          )}

          {/* Mini Quiz */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Quiz de Fixação Rápida:</span>
            {currentLesson.quiz.map((q, qIdx) => (
              <div key={qIdx} style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{q.q}</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAnswers[qIdx] === opt;
                    const isCorrect = opt === q.ans;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswerSelect(qIdx, opt)}
                        className={`btn ${isSelected ? (isCorrect ? 'btn-emerald' : 'btn-secondary') : 'btn-secondary'}`}
                        style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
                      >
                        {opt} {isSelected && (isCorrect ? ' (Correto! 🎉)' : ' (Tente novamente)')}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ETAPA 3: LISTENING, CHUNKS & SHADOWING */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-purple)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Headphones size={18} /> ETAPA 3: Listening, Chunks & Shadowing
          </h4>

          {/* Chunks */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
              Chunks do Dia (Expressões prontas em bloco):
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {currentLesson.chunks.map((c, idx) => (
                <div key={idx} style={{ padding: '0.5rem 0.8rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <span className="chunk-code">{c.en}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({c.pt})</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.4rem' }} onClick={() => handleSpeak(c.en)}>
                    <Volume2 size={13} color="var(--accent-blue)" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Script */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Áudio de Escuta do Dia:</span>
              <button className="btn btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }} onClick={() => handleSpeak(currentLesson.listeningScript)}>
                <Play size={14} /> Reproduzir Áudio de Escuta
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', lineHeight: 1.6 }}>
              "{currentLesson.listeningScript}"
            </p>
          </div>
        </div>

        {/* ETAPA 4: SPEAKING SOLO & DIÁRIO NOTURNO (WITH DIRECT LIVE AI SHORTCUT!) */}
        <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mic size={18} /> ETAPA 4: Produção Oral (Speaking) & Diário
            </h4>
            <button className="btn btn-emerald" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem', boxShadow: '0 0 15px var(--accent-emerald-glow)' }} onClick={() => setTab('ai')}>
              <Bot size={16} /> 🎙️ Treinar Pronúncia desta Fala com a IA Ao Vivo →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-emerald)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                  🗣️ Roteiro de Fala Oral (Speaking Solo)
                </h5>
                <button className="btn btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }} onClick={() => handleSpeak(currentLesson.speakingPrompt)}>
                  <Volume2 size={13} /> Ouvir Roteiro
                </button>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {currentLesson.speakingPrompt}
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.4rem' }}>
                📝 Frase para o Diário de Inglês
              </h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                "{currentLesson.journalPrompt}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
