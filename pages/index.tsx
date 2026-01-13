import { ScrollingTextBar } from "@/components/scrolling-text-bar";
import { TWEET_IDS } from "@/constants";
import { ARTICLES } from "@/constants/articles";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Tweet } from "react-tweet";

interface HomeProps {
	articles: {
		title: string;
		description: string;
		id: string;
	}[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const articles: HomeProps["articles"] = [];
	return {
		props: {
			articles,
		},
		revalidate: 600,
	};
};

const Home = ({}: HomeProps) => {
	return (
		<>
			<Head>
				<title>Pedro Nel Ospina 114</title>
			</Head>
			<ScrollingTextBar texts={["La plata bien manejada, si alcanza", "Vota este 23 de marzo por el 114 para la cámara de representantes por Bogotá"]} />
			<div className="min-h-screen py-12">
				<div className="container mx-auto flex flex-col items-center justify-center">
					<div className="w-full md:max-w-125 relative mb-8">
						<img src={"/assets/main.png"} key={"slogan"} alt="la plata bien manejada, si alcanza" className="object-contain" />
					</div>
					<div className="flex overflow-x-auto max-w-full gap-0 pb-4 snap-x snap-mandatory scrollbar-hide">
						{TWEET_IDS.map((tweetId) => (
							<div key={tweetId} className="px-3 w-11/12 md:w-1/2 snap-start">
								<Tweet id={tweetId} />
							</div>
						))}
					</div>

					{/* Articles Section */}
					<div className="w-full max-w-6xl mt-6 px-4">
						<h2 className="text-3xl font-bold">Propuestas en detalle</h2>
						<p className="text-xs md:text-base">En esta campaña, tenemos planes e ideas claras sobre cómo mejorar la vida de los colombianos</p>
						<p className="font-bold mb-4">Lee algunas de estas ideas</p>
						<div className="flex flex-col md:flex-row gap-6">
							{ARTICLES.slice(0, 3).map((article) => (
								<div
									key={article.id}
									className="bg-foreground rounded-md text-background border-2 border-foreground p-6 flex flex-col justify-between hover:shadow-lg transition-shadow md:flex-1">
									<div>
										<h3 className="text-xl font-bold mb-1">{article.title}</h3>
										<p className="mb-4">{article.description}</p>
									</div>
									<Link
										href={`/articles/${article.id}`}
										className="bg-background rounded-md text-foreground px-4 py-2 font-semibold hover:opacity-90 transition-opacity text-center mt-4 block">
										Lee el artículo
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
