import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import ButtonMenuMobile from "./buttonMenuMobile";
import { useOutsideClick } from "./functions";
import MenuItem from "./menuItem";
import { menuMobileOpen } from "./store";

export default function Menu(props: any) {
	// const [items, setItems] = useState([{item: <MenuItem/>}]);
	const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);

	// const handleClickOutside = () => {
    //     setMobileMenuOpen(false)
    // }

    // const ref = useOutsideClick(handleClickOutside)

	return (
		<>
			<div className={(" w-auto h-auto  gap-8 ") + (props.isMobile ? 'flex flex-col items-center pt-6' : 'hidden xl:flex')}>
				<MenuItem name={"INICIO"} link={"header"} offset={-150} />
				<MenuItem name={"LIBRO"} link={"sumario"} offset={props.isMobile ? -100 : -150} />
				<MenuItem name={"RESEÑAS"} link={"reviews"} offset={props.isMobile ? -160 : -200} />
				<MenuItem name={"AUTORES"} link={"autors"} offset={props.isMobile ? -90 : -70} />
				<MenuItem name={"CURSOS"} link={"courses"} offset={props.isMobile ? -100 : -130} />
				<MenuItem name={"EDITORIAL"} link={"sponsors"} offset={props.isMobile ? -70 : -90} />
				<MenuItem name={"SUBSCRIPCION"} link={"sub"} offset={props.isMobile ? -100 : -150} />
				{/* <MenuItem name={"INICIO"} link={"#"} />
				<MenuItem name={"LIBRO"} link={"#sumario"}/>
				<MenuItem name={"RESEÑAS"} link={"#reviews"} />
				<MenuItem name={"BLOG"} link={"/blog"} />
				<MenuItem name={"AUTORES"} link={"#autors"} />
				<MenuItem name={"CURSOS"} link={"#courses"} />
				<MenuItem name={"EDITORIAL"} link={"#sponsors"} /> */}
				{/* Hay que hacer la seccion de subscripcion de newsletter */}
				{/* <MenuItem name={"SUBSCRIPCION"} link={"#sub"} /> */}
			</div>
		</>
	);
}
