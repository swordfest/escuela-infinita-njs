import Image from "next/image";
import Rive, { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import Button from "./button";
import { useEffect, useState } from "react";
import HeaderImage from "./headerImage";
import { useRecoilState } from "recoil";
import { mediaList, scrollPercentage } from "./store";
// import riveWasmUrl from '@rive-app/canvas/rive.wasm';
// import { RuntimeLoader } from 'rive-react';

export default function Header(props: any) {
	const [media, setMedia] = useRecoilState(mediaList);
	const [link, setLink] = useState("");
	const [width, setWidth] = useState(0);
	const [bigScreen, setBigScreen] = useState(false);
	const [overflow, setOverflow] = useState(false);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [abajo, setABajo] = useState(false)

	const { rive, RiveComponent } = useRive(
		{
			src: "/animations/escuela_infinita_artboard_small.riv",
			autoplay: true,
			artboard: "PortadaSmall",
			layout: new Layout({
				fit: Fit.FitHeight,
				alignment: Alignment.TopLeft,
				maxX: 480,
			}),
		},
		{
			useDevicePixelRatio: true,
			// fitCanvasToArtboardHeight: true,
		}
	);

	const [enter, setEnter] = useState(false);

	useEffect(() => {
		setWidth(window.innerWidth);

		if (scrollPos >= 0) {
			setEnter(true);
			setTimeout(() => setOverflow(true), 4500);
		}

		if (media != undefined) {
			setLink(
				media.filter((m: any) => {
					return m.id === 163;
				})[0]?.["source_url"]
			);
		}

		if (width > 1200) {
			setBigScreen(true);
		} else {
			setBigScreen(false);
		}

		
	});

	return (
		<div
			
			className={`container-animation relative transition-all ease-in-out delay-1000 duration-[1200ms] ${
				enter ? " h-[640px] xl:h-[940px] " : " h-0 "
			} 
			${overflow ? "overflow-visible" : "overflow-hidden"}`}>
			<header
			id="header"
				className={`header relative w-full h-[640px] xl:h-[860px] bg-gradient-to-tl from-[#4d684a] via-[#222146] to-[#222146] col-span-12 flex overflow-visible items-center justify-end mt-20 `}>
				{/* <img className="w-full h-full object-cover " src="/imgs/header.jpg" alt="header" /> */}
				{/* <Rive style={{display: 'flex', alignItems: 'start', }} src="/animations/escuela_infinita_artboard_small.riv" /> */}
				{/* <div className="absolute w-0 h-0 border-t-[50vh] border-b-[50vh] border-l-[50vh] border-t-transparent border-b-transparent border-l-green-500 "></div> */}
				<div
					className={`absolute z-0 mix-blend-color-dodge w-full h-full animate-idleHead transition-all duration-700 delay-[2200ms] ${
						bigScreen ? "-left-[640px]" : "-left-[340px]"
					}`}>
					<Image
						className="mix-blend-color-dodge animate-fadeIn duration-[1500ms] brightness-[95%]"
						src={"/imgs/arte.svg"}
						fill
						alt={""}
					/>
				</div>

				{/* <HeaderImage/> */}
				{/* <RiveComponent /> */}
				{/* <div className=" w-full h-full top-0 right-0 text-white bg-[#162330] bg-opacity-80 xl:bg-transparent"> */}

				<div className=" px-4 w-full h-full flex flex-col items-center xl:items-end justify-center gap-4 text-white ">
					<div
						className={`font-black text-5xl lg:text-8xl text-center xl:text-end overflow-hidden `}>
						<div
							className={` transition-all ease-in-out duration-[1500ms] delay-[2200ms] ${
								enter ? " translate-y-0 " : " translate-y-20 "
							} `}>
							LA ESCUELA INFINITA
						</div>
					</div>
					<div
						className={`font-bold h-16 text-2xl lg:text-5xl text-center xl:text-end overflow-hidden `}>
						<div
							className={` transition-all ease-in-out duration-[1500ms] delay-[2200ms] ${
								enter ? " translate-y-0 " : " translate-y-16 "
							} `}>
							Aprender y enseñar en entornos ubicuos
						</div>
					</div>

					<div
						className={`buttons-download w-full lg:w-auto h-auto xl:h-auto flex flex-col lg:flex-row items-center justify-end gap-6 py-4 ${
							overflow ? "" : "overflow-hidden"
						} `}>
						<Button
							key={"but"}
							text={"DESCARGAR LIBRO - PDF"}
							type={"button"}
							link={
								"https://apiei.aprendiendo.cu/download/378/?tmstv=1675133380"
							}
							isVisible={enter}
							delay={"duration-[1500ms]"}
							download={false}
						/>
						<Button
							key={"but2"}
							text={"DESCARGAR LIBRO - EPUB"}
							type={"button"}
							link={
								"https://apiei.aprendiendo.cu/download/384/?tmstv=1675134841"
							}
							isVisible={enter}
							delay={"duration-[2000ms]"}
						/>
						<Button
							key={"but3"}
							text={"DESCARGAR CAPÍTULOS"}
							type={"menu"}
							// link={
							// 	"https://apiei.aprendiendo.cu/wp-content/uploads/2023/01/CURSO-APRENDER-Y-ENSENAR-EV.docx"
							// }
							isVisible={enter}
							delay={"duration-[2500ms]"}
						/>
					</div>
				</div>
			</header>
		</div>
	);
}
