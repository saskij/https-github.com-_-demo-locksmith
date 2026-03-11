const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: (isProd && !isVercel) ? '/https-github.com-_-demo-locksmith' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
