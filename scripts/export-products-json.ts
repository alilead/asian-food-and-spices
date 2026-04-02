/**
 * Writes public/products.json from src/data/products.ts (same merged catalog the app uses).
 * Run after sync:catalog when prices change.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { products } from '../src/data/products';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const outDir = path.join(ROOT, 'public');
mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'products.json');
writeFileSync(outPath, JSON.stringify(products), 'utf8');
console.log(`Wrote ${products.length} products -> ${outPath}`);
