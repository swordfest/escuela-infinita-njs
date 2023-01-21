import Link from "next/link";
import { Meta } from "../../components/meta";
import { useEffect, useState } from "react";
import HeaderSingle from "../../components/headerSingle";
import Footer from "../../components/footer";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Recurso from "../../components/recurso";

export async function getStaticProps() {
	// const data =  await fetch(`http://localhost:8000/wp-json/wp/v2/posts?_embed`)
	const data = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/recursos?_embed`
	);
	const result = await data.json();

	const tags = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/index.php/wp-json/wp/v2/tags`
	);
	const tagsRes = await tags.json();

	const dataDocs = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/media`
	);
	const media = await dataDocs.json();

	return {
		props: {
			result,
			tagsRes,
			media,
		},
	};
}

export default function Repositorio(props: any) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<>
			<Meta title="La Escuela Infinita - Repositorio" />
			<HeaderSingle page={'repositorio'} />
			<main className="container h-auto mx-auto  grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list col-span-12 lg:col-span-8 h-auto grid grid-cols-12 auto-rows-auto gap-8 px-4 xl:px-0 ">
					{hasMounted &&
						props.result.map((c: any) => (
							// <></>
							<Recurso
								key={c.id}
								type={c.acf.tipo_de_recurso}
								image={c.better_featured_image.source_url}
								title={c.title.rendered}
								autor={c.acf.autor_recurso}
								licencia={c.acf.licencia_producto}
								link={c.acf.url_recurso}
								documento={c.acf.documento_recurso}
								doc={props.media.filter((m: any)=>{return m.id === c.acf.documento_recurso})[0]?.source_url}
								// doc={''}
							/>
						))}
						{console.log(props.media.filter((m: any)=>{return m.id === props.result[1].acf.documento_recurso}))}
				</div>
				<div className="blog-sidebar col-span-12 lg:col-span-4 px-4 lg:px-0 h-auto lg:h-screen flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-semibold">Recursos recientes</span>
						{props.result.slice(0, 4).map((d: any) => (
							<div key={d.id} className="w-full h-full flex flex-col gap-1 pl-2 ">
								{/* <Link href={`/repositorio/${d.slug}`} key={d.id}> */}
									<h1 className=" py-1 text-lg font-semibold">
										{d.title.rendered}{" "}
									</h1>
								{/* </Link> */}
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
