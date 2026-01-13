import { ARTICLES } from "@/constants/articles";
import { promises as fs } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleProps {
	content: string;
	id: string;
	title: string;
	description: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const articlesDirectory = path.join(process.cwd(), "constants/articles");
	const filenames = await fs.readdir(articlesDirectory);

	const paths = filenames
		.filter((filename) => filename.endsWith(".md"))
		.map((filename) => ({
			params: { id: filename.replace(/\.md$/, "") },
		}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
	const id = params?.id as string;
	const articlePath = path.join(process.cwd(), "constants/articles", `${id}.md`);
	const articleMeta = ARTICLES.find((article) => article.id === id);

	try {
		const content = await fs.readFile(articlePath, "utf8");
		return {
			props: {
				content,
				id,
				title: articleMeta?.title || "",
				description: articleMeta?.description || "",
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

const Article = ({ content, title, description }: ArticleProps) => {
	return (
		<>
			<Head>
				<title>{title} - Pedro Nel Ospina 114</title>
			</Head>
			<div className="min-h-screen py-12">
				<div className="container flex flex-col mx-auto px-4 max-w-3xl">
					{/* Header Section */}
					<Link href={"/"} className="bg-none font-bold hover:underline text-foreground mb-8">
						{"← "} Volver al inicio
					</Link>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 pb-8 border-b-2 border-foreground">
						<img src="/assets/header.png" alt="Pedro Nel Ospina" className="w-32 h-32 rounded-xl object-fill flex-shrink-0" />
						<div className="flex flex-col text-center md:text-left">
							<h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
							<p className="text-lg opacity-90">{description}</p>
						</div>
					</div>

					{/* Article Content */}
					<article className="prose prose-invert prose-lg">
						<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
					</article>
				</div>
			</div>
		</>
	);
};

export default Article;
