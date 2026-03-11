/**
 * Returns the correct base path prefix depending on the environment.
 * - On GitHub Pages (production build): /https-github.com-_-demo-locksmith
 * - On local dev server: '' (empty string)
 */
// detect if we're on Vercel
const isVercel = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_VERCEL_URL;
const isProd = process.env.NODE_ENV === 'production';

// Only use subpath for GitHub Pages (non-Vercel production)
export const BASE_PATH = (isProd && !isVercel)
    ? '/https-github.com-_-demo-locksmith'
    : '';

/**
 * Prepend the correct base path to an image path.
 * Usage: img(path) → '/images/logo1.png' or '/https-github.com-.../images/logo1.png'
 */
export function img(path) {
    return `${BASE_PATH}${path}`;
}
