// FASE 2A — Semanas 6 e 7 (Dias 36 a 50) — Modais, Advérbios de Frequência, Object Pronouns
export const days_36_50 = {
  36: {
    dayName: "Dia 36 — Segunda-feira",
    title: "Can / Can't (Habilidade & Permissão)",
    focus: "Falar sobre o que você sabe fazer e o que não sabe.",
    vocab: [
      { en: "Can", pt: "Poder / Saber fazer" },
      { en: "Can't", pt: "Não poder / Não saber" },
      { en: "Swim", pt: "Nadar" },
      { en: "Drive", pt: "Dirigir" },
      { en: "Cook", pt: "Cozinhar" },
      { en: "Sing", pt: "Cantar" },
      { en: "Dance", pt: "Dançar" },
      { en: "Install", pt: "Instalar" },
      { en: "Configure", pt: "Configurar" },
      { en: "Solve", pt: "Resolver" }
    ],
    grammar: {
      title: "Modal CAN",
      rule: "CAN nunca muda de forma: I can, she can, they can (sem -s!). Negativa: can't / cannot. Pergunta: Can you...? Depois de can vem o verbo base.",
      table: [
        { form: "Habilidade", example: "I can install software. She can solve problems.", pt: "Eu sei instalar software. Ela sabe resolver problemas." },
        { form: "Negativa", example: "He can't swim. We can't drive.", pt: "Ele não sabe nadar. Nós não sabemos dirigir." },
        { form: "Pergunta", example: "Can you configure the router? Yes, I can.", pt: "Você consegue configurar o roteador? Sim." }
      ]
    },
    reading: {
      title: "What Can I Do?",
      text: "I can install programs and configure networks. I can't fix hardware, but I can find the problem. My brother can cook very well, but he can't sing. Can you program? Yes, I can program in JavaScript. Skills are important for our careers.",
      translation: "Eu sei instalar programas e configurar redes. Não sei consertar hardware, mas consigo encontrar o problema. Meu irmão cozinha muito bem, mas não sabe cantar. Você sabe programar? Sim, sei programar em JavaScript. Habilidades são importantes para nossas carreiras."
    },
    quiz: [
      { q: "Complete: 'She ___ solve problems.'", options: ["can", "cans", "can to"], ans: "can" },
      { q: "Complete: 'He ___ swim.' (negativa)", options: ["can't", "don't can", "not can"], ans: "can't" },
      { q: "Pergunta correta:", options: ["Can you configure it?", "You can configure?", "Can you to configure?"], ans: "Can you configure it?" }
    ],
    chunks: [
      { en: "I can install software", pt: "sei instalar software" },
      { en: "can you program?", pt: "você sabe programar?" },
      { en: "I can't fix hardware", pt: "não sei consertar hardware" }
    ],
    listeningScript: "Can you help me? I can't open the file. Can you configure the printer? Yes, I can. My colleague can't install the update. Can you do it for me? Of course I can.",
    speakingPrompt: "Fale sobre suas habilidades: 'I can program. I can install software. I can't drive. Can you cook?'",
    lightReading: "Abilities in English match permissions in code: can execute, can write, can't delete — the modal can is the language of system roles.",
    journalPrompt: "Today is Day 36. I learned the modal verb CAN.",
    tip: "DICA DE PRONÚNCIA: 'can't' termina com som de T bem definido (kãnt). 'Can' sozinho é fraco (k'n). Ouça a diferença no áudio 3 vezes — ela muda totalmente o sentido."
  },
  37: {
    dayName: "Dia 37 — Terça-feira",
    title: "Could / Couldn't (Pedidos & Passado)",
    focus: "Fazer pedidos educados e falar de habilidades no passado com could.",
    vocab: [
      { en: "Could", pt: "Poderia (pedido / passado)" },
      { en: "Please", pt: "Por favor" },
      { en: "Help", pt: "Ajuda / Ajudar" },
      { en: "Explain", pt: "Explicar" },
      { en: "Repeat", pt: "Repetir" },
      { en: "Speak slowly", pt: "Falar devagar" },
      { en: "Turn on", pt: "Ligar" },
      { en: "Turn off", pt: "Desligar" },
      { en: "Open", pt: "Abrir" },
      { en: "Close", pt: "Fechar" }
    ],
    grammar: {
      title: "Modal COULD",
      rule: "COULD é o passado de CAN e também forma pedidos educados: Could you help me? (mais educado que Can you?). Negativa: couldn't.",
      table: [
        { form: "Passado", example: "Before, I couldn't speak English. Now I can.", pt: "Antes eu não sabia falar inglês. Agora sei." },
        { form: "Pedido educado", example: "Could you help me, please?", pt: "Você poderia me ajudar, por favor?" },
        { form: "Negativa", example: "I couldn't find the file yesterday.", pt: "Não consegui encontrar o arquivo ontem." }
      ]
    },
    reading: {
      title: "Asking for Help",
      text: "Could you help me, please? I couldn't open the application this morning. Could you explain the error? Of course. Could you speak slowly? Yes, of course. Before this job, I couldn't use Linux. Now I can configure it. We couldn't finish the task yesterday, but we can finish it today.",
      translation: "Você poderia me ajudar, por favor? Não consegui abrir o aplicativo esta manhã. Você poderia explicar o erro? Claro. Você poderia falar devagar? Sim, claro. Antes deste emprego, eu não sabia usar Linux. Agora sei configurá-lo. Não conseguimos terminar a tarefa ontem, mas podemos terminá-la hoje."
    },
    quiz: [
      { q: "Pedido educado:", options: ["Could you help me?", "You could help?", "Could you helping?"], ans: "Could you help me?" },
      { q: "Passado: 'Before, I ___ speak English.'", options: ["couldn't", "can't", "don't"], ans: "couldn't" },
      { q: "Complete: 'Could you ___ slowly?'", options: ["speak", "speaking", "spoke"], ans: "speak" }
    ],
    chunks: [
      { en: "could you help me, please?", pt: "você poderia me ajudar, por favor?" },
      { en: "could you speak slowly?", pt: "você poderia falar devagar?" },
      { en: "I couldn't find the file", pt: "não consegui encontrar o arquivo" }
    ],
    listeningScript: "Excuse me, could you help me? I couldn't turn on my computer this morning. Could you look at it? Yes. Could you speak slowly? No problem. Could you turn it off and on again? That is the first step!",
    speakingPrompt: "Peça ajuda de 3 formas: 'Could you help me? Could you explain this? Could you repeat, please?'",
    lightReading: "First-level support starts with polite requests: could you restart the machine? could you share your screen? — politeness is part of the protocol.",
    journalPrompt: "Today is Day 37. I learned could and couldn't.",
    tip: "DICA DE ESCRITA: 'Could you...?' é a forma padrão de pedir em e-mails profissionais. Use: 'Could you send the file?', 'Could you confirm the meeting?' — sempre com 'please' no fim."
  },
  38: {
    dayName: "Dia 38 — Quarta-feira",
    title: "Should / Shouldn't (Conselhos)",
    focus: "Dar e receber conselhos com should e shouldn't.",
    vocab: [
      { en: "Should", pt: "Deveria" },
      { en: "Shouldn't", pt: "Não deveria" },
      { en: "Advice", pt: "Conselho" },
      { en: "Try", pt: "Tentar" },
      { en: "Rest", pt: "Descansar" },
      { en: "Sleep", pt: "Dormir" },
      { en: "Study", pt: "Estudar" },
      { en: "Backup", pt: "Cópia de segurança" },
      { en: "Update", pt: "Atualizar" },
      { en: "Save", pt: "Salvar" }
    ],
    grammar: {
      title: "Modal SHOULD",
      rule: "SHOULD + verbo base dá conselhos: You should study every day. Negativa: shouldn't. Pergunta: Should I...? Respostas: Yes, you should / No, you shouldn't.",
      table: [
        { form: "Conselho", example: "You should study English every day.", pt: "Você deveria estudar inglês todos os dias." },
        { form: "Negativa", example: "You shouldn't work all night.", pt: "Você não deveria trabalhar a noite toda." },
        { form: "Pergunta", example: "Should I update the system? Yes, you should.", pt: "Deveria atualizar o sistema? Sim, deveria." }
      ]
    },
    reading: {
      title: "Good Advice",
      text: "My manager gives me good advice. He says I should always save my work and make backups. I shouldn't work all night because I make more errors. You should update the software regularly. You shouldn't click on unknown links. Simple rules keep our systems safe.",
      translation: "Meu gerente me dá bons conselhos. Ele diz que eu deveria sempre salvar meu trabalho e fazer backups. Eu não deveria trabalhar a noite toda porque cometo mais erros. Você deveria atualizar o software regularmente. Você não deveria clicar em links desconhecidos. Regras simples mantêm nossos sistemas seguros."
    },
    quiz: [
      { q: "Conselho: 'You ___ study every day.'", options: ["should", "shoulds", "should to"], ans: "should" },
      { q: "Negativa: 'You ___ click unknown links.'", options: ["shouldn't", "don't should", "not should"], ans: "shouldn't" },
      { q: "Pergunta: '___ I make a backup?'", options: ["Should", "Shoulds", "Should to"], ans: "Should" }
    ],
    chunks: [
      { en: "you should make backups", pt: "você deveria fazer backups" },
      { en: "you shouldn't click unknown links", pt: "você não deveria clicar em links desconhecidos" },
      { en: "should I update the system?", pt: "devo atualizar o sistema?" }
    ],
    listeningScript: "You look tired. You should sleep more. And you should drink more water. You shouldn't use your phone at night. Should I stop playing games? Yes, you should. Follow this advice and you will feel better.",
    speakingPrompt: "Dê 3 conselhos: 'You should study every day. You should make backups. You shouldn't work at night.'",
    lightReading: "Security policies are advice turned into rules: you should use strong passwords; you shouldn't share credentials — should is the modal of best practices.",
    journalPrompt: "Today is Day 38. I learned should and shouldn't.",
    tip: "DICA DE LEITURA: nos textos de segurança e manuais, 'should/shouldn't' marca boas/más práticas. Ao ler, identifique: o que 'devo fazer' e o que 'não devo fazer'."
  },
  39: {
    dayName: "Dia 39 — Quinta-feira",
    title: "Must / Mustn't & Have To (Obrigação)",
    focus: "Expressar obrigação forte e proibição com must, mustn't e have to.",
    vocab: [
      { en: "Must", pt: "Deve (obrigação forte)" },
      { en: "Mustn't", pt: "Não pode (proibição)" },
      { en: "Have to", pt: "Ter que" },
      { en: "Rule", pt: "Regra" },
      { en: "Security", pt: "Segurança" },
      { en: "Policy", pt: "Política" },
      { en: "Deadline", pt: "Prazo final" },
      { en: "Attend", pt: "Participar" },
      { en: "Sign", pt: "Assinar" },
      { en: "Wear", pt: "Usar (vestir)" }
    ],
    grammar: {
      title: "MUST e HAVE TO",
      rule: "MUST = obrigação forte/regra (I must follow the policy). MUSTN'T = proibição (You mustn't share passwords). HAVE TO = obrigação externa (I have to attend the meeting). Negativa de have to = don't have to (não é obrigatório).",
      table: [
        { form: "Obrigação", example: "I must follow the security rules.", pt: "Devo seguir as regras de segurança." },
        { form: "Proibição", example: "You mustn't share your password.", pt: "Você não pode compartilhar sua senha." },
        { form: "Have to", example: "I have to attend the meeting. I don't have to work on Sunday.", pt: "Tenho que participar da reunião. Não preciso trabalhar no domingo." }
      ]
    },
    reading: {
      title: "Office Rules",
      text: "In our company, you must follow the security policy. You mustn't share your passwords with anyone. You have to attend the Monday meeting. You don't have to come to the office on Fridays. You must sign the document before the deadline. The rules are simple and important.",
      translation: "Na nossa empresa, você deve seguir a política de segurança. Você não pode compartilhar suas senhas com ninguém. Você tem que participar da reunião de segunda. Você não precisa ir ao escritório às sextas. Você deve assinar o documento antes do prazo. As regras são simples e importantes."
    },
    quiz: [
      { q: "Proibição: 'You ___ share your password.'", options: ["mustn't", "must", "don't have to"], ans: "mustn't" },
      { q: "Obrigação: 'I ___ attend the meeting.'", options: ["must", "mustn't", "may"], ans: "must" },
      { q: "'You don't have to work' significa:", options: ["não é obrigatório", "é proibido", "é obrigatório"], ans: "não é obrigatório" }
    ],
    chunks: [
      { en: "you mustn't share passwords", pt: "você não pode compartilhar senhas" },
      { en: "I have to attend the meeting", pt: "tenho que participar da reunião" },
      { en: "you don't have to work", pt: "você não precisa trabalhar" }
    ],
    listeningScript: "Attention team: you must complete the training by Friday. You mustn't use personal devices for work. You have to sign the new policy. You don't have to print the document. That is all. Thank you.",
    speakingPrompt: "Explique as regras do seu curso: 'You must study every day. You mustn't skip the tests. You don't have to be perfect.'",
    lightReading: "Must/mustn't express hard rules; don't have to expresses optionality — the exact semantics of configuration flags in code.",
    journalPrompt: "Today is Day 39. I learned must, mustn't and have to.",
    tip: "DICA DE MEMÓRIA: MUST + not = proibido. HAVE TO + not = opcional. Guarde: 'mustn't = NÃO PODE', 'don't have to = NÃO PRECISA'. A diferença é enorme em testes e no trabalho."
  },
  40: {
    dayName: "Dia 40 — Sexta-feira",
    title: "Revisão dos Modais (Can, Could, Should, Must)",
    focus: "Consolidar os 4 modais e escolher o certo em cada situação.",
    vocab: [
      { en: "Probably", pt: "Provavelmente" },
      { en: "Certainly", pt: "Certamente" },
      { en: "Maybe", pt: "Talvez" },
      { en: "Of course", pt: "Claro" },
      { en: "Carefully", pt: "Com cuidado" },
      { en: "Quickly", pt: "Rapidamente" },
      { en: "Early", pt: "Cedo" },
      { en: "Late", pt: "Tarde" },
      { en: "Always", pt: "Sempre" },
      { en: "Never", pt: "Nunca" }
    ],
    grammar: {
      title: "Resumo dos Modais",
      rule: "CAN = habilidade/permissão. COULD = pedido educado/passado. SHOULD = conselho. MUST = obrigação. MUSTN'T = proibição. Todos seguidos de verbo base.",
      table: [
        { form: "Can / Could", example: "I can fix it. Could you wait?", pt: "Eu consigo consertar. Você poderia esperar?" },
        { form: "Should", example: "You should test the code.", pt: "Você deveria testar o código." },
        { form: "Must / Mustn't", example: "You must be careful. You mustn't rush.", pt: "Você deve ter cuidado. Você não pode se apressar." }
      ]
    },
    reading: {
      title: "A Smart Decision",
      text: "You should always test your code carefully. You mustn't deploy without testing. I can write the tests quickly. Could you review them? Of course. We must follow the process. If you are not sure, you should ask. We can fix everything before the deadline.",
      translation: "Você deveria sempre testar seu código com cuidado. Você não pode fazer deploy sem testar. Eu consigo escrever os testes rapidamente. Você poderia revisá-los? Claro. Devemos seguir o processo. Se você não tem certeza, deveria perguntar. Podemos consertar tudo antes do prazo."
    },
    quiz: [
      { q: "Conselho:", options: ["You should test the code", "You mustn't test the code", "You can't test the code"], ans: "You should test the code" },
      { q: "Pedido educado:", options: ["Could you review it?", "You could review it!", "Could you reviewed it?"], ans: "Could you review it?" },
      { q: "Habilidade:", options: ["I can write tests", "I should write tests", "I must write tests"], ans: "I can write tests" }
    ],
    chunks: [
      { en: "you mustn't deploy without testing", pt: "você não pode fazer deploy sem testar" },
      { en: "could you review it?", pt: "você poderia revisar?" },
      { en: "we can fix everything", pt: "podemos consertar tudo" }
    ],
    listeningScript: "Can you review my code? Sure, I can. Could you send it to me? Yes. You should check the error messages. You mustn't ignore the warnings. I can fix them now. That is the right approach!",
    speakingPrompt: "Use os 4 modais: 'I can code. Could you help me? You should study daily. You mustn't give up.'",
    lightReading: "Code reviews combine all modals: you should refactor this, you mustn't merge untested code, can you explain this line? — the reviewer speaks modals.",
    journalPrompt: "Today is Day 40. I reviewed all the modal verbs.",
    tip: "DICA DE ESCRITA: na dúvida entre modais, use a escala de força: CAN (posso) < SHOULD (devo) < MUST (tenho de). Escolha o nível de força do seu contexto e sua frase fica natural."
  },
  41: {
    dayName: "Dia 41 — Sábado",
    title: "Modais na Prática + TESTE DE SÁBADO 6",
    focus: "Aplicar os modais em situações reais e realizar o teste semanal.",
    vocab: [
      { en: "Permission", pt: "Permissão" },
      { en: "Obligation", pt: "Obrigação" },
      { en: "Advice", pt: "Conselho" },
      { en: "Ability", pt: "Habilidade" },
      { en: "Prohibition", pt: "Proibição" },
      { en: "Suggestion", pt: "Sugestão" },
      { en: "Option", pt: "Opção" },
      { en: "Decision", pt: "Decisão" },
      { en: "Responsibility", pt: "Responsabilidade" },
      { en: "Opportunity", pt: "Oportunidade" }
    ],
    grammar: {
      title: "Checkpoint dos Modais",
      rule: "Em uma frase, o modal vem primeiro, depois o sujeito (nas perguntas) e sempre verbo base depois do modal.",
      table: [
        { form: "Habilidade", example: "Can you speak English? Yes, I can.", pt: "Você fala inglês? Sim." },
        { form: "Pedido", example: "Could you send the report?", pt: "Você poderia enviar o relatório?" },
        { form: "Regra", example: "You must sign the document.", pt: "Você deve assinar o documento." }
      ]
    },
    reading: {
      title: "A New Employee",
      text: "Welcome, Pedro! In this company, you can use the laptops in the meeting room. You can't take them home without permission. You should ask your manager first. You must attend the security training. You mustn't use your personal email for work. You don't have to work on Saturdays. Any questions?",
      translation: "Bem-vindo, Pedro! Nesta empresa, você pode usar os notebooks da sala de reuniões. Você não pode levá-los para casa sem permissão. Você deveria perguntar ao seu gerente primeiro. Você deve participar do treinamento de segurança. Você não pode usar seu e-mail pessoal para trabalho. Você não precisa trabalhar aos sábados. Alguma pergunta?"
    },
    quiz: [
      { q: "'You can't take them home' =", options: ["não é permitido", "é obrigatório", "é recomendado"], ans: "não é permitido" },
      { q: "'You must attend the training' =", options: ["obrigação", "proibição", "sugestão"], ans: "obrigação" },
      { q: "'You don't have to work on Saturdays' =", options: ["não é obrigatório", "é proibido", "deve trabalhar"], ans: "não é obrigatório" }
    ],
    chunks: [
      { en: "without permission", pt: "sem permissão" },
      { en: "you must attend the training", pt: "você deve participar do treinamento" },
      { en: "any questions?", pt: "alguma pergunta?" }
    ],
    listeningScript: "Hi Pedro, welcome. You can use the laptops here. You mustn't take them home. You should ask before using the printer. You have to sign the security policy. You don't have to work on Saturdays. Welcome to the team!",
    speakingPrompt: "Explique as regras da sua casa em inglês: 'You must... You can... You can't... You should...'",
    lightReading: "Onboarding documents are modal-heavy: what you can, must, mustn't and don't have to do — four different permissions, four different words.",
    journalPrompt: "Today is Day 41. I completed my sixth Saturday Test!",
    tip: "DICA DE LISTENING: modais são fracos no som — 'can' quase desaparece. Treine: ouça a frase, escreva o modal que ouviu e confira com o script. Em 2 semanas seu ouvido capta todos."
  },
  42: {
    dayName: "Dia 42 — Domingo",
    title: "Revisão Geral da Semana 6 & Imersão Leve",
    focus: "Consolidar os modais com leitura e escuta leves.",
    vocab: [
      { en: "Rules", pt: "Regras" },
      { en: "Laws", pt: "Leis" },
      { en: "Freedom", pt: "Liberdade" },
      { en: "Choice", pt: "Escolha" },
      { en: "Fair", pt: "Justo" },
      { en: "Careful", pt: "Cuidadoso" },
      { en: "Safe", pt: "Seguro" },
      { en: "Dangerous", pt: "Perigoso" },
      { en: "Smart", pt: "Esperto" },
      { en: "Patient", pt: "Paciente" }
    ],
    grammar: {
      title: "Revisão 42 — O Mundo das Regras",
      rule: "Modais organizam a vida: can (possibilidade), should (conselho), must (regra). Use-os para falar de qualquer sistema de regras.",
      table: [
        { form: "Liberdade", example: "You can choose your language.", pt: "Você pode escolher seu idioma." },
        { form: "Prudência", example: "You should be careful online.", pt: "Você deveria ter cuidado online." },
        { form: "Lei", example: "You must follow the rules.", pt: "Você deve seguir as regras." }
      ]
    },
    reading: {
      title: "Rules for Online Safety",
      text: "The internet is wonderful, but you must be careful. You should use strong passwords. You mustn't share personal information with strangers. You can choose what to post, but you should think first. Smart users are patient and safe. Follow the rules and enjoy the freedom.",
      translation: "A internet é maravilhosa, mas você deve ter cuidado. Você deveria usar senhas fortes. Você não pode compartilhar informações pessoais com estranhos. Você pode escolher o que postar, mas deveria pensar antes. Usuários espertos são pacientes e seguros. Siga as regras e aproveite a liberdade."
    },
    quiz: [
      { q: "Conselho para a internet:", options: ["You should use strong passwords", "You mustn't use passwords", "You can't choose passwords"], ans: "You should use strong passwords" },
      { q: "'Strangers' significa:", options: ["estranhos/desconhecidos", "amigos", "familiares"], ans: "estranhos/desconhecidos" },
      { q: "Complete: 'You ___ be careful online.'", options: ["must", "mustn't", "can't"], ans: "must" }
    ],
    chunks: [
      { en: "you must be careful", pt: "você deve ter cuidado" },
      { en: "smart users are patient", pt: "usuários espertos são pacientes" },
      { en: "enjoy the freedom", pt: "aproveite a liberdade" }
    ],
    listeningScript: "The internet is great, but be careful. You should use strong passwords. You mustn't share personal information. You can choose your content. Think first, post later. Stay safe!",
    speakingPrompt: "Dê regras de segurança: 'You must be careful. You should use strong passwords. You can choose what to post.'",
    lightReading: "Digital citizenship is rule-based: what you can share, must protect, and shouldn't ignore — same modal logic in every platform policy.",
    journalPrompt: "Today is Day 42. Week 6 is complete. I speak the language of rules!",
    tip: "DICA DE APRENDIZADO: quando você termina uma semana, explique o tema em 1 minuto para alguém (ou para o espelho). A semana só termina quando você consegue explicá-la."
  },
  43: {
    dayName: "Dia 43 — Segunda-feira",
    title: "Advérbios de Frequência (Always, Usually, Sometimes...)",
    focus: "Falar sobre frequência dos seus hábitos com a ordem correta na frase.",
    vocab: [
      { en: "Always", pt: "Sempre" },
      { en: "Usually", pt: "Geralmente" },
      { en: "Often", pt: "Frequentemente" },
      { en: "Sometimes", pt: "Às vezes" },
      { en: "Rarely", pt: "Raramente" },
      { en: "Never", pt: "Nunca" },
      { en: "Every week", pt: "Toda semana" },
      { en: "Once a month", pt: "Uma vez por mês" },
      { en: "Twice a week", pt: "Duas vezes por semana" },
      { en: "Three times a day", pt: "Três vezes ao dia" }
    ],
    grammar: {
      title: "Advérbios de Frequência",
      rule: "Vêm ANTES do verbo principal (I always work) mas DEPOIS do verbo to be (I am always happy). Com do/does também antes do verbo: She doesn't always check.",
      table: [
        { form: "Antes do verbo", example: "I always test my code. She rarely arrives late.", pt: "Eu sempre testo meu código. Ela raramente chega atrasada." },
        { form: "Depois do to be", example: "He is never angry. They are usually online.", pt: "Ele nunca está com raiva. Eles geralmente estão online." },
        { form: "Com don't/doesn't", example: "I don't usually drink coffee at night.", pt: "Eu geralmente não bebo café à noite." }
      ]
    },
    reading: {
      title: "My Frequencies",
      text: "I always check my emails in the morning. I usually write code after lunch. I often attend online courses. Sometimes I work on weekends, but rarely. I never skip my English lessons. I study twice a day: in the morning and at night.",
      translation: "Eu sempre checo meus e-mails de manhã. Eu geralmente escrevo código depois do almoço. Eu frequentemente participo de cursos online. Às vezes trabalho nos fins de semana, mas raramente. Nunca pulo minhas aulas de inglês. Estudo duas vezes ao dia: de manhã e à noite."
    },
    quiz: [
      { q: "Ordem correta:", options: ["I always check my emails", "Always I check my emails", "I check always my emails"], ans: "I always check my emails" },
      { q: "Com to be:", options: ["He is never angry", "He never is angry", "Never he is angry"], ans: "He is never angry" },
      { q: "'Once a month' significa:", options: ["uma vez por mês", "todo dia", "duas vezes"], ans: "uma vez por mês" }
    ],
    chunks: [
      { en: "I always test my code", pt: "eu sempre testo meu código" },
      { en: "I never skip my lessons", pt: "nunca pulo minhas aulas" },
      { en: "I study twice a day", pt: "estudo duas vezes ao dia" }
    ],
    listeningScript: "How often do you check your emails? I always check them in the morning. Do you work on weekends? Sometimes, but rarely. Do you skip breakfast? Never! Breakfast is important.",
    speakingPrompt: "Fale suas frequências: 'I always study. I usually sleep early. I sometimes play games. I never skip breakfast.'",
    lightReading: "Frequency adverbs are like cron jobs: always (every minute), usually (daily), sometimes (weekly), rarely (monthly), never (disabled).",
    journalPrompt: "Today is Day 43. I learned adverbs of frequency.",
    tip: "DICA DE LEITURA: a posição do advérbio muda o sotaque da frase. Ao ler, localize always/never e note: 'sempre' vem antes do verbo — este é um hábito visual que seu cérebro precisa criar."
  },
  44: {
    dayName: "Dia 44 — Terça-feira",
    title: "Object Pronouns (Me, You, Him, Her, Us, Them)",
    focus: "Substituir objetos nas frases com os pronomes corretos.",
    vocab: [
      { en: "Me", pt: "Me / Mim" },
      { en: "You", pt: "Você (objeto)" },
      { en: "Him", pt: "Ele / O (objeto)" },
      { en: "Her", pt: "Ela / A (objeto)" },
      { en: "Us", pt: "Nós (objeto)" },
      { en: "Them", pt: "Eles (objeto)" },
      { en: "It", pt: "Isso (objeto)" },
      { en: "Call", pt: "Ligar para" },
      { en: "Send", pt: "Enviar" },
      { en: "Invite", pt: "Convidar" }
    ],
    grammar: {
      title: "Object Pronouns",
      rule: "Vêm depois do verbo ou preposição: I call HIM. She sends IT to me. Sujeito I -> objeto me; he -> him; she -> her; we -> us; they -> them.",
      table: [
        { form: "Sujeito -> Objeto", example: "I call her. She calls me.", pt: "Eu ligo para ela. Ela liga para mim." },
        { form: "Plural", example: "We invite them. They help us.", pt: "Nós os convidamos. Eles nos ajudam." },
        { form: "Coisas", example: "The app is great. I use it every day.", pt: "O app é ótimo. Eu o uso todos os dias." }
      ]
    },
    reading: {
      title: "Team Communication",
      text: "Ana needs the report. I send it to her now. Paulo asks a question, and I answer him quickly. The clients want a demo. We invite them on Friday. My manager calls me every morning. The system helps us work faster.",
      translation: "Ana precisa do relatório. Eu o envio para ela agora. Paulo faz uma pergunta, e eu respondo a ele rapidamente. Os clientes querem uma demonstração. Nós os convidamos na sexta. Meu gerente liga para mim toda manhã. O sistema nos ajuda a trabalhar mais rápido."
    },
    quiz: [
      { q: "'Eu ligo para ela':", options: ["I call her", "I call she", "Her calls me"], ans: "I call her" },
      { q: "'Nós os convidamos':", options: ["We invite them", "We invite they", "Them invite we"], ans: "We invite them" },
      { q: "'O app é ótimo. Eu ___ uso todos os dias.':", options: ["it", "him", "her"], ans: "it" }
    ],
    chunks: [
      { en: "I send it to her", pt: "eu o envio para ela" },
      { en: "I answer him quickly", pt: "respondo a ele rapidamente" },
      { en: "the system helps us", pt: "o sistema nos ajuda" }
    ],
    listeningScript: "Can you call me tomorrow? Yes, I can call you. Is Ana here? I need to send her the file. Did you invite them? Yes, I invited them on Friday. The document is ready. Send it to me, please.",
    speakingPrompt: "Use os pronomes: 'I call him. She helps me. We invite them. Send it to us.'",
    lightReading: "Object pronouns are the recipients in message-passing: the system sends it to them, the user calls it, the API returns it.",
    journalPrompt: "Today is Day 44. I learned object pronouns.",
    tip: "DICA DE ESCRITA: ME/I e HIM/HE são os pares mais confundidos. Regra: 'I/HE/SHE' antes do verbo; 'me/him/her' depois. Escreva 5 frases usando os dois lados do par."
  },
  45: {
    dayName: "Dia 45 — Quarta-feira",
    title: "Subject vs Object Pronouns",
    focus: "Dominar a diferença entre pronomes sujeito e objeto em frases reais.",
    vocab: [
      { en: "Subject", pt: "Sujeito" },
      { en: "Object", pt: "Objeto" },
      { en: "Verb", pt: "Verbo" },
      { en: "Before", pt: "Antes" },
      { en: "After", pt: "Depois" },
      { en: "Meet", pt: "Encontrar" },
      { en: "Visit", pt: "Visitar" },
      { en: "Ask", pt: "Perguntar" },
      { en: "Tell", pt: "Contar / Dizer" },
      { en: "Show", pt: "Mostrar" }
    ],
    grammar: {
      title: "Sujeito vs Objeto",
      rule: "SUJEITO faz a ação (She asks). OBJETO recebe a ação (I ask her). Antes do verbo: I, he, she, we, they. Depois: me, him, her, us, them.",
      table: [
        { form: "Par I/me", example: "I ask. You ask me.", pt: "Eu pergunto. Você me pergunta." },
        { form: "Par she/her", example: "She visits. We visit her.", pt: "Ela visita. Nós a visitamos." },
        { form: "Par they/them", example: "They help. We help them.", pt: "Eles ajudam. Nós os ajudamos." }
      ]
    },
    reading: {
      title: "Who Asks Whom?",
      text: "In our team, she asks me many questions. I show her the code. He tells us the news. We meet them every Friday. They visit our office. It is a friendly team, and we help each other every day.",
      translation: "Na nossa equipe, ela me faz muitas perguntas. Eu mostro a ela o código. Ele nos conta as notícias. Nós os encontramos toda sexta. Eles visitam nosso escritório. É uma equipe amigável, e nós nos ajudamos todos os dias."
    },
    quiz: [
      { q: "Antes do verbo:", options: ["I, he, she, we, they", "me, him, her, us, them", "my, his, her"], ans: "I, he, she, we, they" },
      { q: "Complete: 'She asks ___' (a mim):", options: ["me", "I", "my"], ans: "me" },
      { q: "Complete: 'We help ___' (eles):", options: ["them", "they", "their"], ans: "them" }
    ],
    chunks: [
      { en: "she asks me questions", pt: "ela me faz perguntas" },
      { en: "I show her the code", pt: "mostro a ela o código" },
      { en: "we help each other", pt: "nos ajudamos mutuamente" }
    ],
    listeningScript: "Do you know Ana? She is our developer. I meet her every Monday. She shows me the new features. We tell them our ideas. They listen to us. Good communication is everything.",
    speakingPrompt: "Crie 5 pares: 'I help him. He helps me. She invites us. We invite her.'",
    lightReading: "In function calls, the subject calls and the object is called: the function sends it to them — grammar mirrors programming structure.",
    journalPrompt: "Today is Day 45. I can use subject and object pronouns correctly.",
    tip: "DICA DE LEITURA: para achar o sujeito, pergunte 'quem faz a ação?'; para achar o objeto, pergunte 'quem recebe?'. Essa pergunta dupla resolve qualquer frase do texto."
  },
  46: {
    dayName: "Dia 46 — Quinta-feira",
    title: "Connected Speech: Linking & Weak Forms",
    focus: "Entender por que os nativos 'comem' palavras — chave do listening.",
    vocab: [
      { en: "Connected speech", pt: "Fala conectada" },
      { en: "Linking", pt: "Ligação entre palavras" },
      { en: "Weak form", pt: "Forma fraca" },
      { en: "Strong form", pt: "Forma forte" },
      { en: "Sound", pt: "Som" },
      { en: "Syllable", pt: "Sílaba" },
      { en: "Stress", pt: "Acento tônico" },
      { en: "Fast", pt: "Rápido" },
      { en: "Natural", pt: "Natural" },
      { en: "Native", pt: "Nativo" }
    ],
    grammar: {
      title: "Connected Speech",
      rule: "Nativos ligam palavras: 'want to' -> 'wanna', 'going to' -> 'gonna', 'kind of' -> 'kinda'. Consoante + vogal se fundem: 'an apple' soa 'a napple'. O inglês natural é um fluxo, não palavras separadas.",
      table: [
        { form: "Contrações informais", example: "I want to go -> I wanna go", pt: "Eu quero ir" },
        { form: "Ligação C+V", example: "an apple, not at all, turn it off", pt: "uma maçã, de jeito nenhum, desligue" },
        { form: "Som que some", example: "I'm going to eat -> I'm gonna eat", pt: "Vou comer" }
      ]
    },
    reading: {
      title: "Why Listening Is Hard",
      text: "At first, native English sounds very fast. People link words together. 'What are you doing?' sounds like 'Whatcha doin'?' Don't worry. Listen many times. Your brain learns the patterns. After weeks of practice, you understand the flow naturally.",
      translation: "No começo, o inglês nativo soa muito rápido. As pessoas ligam as palavras. 'What are you doing?' soa como 'Whatcha doin'?'. Não se preocupe. Ouça muitas vezes. Seu cérebro aprende os padrões. Depois de semanas de prática, você entende o fluxo naturalmente."
    },
    quiz: [
      { q: "'Wanna' é a forma falada de:", options: ["want to", "won't", "will not"], ans: "want to" },
      { q: "'Gonna' é a forma falada de:", options: ["going to", "got to", "good night"], ans: "going to" },
      { q: "'Whatcha doin'?' significa:", options: ["What are you doing?", "What did you do?", "Where are you?"], ans: "What are you doing?" }
    ],
    chunks: [
      { en: "whatcha doin'?", pt: "o que você está fazendo? (fala rápida)" },
      { en: "I wanna learn", pt: "quero aprender (fala rápida)" },
      { en: "I'm gonna study", pt: "vou estudar (fala rápida)" }
    ],
    listeningScript: "Hey! Whatcha doin'? I'm gonna watch a movie. Wanna come? Sure! But I kinda have to finish my work first. Okay, no problem, I'll wait.",
    speakingPrompt: "Repita em voz alta: 'I wanna learn English. I'm gonna practice every day. Whatcha doing?'",
    lightReading: "Native speech compresses sounds the way code minifiers compress files: same meaning, smaller form, faster delivery.",
    journalPrompt: "Today is Day 46. I discovered connected speech!",
    tip: "DICA DE LISTENING: ouça a MESMA frase 4 vezes: 1) sem legenda, 2) com legenda, 3) pausando a cada palavra, 4) repetindo junto. Esse protocolo destrava seu ouvido para a fala nativa."
  },
  47: {
    dayName: "Dia 47 — Sexta-feira",
    title: "Perguntas com Preposições & Pronomes",
    focus: "Combinar preposições + pronomes objeto em perguntas do dia a dia.",
    vocab: [
      { en: "For", pt: "Para" },
      { en: "With", pt: "Com" },
      { en: "To", pt: "Para / A" },
      { en: "From", pt: "De / Da parte de" },
      { en: "About", pt: "Sobre" },
      { en: "Talk to", pt: "Falar com" },
      { en: "Listen to", pt: "Ouvir" },
      { en: "Wait for", pt: "Esperar por" },
      { en: "Look at", pt: "Olhar para" },
      { en: "Think about", pt: "Pensar sobre" }
    ],
    grammar: {
      title: "Preposição + Pronome Objeto",
      rule: "Após preposições (to, for, with, about) usamos SEMPRE pronome objeto: talk TO HIM, wait FOR HER, think ABOUT IT. As preposições são inseparáveis do verbo: listen TO.",
      table: [
        { form: "Verb + to + pronome", example: "Talk to him. Send it to her.", pt: "Fale com ele. Envie para ela." },
        { form: "Verb + for + pronome", example: "Wait for us. I bought it for you.", pt: "Espere por nós. Comprei para você." },
        { form: "Verb + about + pronome", example: "Think about it. Tell me about them.", pt: "Pense sobre isso. Conte-me sobre eles." }
      ]
    },
    reading: {
      title: "Office Requests",
      text: "Can you talk to him about the project? Yes, I can talk to him today. Please wait for us at the entrance. I will send the files to them tonight. Are you listening to her? She is explaining the problem. Think about it and answer me tomorrow.",
      translation: "Você pode falar com ele sobre o projeto? Sim, posso falar com ele hoje. Por favor, espere por nós na entrada. Enviarei os arquivos para eles esta noite. Você está ouvindo ela? Ela está explicando o problema. Pense sobre isso e me responda amanhã."
    },
    quiz: [
      { q: "Complete: 'Talk ___ him.'", options: ["to", "at", "for"], ans: "to" },
      { q: "Complete: 'Wait ___ us.'", options: ["for", "to", "at"], ans: "for" },
      { q: "Complete: 'Think about ___.'", options: ["it", "its", "he"], ans: "it" }
    ],
    chunks: [
      { en: "talk to him about the project", pt: "falar com ele sobre o projeto" },
      { en: "wait for us", pt: "espere por nós" },
      { en: "think about it", pt: "pense sobre isso" }
    ],
    listeningScript: "Could you talk to her about the delay? Yes, I will talk to her now. Are you waiting for us? Yes, we are waiting for you. Send the report to them, please. Think about it tonight.",
    speakingPrompt: "Combine verbo + preposição + pronome: 'I talk to him. She waits for me. We think about it.'",
    lightReading: "Phrasal verbs glue verbs to prepositions: log in, set up, shut down — the preposition is part of the verb's identity, exactly like 'listen to'.",
    journalPrompt: "Today is Day 47. I learned prepositions with object pronouns.",
    tip: "DICA DE ESCRITA: anote os verbos JUNTO com sua preposição: 'listen to', 'wait for', 'talk about'. Aprender os dois juntos evita o erro mais comum do brasileiro."
  },
  48: {
    dayName: "Dia 48 — Sábado",
    title: "Frequência & Pronomes + TESTE DE SÁBADO 7",
    focus: "Revisar advérbios de frequência e pronomes objeto, e testar a semana.",
    vocab: [
      { en: "Daily life", pt: "Vida diária" },
      { en: "Communicate", pt: "Comunicar" },
      { en: "Relationship", pt: "Relacionamento" },
      { en: "Teamwork", pt: "Trabalho em equipe" },
      { en: "Feedback", pt: "Retorno / Feedback" },
      { en: "Support", pt: "Suporte" },
      { en: "Contact", pt: "Contato" },
      { en: "Message", pt: "Mensagem" },
      { en: "Reply", pt: "Responder" },
      { en: "Appointment", pt: "Compromisso" }
    ],
    grammar: {
      title: "Resumo da Semana 7",
      rule: "Advérbios de frequência antes do verbo (I always work) / depois do to be (I am always busy). Pronomes objeto após verbos e preposições (call me, talk to her).",
      table: [
        { form: "Frequência", example: "We usually communicate by email. I rarely miss meetings.", pt: "Geralmente nos comunicamos por e-mail. Raramente perco reuniões." },
        { form: "Objeto", example: "I support them. She contacts me weekly.", pt: "Eu os apoio. Ela me contata semanalmente." },
        { form: "Juntos", example: "I always reply to her quickly.", pt: "Eu sempre respondo a ela rapidamente." }
      ]
    },
    reading: {
      title: "Good Teamwork",
      text: "Good teams always communicate. We usually share feedback every week. I often send messages to my colleagues. She sometimes invites us for coffee. We never ignore important requests. The team leader always listens to us. We rarely work alone. That is good teamwork.",
      translation: "Boas equipes sempre se comunicam. Geralmente compartilhamos feedback toda semana. Eu frequentemente envio mensagens aos meus colegas. Ela às vezes nos convida para um café. Nunca ignoramos pedidos importantes. O líder sempre nos ouve. Raramente trabalhamos sozinhos. Isso é bom trabalho em equipe."
    },
    quiz: [
      { q: "Complete: 'We ___ share feedback.' (geralmente)", options: ["usually", "never", "rarely"], ans: "usually" },
      { q: "Complete: 'The leader always listens to ___.'", options: ["us", "we", "our"], ans: "us" },
      { q: "'We rarely work alone' significa:", options: ["raramente trabalhamos sozinhos", "sempre trabalhamos sozinhos", "nunca trabalhamos"], ans: "raramente trabalhamos sozinhos" }
    ],
    chunks: [
      { en: "good teams always communicate", pt: "boas equipes sempre se comunicam" },
      { en: "the leader always listens to us", pt: "o líder sempre nos ouve" },
      { en: "we rarely work alone", pt: "raramente trabalhamos sozinhos" }
    ],
    listeningScript: "Our team is great. We usually share feedback on Fridays. I always reply to messages quickly. She sometimes invites us to lunch. We never miss the weekly meeting. The leader always listens to us.",
    speakingPrompt: "Descreva sua equipe de estudo: 'We always study together. I usually help my friend. She sometimes asks me questions.'",
    lightReading: "Agile teams live on feedback loops: daily standups, weekly reviews, monthly retrospectives — frequency is the rhythm of the team.",
    journalPrompt: "Today is Day 48. I completed my seventh Saturday Test!",
    tip: "DICA DE APRENDIZADO: grave-se usando 5 advérbios + 5 pronomes em frases sobre SUA vida. Sua voz te ajuda a notar erros que a leitura não mostra."
  },
  49: {
    dayName: "Dia 49 — Domingo",
    title: "Revisão Geral da Semana 7 & Imersão Leve",
    focus: "Consolidar frequência e pronomes com leitura leve.",
    vocab: [
      { en: "Friend", pt: "Amigo(a)" },
      { en: "Trust", pt: "Confiança" },
      { en: "Honest", pt: "Honesto" },
      { en: "Kind", pt: "Gentil" },
      { en: "Helpful", pt: "Prestativo" },
      { en: "Funny", pt: "Engraçado" },
      { en: "Serious", pt: "Sério" },
      { en: "Quiet", pt: "Quieto" },
      { en: "Loud", pt: "Barulhento" },
      { en: "Nice", pt: "Legal" }
    ],
    grammar: {
      title: "Checkpoint 49 — Você fala sobre pessoas",
      rule: "Você descreve hábitos (com frequência), age sobre pessoas (com pronomes objeto) e conversa sobre relacionamentos.",
      table: [
        { form: "Hábitos", example: "My friend always calls me on Sundays.", pt: "Meu amigo sempre me liga aos domingos." },
        { form: "Pessoas", example: "She is kind and helpful. We trust her.", pt: "Ela é gentil e prestativa. Nós confiamos nela." },
        { form: "Rotina social", example: "I usually visit them on weekends.", pt: "Eu geralmente os visito nos fins de semana." }
      ]
    },
    reading: {
      title: "My Best Friend",
      text: "My best friend is a developer. He always helps me with my projects. I usually call him when I have a problem. He listens to me and gives good advice. We rarely fight. Sometimes we play games together. He is honest and kind. I trust him completely.",
      translation: "Meu melhor amigo é desenvolvedor. Ele sempre me ajuda com meus projetos. Eu geralmente ligo para ele quando tenho um problema. Ele me ouve e dá bons conselhos. Raramente brigamos. Às vezes jogamos juntos. Ele é honesto e gentil. Eu confio totalmente nele."
    },
    quiz: [
      { q: "Complete: 'He always helps ___.'", options: ["me", "I", "my"], ans: "me" },
      { q: "'I trust him completely' significa:", options: ["confio totalmente nele", "não confio nele", "desconfio dele"], ans: "confio totalmente nele" },
      { q: "Complete: 'We ___ fight.' (raramente)", options: ["rarely", "always", "often"], ans: "rarely" }
    ],
    chunks: [
      { en: "he always helps me", pt: "ele sempre me ajuda" },
      { en: "he gives good advice", pt: "ele dá bons conselhos" },
      { en: "I trust him completely", pt: "confio totalmente nele" }
    ],
    listeningScript: "My best friend is great. He always helps me. I usually call him at night. Sometimes we play games. We rarely argue. Good friends listen to you and help you.",
    speakingPrompt: "Descreva um amigo: 'He always helps me. I usually call him. He is kind and helpful. We trust each other.'",
    lightReading: "Trust in engineering is built the same way: consistent communication, honest feedback, and always being helpful when someone needs you.",
    journalPrompt: "Today is Day 49. Week 7 is complete. I talk about people naturally!",
    tip: "DICA DE APRENDIZADO: complete a Semana 7 escrevendo 3 frases sobre um amigo usando frequência + pronomes. Escrever sobre pessoas reais fixa a gramática para sempre."
  },
  50: {
    dayName: "Dia 50 — Segunda-feira",
    title: "Contáveis vs Incontáveis",
    focus: "Entender a diferença entre substantivos contáveis e incontáveis.",
    vocab: [
      { en: "Countable", pt: "Contável" },
      { en: "Uncountable", pt: "Incontável" },
      { en: "Money", pt: "Dinheiro" },
      { en: "Rice", pt: "Arroz" },
      { en: "Bread", pt: "Pão" },
      { en: "Milk", pt: "Leite" },
      { en: "Coffee", pt: "Café" },
      { en: "Information", pt: "Informação" },
      { en: "Advice", pt: "Conselho" },
      { en: "Data", pt: "Dados" }
    ],
    grammar: {
      title: "Countable / Uncountable",
      rule: "CONTÁVEIS têm plural e usam a/an (a laptop, two laptops). INCONTÁVEIS não têm plural e NÃO usam a/an (money, information, rice, data). Para incontáveis use unidades: a cup of coffee, a piece of advice.",
      table: [
        { form: "Contáveis", example: "a laptop, two laptops, three users", pt: "um notebook, dois notebooks, três usuários" },
        { form: "Incontáveis", example: "money, information, rice, data (sem plural)", pt: "dinheiro, informação, arroz, dados" },
        { form: "Unidades", example: "a cup of coffee, a piece of advice", pt: "uma xícara de café, um conselho" }
      ]
    },
    reading: {
      title: "What Do We Need?",
      text: "For the new office, we need many things. We need new computers and chairs. We also need money, but we don't have much. We need information from the clients and advice from the manager. We have enough coffee and milk for the team. Data is safe in our servers.",
      translation: "Para o novo escritório, precisamos de muitas coisas. Precisamos de computadores e cadeiras novos. Também precisamos de dinheiro, mas não temos muito. Precisamos de informações dos clientes e conselhos do gerente. Temos café e leite suficientes para a equipe. Os dados estão seguros em nossos servidores."
    },
    quiz: [
      { q: "Incontável:", options: ["money", "laptop", "user"], ans: "money" },
      { q: "Contável:", options: ["information", "laptop", "rice"], ans: "laptop" },
      { q: "Unidade correta:", options: ["a cup of coffee", "a coffee cup of", "a coffee"], ans: "a cup of coffee" }
    ],
    chunks: [
      { en: "we don't have much money", pt: "não temos muito dinheiro" },
      { en: "a piece of advice", pt: "um conselho" },
      { en: "data is safe", pt: "os dados estão seguros" }
    ],
    listeningScript: "What do we need for the office? We need new laptops. We also need more storage and more data protection. How much money do we have? Not much. But we have good information and a strong plan.",
    speakingPrompt: "Liste o que você tem: 'I have two laptops. I have some money. I have a lot of information.'",
    lightReading: "Data is uncountable in everyday English ('data is stored'), but it is countable in statistics ('the data show') — a classic tech ambiguity.",
    journalPrompt: "Today is Day 50. I learned countable and uncountable nouns.",
    tip: "DICA DE ESCRITA: nunca escreva 'a money' ou 'informations'. Se for incontável, use unidade: 'a piece of information'. Essa regra elimina erros clássicos de brasileiros."
  }
};

