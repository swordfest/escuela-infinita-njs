import { Children, Suspense, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import React from "react";
import Youtube from "react-youtube";
import Image from "next/image";
import { Video } from "./data";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import Button from "./button";
import Thumbnail from "./thumbnail";

export default function VideosSection() {
	const [hasMounted, setHasMounted] = useState(false);
	const opts = {
		height: "720",
		width: "1280",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
			controls: 0,
			disablekb: 0,
		},
	};

	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());
	const { data: videos, error } = useSWR(
		"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&key=AIzaSyAXMRrG--exsMbFqcofGdnxx4FNu3aMmOs",
		fetcher
	);

    const [videoBig, setVideoBig] = useState('')

    const handleClick = (id: string) => {
        setVideoBig(id)
        console.log(videoBig)
    }

	useEffect(() => {
		// setSlider(document.getElementById('slider')!)
		setHasMounted(true);
        setVideoBig(videos?.items[0].id)
        // console.log(videoBig)
	},[]);

	// if (!hasMounted) {
	// 	return null;
	// }

	if (error) {
		return <div>Error!!</div>;
	}

	if (!videos) {
		return <div>
			<div className="video w-[1280px] flex justify-center bg-slate-400 h-[720px]">
					
				</div>
		</div>;
	}

	return (
		<section id="videos" className="videos w-full h-auto col-span-12 flex flex-col gap-8 items-center justify-center">
			<h1 className="text-3xl xl:text-5xl uppercase font-black ">
				Materiales Visuales
			</h1>
			<div className="flex flex-col items-center w-full h-auto gap-4 overflow-visible ">
				<div className="video w-[1356px] flex justify-center h-[720px]">
					<Youtube
						// className={"w-[1280px] h-[720px]"}
                        key={'videoBig'}
						videoId={videoBig}
						opts={opts}
					/>
				</div>
				{/* <div className="flex items-center"> */}
				<Carousel
					className={"w-[1280px] h-auto overflow-visible"}
                    rightArrow={<Button type={'slider'} side={'right'}/>}
                    leftArrow={<Button type={'slider'} side={'left'}/>}
                    useArrowKeys={true}
					responsive={true}
					swiping={true}
					show={4}
					slide={4}>
					{videos.items.map((item: any) => (
						// <Image
                        //     onClick={() => handleClick(item.id)}
                        //     className="flex px-2 brightness-75 hover:brightness-100 transition-all"
						// 	key={item.id}
						// 	src={item.snippet.thumbnails.medium.url}
						// 	alt={"aaa"}
						// 	width={"640"}
						// 	height={"360"}
                        //     />
                        <Thumbnail key={item.id} handleClick={() => handleClick(item.id)} id={item.id} url={item.snippet.thumbnails.medium.url} />
					))}
				</Carousel>
				{/* </div> */}
			</div>
		</section>
	);
}
