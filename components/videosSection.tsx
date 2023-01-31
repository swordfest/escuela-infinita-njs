import { Children, Suspense, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import React from "react";
import Youtube from "react-youtube";
import Image from "next/image";
import { Item, Video, windowSize, YoutubeId, YoutubeItem } from "./data";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import Button from "./button";
import Thumbnail from "./thumbnail";
import { dataYoutube } from "./data";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";

export default function VideosSection() {
	const opts = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
			controls: 0,
			disablekb: 0,
		},
	};
	const [numSlides, setNumSlides] = useState(2);
	const [show, setShow] = useState(3);
	const [styleArrows, setStyleArrows] = useState(true);
	const [width, setWidth] = useState(0);
	const [hasMounted, setHasMounted] = useState(false);
	const [flag, setFlag] = useState(false);

	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());
	// const { data: videos, error } = useSWR<YoutubeItem>(
	// 	"https://www.googleapis.com/youtube/v3/search?key=AIzaSyAYmahKRo0Q4KNx_xw6ON4S5z6_SlpQ5PQ&part=snippet&channelId=UCjIUGN6vQCrvDpyc4G6tCpQ&type=video&maxResults=20",
	// 	fetcher
	// );

	const { data: videos, error } = useSWR(
		"https://apiei.aprendiendo.cu/wp-json/wp/v2/youtube",
		fetcher
	);

	// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAYmahKRo0Q4KNx_xw6ON4S5z6_SlpQ5PQ&channelId=laescuelainfinitalibro&part=snippet,id&order=date

	const [videoBig, setVideoBig] = useState("");
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);

	useEffect(() => {
		setHasMounted(true);
		if (scrollPos > 0.62) {
			setEnter(true);
		}
	});

	const handleClick = (id: string) => {
		setVideoBig(id);
		console.log(id);
	};

	useEffect(() => {
		// setSlider(document.getElementById('slider')!)
		if (videos != undefined) {
			setVideoBig(videos[3].acf.identificador_del_video);
			console.log(videos);
		}
		// console.log(videos);
	}, [videos]);

	useEffect(() => {
		setWidth(window.innerWidth);
		if (width > 1200) {
			setShow(4);
			setNumSlides(4);
			setStyleArrows(false);
			setFlag(true);
		} else {
			setFlag(false);
		}
		// console.log(numSlides)
	});

	if (error) {
		return <div>Error!!</div>;
	}

	if (!videos) {
		return (
			<>
				<div className="video w-[1280px] flex justify-center bg-slate-400 h-[720px]"></div>
			</>
		);
	}

	return (
		<section
			id="videos"
			className="videos w-full h-[960px] col-span-12 flex flex-col gap-8 items-center py-24 lg:py-0 lg:justify-center">
			<div className="overflow-hidden">
				<h1
					className={`text-3xl text-[#162330] text-center xl:text-5xl uppercase font-black transition-all ease-in-out duration-[1000ms] ${
						enter ? " translate-y-0 " : " translate-y-10 "
					} `}>
					Materiales Audiovisuales
				</h1>
			</div>
			<div className=" w-[328px] sm:w-[608px] md:w-[736px] lg:w-[992px] flex flex-col items-center h-auto gap-4 overflow-visible ">
				<div className="overflow-hidden">
					<div
						className={`video flex justify-center bg-[#000] transition-all ease-in-out duration-[1000ms] ${
							enter
								? "w-[328px] h-[184px] sm:w-[608px] sm:h-[342px] md:w-[736px] md:h-[414px] lg:w-[992px] lg:h-[558px] xl:w-[992px] xl:h-[558px] "
								: "w-0"
						}`}>
						{/* " translate-x-0 " : " translate-x-[992px] " */}
						<Youtube
							className="w-full"
							iframeClassName="w-[328px] h-[184px] sm:w-[608px] sm:h-[342px] md:w-[736px] md:h-[414px] lg:w-[992px] lg:h-[558px] xl:w-[992px] xl:h-[558px] "
							key={videoBig}
							videoId={videoBig}
							opts={opts}
						/>
					</div>
				</div>
				<Carousel
					className={` transition-all ease-in-out duration-[2000ms]  ${
						enter ? " h-32 " : " h-0 "
					}`}
					rightArrow={
						<Button type={"slider"} side={"right"} styleArrows={!flag} />
					}
					leftArrow={
						<Button type={"slider"} side={"left"} styleArrows={!flag} />
					}
					useArrowKeys={true}
					responsive={true}
					// dynamic={true}
					swiping={true}
					// infinite={false}
					show={flag ? 4 : (width < 768 ? 1 : 3)}
					slide={flag ? 4 : 1}>
					{videos.map((item: any, index: number) => (
						<div
							key={index}
							className={`${flag ? "w-56" : "w-40"} h-32 mx-4 ${width < 768 ? 'flex items-center justify-center' : ''} `}
							onClick={() => handleClick(item.acf.identificador_del_video)}>
							<Thumbnail
								key={item.acf.identificador_del_video}
								id={item.acf.identificador_del_video}
								url={`https://img.youtube.com/vi/${item.acf.identificador_del_video}/maxresdefault.jpg`}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}
