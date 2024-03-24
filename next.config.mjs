/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'daisyui.com',
				port: '',
				pathname: '/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
			},
		],
	},
}

export default nextConfig;
