/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.alexmuiruri.com',
				port: '',
				pathname: '**',
			},
		],
	},
}

export default nextConfig;
