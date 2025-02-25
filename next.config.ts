import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_DISCORD_URL: process.env.NEXT_PUBLIC_DISCORD_URL,
	},

};

export default nextConfig;
