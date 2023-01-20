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
				<p className="text-lg leading-loose">
				La escuela infinita propone bases para un nuevo modelo de escolarización universal y explica cómo aprender y enseñar de forma híbrida en el siglo XXI. Desde planteamientos disruptivos crea su relato a través de seis metáforas claves: la escuela vista como una conversación transmedial, como abundancia, como ubicuidad líquida, como totalidad que integra múltiples relaciones, como espacio invisible y como una comunidad conectada. Este libro aborda varias de los más actuales problemáticas educativas: revela las relaciones entre virtualidad y educación en el cambio de época que vivimos con el tránsito de un mundo físico a uno ubicuo donde se integran lo físico y lo virtual; explica y propone soluciones a algunos de los grandes desafíos que hoy vive la educación; presenta una taxonomía que ayuda a ordenar el caos de las tendencias pedagógicas a partir de identificar enfoques, modelos tecnopedagógicos, modelos y metodologías didácticos y tecnologías; construye un enfoque pedagógico dialéctico que articula aspectos filosóficos, sociológicos y psicológicos sobre el aprendizaje humano; y termina aportando un modelo híbrido de aprendizaje y enseñanza a través del cual cualquier persona o institución interesada puede implementar su propia escuela infinita. 
				</p>
				
			</div>
			<div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden ">
                <Image src={'/imgs/book.png'} className='w-full h-full object-contain' fill alt='Portada Escuela Infinita' />
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
