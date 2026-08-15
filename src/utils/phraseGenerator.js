import { allDays } from '../data/phases';

const VOCAB_TEMPLATES = [
  { en: (w) => `I use the ${w} every day.`, pt: (p) => `Eu uso o/a ${p} todos os dias.` },
  { en: (w) => `This is a ${w}.`, pt: (p) => `Isto é um/uma ${p}.` },
  { en: (w) => `The ${w} is very important.`, pt: (p) => `O/A ${p} é muito importante.` },
  { en: (w) => `I need a new ${w}.`, pt: (p) => `Eu preciso de um/uma ${p} novo/a.` },
  { en: (w) => `Where is the ${w}?`, pt: (p) => `Onde está o/a ${p}?` },
  { en: (w) => `My ${w} is really good.`, pt: (p) => `Meu/minha ${p} é muito bom/boa.` }
];

const sentenceSplit = (text) => {
  const matches = String(text || '').match(/[^.!?]+[.!?]*/g) || [];
  return matches
    .map(s => s.trim())
    .filter(s => s.length > 1 && s.length <= 160)
    .filter(s => !/^\d/.test(s));
};

const normalizeText = (s) => {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const addPhrase = (list, seen, phrase) => {
  const key = normalizeText(phrase.en);
  if (!key || key.length < 2 || seen.has(key)) return;
  seen.add(key);
  list.push(phrase);
};

export const buildDayPhrases = (dayNum) => {
  const day = allDays[dayNum];
  if (!day) return [];
  const phrases = [];
  const seen = new Set();

  day.vocab.forEach((v, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}vt${i}t0`, en: v.en.trim(), pt: v.pt.trim(), source: 'vocab', day: dayNum });
  });

  day.chunks.forEach((c, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}c${i}`, en: c.en.trim(), pt: c.pt.trim(), source: 'chunk', day: dayNum });
  });

  (day.grammar.table || []).forEach((r, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}g${i}`, en: r.example.trim(), pt: r.pt.trim(), source: 'grammar', day: dayNum });
  });

  sentenceSplit(day.listeningScript).forEach((s, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}l${i}`, en: s, pt: '', source: 'listening', day: dayNum });
  });

  sentenceSplit(day.reading.text).forEach((s, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}r${i}`, en: s, pt: '', source: 'reading', day: dayNum });
  });

  sentenceSplit(day.speakingPrompt).forEach((s, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}s${i}`, en: s, pt: '', source: 'speaking', day: dayNum });
  });

  sentenceSplit(day.lightReading).forEach((s, i) => {
    addPhrase(phrases, seen, { id: `d${dayNum}lr${i}`, en: s, pt: '', source: 'lightreading', day: dayNum });
  });

  return phrases;
};

export const buildTemplatePhrases = (dayNum, templateCount = 4) => {
  const day = allDays[dayNum];
  if (!day) return [];
  const phrases = [];
  const seen = new Set();
  const templates = [...VOCAB_TEMPLATES].sort(() => Math.random() - 0.5).slice(0, Math.max(2, templateCount));

  day.vocab.forEach((v, i) => {
    templates.forEach((t, ti) => {
      addPhrase(phrases, seen, {
        id: `d${dayNum}vt${i}t${ti}b${Math.floor(Math.random() * 1000)}`,
        en: t.en(v.en.trim()),
        pt: t.pt(v.pt.trim()),
        source: 'generated',
        day: dayNum
      });
    });
  });

  return phrases;
};

export const buildPool = (dayNums, { includeTemplates = true } = {}) => {
  const pool = [];
  const seen = new Set();
  dayNums.forEach(d => {
    buildDayPhrases(d).forEach(p => addPhrase(pool, seen, p));
    if (includeTemplates) {
      buildTemplatePhrases(d).forEach(p => addPhrase(pool, seen, p));
    }
  });
  return pool;
};

export const shuffled = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const pickDistractors = (pool, target, count = 3) => {
  const targetLen = normalizeText(target.en).length;
  const sorted = pool
    .filter(p => p.id !== target.id && Math.abs(normalizeText(p.en).length - targetLen) <= 12)
    .sort(() => Math.random() - 0.5);
  return sorted.slice(0, count);
};

export { normalizeText, sentenceSplit };
