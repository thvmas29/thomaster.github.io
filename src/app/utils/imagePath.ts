/**
 * Resolve image paths for both development and production (GitHub Pages)
 * - External URLs (http/https) are returned as-is
 * - Local images from /public folder are resolved with BASE_URL
 *
 * In dev: BASE_URL = "/" so /cakephp.png
 * In prod: BASE_URL = "/thomaster.github.io/" so /thomaster.github.io/cakephp.png
 */
export function resolveImagePath(path: string): string {
  if (!path) return '';

  // External URLs (e.g., Unsplash)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get BASE_URL from Vite (includes trailing slash)
  const base = import.meta.env.BASE_URL;

  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Combine base + path
  return `${base}${cleanPath}`;
}
