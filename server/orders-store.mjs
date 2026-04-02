import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/** Lambda has a writable /tmp; local dev uses server/data. */
export function appendOrder(order) {
  const target = process.env.AWS_EXECUTION_ENV
    ? path.join('/tmp', 'orders.jsonl')
    : path.join(ROOT, 'server', 'data', 'orders.jsonl');
  try {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.appendFileSync(target, `${JSON.stringify(order)}\n`, 'utf8');
  } catch (e) {
    console.error('appendOrder failed', e);
  }
}
