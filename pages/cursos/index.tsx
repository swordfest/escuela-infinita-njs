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
import Curso from "../../components/curso";

export async function getStaticProps() {
	// const data =  await fetch(`http://localhost:8000/wp-json/wp/v2/posts?_embed`)
	const data = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/index.php/wp-json/wp/v2/cursos?_embed`
	);
	const result = await data.json();

	const tags = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/index.php/wp-json/wp/v2/tags`
	);
	const tagsRes = await tags.json();

	return {
		props: {
			result,
			tagsRes,
		},
	};
}

export default function Cursos(props: any) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<>
			<Meta title="La Escuela Infinita - Blog" />
			<HeaderSingle page={'cursos'} />
			<main className="container h-auto mx-auto  grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list col-span-12 lg:col-span-8 h-auto grid grid-cols-12 auto-rows-auto gap-8 px-4 xl:px-0 ">
					{hasMounted &&
						props.result.map((c: any) => (
							<Curso
								key={c.id}
								styleClass={" col-span-4 "}
								iframe={" h-44 brightness-75 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700 "}
								link={c.slug}
								url={c.acf.video_thumbnail}
								title={c.title.rendered}
								excerpt={c.excerpt.rendered}
							/>
						))}
				</div>
				<div className="blog-sidebar col-span-12 lg:col-span-4 px-4 lg:px-0 h-auto lg:h-screen flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-semibold">Cursos recientes</span>
						{props.result.slice(0, 4).map((d: any) => (
							<div key={d.id} className="w-full h-full flex flex-col gap-1 pl-2 ">
								<Link href={`/cursos/${d.slug}`} key={d.id}>
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
