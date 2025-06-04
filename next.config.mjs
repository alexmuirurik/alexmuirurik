import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                pathname: '**',
                hostname: '**',
                port: ''
            }
        ]
    }
}

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
