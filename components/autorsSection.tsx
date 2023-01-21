import { useState } from "react";
import Autor from "./autor";

export default function Autors() {
    const [datosAutor, setDatosAutor] = useState([
        {
            autor: 'Diosvany Ortega González',
            institucion: 'Director de Gestión Editorial. Editorial Pueblo y Educación. Cuba',
            codigo_orcid: 'https://orcid.org/0000-0002-6339-7047',
            linkedin: 'linkedin.com/in/diosvanyortega',
            twitter: 'https://twitter.com/diosvanyortega'
        },
        {
            autor: 'Celio Luis Acosta Álvarez',
            institucion: 'Decano. Universidad de San Pedro Sula. Honduras',
            codigo_orcid: 'https://orcid.org/0000-0002-1995-0239',
            linkedin: 'linkedin.com/in/celio-luis-acosta-álvarez',
            twitter: 'https://twitter.com/celioluisacosta'
        },
        {
            autor: 'Fernando Eugenio Ortega Cabrera',
            institucion: 'Director Nacional. Dirección de Tecnología Educativa. Ministerio de Educación de la República de Cuba',
            codigo_orcid: 'https://orcid.org/0000-0002-9006-0087',
            linkedin: 'linkedin.com/in/fernandortega',
            twitter: 'https://twitter.com/Fernand45508203'
        }
    ])

	return (
		<section
			id="autors"
			className="autors w-full h-auto col-span-12 flex flex-col gap-8 py-8 xl:py-24 items-center justify-center">
			<h1 className="text-3xl xl:text-5xl text-[#162330] uppercase font-black ">Autores</h1>
            <div className="autores-wrapper text-lg w-full h-auto flex flex-col xl:flex-row gap-8">
                <Autor url={'/imgs/autor-1.png'} name={datosAutor[0].autor} institucion={datosAutor[0].institucion} orcid={datosAutor[0].codigo_orcid} linkedin={datosAutor[0].linkedin} twitter={datosAutor[0].twitter} />
                <Autor url={'/imgs/autor-2.png'} name={datosAutor[1].autor} institucion={datosAutor[1].institucion} orcid={datosAutor[1].codigo_orcid} linkedin={datosAutor[1].linkedin} twitter={datosAutor[1].twitter} />
                <Autor url={'/imgs/autor-3.png'} name={datosAutor[2].autor} institucion={datosAutor[2].institucion} orcid={datosAutor[2].codigo_orcid} linkedin={datosAutor[2].linkedin} twitter={datosAutor[2].twitter} />
                
            </div>
		</section>
	);
}
