import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import ButtonMenuMobile from "./buttonMenuMobile";
import { useOutsideClick } from "./functions";
import MenuItem from "./menuItem";
import { menuMobileOpen } from "./store";
import Link from "next/link";

export default function Menu(props: any) {
	const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);

	return (
		<>
			<div className={(" w-auto h-auto  gap-8 ") + (props.isMobile ? 'flex flex-col items-center pt-6' : 'hidden xl:flex')}>
				<MenuItem name={"INICIO"} link={"header"} offset={-150} />
				<MenuItem name={"LIBRO"} link={"sumario"} offset={props.isMobile ? -100 : -150} />
				<MenuItem name={"RESEÑAS"} link={"reviews"} offset={props.isMobile ? -160 : -200} />
				<Link href={'/blog'} className=" relative font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300">BLOG</Link>
				<MenuItem name={"AUTORES"} link={"autors"} offset={props.isMobile ? -90 : -70} />
				<MenuItem name={"CURSOS"} link={"courses"} offset={props.isMobile ? -100 : -130} />
				<MenuItem name={"EDITORIAL"} link={"sponsors"} offset={props.isMobile ? -70 : -90} />
				<MenuItem name={"SUBSCRIPCION"} link={"sub"} offset={props.isMobile ? -100 : -150} />
			</div>
		</>
	);
}
