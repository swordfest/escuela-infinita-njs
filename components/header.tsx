import Image from "next/image";
import Rive, { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import Button from "./button";
import { useEffect, useState } from "react";
import HeaderImage from "./headerImage";
// import riveWasmUrl from '@rive-app/canvas/rive.wasm';
// import { RuntimeLoader } from 'rive-react';

export default function Header(props: any) {
	const { rive, RiveComponent } = useRive({
		src: '/animations/escuela_infinita_artboard_small.riv',
		autoplay: true,
		artboard: 'PortadaSmall',
		layout: new Layout({
			fit: Fit.FitHeight,
			alignment: Alignment.TopLeft,
			maxX: 480,
		}),
	}, {
		useDevicePixelRatio: true,
		// fitCanvasToArtboardHeight: true,
	});

	const [enter, setEnter] = useState(true)

	// useEffect(() => {
	// if (props.appear > 0.02) {
	// 	setEnter(true)
	// }
	// })

	return (
		//  left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]
		<header className="header relative w-full h-[640px] xl:h-[860px] bg-gradient-to-tl from-[#4d684a] via-[#222146] to-[#222146] col-span-12 flex items-center justify-start mt-20 ">
			{/* <img className="w-full h-full object-cover " src="/imgs/header.jpg" alt="header" /> */}
			{/* <Rive style={{display: 'flex', alignItems: 'start', }} src="/animations/escuela_infinita_artboard_small.riv" /> */}
			{/* <div className="absolute w-0 h-0 border-t-[50vh] border-b-[50vh] border-l-[50vh] border-t-transparent border-b-transparent border-l-green-500 "></div> */}


			<div className="absolute -left-[340px] w-full h-full ">
				<Image className="mix-blend-color-dodge brightness-[95%]" src={'/imgs/arte.svg'} fill alt={""}/>
			</div>

			{/* <HeaderImage/> */}
			{/* <RiveComponent /> */}
			<div className=" absolute w-full h-full top-0 right-0 text-white bg-[#162330] bg-opacity-80 xl:bg-transparent">
				<div className="container mx-auto px-4 h-full flex flex-col items-end justify-center">
					<span className="font-black text-5xl lg:text-7xl text-end ">LA ESCUELA INFINITA</span>
					<span className="font-bold text-2xl lg:text-5xl text-end ">Aprender y enseñar en entornos ubicuos</span>
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
			</div>
		</header>
	);
}
