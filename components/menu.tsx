import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import ButtonMenuMobile from "./buttonMenuMobile";
import { useOutsideClick } from "./functions";
import MenuItem from "./menuItem";
import { menuMobileOpen, scrollPercentage } from "./store";
import Link from "next/link";

export default function Menu(props: any) {
	const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);
	const [enter, setEnter] = useState(false);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);

	useEffect(() => {
		if (scrollPos >= 0) {
			setEnter(true);
		}
	});

	return (
		<>
			<div className={` w-auto h-auto gap-8 overflow-hidden ${props.isMobile ? 'absolute flex flex-col items-center pt-6' : 'hidden xl:flex'} `}>
				<MenuItem duration={600} name={"INICIO"} link={"header"} offset={-150} />
				<MenuItem duration={900} name={"LIBRO"} link={"sumario"} offset={props.isMobile ? -100 : -240} />
				<MenuItem duration={1200} name={"RESEÑAS"} link={"reviews"} offset={props.isMobile ? -160 : -220} />
				<Link href={'/blog'} className={` relative font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 ${enter ? " translate-y-0 " : " translate-y-6 "}`}>BLOG</Link>
				<MenuItem name={"AUTORES"} link={"autors"} offset={props.isMobile ? -90 : -30} />
				<MenuItem name={"CURSOS"} link={"courses"} offset={props.isMobile ? -100 : -90} />
				<MenuItem name={"VIDEOS"} link={"videos"} offset={props.isMobile ? -100 : -150} />
				<Link href={'/repositorio'} className=" relative font-semibold select-none w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300">REPOSITORIO</Link>
				<MenuItem name={"EDITORIAL"} link={"sponsors"} offset={props.isMobile ? -70 : -90} />
			</div>
		</>
	);
}
