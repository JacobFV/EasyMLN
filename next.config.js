/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: '', // localhost:3000
    env: {
        customKey: "myValue" // access via `process.env.customKey`
    },
    poweredByHeader: false,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config
    },
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    ...nextConfig
})