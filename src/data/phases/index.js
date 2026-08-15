// REGISTRY DE FASES — agrega todos os arquivos de dados do cronograma (dias 1-160)
import { days_1_35, weeks_1_5 } from './phase1.js';
import { days_36_50, weeks_6_7 } from './phase2a.js';
import { days_51_70, weeks_8_10 } from './phase2b.js';
import { days_71_90, weeks_11_13 } from './phase3a.js';
import { days_91_104, weeks_14_15 } from './phase3b.js';
import { days_105_132, weeks_16_19 } from './phase4a.js';
import { days_133_160, weeks_20_23 } from './phase4b.js';
import { days_161_180, weeks_24 } from './phase4c.js';

// Todos os dias do cronograma (1 a 180)
export const allDays = {
  ...days_1_35,
  ...days_36_50,
  ...days_51_70,
  ...days_71_90,
  ...days_91_104,
  ...days_105_132,
  ...days_133_160,
  ...days_161_180
};

// Todas as semanas do cronograma (1 a 24), normalizadas com weekNumber
export const allWeeks = [
  ...weeks_1_5,
  ...weeks_6_7,
  ...weeks_8_10,
  ...weeks_11_13,
  ...weeks_14_15,
  ...weeks_16_19,
  ...weeks_20_23,
  ...weeks_24
].map(w => ({ ...w, weekNumber: w.id }));

// Agrupamento das semanas por fase (para ScheduleView e seletores)
export const PHASES_META = [
  {
    id: 0,
    title: "Fase 0 — Semana 1 (Dias 1–7)",
    subtitle: "Fundação Absoluta (Alphabet, To Be, Personal Speech)",
    badgeClass: "badge-emerald",
    weekNumbers: [1]
  },
  {
    id: 1,
    title: "Fase 1 — Semanas 2–4 (Dias 8–28)",
    subtitle: "Construção de Frases & Present Simple",
    badgeClass: "badge-blue",
    weekNumbers: [2, 3, 4]
  },
  {
    id: 2,
    title: "Fase 2 — Semanas 5–8 (Dias 29–56)",
    subtitle: "Listening Intensivo & Verbos Modais",
    badgeClass: "badge-amber",
    weekNumbers: [5, 6, 7, 8]
  },
  {
    id: 3,
    title: "Fase 3 — Semanas 9–12 (Dias 57–84)",
    subtitle: "Passado, Futuro & Chunks Técnicos",
    badgeClass: "badge-purple",
    weekNumbers: [9, 10, 11, 12]
  },
  {
    id: 4,
    title: "Fase 4 — Semanas 13–15 (Dias 85–104)",
    subtitle: "Consolidação A2 & Ambiente em Inglês",
    badgeClass: "badge-red",
    weekNumbers: [13, 14, 15]
  },
  {
    id: 5,
    title: "Fase 5 — Semanas 16–19 (Dias 105–132)",
    subtitle: "Present Perfect & Marcadores de Tempo",
    badgeClass: "badge-emerald",
    weekNumbers: [16, 17, 18, 19]
  },
  {
    id: 6,
    title: "Fase 6 — Semanas 20–23 (Dias 133–160)",
    subtitle: "Condicionais, Voz Passiva & Storytelling B1",
    badgeClass: "badge-blue",
    weekNumbers: [20, 21, 22, 23]
  },
  {
    id: 7,
    title: "Fase 7 — Semana 24 (Dias 161–180)",
    subtitle: "Teste Final B1 & Entrevistas Profissionais",
    badgeClass: "badge-red",
    weekNumbers: [24]
  }
];

// Roteiro futuro (pós-dia 180) — rumo ao B2, ainda sem conteúdo detalhado
export const FUTURE_ROADMAP = {
  title: "Depois do Dia 180 — Rumo ao B2",
  subtitle: "Fluência Intermediária & Inglês Profissional Avançado",
  badgeClass: "badge-purple",
  grammar: [
    "Third Conditional (If I had studied, I would have passed)",
    "Reported Speech (He said that he was working)",
    "Futures avançados: future perfect & future continuous"
  ],
  vocab: "Vocabulário de negócios, liderança e arquitetura de software (3.000+ palavras)",
  reading: "Livros técnicos completos, papers e documentação avançada",
  listening: "Podcasts e palestras sem legendas em velocidade natural",
  speaking: "Debates técnicos, apresentações e liderança de reuniões",
  techBridge: "Contribuição para projetos open-source com comunicação em inglês",
  daysRange: "Pós-dia 180 — Jornada contínua"
};

// Mapas auxiliares por número de dia
export const dayWeekMap = {};
for (const w of allWeeks) {
  const [start, end] = w.daysRange.match(/\d+/g).map(Number);
  for (let d = start; d <= end; d++) {
    dayWeekMap[d] = w.weekNumber;
  }
}

// Testes de sábado por semana (para a aba de avaliação)
export const saturdayTests = {};
for (const w of allWeeks) {
  if (w.saturday) {
    saturdayTests[w.weekNumber] = {
      title: w.title,
      daysRange: w.daysRange,
      recall: w.saturday.recall,
      reading: w.saturday.reading,
      listening: w.saturday.listening,
      speaking: w.saturday.speaking
    };
  }
}
