// Progressive Block Vocabulary Database: A1, A2, B1, B2 & Tech
import { allDays } from './phases/index.js';
import { gameVocabData } from './gameVocabData.js';

// Pre-index phonetic tips from gameVocabData for fast lookup
const phoneticLookup = {};
const allManualItems = [
  ...(gameVocabData.essentialWords || []),
  ...(gameVocabData.techWords || [])
];

for (const item of allManualItems) {
  if (item.en) {
    phoneticLookup[item.en.toLowerCase().trim()] = {
      phoneticPt: item.phoneticPt || item.en,
      ipa: item.ipa || "",
      soundTip: item.soundTip || item.tip || "",
      tip: item.tip || ""
    };
  }
}

// Extract and normalize all words from all 180 days
const extractNormalizedVocab = () => {
  const wordsByLevel = {
    A1: [],
    A2: [],
    B1: [],
    B2: []
  };

  const seenEn = new Set();

  // 1. Process allDays (Days 1 to 180)
  for (let d = 1; d <= 180; d++) {
    const day = allDays[d];
    if (day && Array.isArray(day.vocab)) {
      const level = d <= 35 ? 'A1' : d <= 104 ? 'A2' : 'B1';

      for (const v of day.vocab) {
        if (!v || !v.en || !v.pt) continue;

        const cleanEn = v.en.replace(/\.{3}/g, '').trim();
        const cleanPt = v.pt.split('/')[0].split('(')[0].replace(/->/g, '').trim();
        const lowerEn = cleanEn.toLowerCase();

        if (cleanEn.length < 2 || cleanPt.length < 2) continue;
        if (seenEn.has(lowerEn)) continue;

        seenEn.add(lowerEn);

        const phoneticInfo = phoneticLookup[lowerEn] || {};

        wordsByLevel[level].push({
          id: `w_${level.toLowerCase()}_${wordsByLevel[level].length + 1}`,
          en: cleanEn,
          pt: cleanPt,
          level,
          daySource: d,
          phoneticPt: phoneticInfo.phoneticPt || cleanEn,
          ipa: phoneticInfo.ipa || "",
          soundTip: phoneticInfo.soundTip || day.title || "",
          category: day.title ? day.title.split('&')[0].trim() : `${level} Vocab`
        });
      }
    }
  }

  // 2. Add Specialized B2 & Computer Science Tech Vocab
  const techPool = gameVocabData.techWords || [];
  for (const t of techPool) {
    const cleanEn = t.en.trim();
    const cleanPt = t.pt.split('/')[0].trim();
    const lowerEn = cleanEn.toLowerCase();

    if (!seenEn.has(lowerEn)) {
      seenEn.add(lowerEn);
      wordsByLevel.B2.push({
        id: `w_b2_${wordsByLevel.B2.length + 1}`,
        en: cleanEn,
        pt: cleanPt,
        level: 'B2',
        phoneticPt: t.phoneticPt || cleanEn,
        ipa: t.ipa || "",
        soundTip: t.soundTip || t.tip || "",
        category: t.category || "Engenharia & TI"
      });
    }
  }

  // Add more technical engineering vocabulary to B2 to ensure rich depth
  const advancedTechWords = [
    { en: "Scalability", pt: "Escalabilidade", phoneticPt: "skêi-la-bí-li-ti", tip: "Capacidade do sistema de crescer suportando carga." },
    { en: "Latency", pt: "Latência", phoneticPt: "lêi-tën-si", tip: "Tempo de resposta entre requisição e resposta." },
    { en: "Throughput", pt: "Vazão de dados", phoneticPt: "thrúu-put", tip: "Volume de dados processados por segundo." },
    { en: "Microservices", pt: "Microsserviços", phoneticPt: "mái-kro-sêr-vi-siz", tip: "Arquitetura de pequenos serviços independentes." },
    { en: "Authentication", pt: "Autenticação", phoneticPt: "o-then-ti-kêi-shën", tip: "Verificação da identidade do usuário." },
    { en: "Authorization", pt: "Autorização", phoneticPt: "o-tho-ri-zêi-shën", tip: "Permissões de acesso aos recursos." },
    { en: "Load Balancer", pt: "Balanceador de carga", phoneticPt: "lôud bé-lën-ser", tip: "Distribui o tráfego entre múltiplos servidores." },
    { en: "Refactoring", pt: "Refatoração", phoneticPt: "ri-fêk-to-riŋ", tip: "Melhorar a estrutura do código sem mudar seu comportamento." },
    { en: "Asynchronous", pt: "Assíncrono", phoneticPt: "ei-sín-kro-nës", tip: "Operações executadas sem travar a thread principal." },
    { en: "Concurrency", pt: "Concorrência", phoneticPt: "kën-kê-ren-si", tip: "Múltiplas tarefas acontecendo ao mesmo tempo." },
    { en: "Data Pipeline", pt: "Fluxo de processamento", phoneticPt: "dêi-ta páip-láin", tip: "Sequência de transformações de dados." },
    { en: "Distributed System", pt: "Sistema distribuído", phoneticPt: "dis-trí-biu-ted sís-tëm", tip: "Sistema que roda em múltiplas máquinas conectadas." },
    { en: "Continuous Integration", pt: "Integração contínua", phoneticPt: "kën-tí-niu-ës in-te-grêi-shën", tip: "Automação de testes e build de código (CI)." },
    { en: "Cache Invalidation", pt: "Invalidação de cache", phoneticPt: "kêsh in-vé-li-dêi-shën", tip: "Atualizar ou limpar dados temporários obsoletos." },
    { en: "Dependency Injection", pt: "Injeção de dependência", phoneticPt: "di-pên-dën-si in-djék-shën", tip: "Padrão de arquitetura de software para desacoplamento." }
  ];

  for (const at of advancedTechWords) {
    const lowerEn = at.en.toLowerCase();
    if (!seenEn.has(lowerEn)) {
      seenEn.add(lowerEn);
      wordsByLevel.B2.push({
        id: `w_b2_${wordsByLevel.B2.length + 1}`,
        en: at.en,
        pt: at.pt,
        level: 'B2',
        phoneticPt: at.phoneticPt,
        ipa: "",
        soundTip: at.tip,
        category: "Engenharia de Software"
      });
    }
  }

  return wordsByLevel;
};

