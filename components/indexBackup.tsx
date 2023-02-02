import Link from "next/link";
import { Meta } from "./meta";
import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR, { preload } from "swr";
import HeaderSingle from "./headerSingle";
import BlogEntry from "./blogEntry";
import Footer from "./footer";
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export async function getStaticProps() {
	// const data =  await fetch(`http://localhost:8000/wp-json/wp/v2/posts?_embed`)
	const data = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/posts?_embed`
	);
	const result = await data.json();

    const tags = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/tags`
	);
	const tagsRes = await tags.json();

	return {
		props: {
			result,
            tagsRes,
		},
	};
}

export default function Blog(props: any) {
	return (
		<>
			<Meta title="La Escuela Infinita - Blog" />
			<HeaderSingle />
			<main className="container h-auto mx-auto  grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list col-span-12 lg:col-span-8 h-auto flex flex-col gap-10 px-4 xl:px-0 ">
					{props.result.map((d: any) => (
						<>
							<BlogEntry
								key={d.id}
								img={d.better_featured_image.source_url}
								id={d.id}
								title={d.title.rendered}
								authorName={d._embedded.author[0].name}
								date={d.date}
								excerpt={d.excerpt.rendered}
								link={`/blog/${d.slug}`}
							/>
						</>
					))}
				</div>
				<div className="blog-sidebar col-span-12 lg:col-span-4 px-4 lg:px-0 h-auto lg:h-screen flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-semibold">Entradas recientes</span>
						{props.result.slice(0, 4).map((d: any) => (
                            <div key={d.id} className="last-entry w-full h-24 pl-4 flex gap-4">
                                <div className="relative thumbnail w-24 h-24 ">
                                    <Image className="object-contain" src={d.better_featured_image.media_details.sizes.thumbnail.source_url} fill alt={'thumb'} />
                                </div>
                                <div className="w-2/3 h-full flex flex-col gap-1">
                                    <Link href={`/blog/${d.slug}`} key={d.id}>
                                        <h1 className=" py-1 text-lg font-semibold">{d.title.rendered} </h1>
                                    </Link>
                                    <div className="flex gap-2 text-[#7A7A7A] font-semibold text-md">
                                        <span>{format(new Date(d.date), "d 'de' MMMM yyyy", {locale: es})}</span>
                                    </div>
                                </div>
							</div>
						))}
					</div>
                    <div className="flex flex-col gap-4 ">
						<span className="text-xl font-semibold">Nube de etiquetas</span>
						<div className="tags-wrapper w-full h-auto flex gap-2 pl-4 flex-wrap ">
                            {props.tagsRes.map((t: any) => (
                                <Link href={`/blog/${t.id}`} key={t.id}>
                                    <div key={t.id} className="last-entry w-auto px-3 h-10 flex items-center justify-center text-white bg-[#162330]">
                                        {t.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
