import Link from "next/link";
import { Meta } from "../../components/meta";
import { useState } from 'react'

import useSWR, { preload } from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json())

preload('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', fetcher)

export default function Cursos() {
    const { data, error } = useSWR('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', fetcher)

    if (error) return <>Error!!!</>
    if (!data) return <>Loading...</>

    return (
        <>
            <Meta />
            <section className="summary w-full h-[560px] bg-slate-200 col-span-12 flex items-center justify-center gap-8">
                <span>Cursos Disponibles</span>
                
                <Link href={'/'}>Home</Link>
                <div className="flex flex-col gap-4">
                    {
                        data.map((d: any) => (
                            <Link href={`/blog/${d.slug}`} key={d.id}>{d.slug}</Link>
                        ))
                    }
                </div>
            </section>
        </>
    )
}