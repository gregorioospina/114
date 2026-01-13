import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Serif_Text, Inter } from "next/font/google";
import Head from "next/head";

const interFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const serifTextFont = DM_Serif_Text({
	variable: "--font-serif-text",
	subsets: ["latin"],
	weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${interFont.variable} ${serifTextFont.variable}`}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
				<title>Pedro Nel Ospina 114</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}
