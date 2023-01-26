import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Autor from "./autor";
import { scrollPercentage } from "./store";

export default function Autors() {
	const [datosAutor, setDatosAutor] = useState([
		{
			autor: "Diosvany Ortega González",
			institucion:
				"Director de Gestión Editorial. Editorial Pueblo y Educación. Cuba",
			codigo_orcid: "https://orcid.org/0000-0002-6339-7047",
			linkedin: "https://linkedin.com/in/diosvanyortega",
			twitter: "https://twitter.com/diosvanyortega",
		},
		{
			autor: "Celio Luis Acosta Álvarez",
			institucion: "Decano. Universidad de San Pedro Sula. Honduras",
			codigo_orcid: "https://orcid.org/0000-0002-1995-0239",
			linkedin: "https://linkedin.com/in/celio-luis-acosta-álvarez",
			twitter: "https://twitter.com/celioluisacosta",
		},
		{
			autor: "Fernando Eugenio Ortega Cabrera",
			institucion:
				"Director Nacional. Dirección de Tecnología Educativa. Ministerio de Educación de la República de Cuba",
			codigo_orcid: "https://orcid.org/0000-0002-9006-0087",
			linkedin: "https://linkedin.com/in/fernandortega",
			twitter: "https://twitter.com/Fernand45508203",
		},
	]);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);

	useEffect(() => {
		if (scrollPos > 0.38) {
			setEnter(true);
		}
	});

	return (
		<section
			id="autors"
			className="autors w-full h-auto col-span-12 flex flex-col gap-8 py-8 xl:py-24 items-center justify-center">
                
			<div className="overflow-hidden">
				<h1 className={`text-3xl text-[#162330] xl:text-5xl uppercase font-black transition-all ease-in-out duration-[1000ms] ${
							enter ? " translate-y-0 " : " translate-y-10 "
						} `}>
					Autores
				</h1>
			</div>

			<div className="autores-wrapper text-lg w-full h-auto flex flex-col xl:flex-row gap-8">
				<Autor
                    appear={enter}
                    duration={'duration-[1200ms]'}
                    delay={'delay-200'}
					url={"/imgs/autor-1.png"}
					name={datosAutor[0].autor}
					institucion={datosAutor[0].institucion}
					orcid={datosAutor[0].codigo_orcid}
					linkedin={datosAutor[0].linkedin}
					twitter={datosAutor[0].twitter}
				/>
				<Autor
                    appear={enter}
                    delay={'delay-300'}
                    duration={'duration-[1800ms]'}
					url={"/imgs/autor-2.png"}
					name={datosAutor[1].autor}
					institucion={datosAutor[1].institucion}
					orcid={datosAutor[1].codigo_orcid}
					linkedin={datosAutor[1].linkedin}
					twitter={datosAutor[1].twitter}
				/>
				<Autor
                    appear={enter}
                    delay={'delay-400'}
                    duration={'duration-[2200ms]'}
					url={"/imgs/autor-3.png"}
					name={datosAutor[2].autor}
					institucion={datosAutor[2].institucion}
					orcid={datosAutor[2].codigo_orcid}
					linkedin={datosAutor[2].linkedin}
					twitter={datosAutor[2].twitter}
				/>
			</div>
		</section>
	);
}
