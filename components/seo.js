import Head from "next/head";

export default function SEO() {
	const title = "🔳";
	const description = "/kjuːb/";
	const image = "https://galacticbots.ga/cube.png";
	const domain = "cube.ejer.gq";
	const url = `https://${domain}`;
	const color = "#ffffff";

	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.png" />

			<meta name="title" content={title} />
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta property="twitter:url" content={url} />
			<meta property="twitter:domain" content={domain} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />

			<meta property="og:site_name" content="🔳" />
			<meta name="theme-color" content={color} />
		</Head>
	);
}
