import Head, { defaultHead } from "next/head";
import { useEffect } from "react";
import Script from "next/script";
import { MetaProps } from "./data";
import { NextSeo } from "next-seo";
import { optionsOpenGraph } from "./store";

export function Meta({ title, keywords, description }: MetaProps) {
	useEffect(() => {
		// document.querySelector('html')?.classList.add('scroll-smooth')
	}, []);

	return (
		<Head>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta
				property="og:image"
				content="https://laescuelainfinita.aprendiendo.cu/imgs/book.png"
			/>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
			{/* <Script src="/js/scrollIntoView.js" /> */}
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = {
	title: "La Escuela Infinita. Aprender y enseñar en entornos ubicuos",
	keywords:
		"educación, aprendizaje híbrido, tendencias pedagógicas, enseñanza-aprendizaje, escolarización, virtualidad, tecnología de la información y de la comunicación",
	description:
		"La Escuela Infinita propone bases para un nuevo modelo de escolarización universal y explica cómo aprender y enseñar de forma híbrida en el siglo XXI. Desde planteamientos disruptivos crea su relato a través de seis metáforas claves: la escuela vista como una conversación transmedial, como abundancia, como ubicuidad líquida, como totalidad que integra múltiples relaciones, como espacio invisible y como una comunidad conectada.",
};
