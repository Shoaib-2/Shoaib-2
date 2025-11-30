#!/usr/bin/env node
/**
 * Dynamic banner generator.
 * Usage: node scripts/generate-banner.js "Custom Tagline"
 * Outputs: assets/banner.svg
 */
const fs = require('fs');
const path = require('path');

const tagline = process.argv.slice(2).join(' ') || 'React · Next.js · TypeScript · Design Systems · Performance';
const now = new Date();
const dateStr = now.toISOString().split('T')[0];

const svg = `<svg width="1200" height="280" viewBox="0 0 1200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <style><![CDATA[
      .title { font: 700 54px 'Segoe UI', Ubuntu, sans-serif; fill: #fff; }
      .subtitle { font: 400 22px 'Segoe UI', Ubuntu, sans-serif; fill: #cbd5e1; }
      .date { font: 400 14px 'Segoe UI', Ubuntu, sans-serif; fill: #64748b; }
      @media (prefers-color-scheme: light) {
        .title { fill: #0f172a; }
        .subtitle { fill: #334155; }
        .date { fill: #475569; }
      }
    ]]></style>
  </defs>
  <rect width="1200" height="280" fill="url(#grad)"/>
  <text x="50%" y="120" text-anchor="middle" class="title">Shoaib • Frontend Engineer</text>
  <text x="50%" y="175" text-anchor="middle" class="subtitle">${tagline}</text>
  <text x="50%" y="205" text-anchor="middle" class="date">Generated ${dateStr}</text>
</svg>`;

const outPath = path.join(__dirname, '..', 'assets', 'banner.svg');
fs.writeFileSync(outPath, svg, 'utf8');
console.log('Banner updated:', outPath);
