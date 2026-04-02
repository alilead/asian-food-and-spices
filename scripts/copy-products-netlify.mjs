/**
 * Copies public/products.json next to the Netlify function bundle so the API can read the catalog.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const src = path.join(ROOT, 'public', 'products.json');
const dest = path.join(ROOT, 'netlify', 'functions', 'data', 'products.json');
if (!fs.existsSync(src)) {
  console.error('Missing public/products.json — run npm run export:products first');
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log(`Copied catalog -> ${dest}`);
