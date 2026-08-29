import React, { useState } from 'react';
import { BookOpen, Headphones, Mic, CheckCircle2, ChevronRight, ChevronLeft, Volume2, Sparkles, HelpCircle, Award, Play, Calendar, Sliders, CheckSquare, Clock, Zap, Bot, ArrowRight, Check, Gamepad2 } from 'lucide-react';
import { speakNaturalEnglish } from '../utils/audio';

export default function DailyLesson({ currentDay, setDay, toggleTask, todayTasks, setTab }) {
  const [selectedDay, setSelectedDay] = useState(currentDay || 1);
  const [currentStep, setCurrentStep] = useState(1); // Steps 1 to 6
  const [showTranslation, setShowTranslation] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState(0.88);
  const [userAnswers, setUserAnswers] = useState({});

  const handleSpeak = (text) => {
    const cleanText = text.split('/')[0].split('(')[0].replace(/->/g, '').trim();
    speakNaturalEnglish(cleanText, speechSpeed);
  };

  const getDateForDay = (dayNum) => {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + (dayNum - 1));
    const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayName = dayNames[targetDate.getDay()];
    const dateFormatted = targetDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `${dayName} (${dateFormatted})`;
  };

  const lessons = {
    1: {
      dayName: "Dia 1 — Segunda-feira",
      title: "Verbo To Be (Afirmativa) & Apresentação Pessoal",
      focus: "Aprender a se apresentar em inglês e usar o Verbo To Be no presente.",
      phonemeTip: {
        title: "Fonema do Dia: /iː/ (Longo de Sorriso) vs /ɪ/ (Curto Relaxado)",
        rule: "Na palavra 'He' ou 'She', o som é /iː/ (sorrindo). Na palavra 'It' ou 'Is', o som é /ɪ/ curto e relaxado.",
        exampleA: { wordEn: "She", ipa: "/ʃiː/", pt: "Ela" },
        exampleB: { wordEn: "It", ipa: "/ɪt/", pt: "Ele/Ela (objeto)" }
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
      speakingPrompt: "Hello! My name is Ruan. I am a student. I live in Brazil. I study English and Computer Science.",
      journalPrompt: "Today is Day 1. I studied the verb to be. I am happy to start."
    },
    2: {
      dayName: "Dia 2 — Terça-feira",
      title: "Verbo To Be (Negativa & Perguntas)",
      focus: "Aprender a negar (isn't, aren't) e fazer perguntas cotidianas.",
      phonemeTip: {
        title: "Fonema do Dia: O som do TH (/θ/ em 'think' vs /ð/ em 'this')",
        rule: "Coloque a ponta da língua levemente entre os dentes frontais e solte o ar.",
        exampleA: { wordEn: "Think", ipa: "/θɪŋk/", pt: "Pensar" },
        exampleB: { wordEn: "This", ipa: "/ðɪs/", pt: "Este/Esta" }
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
        rule: "Negativa: mantenha a ordem normal e adicione NOT depois de AM/IS/ARE. Perguntas de sim/não: AM/IS/ARE vem antes da pessoa.",
        table: [
          { pronoun: "Afirmação", example: "You are ready.", pt: "Você está pronto." },
          { pronoun: "Negativa", example: "You are not ready. / You aren't ready.", pt: "Você não está pronto." },
          { pronoun: "Pergunta sim/não", example: "Are you ready?", pt: "Você está pronto?" },
          { pronoun: "Pergunta com informação", example: "Where are you? / Who is she?", pt: "Onde você está? / Quem é ela?" },
          { pronoun: "Resposta curta", example: "Yes, I am. / No, she isn't.", pt: "Sim, estou. / Não, ela não está." }
        ]
      },
      reading: {
        title: "Texto do Dia 2: At the Office",
        text: "Is Paul at work today? No, he is not. He is at home. He is sick. But Maria is in the office. She is not sick. She is very busy.",
        translation: "O Paul está no trabalho hoje? Não, ele não está. Ele está em casa. Ele está doente. Mas a Maria está no escritório. Ela não está doente. Ela está muito ocupada."
      },
      quiz: [
        { q: "1. Negativa de 'He is busy':", options: ["He not is busy", "He isn't busy", "He don't busy"], ans: "He isn't busy" },
        { q: "2. Pergunta correta:", options: ["You are ready?", "Are you ready?", "Is you ready?"], ans: "Are you ready?" },
        { q: "3. Complete: '___ you at home?'", options: ["Are", "You are", "Is"], ans: "Are" },
        { q: "4. Resposta curta de 'Are you a student?':", options: ["Yes, I am.", "Yes, you are.", "No, it isn't."], ans: "Yes, I am." }
      ],
      chunks: [
        { en: "I am not tired.", pt: "Eu não estou cansado." },
        { en: "Are you ready?", pt: "Você está pronto?" },
        { en: "No, it is not online.", pt: "Não, não está online." }
      ],
      listeningScript: "Is the server online? No, it is offline right now. Are we ready for the team meeting? Yes, we are ready.",
      speakingPrompt: "Are you a student? Yes, I am. Are you tired today? No, I am not tired.",
      journalPrompt: "Today is Day 2. I learned negative sentences and short answers in English."
    },
    3: {
      dayName: "Dia 3 — Quarta-feira",
      title: "Pronome IT & Hardware de Computadores",
      focus: "Usar o pronome IT para objetos e aprender nomes de peças de computador.",
      phonemeTip: {
        title: "Fonema do Dia: Flap T Americano (T entre vogais = som de 'r' brando)",
        rule: "Na palavra 'Computer' ou 'Water', o T entre duas vogais soa como o 'r' brando de 'arara' em português ('compiúder').",
        exampleA: { wordEn: "Computer", ipa: "/kəmˈpjuː.t̬ɚ/", pt: "Computador" },
        exampleB: { wordEn: "Water", ipa: "/ˈwɑː.t̬ɚ/", pt: "Água" }
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
      speakingPrompt: "My computer is fast. The screen is big. It has good memory.",
      journalPrompt: "Today is Day 3. I learned how to describe my computer in English."
    },
    4: {
      dayName: "Dia 4 — Quinta-feira",
      title: "Artigos A, AN & THE (Singular & Plural)",
      focus: "Dominar quando usar A (consoante), AN (vogal) e THE (específico).",
      phonemeTip: {
        title: "Fonema do Dia: Conexão da Palavra (Connected Speech em 'An App')",
        rule: "Quando uma palavra termina em consoante ('an') e a próxima começa em vogal ('app'), ligamos o som: 'an-app'!",
        exampleA: { wordEn: "an application", ipa: "/ən.æp.lɪˈkeɪ.ʃən/", pt: "um aplicativo" },
        exampleB: { wordEn: "an engineer", ipa: "/ən.en.dʒɪˈnɪr/", pt: "um engenheiro" }
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
      speakingPrompt: "I am a student. I use an app. The app is fast.",
      journalPrompt: "Today is Day 4. I mastered the articles A, AN and THE."
    },
    5: {
      dayName: "Dia 5 — Sexta-feira",
      title: "Demonstrativos (This, That, These, Those)",
      focus: "Saber apontar coisas perto e longe no singular e no plural.",
      phonemeTip: {
        title: "Fonema do Dia: O som do 'TH' com vibração /ð/ (This, That, These, Those)",
        rule: "Diferente de 'think' (sem som), o TH de 'this' faz as cordas vocais vibrarem como um zumbido de abelha na língua.",
        exampleA: { wordEn: "This", ipa: "/ðɪs/", pt: "Este" },
        exampleB: { wordEn: "Those", ipa: "/ðoʊz/", pt: "Aqueles" }
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
      speakingPrompt: "This is my phone. These are my books. That is the door.",
      journalPrompt: "Today is Day 5. I learned how to use This, That, These and Those."
    },
    6: {
      dayName: "Dia 6 — Sábado",
      title: "Possessivos (My, Your, His, Her, Our, Their) & TESTE DE SÁBADO",
      focus: "Indicar posse e realizar a suíte de avaliação semanal (Speaking Audit com Gravador).",
      phonemeTip: {
        title: "Fonema do Dia: O 'R' Enrolado Americano (/r/ em 'Our', 'Her', 'Their')",
        rule: "O 'R' americano puxa a língua para trás em direção ao céu da boca sem encostar: 'ou-er', 'herr', 'th-eir'.",
        exampleA: { wordEn: "Our", ipa: "/ˈaʊ.ɚ/", pt: "Nosso" },
        exampleB: { wordEn: "Her", ipa: "/hɝː/", pt: "Dela" }
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
      speakingPrompt: "I finished my Saturday Test Protocol and my English speech.",
      journalPrompt: "Today is Day 6. I finished my Saturday Test Protocol!"
    },
    7: {
      dayName: "Dia 7 — Domingo",
      title: "Revisão Geral da Semana 1 & Imersão Leve",
      focus: "Consolidar a Semana 1, assistir conteúdos leves em inglês e recarregar para a Semana 2.",
      phonemeTip: {
        title: "Fonema do Dia: Conexão de Frases (Connected Speech Geral)",
        rule: "Palavras em inglês não são faladas isoladamente. 'I am a student' soa como uma palavra única: 'I-am-a-student'.",
        exampleA: { wordEn: "I am a", ipa: "/aɪ.æm.ə/", pt: "Eu sou um" },
        exampleB: { wordEn: "ready for", ipa: "/red.i.fɔːr/", pt: "pronto para" }
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
      speakingPrompt: "I finished week 1. I am proud of my dedication. Next week will be even better!",
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

  const stepTitles = [
    { num: 1, label: "📚 Vocabulário do Dia" },
    { num: 2, label: "📐 Regra Gramatical" },
    { num: 3, label: "🗣️ Fonema & Pronúncia" },
    { num: 4, label: "📖 Leitura & Quiz" },
    { num: 5, label: "🎧 Escuta & Shadowing" },
    { num: 6, label: "🎙️ Fala com IA & Diário" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Top Single Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(16, 185, 129, 0.18) 100%)',
        border: '1px solid var(--accent-emerald)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span className="badge badge-emerald">
              <Zap size={14} /> Estudo Guiado em Ordem
            </span>
            <span className="badge badge-amber">
              <Calendar size={14} /> {getDateForDay(selectedDay)}
            </span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            Dia {selectedDay}: {currentLesson.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
            {currentLesson.focus}
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0, 0, 0, 0.35)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Sliders size={16} color="var(--accent-blue)" />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Voz:</span>
            <select
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', outline: 'none' }}
              value={speechSpeed}
              onChange={(e) => setSpeechSpeed(Number(e.target.value))}
            >
              <option value={0.75} style={{ background: '#111' }}>0.75x (Lento)</option>
              <option value={0.88} style={{ background: '#111' }}>0.88x (Natural)</option>
              <option value={1.00} style={{ background: '#111' }}>1.00x (Normal)</option>
            </select>
          </div>

          <select
            className="input-field"
            style={{ width: 'auto', padding: '0.55rem 1rem', fontSize: '0.9rem', background: 'var(--bg-card)', borderColor: 'var(--accent-emerald)', fontWeight: 700 }}
            value={selectedDay}
            onChange={(e) => {
              setSelectedDay(Number(e.target.value));
              setCurrentStep(1);
            }}
          >
            <option value={1}>Dia 1 — To Be Afirmativa</option>
            <option value={2}>Dia 2 — To Be Negativa & Perguntas</option>
            <option value={3}>Dia 3 — Pronome IT & Hardware</option>
            <option value={4}>Dia 4 — Artigos (A, An, The)</option>
            <option value={5}>Dia 5 — Demonstrativos (This/That)</option>
            <option value={6}>Dia 6 — Possessivos & Teste</option>
            <option value={7}>Dia 7 — Revisão da Semana 1</option>
          </select>
        </div>
      </div>

      {/* 🧭 STEPPER PROGRESS BAR (Passos 1 a 6) */}
      <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 800 }}>
            PASSO {currentStep} DE 6
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Siga a sequência para concluir o estudo do dia
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.4rem' }}>
          {stepTitles.map(s => (
            <button
              key={s.num}
              onClick={() => setCurrentStep(s.num)}
              style={{
                padding: '0.6rem 0.3rem',
                borderRadius: 'var(--radius-sm)',
                border: currentStep === s.num ? '1px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                background: currentStep === s.num ? 'var(--accent-emerald-glow)' : (currentStep > s.num ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0,0,0,0.2)'),
                color: currentStep === s.num ? 'var(--accent-emerald)' : (currentStep > s.num ? 'var(--text-primary)' : 'var(--text-muted)'),
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              {s.num}. {s.label.split(' ')[1] || s.label} {currentStep > s.num && '✓'}
            </button>
          ))}
        </div>
      </div>

      {/* 📌 PASSO 1: VOCABULÁRIO DO DIA */}
      {currentStep === 1 && (
        <div className="card" style={{ borderColor: 'var(--accent-amber)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 className="card-title" style={{ color: 'var(--accent-amber)' }}>
              <BookOpen size={20} /> Passo 1 de 6: Vocabulário do Dia
            </h3>
            <button 
              className="btn btn-emerald" 
              onClick={() => setTab('game')}
              style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem', background: 'rgba(251, 191, 36, 0.15)', color: 'var(--accent-amber)', borderColor: 'rgba(251, 191, 36, 0.3)' }}
            >
              <Gamepad2 size={16} /> 🎮 Jogar Desafio deste Vocabulário no Game Arena →
            </button>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Ouça cada palavra em inglês e repita em voz alta para memorizar a pronúncia nativa:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.75rem' }}>
            {currentLesson.vocab.map((v, i) => (
              <div key={i} style={{
                padding: '0.75rem 1rem',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--accent-blue)', fontSize: '1rem' }}>{v.en}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{v.pt}</div>
                </div>
                <button className="btn btn-secondary" style={{ padding: '0.35rem', borderRadius: '50%' }} onClick={() => handleSpeak(v.en)}>
                  <Volume2 size={16} color="var(--accent-blue)" />
                </button>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-emerald" onClick={() => setCurrentStep(2)} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              Avançar para Passo 2: Regra Gramatical <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 📌 PASSO 2: REGRA GRAMATICAL */}
      {currentStep === 2 && (
        <div className="card" style={{ borderColor: 'var(--accent-blue)' }}>
          <h3 className="card-title" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
            <Zap size={20} /> Passo 2 de 6: {currentLesson.grammar.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6, background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            💡 <strong>Regra Simplificada:</strong> {currentLesson.grammar.rule}
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '1.75rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'rgba(0,0,0,0.4)', textAlign: 'left', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '0.75rem 1rem', color: 'var(--accent-blue)' }}>Tipo</th>
                  <th style={{ padding: '0.75rem 1rem', color: 'var(--accent-emerald)' }}>Exemplo em Inglês</th>
                  <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Tradução em Português</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Áudio</th>
                </tr>
              </thead>
              <tbody>
                {currentLesson.grammar.table.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>{row.pronoun}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{row.example}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{row.pt}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem' }} onClick={() => handleSpeak(row.example)}>
                        <Volume2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(1)}>
              <ChevronLeft size={18} /> Voltar ao Passo 1
            </button>
            <button className="btn btn-emerald" onClick={() => setCurrentStep(3)} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              Avançar para Passo 3: Fonema & Pronúncia <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 📌 PASSO 3: FONEMA & PRONÚNCIA NATIVA */}
      {currentStep === 3 && currentLesson.phonemeTip && (
        <div className="card" style={{ borderColor: 'var(--accent-purple)' }}>
          <h3 className="card-title" style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>
            <Mic size={20} /> Passo 3 de 6: {currentLesson.phonemeTip.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6, background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            💡 <strong>Dica de Pronúncia:</strong> {currentLesson.phonemeTip.rule}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{currentLesson.phonemeTip.exampleA.wordEn}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{currentLesson.phonemeTip.exampleA.ipa}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>({currentLesson.phonemeTip.exampleA.pt})</div>
              </div>
              <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem' }} onClick={() => handleSpeak(currentLesson.phonemeTip.exampleA.wordEn)}>
                <Volume2 size={16} /> Ouvir Inglês
              </button>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{currentLesson.phonemeTip.exampleB.wordEn}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{currentLesson.phonemeTip.exampleB.ipa}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>({currentLesson.phonemeTip.exampleB.pt})</div>
              </div>
              <button className="btn btn-emerald" style={{ padding: '0.4rem 0.8rem' }} onClick={() => handleSpeak(currentLesson.phonemeTip.exampleB.wordEn)}>
                <Volume2 size={16} /> Ouvir Inglês
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(2)}>
              <ChevronLeft size={18} /> Voltar ao Passo 2
            </button>
            <button className="btn btn-emerald" onClick={() => setCurrentStep(4)} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              Avançar para Passo 4: Leitura & Quiz <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 📌 PASSO 4: LEITURA & QUIZ */}
      {currentStep === 4 && (
        <div className="card" style={{ borderColor: 'var(--accent-blue)' }}>
          <h3 className="card-title" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
            <BookOpen size={20} /> Passo 4 de 6: Reading Intensivo & Quiz
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{currentLesson.reading.title}</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }} onClick={() => handleSpeak(currentLesson.reading.text)}>
                <Volume2 size={15} /> Ouvir Texto
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }} onClick={() => setShowTranslation(!showTranslation)}>
                {showTranslation ? "Ocultar Tradução" : "Mostrar Tradução PT"}
              </button>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
            "{currentLesson.reading.text}"
          </div>

          {showTranslation && (
            <div style={{ background: 'var(--accent-emerald-glow)', border: '1px solid var(--accent-emerald)', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              <strong>Tradução:</strong> "{currentLesson.reading.translation}"
            </div>
          )}

          {/* Quiz */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Quiz de Fixação Rápida:</span>
            {currentLesson.quiz.map((q, qIdx) => (
              <div key={qIdx} style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
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

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(3)}>
              <ChevronLeft size={18} /> Voltar ao Passo 3
            </button>
            <button className="btn btn-emerald" onClick={() => setCurrentStep(5)} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              Avançar para Passo 5: Escuta & Shadowing <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 📌 PASSO 5: ESCUTA & SHADOWING */}
      {currentStep === 5 && (
        <div className="card" style={{ borderColor: 'var(--accent-purple)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 className="card-title" style={{ color: 'var(--accent-purple)' }}>
              <Headphones size={20} /> Passo 5 de 6: Listening, Chunks & Shadowing
            </h3>
            <button 
              className="btn btn-emerald" 
              onClick={() => setTab('game')}
              style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-blue)', borderColor: 'rgba(56, 189, 248, 0.3)' }}
            >
              <Gamepad2 size={16} /> 🎧 Treinar Desafio de Escuta às Cegas no Game Arena →
            </button>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
              Chunks do Dia (Expressões prontas):
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {currentLesson.chunks.map((c, idx) => (
                <div key={idx} style={{ padding: '0.5rem 0.8rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <span className="chunk-code">{c.en}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({c.pt})</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.4rem' }} onClick={() => handleSpeak(c.en)}>
                    <Volume2 size={13} color="var(--accent-blue)" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Áudio de Escuta do Dia:</span>
              <button className="btn btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }} onClick={() => handleSpeak(currentLesson.listeningScript)}>
                <Play size={14} /> Reproduzir Áudio de Escuta
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', background: 'rgba(0, 0, 0, 0.3)', padding: '1rem', borderRadius: 'var(--radius-sm)', lineHeight: 1.6 }}>
              "{currentLesson.listeningScript}"
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(4)}>
              <ChevronLeft size={18} /> Voltar ao Passo 4
            </button>
            <button className="btn btn-emerald" onClick={() => setCurrentStep(6)} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              Avançar para Passo 6: Fala com IA & Conclusão <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* 📌 PASSO 6: FALA COM IA & DIÁRIO & CONCLUSÃO */}
      {currentStep === 6 && (
        <div className="card" style={{ borderColor: 'var(--accent-emerald)' }}>
          <h3 className="card-title" style={{ color: 'var(--accent-emerald)', marginBottom: '1rem' }}>
            <Mic size={20} /> Passo 6 de 6: Treino de Fala com IA & Diário
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
            <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-emerald)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
                🗣️ Roteiro de Fala Oral (Speaking Solo)
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.85rem' }}>
                "{currentLesson.speakingPrompt}"
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }} onClick={() => handleSpeak(currentLesson.speakingPrompt)}>
                  <Volume2 size={14} /> Ouvir Roteiro
                </button>
                <button className="btn btn-emerald" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }} onClick={() => setTab('ai')}>
                  <Bot size={14} /> Abrir Tutor IA de Voz →
                </button>
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
                📝 Frase para o Diário de Inglês
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                "{currentLesson.journalPrompt}"
              </p>
            </div>
          </div>

          {/* Conclusion Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(2, 132, 199, 0.15) 100%)',
            border: '1px solid var(--accent-emerald)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.85rem'
          }}>
            <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
              🎉 Parabéns! Você concluiu todas as 6 etapas do Dia {selectedDay}!
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
              Você praticou vocabulário, gramática, fonemas, leitura, listening, quiz e fala em inglês!
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                className={`btn ${isDayCompleted ? 'btn-emerald' : 'btn-primary'}`} 
                onClick={toggleAllTasksForDay}
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
              >
                <CheckSquare size={18} /> {isDayCompleted ? 'Dia Registrado como Concluído! ✓' : 'Marcar Dia Concluído ✓'}
              </button>
              
              {selectedDay < 7 && (
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedDay(selectedDay + 1);
                    setCurrentStep(1);
                  }}
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                >
                  Ir para o Dia {selectedDay + 1} <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
