import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import Head from "next/head";

const manropeFont = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={manropeFont.className}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
				<title>Pedro Nel Ospina 114</title>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</div>
	);
}
