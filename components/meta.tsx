import Head, { defaultHead } from "next/head";
import { useEffect } from "react";
import Script from "next/script";
import { MetaProps } from "./data";
import { NextSeo } from 'next-seo';


export function Meta({ title, keywords, description }: MetaProps) {
	useEffect(() => {
		// document.querySelector('html')?.classList.add('scroll-smooth')
	}, []);

	const optionsOpenGraph = {
        title: 'La Escuela Infinita. Aprender y enseñar en entornos ubicuos',
        description: 'La Escuela Infinita propone bases para un nuevo modelo de escolarización universal y explica cómo aprender y enseñar de forma híbrida en el siglo XXI. Desde planteamientos disruptivos crea su relato a través de seis metáforas claves: la escuela vista como una conversación transmedial, como abundancia, como ubicuidad líquida, como totalidad que integra múltiples relaciones, como espacio invisible y como una comunidad conectada.',
		type: "book",
        book: {
            releaseDate: '2023-01-31T09:30:00Z',
            isbn: '978-959-13-4462-5',
            authors: [
              'https://orcid.org/0000-0002-6339-7047',
              'https://orcid.org/0000-0002-1995-0239',
              'https://orcid.org/0000-0002-9006-0087',
            ],
            tags: ['educación', 'aprendizaje', 'entornos ubicuos', 'libro', 'tecnología', 'transmedia', 'disruptivo', 'espacio invisible', 'comunidad conectada'],
          },
          images: [
            {
              url: 'https://laescuelainfinita.aprendiendo.cu/imgs/book.png',
              width: 850,
              height: 650,
              alt: 'Cover of the book',
            },
          ],
		locale: "es_IE",
		url: "https://laescuelainfinita.aprendiendo.cu",
		siteName: "La Escuela Infinita. Aprender y enseñar en entornos ubicuos",
	};

	return (
		<Head>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
            <NextSeo openGraph={optionsOpenGraph}/>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
			{/* <Script src="/js/scrollIntoView.js" /> */}
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = {
	title: "La Escuela Infinita. Aprender y enseñar en entornos ubicuos",
	keywords:
		"educación, aprendizaje, entornos ubicuos, libro, tecnología, transmedia, disruptivo, espacio invisible, comunidad conectada",
	description:
		"La Escuela Infinita propone bases para un nuevo modelo de escolarización universal y explica cómo aprender y enseñar de forma híbrida en el siglo XXI. Desde planteamientos disruptivos crea su relato a través de seis metáforas claves: la escuela vista como una conversación transmedial, como abundancia, como ubicuidad líquida, como totalidad que integra múltiples relaciones, como espacio invisible y como una comunidad conectada.",
};
