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
import { useRecoilState } from "recoil";
import { optionsOpenGraph, postsList } from "../../components/store";
import { Inputs, lastPosts } from "../../components/data";
import { NextSeo } from "next-seo";

export async function getStaticProps(context: any) {
	const {
		params: { slug },
	} = context;

	const posts = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/posts?_embed`
	);
	const postsResults: lastPosts = await posts.json();

	const data = await fetch(
		// `http://localhost:8000/wp-json/wp/v2/posts?_embed&slug=${slug}`
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/posts?_embed&slug=${slug}`
	);
	const result = await data.json();

	const comments = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/comments?post=${result[0].id}`
	);
	const resComment = await comments.json();

	console.log(`Building slug: ${slug}`)

	return {
		notFound: result.length == 0,
		props: {
			...result[0],
			comments: resComment,
			postsResults,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {

	const posts = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/posts`
	);
	const postsResults = await posts.json();

	// console.log(postsResults)

	const paths: lastPosts = postsResults.map((p: any) => {
		return {
			params: { slug: p.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}



async function sendRequest(url: string, { arg }: any) {
	return fetch(url, {
		method: "POST",
		redirect: "follow",
		// mode: 'same-origin',
		body: JSON.stringify(arg),
		headers: {
			// 'Accept': '*/*'
			// 'Allow':'*',
			"Content-Type": "application/json; charset=UTF-8",
			// 'X-Content-Type-Options': 'nosniff',
		},
	}).then((res) => res.json());
}

export default function Post(props: any) {
	// const [author, setAuthor] = useState("");
	// const [email, setEmail] = useState("");
	// const [content, setContent] = useState("");
	const [commentData, setCommentData] = useState<Inputs>();
	const [posts, setPosts] = useRecoilState(postsList);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setCommentData(data);
	};

	// ?post=${props.id}
	const {
		trigger,
		isMutating,
	} = useSWRMutation(
		`https://apiei.aprendiendo.cu/index.php/wp-json/wp/v2/comments?post=${props.id}&author_name=${commentData?.author_name}&author_email=${commentData?.author_email}&content=${commentData?.content}`,
		sendRequest,
		{ revalidate: true }
	);

	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());

	const {
		data: comm,
		error,
		mutate,
	} = useSWR(
		`https://apiei.aprendiendo.cu/index.php/wp-json/wp/v2/comments?post=${props.id}`,
		fetcher,
		{ revalidateOnFocus: false }
	);

	if (error) <>Error...</>;
	if (!comm) <>Loading...</>;

	useEffect(() => {
		// console.log(props.comments);
		if (commentData != undefined) {
			trigger(commentData);
			reset();
		}
		console.log(props.postsResults);
	}, [commentData]);

	useEffect(() => {
		if (!isMutating) {
			mutate();
		}
	}, [isMutating]);

	// useEffect(() => {
	//     document.addEventListener("load", handleLoad)
	// })

	// const handleLoad = () => {
	//     document.querySelector("p")?.style.color = "red";
	// }

	return (
		<>
			<Meta title={`La Escuela Infinita - ${props.title.rendered}`} />
			<NextSeo openGraph={optionsOpenGraph}/>
			<HeaderSingle title={props.title.rendered} />
			{/* <Meta title={props.title} /> */}
			<main className="container h-auto mx-auto grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list col-span-12 px-4 xl:px-0 lg:col-span-8 h-auto flex flex-col gap-10 ">
					<div
						className="post"
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(props.content.rendered),
						}}></div>
					<div className="comments">
						<div className="lista w-full h-auto flex flex-col my-6 gap-6">
							<hr />
							<span className="text-3xl font-semibold">Comentarios:</span>
							{comm?.map((c: any) => (
								<div
									key={c.id}
									className="w-full min-h-min flex flex-col bg-[#EDE9E9] gap-4 p-4">
									<div className="font-semibold w-full flex items-center justify-between">
										<span>
											{c.author_name}{" "}
											<span className="font-normal">ha comentado:</span>
										</span>
										<span className="text-[#7a7a7a] text-xs ">
											{format(new Date(c.date), "d 'de' MMMM yyyy", {
												locale: es,
											})}
										</span>
									</div>
									<div
										key={c.id}
										className=" pl-2 xl:pl-4"
										dangerouslySetInnerHTML={{
											__html: DOMPurify.sanitize(c.content.rendered),
										}}></div>
									<span className="font-semibold"></span>
								</div>
							))}
						</div>
						<div className="write-comment flex flex-col">
							<form
								className="flex flex-col gap-2"
								onSubmit={handleSubmit(onSubmit)}>
								<label className="font-semibold" htmlFor="autor">
									Nombre *
								</label>
								<input
									id="autor"
									title="autor"
									type="text"
									placeholder="Escriba su nombre"
									className="h-14 p-4 border-2 bg-transparent border-[#476b91] focus:border-[#162330] focus:outline-none"
									{...register("author_name", { required: true })}
								/>
								{errors.author_name && (
									<span className="text-red-500">This field is required</span>
								)}
								<label className="font-semibold" htmlFor="email">
									Email *
								</label>
								<input
									id="email"
									type="text"
									title="Email"
									className="h-14 p-4 border-2 bg-transparent border-[#476b91] focus:border-[#162330] focus:outline-none"
									placeholder="Escriba su email"
									{...register("author_email", { required: true })}
								/>
								{errors.author_email && (
									<span className="text-red-500">This field is required</span>
								)}
								<label className="font-semibold" htmlFor="comentario">
									Comentario *
								</label>
								<textarea
									id="comentario"
									title="comentario"
									placeholder="Escribe el comentario"
									className="h-48 p-4 border-2 bg-transparent border-[#476b91] focus:border-[#162330] focus:outline-none"
									{...register("content", { required: true })}
								/>
								{errors.content && (
									<span className="text-red-500">This field is required</span>
								)}
								<input
									className=" w-full lg:w-56 h-14 px-6 text-white cursor-pointer bg-[#174563] hover:bg-[#1e3042] transition-colors"
									type="submit"
									value={"ENVIAR COMENTARIO"}
								/>
							</form>
						</div>
					</div>
				</div>
				<div className="blog-sidebar col-span-12 lg:col-span-4 h-screen px-4 xl:px-0 flex flex-col gap-8">
					<div className="flex flex-col gap-4">
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
			<Footer />
		</>
	);
}
