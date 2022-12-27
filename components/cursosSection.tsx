import { useState } from "react";
import Button from "./button";
import Curso from "./curso";

export default function Cursos() {
	const [imgs, setImgs] = useState<String[]>([
		"https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		"https://images.unsplash.com/photo-1555725305-e823b44548de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
	]);
	return (
		<section
			id="courses"
			className="courses w-full h-auto py-8 xl:py-24  col-span-12 flex flex-col gap-8 items-center justify-center leading-8">
			<h1 className="text-3xl xl:text-5xl uppercase font-black ">Cursos Disponibles</h1>
			<div className="cursos flex flex-col xl:flex-row gap-6 xl:gap-4">
				<Curso
					url={imgs[0]}
					title={"Lorem ipsum dolor sit amet consectetur."}
					excerpt={
						"Lorem ipsum dolor sit amet consectetur. Enim sit diam ultrices amet scelerisque quis enim. Lorem sed amet et eget ut. Molestie leo adipiscing at platea. Iaculis dolor eu vel tortor metus urna nulla nullam. Elementum pellentesque sed sed faucibus tortor tincidunt egestas."
					}
				/>
				<Curso
					url={imgs[1]}
					title={"Eu commodo vitae ac ut. In erat faucibus sagittis."}
					excerpt={
						"Lorem ipsum dolor sit amet consectetur. Enim sit diam ultrices amet scelerisque quis enim. Lorem sed amet et eget ut. Molestie leo adipiscing at platea. Iaculis dolor eu vel tortor metus urna nulla nullam. Elementum pellentesque sed sed faucibus tortor tincidunt egestas."
					}
				/>
			</div>
			<Button isVisible={true} type={'button'} text={'CONTÁCTA'} link={'#contacto'} />
		</section>
	);
}
