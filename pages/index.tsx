import Footer from "@/components/footer";
import Loader from "@/components/loader";
import { ScrollingTextBar } from "@/components/scrolling-text-bar";
import { TWEET_IDS } from "@/constants";
import { ARTICLES, EXTERNAL_ARTICLES } from "@/constants/articles";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Tweet = dynamic(() => import("react-tweet").then((mod) => mod.Tweet), {
	ssr: false,
	loading: () => <div className="h-96 bg-gray-100 rounded-lg animate-pulse" />,
});

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
	const [loading, setLoading] = useState(true);

	return (
		<>
			<Head>
				<title>Pedro Nel Ospina 114</title>
			</Head>
			<ScrollingTextBar texts={["Igualar la cancha", "Vota este 8 de marzo por el #114 para la Cámara de Representantes por Bogotá"]} />
			<div className="min-h-screen py-12">
				<div className="container mx-auto flex flex-col items-center justify-center">
					<div className="w-full md:max-w-125 relative">
						<Image
							src="/assets/main.png"
							key="slogan"
							alt="la plata bien manejada, si alcanza"
							className="object-contain max-h-[80svh]"
							width={1000}
							height={400}
							priority
							onLoadingComplete={() => setLoading(false)}
							fetchPriority="high"
							sizes="(max-width: 768px) 400px, 1000px"
						/>
					</div>
					<div className="px-6 md:px-20 my-10">
						<p className="text-base md:text-xl text-justify">
							Actualmente, las leyes en Colombia no responden a la realidad económica del país, frenando el potencial de las MiPymes y del sector rural. Como
							candidato a la <span className="font-bold">Cámara por Bogotá con el Nuevo Liberalismo {"(#114)"}</span>, pongo a disposición mi experiencia
							liderando instituciones como la DIAN, el Presupuesto Nacional, Bancafé, Corficolombiana y Colpensiones para transformar este marco legal en un
							motor de desarrollo.
						</p>
					</div>
					<div className="flex overflow-x-auto max-w-full gap-0 pb-4 snap-x snap-mandatory scrollbar-hide">
						{TWEET_IDS.map((tweetId) => (
							<div key={tweetId} className="px-3 md:first-of-type:pl-20 first-of-type:pl-6 w-11/12 md:w-1/2 snap-start">
								<Tweet id={tweetId} />
							</div>
						))}
					</div>

					{/* Articles Section */}
					<div className="w-full max-w-6xl mt-6 px-6 md:px-20">
						<h2 className="text-3xl font-bold font-body">Propuestas en detalle</h2>
						<p className="text-md md:text-lg">En esta campaña, tenemos planes e ideas claras sobre cómo mejorar la vida de los colombianos</p>
						<p className="font-bold mb-4">Lee algunas de estas ideas</p>
						<div className="flex flex-col lg:flex-row gap-6">
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

					{/* Interview Section */}
					<div className="w-full max-w-6xl mt-16 px-6 md:px-20">
						<h2 className="text-3xl font-bold font-body mb-2">En los medios</h2>
						<p className="text-md md:text-lg mb-6">Conoce más sobre nuestra visión y propuestas</p>
						<div className="bg-white rounded-lg p-6 md:p-10 border-4 border-foreground shadow-xl hover:shadow-2xl transition-shadow">
							<div className="flex flex-col justify-start flex-shrink-0">
								<div className="flex items-start p-5 pl-0">
									<Image src={"/assets/channels4_profile.png"} height={100} width={100} alt="el espectador" />
								</div>
								<div className="flex-1">
									<h3 className="text-2xl md:text-3xl font-bold text-background mb-3">¿Por qué votar por Pedro Nel Ospina, candidato a la Cámara?</h3>
									<p className="text-lg text-gray-700 mb-1 font-semibold">El Espectador</p>
									<p className="text-gray-600 mb-6">
										Entrevista completa sobre las propuestas y la visión de la candidatura #114 para la Cámara de Representantes por Bogotá.
									</p>
									<a
										href="https://www.elespectador.com/politica/elecciones-colombia-2026/por-que-votar-por-pedro-nel-ospina-candidato-a-la-camara/"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">
										Ver entrevista completa →
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Written about 114 Section */}
					<div className="w-full max-w-6xl mt-16 px-6 md:px-20">
						<div className="bg-white rounded-lg p-6 md:p-10 shadow-xl">
							<h2 className="text-3xl text-background font-bold font-body">Lo que dicen de la campaña</h2>
							<p className="text-md text-background md:text-lg">Voces expertas respaldan nuestras propuestas</p>
							<p className="font-bold text-background mb-4">Lee algunas de estas opiniones</p>
							<div className="flex flex-col lg:flex-row gap-6">
								{EXTERNAL_ARTICLES.slice(0, 3).map((article) => (
									<div
										key={article.id}
										className="bg-background rounded-md text-foreground border-2 border-foreground p-6 flex flex-col justify-between hover:shadow-lg transition-shadow md:flex-1">
										<div>
											<h3 className="text-xl uppercase font-light mb-1">{article.author}</h3>
											<h3 className="text-xl font-bold mb-1">{article.title}</h3>
											<p className="mb-4">{article.description}</p>
										</div>
										<Link
											href={`/articles/external/${article.id}`}
											className="bg-foreground max-w-60 rounded-md text-background px-4 py-2 font-semibold hover:opacity-90 transition-opacity text-center mt-4 block">
											Lee el artículo
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Loader open={loading} fullscreen />
			<Footer />
		</>
	);
};

export default Home;
