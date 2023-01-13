import Link from "next/link";
import { Meta } from "../../components/meta";
import { useEffect, useState } from 'react'

import useSWR, { preload } from "swr";

export async function getStaticProps() {
    const data =  await fetch(`http://localhost:8000/wp-json/wp/v2/posts?_embed`)
    // const data =  await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?_embed`)
    const result = await data.json()

    return {
        props: {
            result
        },
    }
}

export default function Cursos(props: any) {
    
    return (
        <>
            <Meta title="La Escuela Infinita - Blog" />
            <section className="summary w-full h-[560px] bg-slate-200 col-span-12 flex items-center justify-center gap-8">
                <span>Cursos Disponibles</span>
                
                <Link href={'/'}>Home</Link>
                <div className="flex flex-col gap-4">
                    {
                        props.result.map((d: any) => (
                            <Link href={`/blog/${d.slug}`} key={d.id}>{d.slug}</Link>
                        ))
                    }
                </div>
            </section>
        </>
    )
}