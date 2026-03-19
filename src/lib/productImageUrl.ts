/**
 * Encode each path segment so static filenames with commas, spaces, unicode, etc.
 * work correctly in <img src> URLs.
 */
export function productImageUrl(path: string): string {
  if (!path || path.startsWith('data:')) return path;
  return path
    .split('/')
    .map((seg) => (seg ? encodeURIComponent(seg) : ''))
    .join('/');
}