export const weeks_6_7 = [
  {
    id: 6,
    title: "Semana 6 — Verbos Modais",
    daysRange: "Dias 36 a 42",
    subtitle: "Can, Could, Should, Must, Have To",
    badgeClass: "badge-amber",
    grammar: ["Can / Can't (habilidade e permissão)", "Could / Couldn't (pedidos educados e passado)", "Should / Shouldn't (conselhos)", "Must / Mustn't (obrigação e proibição) + Have to"],
    vocab: "Regras, habilidades técnicas, permissões e recomendações",
    reading: "Instruções, políticas de empresa e manuais simples",
    listening: "Diálogos de onboarding e suporte técnico",
    speaking: "Explicar o que você consegue fazer e as regras do ambiente",
    techBridge: "Frases: 'You should optimize this code', 'Can you push to Git?', 'You mustn't deploy without tests'",
    saturday: {
      recall: [
        ["I can install software", "sei instalar software"],
        ["can you program?", "você sabe programar?"],
        ["could you help me, please?", "você poderia me ajudar, por favor?"],
        ["I couldn't find the file", "não consegui encontrar o arquivo"],
        ["you should make backups", "você deveria fazer backups"],
        ["you shouldn't click unknown links", "você não deveria clicar em links desconhecidos"],
        ["you mustn't share passwords", "você não pode compartilhar senhas"],
        ["I have to attend the meeting", "tenho que participar da reunião"],
        ["you don't have to work", "você não precisa trabalhar"],
        ["I can't fix hardware", "não sei consertar hardware"],
        ["should I update the system?", "devo atualizar o sistema?"],
        ["you must be careful", "você deve ter cuidado"]
      ],
      reading: {
        title: "The Company Policy",
        text: "Every employee must read the company policy. You can use the internet for work, but you can't download unknown programs. You should change your password every month. You mustn't share your credentials with anyone. If you have questions, you can ask the IT team. You should save your work every ten minutes. You don't have to print documents; the system stores everything. Follow these rules and work safely.",
        questions: ["What must every employee read?", "Can employees download unknown programs?", "How often should you change your password?", "What should you do every ten minutes?", "Who can you ask for help?"]
      },
      listening: "Listen: 'Welcome to the company. You must follow the security policy. You can use the internet for work. You mustn't share your password. You should change it every month. If you have a problem, you can ask the IT team. Any questions?'",
      speaking: "Grave 2 minutos explicando as regras da sua rotina de estudos: 'I must study every day. I can rest on Sundays. I shouldn't skip lessons...'"
    }
  },
  {
    id: 7,
    title: "Semana 7 — Frequência & Pronomes Objeto",
    daysRange: "Dias 43 a 49",
    subtitle: "Always/Usually/Never e Me/Him/Her/Us/Them",
    badgeClass: "badge-emerald",
    grammar: ["Adverbs of frequency (always, usually, often, sometimes, rarely, never)", "Object pronouns (me, you, him, her, it, us, them)", "Subject vs object pronouns", "Connected speech: wanna, gonna, kinda (chave do listening)"],
    vocab: "Comunicação, relacionamentos, rotinas e suporte",
    reading: "Diálogos de suporte técnico e vida diária",
    listening: "Treino de escuta com foco em connected speech",
    speaking: "Descrever hábitos e falar de pessoas com pronomes",
    techBridge: "Expressões: 'I always test my code', 'Send it to me', 'Check the logs'",
    saturday: {
      recall: [
        ["I always test my code", "eu sempre testo meu código"],
        ["I never skip my lessons", "nunca pulo minhas aulas"],
        ["I study twice a day", "estudo duas vezes ao dia"],
        ["she asks me questions", "ela me faz perguntas"],
        ["I show her the code", "mostro a ela o código"],
        ["we help each other", "nos ajudamos mutuamente"],
        ["talk to him about the project", "falar com ele sobre o projeto"],
        ["wait for us", "espere por nós"],
        ["think about it", "pense sobre isso"],
        ["whatcha doin'?", "o que você está fazendo? (fala rápida)"],
        ["good teams always communicate", "boas equipes sempre se comunicam"],
        ["I trust him completely", "confio totalmente nele"]
      ],
      reading: {
        title: "Daily Communication",
        text: "In my team, we always communicate clearly. I usually send messages in the morning. My colleague Ana often calls me when she has a problem. We rarely use email for urgent things. I always answer her quickly. Sometimes the manager joins our group. He listens to us and helps us with difficult tasks. Good communication is never complicated: you talk, you listen, and you reply.",
        questions: ["When does the writer usually send messages?", "Why does Ana call the writer?", "When do they rarely use email?", "Who joins the group sometimes?", "What makes communication never complicated?"]
      },
      listening: "Listen: 'Hey, how are you? I usually work from home. Do you often call your colleagues? Yes, I always call them in the morning. We rarely use email for urgent things. Good teamwork is all about communication!'",
      speaking: "Grave 2 minutos sobre seus hábitos de comunicação: 'I always... I usually... I sometimes... I never...' e use pronomes objeto."
    }
  }
];
