/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: "/earth-compressed.mp4",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
					{
						key: "Accept-Ranges",
						value: "bytes",
					},
				],
			},
		];
	},
};

export default nextConfig;
