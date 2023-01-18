import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, createContext } from "react";
import { useRecoilState } from "recoil";
import Dots from "./dots";
import Slide from "./slide";
import SlideList from "./slideList";
import { itemsSlider, postsList, slideCurrent } from "./store";

export const SliderContext = createContext({});

// {
//     autoPlay: boolean,
//     autoPlayTime: number,
//     width: '%' | 'px',
//     height:  '%' | 'px',
//  }

export default function Reviews(props: any) {
	// const [isCurrent, setIsCurrent] = useState(false);
	// const [postIndex, setPostIndex] = useState(props.posts.length);
	const [items, setItems] = useRecoilState(itemsSlider);
	const [slide, setSlide] = useRecoilState(slideCurrent);
	const [posts, setPosts] = useRecoilState(postsList);
	const [touchPosition, setTouchPosition] = useState(null);

	const changeSlide = (direction = 1) => {
		let slideNumber = 0;

		if (slide + direction < 0) {
			slideNumber = props.posts.length - 1;
		} else {
			slideNumber = (slide + direction) % props.posts.length;
		}
		setSlide(slideNumber);
	};

	useEffect(() => {
		// if (!autoPlay) return;
		// setPosts(props.posts);

		const interval = setInterval(() => {
			changeSlide(1);
		}, 8000);

		return () => {
			clearInterval(interval);
		};
	}, [props.posts.length, slide]); // when images uploaded or slide changed manually we start timer

	return (
		<section
			id="reviews"
			className="reviews relative overflow-visible w-screen h-[560px] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-slate-400 col-span-12 flex items-center justify-center">
			{/* <SliderContext.Provider
				value={{
					changeSlide,
					slidesCount: props.posts.lenght,
					slideNumber: slide,
					posts: props.posts,
				}}> */}
			{/* <SlidesList /> */}
			{posts.length ? <SlideList /> : null}
			{/* <Slide key={slide} data={posts[slide]} /> */}
			<div className="content w-full h-full flex flex-col items-center justify-between absolute px-4 lg:px-0 ">
				<div className="flex flex-col w-full h-full items-center justify-center gap-4 pt-4 ">
					<h1 className="text-white text-3xl lg:text-5xl font-semibold text-center ">
						{posts[slide]?.["title"]["rendered"]}
					</h1>
					<p
						className=" w-full lg:w-2/4 text-center text-white py-2 "
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(posts[slide]?.["excerpt"]["rendered"]),
						}}></p>
					<Link
						className=" w-full lg:w-1/2 xl:w-48 h-12 bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390]  transition-colors flex items-center justify-center [#0d2636] "
						href={`/blog/${posts[slide]?.["slug"]}`} shallow>
						Leer más
					</Link>
				</div>
				<div className=" w-full h-20 flex items-center justify-center ">
                    <Dots />
                </div>
			</div>
			{/* </SliderContext.Provider> */}
		</section>
	);
}

{
	/* {console.log(postIndex)} */
}
{
	/* overflow-x-auto snap-x snap-mandatory */
}

{
	/* {props.posts.map((p: any) => (
				<>
					<div className="w-full h-full flex shrink-0 snap-start scroll-smooth ">
						<Image
							placeholder="blur"
							blurDataURL="/imgs/reviews.jpg"
							fill
							className="object-cover"
							src={p.better_featured_image.source_url}
							alt={"books"}
						/>
					</div>
					<div className="w-full h-full flex flex-col ">
						<div className="text-white">
							<h1>{p.title.rendered}</h1>
						</div>
					</div>
				</>
			))}
			<ol className="flex z-[1] gap-4 items-center">
				{props.posts.map((p: any) => (
					<li
						key={p.id}
						className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></li>
				))}
			</ol> */
}
