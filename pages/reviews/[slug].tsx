import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { preload } from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { Meta } from "../../components/meta";
import Footer from "../../components/footer";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import HeaderSingle from "../../components/headerSingle";
import DOMPurify from "isomorphic-dompurify";

export async function getStaticProps(context: any) {
	const {
		params: { slug },
	} = context;

	const posts = await fetch(
		`https://apiei.aprendiendo.cu/index.php/wp-json/wp/v2/resenas?_embed`
	);
	const postsResults = await posts.json();

	const data = await fetch(
		// `http://localhost:8000/wp-json/wp/v2/posts?_embed&slug=${slug}`
		`https://apiei.aprendiendo.cu/index.php/wp-json/wp/v2/resenas?_embed&slug=${slug}`
	);

	const result = await data.json();

	return {
		notFound: result.length == 0,
		props: {
			...result[0],
			postsResults,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const posts = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/resenas`
	);
	const resenasResults = await posts.json();

	const paths = resenasResults.map((r: any) => {
		return {
			params: { slug: r.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export default function Review(props: any) {
	return (
		<>
			<Meta title={`La Escuela Infinita - ${props.title.rendered}`} />
			<HeaderSingle title={props.title.rendered} />
			{/* <Meta title={props.title} /> */}
			<main className="container h-auto mx-auto grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list col-span-12 px-4 xl:px-0 lg:col-span-8 h-auto flex flex-col gap-10 ">
					<div
						className="post"
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(props.content.rendered),
						}}></div>
				</div>
				<div className="blog-sidebar col-span-12 lg:col-span-4 h-screen px-4 xl:px-0 flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						{/* <div className="relative w-40 h-44">
							<Image
								src={
									props.better_featured_image.media_details.sizes.thumbnail
										.source_url
								}
								fill
								alt={"thumb"}
							/>
						</div> */}
						<span className="text-xl font-semibold">Entradas recientes</span>
						{props.postsResults.slice(0, 4).map((d: any) => (
							<div
								key={d.id}
								className="last-entry w-full h-24 pl-4 flex gap-4">
								<div className="relative thumbnail w-24 h-24 ">
									<Image
										src={
											d.better_featured_image.media_details.sizes.thumbnail
												.source_url
										}
										fill
										alt={"thumb"}
									/>
								</div>
								<div className="w-2/3 h-auto flex flex-col gap-1">
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
                                    <div key={t.id} className="last-entry w-auto px-3 h-10 flex items-center justify-center text-white bg-[#162330]">
                                        {t.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
					</div> */}
				</div>
			</main>
			<Footer animate={false} />
		</>
	);
}
