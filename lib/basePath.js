/**
 * Returns the correct base path prefix depending on the environment.
 * - On GitHub Pages (production build): /https-github.com-_-demo-locksmith
 * - On local dev server: '' (empty string)
 */
export const BASE_PATH =
    process.env.NODE_ENV === 'production'
        ? '/https-github.com-_-demo-locksmith'
        : '';

/**
 * Prepend the correct base path to an image path.
 * Usage: img(path) → '/images/logo1.png' or '/https-github.com-.../images/logo1.png'
 */
export function img(path) {
    return `${BASE_PATH}${path}`;
}
