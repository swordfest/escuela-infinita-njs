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
		<Link className={`w-full group h-auto ${props.styleClass}`} href={`/cursos/${props.link}`}>
			<div
				id="curso"
				className="w-full h-auto flex flex-col gap-4 group cursor-pointer  ">
				<div className={"img-wrapper w-full h-auto overflow-hidden "}>
					{/* <img className={("w-full h-auto group-hover:scale-[1.01] brightness-90 group-hover:brightness-110 ease-in-out transition-all duration-700 " ) + (transition)}src={props.url} alt={props.descp} /> */}
					{/* <iframe
						className="w-full h-auto group-hover:scale-[1.01] brightness-90 group-hover:brightness-110 ease-in-out transition-all duration-700"
						title="thumbnail"
						src={props.url}></iframe> */}
					<Youtube iframeClassName={`${props.iframe}`} videoId={props.url} opts={opts} />
				</div>
				<h2 className=" text-xl font-bold group-hover:text-[#2d2b5c] ">{props.title}</h2>
				<p
					className="p-curso text-lg text-start"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(props.excerpt),
					}}></p>
			</div>
		</Link>
	);
}
