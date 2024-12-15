/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/proxy/:path*',
                destination: 'https://olive-defiant-ox-42.mypinata.cloud/:path*',
            },
        ];
    },
};
