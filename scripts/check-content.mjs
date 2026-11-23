// Icerik kontrolu: TR/EN anahtarlari ayni mi, stop-slop yasaklari var mi, e-posta yer tutucu mu.
import { CONTENT } from '../lib/content.js';
import { SITE } from '../lib/site.js';

const errors = [];
const warnings = [];

function shape(v) {
  if (Array.isArray(v)) return v.map(shape);
  if (v && typeof v === 'object') return Object.fromEntries(Object.keys(v).sort().map((k) => [k, shape(v[k])]));
  return typeof v;
}
if (JSON.stringify(shape(CONTENT.tr)) !== JSON.stringify(shape(CONTENT.en))) errors.push('TR ve EN metinlerinin yapisi farkli (eksik anahtar veya farkli sayida madde).');

const strings = [];
(function walk(v, path) {
  if (typeof v === 'string') strings.push([path, v]);
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
})(CONTENT, 'CONTENT');

// stop-slop: uzun tire ve kalip ifadeler
const banned = [
  /—/, /–/,
  /\bhere's (the thing|what|why)\b/i, /\blet that sink in\b/i, /\bgame[- ]changer\b/i, /\bseamless(ly)?\b/i,
  /\bunleash\b/i, /\belevate\b/i, /\bdeep dive\b/i, /\bin today's\b/i, /\bat the end of the day\b/i,
  /\b(really|literally|genuinely|honestly|simply|truly|actually)\b/i,
  /\bnot just\b/i, /\bit's not\b.*\bit's\b/i,
  /\bmuhteşem deneyim\b/i, /\bsadece bu değil\b/i, /\bunutulmaz\b/i, /\bsınırsız eğlence\b/i
];
for (const [path, s] of strings) for (const re of banned) if (re.test(s)) errors.push(`${path}: yasak kalip ${re} -> "${s.slice(0, 80)}"`);

if (/example\.com$/.test(SITE.contactEmail)) warnings.push(`Destek e-postasi hala yer tutucu: ${SITE.contactEmail} (lib/site.js)`);

for (const w of warnings) console.warn('UYARI:', w);
if (errors.length) {
  for (const e of errors) console.error('HATA:', e);
  process.exit(1);
}
console.log(`Icerik kontrolu gecti (${strings.length} metin, TR/EN esit).`);
