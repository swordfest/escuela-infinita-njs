import Image from "next/image";
import Rive, { Alignment, Layout, useRive } from "@rive-app/react-canvas";
import Button from "./button";
import { useEffect, useState } from "react";
// import riveWasmUrl from '@rive-app/canvas/rive.wasm';
// import { RuntimeLoader } from 'rive-react';

export default function Header(props:any) {
	const { rive, RiveComponent } = useRive({
		src: '/animations/escuela_infinita_artboard_small.riv',
		autoplay: true,
		layout: new Layout({
			alignment: Alignment.TopLeft,
			// maxX: 480,
		})
	  });

	const [enter, setEnter] = useState(true)

	// useEffect(() => {
	// if (props.appear > 0.02) {
	// 	setEnter(true)
	// }
	// })
	
	return (
		//  left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]
		<header className="header w-full h-[640px] xl:h-[860px] bg-gradient-to-tr from-[#162330] to-[#1b2b3b] col-span-12 flex items-center justify-start mt-20 ">
			{/* <img className="w-full h-full object-cover " src="/imgs/header.jpg" alt="header" /> */}
			{/* <Rive style={{display: 'flex', alignItems: 'start', }} src="/animations/escuela_infinita_artboard_small.riv" /> */}
			<RiveComponent/>
			<div className="w-full h-full text-white flex flex-col items-end justify-center gap-2 pr-32">
				<span className="font-black text-7xl text-end ">LA ESCUELA INFINITA</span>
				<span className="font-bold text-7xl text-end ">Aprender y enseñar en entornos ubicuos</span>
				<div className={("container h-auto xl:h-40 mx-auto flex flex-col lg:flex-row items-center justify-end gap-6 py-4 ")}>
				<Button
					key={'but'}
					text={"DESCARGAR LIBRO - PDF"}
					type={"button"}
					link={"#"}
                    isVisible={enter}
                    delay={'100'}
				/>
				<Button
					key={'but2'}
					text={"DESCARGAR LIBRO - EPUB"}
					type={"button"}
					link={"#"}
                    isVisible={enter}
                    delay={'300'}
				/>
				<Button
					key={'but3'}
					text={"DESCARGAR CAPITULOS"}
					type={"menu"}
					link={"#"}
                    isVisible={enter}
                    delay={'500'}
				/>
			</div>
			</div>
		</header>
	);
}
