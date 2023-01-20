import { useState } from "react";
import Autor from "./autor";

export default function Autors() {
    const [resumen, setResumen] = useState(
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam cum numquam suscipit officiis enim molestiae voluptatibus tempora. Sit, temporibus vel? Nulla officiis eos iste omnis voluptatem libero corporis distinctio nobis.'
    )

	return (
		<section
			id="autors"
			className="autors w-full h-auto col-span-12 flex flex-col gap-8 py-8 xl:py-24 items-center justify-center">
			<h1 className="text-3xl xl:text-5xl text-[#162330] uppercase font-black ">Autores</h1>
            <div className="autores-wrapper text-lg w-full h-auto flex flex-col xl:flex-row gap-8">
                <Autor url={'/imgs/autor-1.png'} name={'Pepe El Cojo'} resume={resumen} />
                <Autor url={'/imgs/autor-2.png'} name={'Pepe El Cojo'} resume={resumen} />
                <Autor url={'/imgs/autor-3.png'} name={'Pepe El Cojo'} resume={resumen} />
            </div>
		</section>
	);
}
