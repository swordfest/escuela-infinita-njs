import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";

export default function SumarioTesting(props: any) {
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);
	const [enterMobile, setEnterMobile] = useState(false);

	useEffect(() => {
		if (scrollPos > 0.015) {
			setEnter(true);
		}
	});

	return (
		// h-[80vh]
		<section
			id="sumario"
			className={`sumario relative show w-full h-auto col-span-12 gap-8 xl:gap-24 flex flex-col xl:flex-row items-center lg:items-start justify-start 2xl:pt-8 mb-32  transition-all ease-linear duration-500 `}>
			<div
				className={` w-full xl:w-[50vw] 2xl:w-1/2 h-full flex flex-col z-[0] items-center xl:items-start gap-4 text-justify leading-8 transition-all ease-in-out duration-500 ${
					enter ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
				}`}>
				{/* translate-y-10 */}
				<div className="overflow-hidden">
					<h1
						className={`text-3xl text-[#162330] xl:text-5xl uppercase font-black transition-all ease-in-out duration-[1200ms] ${
							enter ? " translate-y-0 " : " translate-y-10 "
						} `}>
						Síntesis
					</h1>
				</div>
				<div className="overflow-hidden">
					<p className={`text-lg leading-loose transition-all ease-in-out duration-[1200ms] ${
							enter ? " translate-y-0 " : " translate-y-10 "
						}`}>
						La Escuela Infinita propone bases para un nuevo modelo de
						escolarización universal y explica cómo aprender y enseñar de forma
						híbrida en el siglo XXI. Desde planteamientos disruptivos crea su
						relato a través de seis metáforas claves: la escuela vista como una
						conversación transmedial, como abundancia, como ubicuidad líquida,
						como totalidad que integra múltiples relaciones, como espacio
						invisible y como una comunidad conectada. Este libro aborda varias
						de los más actuales problemáticas educativas: revela las relaciones
						entre virtualidad y educación en el cambio de época que vivimos con
						el tránsito de un mundo físico a uno ubicuo donde se integran lo
						físico y lo virtual; explica y propone soluciones a algunos de los
						grandes desafíos que hoy vive la educación; presenta una taxonomía
						que ayuda a ordenar el caos de las tendencias pedagógicas a partir
						de identificar enfoques, modelos tecnopedagógicos, modelos y
						metodologías didácticos y tecnologías; construye un enfoque
						pedagógico dialéctico que articula aspectos filosóficos,
						sociológicos y psicológicos sobre el aprendizaje humano; y termina
						aportando un modelo híbrido de aprendizaje y enseñanza a través del
						cual cualquier persona o institución interesada puede implementar su
						propia escuela infinita.
					</p>
				</div>
			</div>
			{/* w-[120vw] lg:w-[90vw] h-full -right-[500px] 2xl:-right-[480px] */}
			<div
				className={`absolute origin-center hidden w-full 3xl:w-[80vw] h-full -right-[30vw] 2xl:-right-[25vw] 3xl:-right-[20vw] bottom-8 xl:flex flex-col items-center justify-center transition-all ease-in-out duration-700 ${
					enter ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
				}`}>
				<Image
					src={"/imgs/book-no-bg.png"}
					className="w-full h-full overflow-visible object-cover"
					fill
					alt="Portada Escuela Infinita"
				/>
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
