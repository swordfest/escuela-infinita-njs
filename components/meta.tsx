import Head, { defaultHead } from "next/head";
import { useEffect } from "react";
import Script from 'next/script'

type Props = {
    title: string;
    keywords: string;
    description: string;
}

export function Meta ({ title, keywords, description}: Props) {
    useEffect(() => {
    // document.querySelector('html')?.classList.add('scroll-smooth')
    }, [])
    
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"/>
            {/* <link rel="stylesheet" type="text/css" href="/fonts/flaticons/flaticon.css"></link> */}
            <Script src="/js/scrollIntoView.js" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Escuela Infinita',
    keywords: 'education, learning, virtual environments, book, technologies',
    description: 'Enseñar y Aprender en Entornos Virtuales',
}