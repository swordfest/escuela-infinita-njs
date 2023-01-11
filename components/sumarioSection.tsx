import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Sumario(props: any) {
	return (
		// h-[80vh]
		<section
			id="sumario"
			className="sumario show w-full h-auto col-span-12 gap-8 xl:gap-24 flex flex-col xl:flex-row items-center justify-center pt-8 pb-24 mt-24 ">
			<div
				className={
					"w-full h-full flex flex-col items-center xl:items-start gap-4 text-justify leading-8 transition-all"
				}>
				{/* translate-y-10 */}
				<h1 className="text-3xl text-[#162330] xl:text-5xl uppercase font-black ">
					Síntesis
				</h1>
				<p>
					Este libro trata sobre la escuela, no de una específica, en un país y
					en un momento determinado, sino de la escuela como estructura social,
					esa otra que, distante de aquella que tradicionalmente conocimos,
					comienza a emerger lentamente de un cambio de época, en la
					intersección de entornos físicos y virtuales. No es cualquier escuela.
					Hablamos de aquella que debe recibir a un estudiante que es ya
					biológico y digital, que vive y aprende en comunidades virtuales, que
					es nómada y se apropia de la realidad a través de sus dispositivos
					móviles, marcado por la exigencia de lo inmediato; que vivirá en un
					mundo que aún no existe y necesita de una institución que lo acompañe
					todo el tiempo y durante toda la vida. Hablamos de un futuro que ha
					llegado, de una escuela a la que llamamos infinita y que aquí iremos
					reimaginando
				</p>
				<p>
					Nuestra intención ha sido ofrecer cierta síntesis de esas complejas
					interrelaciones para facilitar el diálogo entre una amplia comunidad
					de personas preocupadas por reimaginar la educación y la escuela. Para
					hacerlo hemos acudido a la poderosa fuerza de las metáforas (capítulo
					0). He aquí un riesgo, pues ante el creciente consumo de la
					información a través de fragmentos breves y a veces inconexos, pueden
					ser desafiantes unas páginas que demandan atención y la voluntad de
					concentrarse en el futuro.
				</p>
			</div>
			<div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-400 overflow-hidden ">
                <Image src={'/imgs/portada.png'} className='w-full h-full object-cover scale-110' fill alt='Portada Escuela Infinita' />
				{/* <h1 className=" text-3xl xl:text-5xl text-[#162330] uppercase font-black ">
					Sumario
				</h1>
				<p>
					Este libro trata sobre la escuela, no de una específica, en un país y
					en un momento determinado, sino de la escuela como estructura social,
					esa otra que, distante de aquella que tradicionalmente conocimos,
					comienza a emerger lentamente de un cambio de época, en la
					intersección de entornos físicos y virtuales. No es cualquier escuela.
					Hablamos de aquella que debe recibir a un estudiante que es ya
					biológico y digital, que vive y aprende en comunidades virtuales, que
					es nómada y se apropia de la realidad a través de sus dispositivos
					móviles, marcado por la exigencia de lo inmediato; que vivirá en un
					mundo que aún no existe y necesita de una institución que lo acompañe
					todo el tiempo y durante toda la vida. Hablamos de un futuro que ha
					llegado, de una escuela a la que llamamos infinita y que aquí iremos
					reimaginando
				</p>
				<p>
					Nuestra intención ha sido ofrecer cierta síntesis de esas complejas
					interrelaciones para facilitar el diálogo entre una amplia comunidad
					de personas preocupadas por reimaginar la educación y la escuela. Para
					hacerlo hemos acudido a la poderosa fuerza de las metáforas (capítulo
					0). He aquí un riesgo, pues ante el creciente consumo de la
					información a través de fragmentos breves y a veces inconexos, pueden
					ser desafiantes unas páginas que demandan atención y la voluntad de
					concentrarse en el futuro.
				</p> */}
			</div>
		</section>
	);
}
