/** @type {import('next').NextConfig} */

const repoName = 'alec-WaterIQTech.github.io';
const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: {
        unoptimized: true, // This disables Next.js image optimization (required for static export)
    },
};

export default nextConfig;
