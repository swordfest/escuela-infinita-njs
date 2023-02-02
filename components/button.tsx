import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useOutsideClick } from "./functions";
import { mediaList } from "./store";

export default function Button(props: any) {
	const [open, setOpen] = useState(false);
	const [delay, setDelay] = useState(" delay-[" + props.delay + "] ");
	const [media, setMedia] = useRecoilState(mediaList);
	const [overflow, setOverflow] = useState(false);

	// const [isVisible, setIsVisible] = useState(false)

	const handleClickOutside = () => {
		setOpen(false);
	};

	// const handleClick = (e: HTMLDivElement) => {
	// 	if (e.getBoundingClientRect().bottom)
	// }

	const ref = useOutsideClick(handleClickOutside);

	useEffect(() => {
		if (props.isVisible) {
			setTimeout(() => setOverflow(true), 3500);
		}
	}, [props.isVisible]);

	if (props.type === "button") {
		return (
			<button
				name="Descarga"
				className={`w-full  md:w-72 h-14 bg-[#98CCA5] text-white select-none flex items-center transition-all hover:bg-[#a5dfb4] active:bg-[#85b390] ease-in-out ${
					overflow ? `` : `delay-[3000ms] ${props.delay}`
				} ${props.isVisible ? " translate-y-0 " : "  translate-y-20 "} `}>
				<Link
					href={props.link}
					target={"_blank"}
					className={`text-[#0d2636] text-sm font-semibold w-full flex items-center gap-8 px-4 ${
						!props.download ? "justify-between" : "justify-center"
					}`}>
					{/* href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
					{props.text}
					{!props.download && (
						<svg className="w-4 h-4" viewBox="0 0 24 24">
							<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
							<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
						</svg>
					)}
				</Link>
			</button>
		);
	}
	if (props.type === "menu") {
		return (
			<div
				ref={ref}
				onClick={() => setOpen(!open)}
				title="Descargar Capitulos"
				className={`relative w-full z-[1] md:w-72 h-14 bg-[#98CCA5] hover:bg-[#a5dfb4] select-none flex items-center transition-all text-sm cursor-pointer ease-in-out ${
					overflow ? `` : `delay-[3000ms] ${props.delay}`
				} ${props.isVisible ? "translate-y-0 " : "translate-y-20 "}`}>
				<span className=" w-full h-auto flex items-center justify-between px-4 gap-8 text-[#0d2636] font-semibold">
					{props.text}
					<svg
						className={
							"fill-[#0d2636] transition-transform " + (open && "rotate-180")
						}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24">
						<path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
					</svg>
				</span>

				<ul
					className={
						"menu absolute w-full h-72 top-14 bg-[#98CCA5] text-[#0d2636] font-semibold flex flex-col items-center justify-start transition-transform overflow-y-auto " +
						(open ? "" : "hidden")
					}>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/386/?tmstv=1675134929"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Prólogo
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/388/?tmstv=1675134992"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Introducción
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/390/?tmstv=1675136736"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Capítulo 0
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/393/?tmstv=1675136736"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Capítulo 1
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/395/?tmstv=1675136736"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Capítulo 2
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/397/?tmstv=1675136844"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Capítulo 3
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/399/?tmstv=1675136844"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Capítulo 4
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/401/?tmstv=1675136844"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Capítulo 5
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
					<Link
						className="w-full"
						href={"https://apiei.aprendiendo.cu/download/403/?tmstv=1675136909"}
						target={"_blank"}>
						{/* <Link className="w-full" href={media.filter((m: any)=>{return m.id === 163})[0]?.['source_url']}> */}
						<li className=" w-full h-14 flex items-center justify-between px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">
							Spin Off
							<svg className="w-4 h-4  mr-1" viewBox="0 0 24 24">
								<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
								<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
							</svg>
						</li>
					</Link>
				</ul>
			</div>
		);
	}
	if (props.type === "slider") {
		return (
			<button
				title="slide-button"
				name="Descarga"
				className={
					` absolute z-[1] w-10 h-10 hover:scale-105 select-none flex items-center justify-center transition-all bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390] ${
						props.side === "left" ? "-left-8 top-[15%] " : ""
					} ${props.side === "right" ? "-right-8 top-[15%] " : ""}` +
					(props.side === "left" ? "left-8 top-[40%] " : "") +
					(props.side === "right" ? "right-8 top-[40%] " : "")
				}>
				<svg
					className={props.side === "left" ? "fill-[#174563]" : "hidden"}
					width="36"
					height="36"
					viewBox="0 0 24 24">
					<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
				</svg>
				<svg
					className={props.side === "right" ? "fill-[#174563]" : "hidden"}
					width="36"
					height="36"
					viewBox="0 0 24 24">
					<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
				</svg>
			</button>
		);
	}

	return <>Especifica el tipo</>;
}
