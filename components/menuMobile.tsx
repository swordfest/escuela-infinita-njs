import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useOutsideClick } from "./functions";
import MenuItem from "./menuItem";
import { menuMobileOpen } from "./store";


export default function MenuMobile (props:any) {

    return (
        <div ref={props.ref} className={"menu-mobile overflow-hidden w-full h-screen fixed top-20 z-[1] bg-white transition-all flex flex-col items-center gap-6 py-6 "}>
				<MenuItem name={"INICIO"} link={"#"}  />
				<MenuItem name={"LIBRO"} link={"#sumario"} />
				<MenuItem name={"RESEÑAS"} link={"#reviews"} />
				<MenuItem name={"BLOG"} link={"/blog"} />
				<MenuItem name={"AUTORES"} link={"#autors"} />
				<MenuItem name={"CURSOS"} link={"#courses"} />
				<MenuItem name={"EDITORIAL"} link={"#sponsors"} />
				{/* Hay que hacer la seccion de subscripcion de newsletter */}
				<MenuItem name={"SUBSCRIPCION"} link={"#sub"} />
        </div>
    )
}

