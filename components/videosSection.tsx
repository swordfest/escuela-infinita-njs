import { Children, Suspense, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import React from "react";
import Youtube from "react-youtube";
import Image from "next/image";
import { Video, windowSize } from "./data";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import Button from "./button";
import Thumbnail from "./thumbnail";
import { dataYoutube } from "./data";

export default function VideosSection() {
	const opts = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
			controls: 0,
			disablekb: 0,
		},
	};
	const [numSlides, setNumSlides] = useState(1)
	const [show, setShow] = useState(3)
	const [styleArrows, setStyleArrows] = useState(true)
	const [width, setWidth] = useState(0)

	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());
	// const { data: videos, error } = useSWR<dataYoutube>(
	// 	"https://www.googleapis.com/youtube/v3/search?key=AIzaSyAYmahKRo0Q4KNx_xw6ON4S5z6_SlpQ5PQ&part=snippet&channelId=UCjIUGN6vQCrvDpyc4G6tCpQ&type=video",
	// 	fetcher
	// );

	const { data: videos, error } = useSWR<dataYoutube>(
		"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&key=AIzaSyAXMRrG--exsMbFqcofGdnxx4FNu3aMmOs",
		fetcher
	);

	// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAYmahKRo0Q4KNx_xw6ON4S5z6_SlpQ5PQ&channelId=laescuelainfinitalibro&part=snippet,id&order=date


    const [videoBig, setVideoBig] = useState('')

    const handleClick = (id: string) => {
        setVideoBig(id)
        console.log(videoBig)
    }

	useEffect(() => {
		// setSlider(document.getElementById('slider')!)
        if (videos != undefined) {
			setVideoBig(videos.items[0].id.videoId)
		}
		console.log(videos)
	},[videos]);

	useEffect(()=>{
		setWidth(window.innerWidth)
		if (width > 1200) {
			setShow(4)
			setNumSlides(4)
			setStyleArrows(false)
		}
        // console.log(numSlides)
	})

	if (error) {
		return <div>Error!!</div>;
	}

	if (!videos) {
		return <>
			<div className="video w-[1280px] flex justify-center bg-slate-400 h-[720px]">
				</div>
		</>
	}

	return (
		<section id="videos" className="videos w-full h-auto col-span-12 flex flex-col gap-8 items-center justify-center">
			<h1 className="text-3xl xl:text-5xl uppercase font-black text-center ">
				Materiales Visuales
			</h1>
			<div className="flex flex-col items-center w-full h-auto gap-4 overflow-visible ">
				<div className="video flex justify-center h-auto px-4">
					<Youtube
						className="w-full"
						iframeClassName="w-[328px] h-[184px] sm:w-[608px] sm:h-[342px] md:w-[736px] md:h-[414px] lg:w-[992px] lg:h-[558px] xl:w-[992px] xl:h-[558px] "
                        key={'videoBig'}
						videoId={videoBig}
						opts={opts}
					/>
				</div>
				<Carousel
					// className={`w-[1280px] h-auto overflow-visible `}
                    rightArrow={<Button type={'slider'} side={'right'} styleArrows={styleArrows}/>}
                    leftArrow={<Button type={'slider'} side={'left'} styleArrows={styleArrows} />}
                    useArrowKeys={true}
					responsive={true}
					// dynamic={true}
					swiping={true}
					// infinite={false}
					show={show}
					slide={numSlides}>
					{videos.items.map((item: any) => (
                        <Thumbnail key={item.id} handleClick={() => handleClick(item.id)} id={item.id} url={item.snippet.thumbnails.high.url} />
					))}
				</Carousel>
			</div>
		</section>
	);
}
