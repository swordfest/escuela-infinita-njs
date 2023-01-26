import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";

export default function Curso(props: any) {
	const [transition, setTransition] = useState("");
	const [hasMounted, setHasMounted] = useState(false);
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

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<div
			id="curso"
			className={`w-full h-auto flex flex-col gap-4 ${props.styleClass} `}>
			<div className={`img-wrapper w-full h-auto overflow-hidden `}>
				{/* <img className={("w-full h-auto group-hover:scale-[1.01] brightness-90 group-hover:brightness-110 ease-in-out transition-all duration-700 " ) + (transition)}src={props.url} alt={props.descp} /> */}
				{/* <iframe
						className="w-full h-auto group-hover:scale-[1.01] brightness-90 group-hover:brightness-110 ease-in-out transition-all duration-700"
						title="thumbnail"
						src={props.url}></iframe> */}
				<div
					className={`bg-[#cfcfcf] transition-all ease-in-out duration-[${500 *
						(props.delay + 1)}ms] ${
						props.appear ? "translate-y-0 " : "translate-y-[640px] "
					} `}>
					<Youtube
						// className={`repro `}
						iframeClassName={`${props.iframe}`}
						videoId={props.url}
						opts={opts}
					/>
				</div>
			</div>
			<div className="overflow-hidden">
				<h2
					className={`text-xl font-bold group-hover:text-[#2d2b5c] transition-all ease-in-out duration-[${600 *
						(props.delay + 1)}ms] ${
						props.appear ? "translate-y-0 " : "translate-y-6 "
					} `}>
					{props.title}
				</h2>
			</div>

				<p
					className={`p-curso text-lg text-start`}
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(props.excerpt),
					}}></p>

				<Link
					className={`flex items-center group `}
					href={`/cursos/${props.slug}`}>
					<span className="h-6 group-hover:text-[#85b390] transition-all duration-200 align-middle text-lg font-semibold leading-5">
						Ver curso
					</span>
					<span>
						<svg
							className=" group-hover:translate-x-1 group-hover:fill-[#85b390] transition-all duration-200 "
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
							<path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
						</svg>
					</span>
				</Link>
		</div>
	);
}
