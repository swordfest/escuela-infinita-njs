import Link from "next/link";
import { Meta } from "../../components/meta";
import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR, { preload } from "swr";
import HeaderSingle from "../../components/headerSingle";
import BlogEntry from "../../components/blogEntry";
import Footer from "../../components/footer";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import DOMPurify from "isomorphic-dompurify";
import { NextSeo } from "next-seo";
import { optionsOpenGraph } from "../../components/store"; 


export async function getStaticProps() {
	// const data =  await fetch(`http://localhost:8000/wp-json/wp/v2/posts?_embed`)
	const data = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/posts?_embed`
	);
	const result = await data.json();

	// const tags = await fetch(
	// 	`https://apiei.aprendiendo.cu/wp-json/wp/v2/tags`
	// );
	// const tagsRes = await tags.json();

	const comments = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/comments`
	);
	const resComment = await comments.json();

	return {
		props: {
			result,
			// tagsRes,
			resComment,
		},
	};
}

export default function Blog(props: any) {
	return (
		<>
			<Meta title="La Escuela Infinita - Blog" />
			<NextSeo openGraph={optionsOpenGraph}/>
			<HeaderSingle isBlog={true} />
			<main className="container h-auto mx-auto  grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list col-span-12 lg:col-span-8 h-auto flex flex-col gap-10 px-4 xl:px-0 ">
					{props.result.map((d: any) => (
						<>
							<div className="post-list col-span-12 px-4 xl:px-0 lg:col-span-8 h-auto flex flex-col gap-10 pb-10 ">
								<div className="flex flex-col gap-2">
									<h1 className=" w-auto text-xl xl:text-2xl 2xl:text-3xl font-semibold hover:text-[#174563]">
										<Link className="w-auto" href={`/blog/${d.slug}`}>
											{d.title.rendered}
										</Link>
									</h1>
									<div className="flex gap-2 text-[#7A7A7A] font-semibold text-base xl:text-lg">
										<span className=" capitalize">
											{d._embedded.author[0].name}
										</span>
										{"|"}
										<span>
											{format(new Date(d.date), "d 'de' MMMM yyyy", {
												locale: es,
											})}
										</span>
										{"|"}
										<div className="flex gap-2 items-center">
											{/* {props.cant} */}
											{
												props.resComment.filter((com: any) => com.post === d.id)
													.lenght
											}
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M20 2H4C2.897 2 2 2.897 2 4V22L7.333 18H20C21.103 18 22 17.103 22 16V4C22 2.897 21.103 2 20 2ZM20 16H6.667L4 18V4H20V16Z"
													fill="#7A7A7A"
												/>
												<path
													d="M15 12C16.1046 12 17 11.1046 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 11.1046 13.8954 12 15 12Z"
													fill="#7A7A7A"
												/>
												<path
													d="M9 12C10.1046 12 11 11.1046 11 10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10C7 11.1046 7.89543 12 9 12Z"
													fill="#7A7A7A"
												/>
											</svg>
										</div>
									</div>
									<hr />
								</div>
								<div className="relative w-full h-[480px]">
									<Image className="object-cover" src={d.better_featured_image.source_url} fill alt="Imagen de post" />
								</div>
								<div
									className="post"
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(d.content.rendered),
									}}></div>
							</div>
						</>
					))}
				</div>
				<div className="blog-sidebar col-span-12 lg:col-span-4 px-4 lg:px-0 h-auto lg:h-screen flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-semibold">Entradas recientes</span>
						{props.result.slice(0, 4).map((d: any) => (
							<div
								key={d.id}
								className="last-entry w-full h-24 pl-4 flex gap-4">
								<div className="relative thumbnail w-24 h-24 ">
									<Image
										className="object-contain"
										src={
											d.better_featured_image.media_details.sizes.thumbnail
												.source_url
										}
										fill
										alt={"thumb"}
									/>
								</div>
								<div className="w-2/3 h-full flex flex-col gap-1">
									<Link href={`/blog/${d.slug}`} key={d.id}>
										<h1 className=" py-1 text-lg font-semibold">
											{d.title.rendered}{" "}
										</h1>
									</Link>
									<div className="flex gap-2 text-[#7A7A7A] font-semibold text-md">
										<span>
											{format(new Date(d.date), "d 'de' MMMM yyyy", {
												locale: es,
											})}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* <div className="flex flex-col gap-4 ">
						<span className="text-xl font-semibold">Nube de etiquetas</span>
						<div className="tags-wrapper w-full h-auto flex gap-2 pl-4 flex-wrap ">
							{props.tagsRes.map((t: any) => (
								<Link href={`/blog/${t.id}`} key={t.id}>
									<div
										key={t.id}
										className="last-entry w-auto px-3 h-10 flex items-center justify-center text-white bg-[#162330]">
										{t.name}
									</div>
								</Link>
							))}
						</div>
					</div> */}
				</div>
			</main>
			<Footer />
		</>
	);
}
