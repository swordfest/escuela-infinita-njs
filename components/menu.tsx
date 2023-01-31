import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import ButtonMenuMobile from "./buttonMenuMobile";
import { useOutsideClick } from "./functions";
import MenuItem from "./menuItem";
import { menuMobileOpen, scrollPercentage } from "./store";
import Link from "next/link";
import Button from "./button";

export default function Menu(props: any) {
	const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);
	const [enter, setEnter] = useState(false);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	var scrollIntoView = require("scroll-into-view");
	const options = {
		time: 0, // half a second
		align: {
			top: 0,
			topOffset: 80,
		},
	};

	useEffect(() => {
		if (scrollPos >= 0) {
			setEnter(true);
		}
	});

	const handleClickScroll = (id: string, block: ScrollLogicalPosition) => {
		const element = document.getElementById(`${id}`);
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth", block: `${block}` });
		}
	};

	const handleCustomScroll = (id: string, align: object) => {
		const element = document.getElementById(`${id}`);
		if (element) {
			scrollIntoView(element, align);
		}
	};

	return (
		<div className={`overflow-hidden  ${props.isMobile ? 'w-full h-full' : ''}`}>
			<div
				className={`  gap-6 ${
					props.isMobile
						? "w-full h-full flex flex-col items-center justify-start "
						: "w-auto h-auto hidden xl:flex"
				} transition-all ease-in-out delay-[1500ms] duration-1000 ${
					enter && !props.isMobile ? "translate-y-0" : "translate-y-14"
				}`}>
				{/* <MenuItem duration={600} name={"INICIO"} link={"header"} offset={-150} /> */}
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("header"),
							{
								time: 0, // half a second
								align: {
									top: 0,
									topOffset: 80,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					INICIO
				</button>
				{/* <MenuItem duration={900} name={"LIBRO"} link={"sumario"} offset={props.isMobile ? -100 : -240} /> */}
				{/* <Link href={'#sumario'} className={` relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 ${enter ? " translate-y-0 " : " translate-y-6 "}`}>LIBRO</Link> */}
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("sumario"),
							{
								time: 0, // half a second
								align: {
									top: 0,
									topOffset: props.isMobile ? 120 : 280,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					LIBRO
				</button>
				{/* <MenuItem duration={1200} name={"RESEÑAS"} link={"reviews"} offset={props.isMobile ? -160 : -220} /> */}
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("reviews"),
							{
								time: 0, // half a second
								align: {
									top: 0.5,
									topOffset:  props.isMobile ? 90 : 0,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					RESEÑAS
				</button>
				<Link
					href={"/blog"}
					className={` relative flex items-center font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					BLOG
				</Link>
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("autors"),
							{
								time: 0, // half a second
								align: {
									top: 0,
									topOffset: props.isMobile ? 90 : 30,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					AUTORES
				</button>
				{/* <MenuItem
					name={"AUTORES"}
					link={"autors"}
					offset={props.isMobile ? -90 : -30}
				/> */}
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("courses"),
							{
								time: 0, // half a second
								align: {
									top: 0,
									topOffset: props.isMobile ? 90 : 120,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					CURSOS
				</button>
				{/* <MenuItem
					name={"CURSOS"}
					link={"courses"}
					offset={props.isMobile ? -100 : -90}
				/> */}
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("videos"),
							{
								time: 0, // half a second
								align: {
									top: 0,
									topOffset: props.isMobile ? 40 : 30,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					VIDEOS
				</button>
				{/* <MenuItem
					name={"VIDEOS"}
					link={"videos"}
					offset={props.isMobile ? -140 : -65}
				/> */}
				<Link
					href={"/repositorio"}
					className=" relative flex items-center font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300">
					REPOSITORIO
				</Link>
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("contacto"),
							{
								time: 0, // half a second
								align: {
									top: 0.5,
									topOffset: props.isMobile ? 30 : 60,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={`  relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					CONTACTO
				</button>
				{/* <MenuItem
					name={"CONTACTO"}
					link={"contacto"}
					offset={props.isMobile ? -90 : -30}
				/> */}
				<button
					onClick={() =>
						{scrollIntoView(
							document.getElementById("sponsors"),
							{
								time: 0, // half a second
								align: {
									top: 0,
									topOffset: props.isMobile ? 80 : 100,
								},
							}
						), setMobileMenuOpen(false)}
					}
					className={` relative scroll-smooth font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 `}>
					EDITORIAL
				</button>
				{/* <MenuItem
					name={"EDITORIAL"}
					link={"sponsors"}
					offset={props.isMobile ? -70 : -90}
				/> */}
			</div>
		</div>
	);
}