// Generate 3 plausible distractors for any word from the pool
const generateOptions = (targetPt, allPts) => {
  const distractors = allPts.filter(p => p !== targetPt);
  const shuffledDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
  return [targetPt, ...shuffledDistractors].sort(() => Math.random() - 0.5);
};

// Raw words grouped by level
const rawWordsByLevel = extractNormalizedVocab();

// All Portuguese translations across the pool for distractor generation
const allPortugueseTranslations = [
  ...rawWordsByLevel.A1.map(w => w.pt),
  ...rawWordsByLevel.A2.map(w => w.pt),
  ...rawWordsByLevel.B1.map(w => w.pt),
  ...rawWordsByLevel.B2.map(w => w.pt)
];

// Structure into Progressive Blocks (20 words per block)
export const CEFR_LEVELS = [
  { id: 'A1', name: 'Nível A1 — Iniciante', shortName: 'A1', icon: '🥉', description: 'Fundação absoluta: To Be, saudações, rotina e objetos básicos.' },
  { id: 'A2', name: 'Nível A2 — Básico Funcional', shortName: 'A2', icon: '🥈', description: 'Passado, futuro, conectivos e situações cotidianas.' },
  { id: 'B1', name: 'Nível B1 — Independente', shortName: 'B1', icon: '🥇', description: 'Conversação real, opiniões, problemas e expressões fluidas.' },
  { id: 'B2', name: 'Nível B2 — Profissional & TI', shortName: 'B2', icon: '🏆', description: 'Inglês de Engenharia de Software, reuniões técnicas e entrevistas.' }
];

const WORDS_PER_BLOCK = 20;

// Structured blocks registry
export const BLOCKS_REGISTRY = [];

let globalBlockCounter = 1;

for (const levelObj of CEFR_LEVELS) {
  const levelId = levelObj.id;
  const levelWords = rawWordsByLevel[levelId] || [];

  for (let i = 0; i < levelWords.length; i += WORDS_PER_BLOCK) {
    const chunkWords = levelWords.slice(i, i + WORDS_PER_BLOCK);
    const blockNum = globalBlockCounter++;
    const blockId = `block_${blockNum}`;

    // Enrich each word with multiple choice options and block association
    const enrichedWords = chunkWords.map(word => ({
      ...word,
      blockId,
      blockNum,
      options: generateOptions(word.pt, allPortugueseTranslations)
    }));

    BLOCKS_REGISTRY.push({
      id: blockId,
      num: blockNum,
      level: levelId,
      title: `Bloco ${blockNum} (${levelId})`,
      subtitle: `${chunkWords.length} Palavras Essenciais`,
      wordsCount: chunkWords.length,
      words: enrichedWords
    });
  }
}

// Helper: Get all blocks for a given level
export const getBlocksForLevel = (levelId) => {
  return BLOCKS_REGISTRY.filter(b => b.level === levelId);
};

// Helper: Get a specific block by ID or number
export const getBlockById = (blockId) => {
  return BLOCKS_REGISTRY.find(b => b.id === blockId || b.num === Number(blockId)) || BLOCKS_REGISTRY[0];
};

// Helper: Get total word counts per level
export const getLevelStats = () => {
  return {
    A1: rawWordsByLevel.A1.length,
    A2: rawWordsByLevel.A2.length,
    B1: rawWordsByLevel.B1.length,
    B2: rawWordsByLevel.B2.length,
    total: rawWordsByLevel.A1.length + rawWordsByLevel.A2.length + rawWordsByLevel.B1.length + rawWordsByLevel.B2.length,
    totalBlocks: BLOCKS_REGISTRY.length
  };
};
