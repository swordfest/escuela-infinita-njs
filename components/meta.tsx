import Head, { defaultHead } from "next/head";
import { useEffect } from "react";

type Props = {
    title: string;
    keywords: string;
    description: string;
}

export function Meta ({ title, keywords, description}: Props) {
    useEffect(() => {
    // document.querySelector('body')?.classList.add('overflow-y-scroll', 'bg-[#F8F8F8]', 'dark:bg-[#141414]', 'text-[#212121]')
    }, [])
    
    return (
        <Head>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Escuela Infinita',
    keywords: 'education, learning, virtual environments, book, technologies',
    description: 'Enseñar y Aprender en Entornos Virtuales',
}