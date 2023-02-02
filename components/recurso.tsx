import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Recurso(props: any) {
	const [transition, setTransition] = useState("");
	const [autores, setAutores] = useState([""]);

	useEffect(() => {
		setAutores([props.autor1, props.autor2, props.autor3, props.autor4]);
	}, []);

	if (props.type === "enlace") {
		return (
			<div className="recurso-card w-full h-[680px] col-span-4 flex flex-col justify-between gap-4 group bg-white shadow-xl ">
				<div className="recurso-card-content h-full flex flex-col gap-1">
					<div className={"img-wrapper relative w-full h-96 "}>
						<Image
							className="object-cover object-top"
							src={props.image}
							fill
							alt={"aaa"}
						/>
					</div>
					<div className="recurso-details h-full flex flex-col justify-between gap-4 py-2">
						<div className="content-wrapper flex flex-col gap-4">
							<h2 className=" text-lg 2xl:text-xl font-bold group-hover:text-[#2d2b5c] px-4 ">
								{props.title}
							</h2>

							<div className="autores-list flex flex-col gap-1">
								{autores.slice(0, 4).map((a: any) => (
									<span
										className={`flex gap-2 items-center font-semibold text-[#7a7a7a] px-4 ${
											a === "" ? "hidden" : ""
										} `}>
										<svg
											className="w-4 h-4 fill-[#7a7a7a]  "
											viewBox="0 0 24 24">
											<path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
										</svg>
										{a}
									</span>
								))}
							</div>

							<div className="licencia flex gap-2 items-start font-semibold text-[#7a7a7a] px-4 ">
								<div className="pt-1">
									<svg className="w-4 h-4 fill-[#7a7a7a] " viewBox="0 0 24 24">
										<path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
										<path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
									</svg>
								</div>
								{props.licencia}
							</div>
						</div>
					</div>
					<div className="p-4">
						<Link
							className="w-full h-12 bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390] transition-colors flex items-center justify-center gap-1 font-semibold  "
							href={`${props.link}`}
							target={"_blank"}>
							Ir al enlace
							<svg className="w-4 h-4" viewBox="0 0 24 24">
								<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
								<path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	if (props.type === "documento") {
		return (
			<div className="recurso-card w-full h-[680px] col-span-4 flex flex-col justify-between gap-4 group bg-white shadow-xl ">
				<div className="recurso-card-content h-full flex flex-col gap-1">
					<div className={"img-wrapper relative w-full h-96 "}>
						<Image
							className="object-cover object-top"
							src={props.image}
							fill
							alt={"aaa"}
						/>
					</div>
					<div className="recurso-details h-full flex flex-col justify-between gap-4 py-2">
						<div className="content-wrapper flex flex-col gap-4">
							<h2 className=" text-lg 2xl:text-xl font-bold group-hover:text-[#2d2b5c] px-4 ">
								{props.title}
							</h2>

							<div className="autores-list flex flex-col gap-1">
								{autores.slice(0, 4).map((a: any) => (
									<span
										className={`flex gap-2 items-center font-semibold text-[#7a7a7a] px-4 ${
											a === "" ? "hidden" : ""
										} `}>
										<svg
											className="w-4 h-4 fill-[#7a7a7a]  "
											viewBox="0 0 24 24">
											<path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
										</svg>
										{a}
									</span>
								))}
							</div>

							<div className="licencia flex gap-2 items-start font-semibold text-[#7a7a7a] px-4 ">
								<div className="pt-1">
									<svg className="w-4 h-4 fill-[#7a7a7a] " viewBox="0 0 24 24">
										<path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
										<path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
									</svg>
								</div>
								{props.licencia}
							</div>
						</div>
					</div>
					<div className="p-4">
						<Link
							className="w-full h-12 bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390] transition-colors flex items-center justify-center gap-1 font-semibold  "
							href={`${props.doc}`}
							target={"_blank"}
							// media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']
						>
							Descargar documento
							<span>
								<svg className="w-4 h-4" viewBox="0 0 24 24">
									<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
									<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
								</svg>
							</span>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return null;
}
