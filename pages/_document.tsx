import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				{/* Basic Meta Tags */}
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Pedro Nel Ospina Santamaría - Candidato a la Cámara de Representantes por Bogotá, lista 114 del Nuevo Liberalismo. La plata bien manejada, sí alcanza. Experiencia para integrar y crecer."
				/>
				<meta
					name="keywords"
					content="Pedro Nel Ospina, 114, Nuevo Liberalismo, Cámara de Representantes, Bogotá, Colombia, elecciones 2026, política, economía"
				/>
				<meta name="author" content="Pedro Nel Ospina 114" />

				{/* Theme Color - Red */}
				<meta name="theme-color" content="#d22023" />
				<meta name="msapplication-TileColor" content="#d22023" />
				<meta name="msapplication-navbutton-color" content="#d22023" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/assets/header.png" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Pedro Nel Ospina 114 - Cámara de Representantes por Bogotá" />
				<meta
					property="og:description"
					content="La plata bien manejada, sí alcanza. Vota este 23 de marzo por el 114 para la Cámara de Representantes por Bogotá. Nuevo Liberalismo."
				/>
				<meta property="og:image" content="/assets/main.png" />
				<meta property="og:locale" content="es_CO" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Pedro Nel Ospina 114 - Cámara de Representantes por Bogotá" />
				<meta name="twitter:description" content="La plata bien manejada, sí alcanza. Experiencia para integrar y crecer." />
				<meta name="twitter:image" content="/assets/main.png" />

				{/* Mobile App Capabilities */}
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Pedro Nel Ospina 114" />

				{/* Preload Critical Assets */}
				<link rel="preload" href="/assets/header.png" as="image" />
				<link rel="preload" href="/assets/main.png" as="image" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
