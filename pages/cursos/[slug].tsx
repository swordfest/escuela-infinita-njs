import { Meta } from "../../components/meta";
import Footer from "../../components/footer";
import HeaderSingle from "../../components/headerSingle";
import DOMPurify from "isomorphic-dompurify";
import YouTube from "react-youtube";

export async function getStaticProps(context: any) {
	const {
		params: { slug },
	} = context;

	const posts = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/posts?_embed`
	);
	const postsResults = await posts.json();

	const data = await fetch(
		// `http://localhost:8000/wp-json/wp/v2/posts?_embed&slug=${slug}`
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/cursos?_embed&slug=${slug}`
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
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/cursos`
	);
	const cursosResults = await posts.json();

	const paths = cursosResults.map((c: any) => {
		return {
			params: { slug: c.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export default function Curso(props: any) {
    const opts = {
		// height: "328",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
			controls: 0,
			disablekb: 0,
		},
	};
	return (
		<>
			<Meta title={`La Escuela Infinita - ${props.title.rendered}`} />
			<HeaderSingle title={props.title.rendered} />
			{/* <Meta title={props.title} /> */}
			<main className="container h-auto mx-auto grid grid-cols-12 auto-rows-auto gap-[30px] my-10 ">
				<div className="post-list order-2 lg:order-1 col-span-12 px-4 xl:px-0 lg:col-span-8 h-auto flex flex-col gap-10 ">
					<div
						className="post"
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(props.content.rendered),
						}}></div>
				</div>
				<div className="blog-sidebar order-1 lg:order-2 col-span-12 lg:col-span-4 lg:h-screen px-4 xl:px-0 flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-semibold">Video Presentacion</span>
                        <YouTube className="" iframeClassName="h-44 sm:h-[340px] lg:h-44 xl:h-56 2xl:h-72 " videoId={props.acf.video_thumbnail} opts={opts} />
                        <span className="text-xl font-semibold">Profesores</span>
						<span className="w-1/2 bg-slate-500">{props.acf.profesores}</span>
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
