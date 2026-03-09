const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: isProd ? '/https-github.com-_-demo-locksmith' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
