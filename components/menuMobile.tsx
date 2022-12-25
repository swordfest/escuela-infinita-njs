import MenuItem from "./menuItem";


export default function MenuMobile () {
    return (
        <div className={"menu-mobile w-full h-screen absolute z-10 bg-white transition-all flex flex-col items-center gap-6 py-6 "}>
				<MenuItem name={"INICIO"} link={"#"} />
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