import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, createContext } from "react";
import { useRecoilState } from "recoil";
import Dots from "./dots";
import Slide from "./slide";
import SlideList from "./slideList";
import { itemsSlider, postsList, reviewsList, slideCurrent } from "./store";

export const SliderContext = createContext({});

// {
//     autoPlay: boolean,
//     autoPlayTime: number,
//     width: '%' | 'px',
//     height:  '%' | 'px',
//  }

export default function Reviews() {
	// const [isCurrent, setIsCurrent] = useState(false);
	// const [postIndex, setPostIndex] = useState(props.posts.length);
	const [items, setItems] = useRecoilState(itemsSlider);
	const [slide, setSlide] = useRecoilState(slideCurrent);
	const [posts, setPosts] = useRecoilState(postsList);
	const [reviews, setReviews] = useRecoilState(reviewsList);
	const [touchPosition, setTouchPosition] = useState(null);

	const changeSlide = (direction = 1) => {
		let slideNumber = 0;

		if (slide + direction < 0) {
			slideNumber = reviews.length - 1;
		} else {
			slideNumber = (slide + direction) % reviews.length;
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
	}, [reviews.length, slide]); // when images uploaded or slide changed manually we start timer

	return (
		<section
			id="reviews"
			className="reviews relative overflow-visible w-screen h-auto lg:h-[560px] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-[#000000] col-span-12 flex items-start lg:items-center justify-center">
			{/* <SliderContext.Provider
				value={{
					changeSlide,
					slidesCount: props.posts.lenght,
					slideNumber: slide,
					posts: props.posts,
				}}> */}
			{/* <SlidesList /> */}
			{/* {posts.length ? <SlideList /> : null} */}
			{/* <Slide key={slide} data={posts[slide]} /> */}
			<Image
				className="object-cover object-top z-[0] animate-fadeIn opacity-40 "
				alt=""
				src={'/imgs/reviews.jpg'}
				fill
			/>
			<div className="content z-[1] w-full xl:w-3/4 h-auto flex flex-col items-start justify-center lg:justify-end gap-4 px-4 py-12 xl:px-0  ">
				<div className="flex flex-col lg:flex-row shrink-0 w-full h-auto items-center justify-center gap-4 lg:gap-20  ">
					<div className="autor-resena relative flex shrink-0 w-full sm:w-72 h-96 ">
						<Image
							className="object-cover animate-fadeIn"
							alt=""
							src={reviews[slide]?.['better_featured_image']['source_url']}
							fill
						/>
					</div>

					<div className="flex flex-col w-full h-full items-center lg:items-start justify-center gap-4 lg:gap-12 py-4 ">
						{/* <h1 className="text-white text-3xl lg:text-5xl font-semibold text-center lg:text-start ">
							{posts[slide]?.["title"]["rendered"]}
						</h1> */}
						<p
							className="relative w-full text-white text-xl lg:text-2xl italic leading-relaxed py-2 text-center lg:pl-24 pt-24 lg:pt-0 lg:text-start before:content-['\f123'] font-flaticon before:text-7xl before:absolute before:top-0 lg:before:-top-1.5 before:left-[36%] sm:before:left-[42%] md:before:left-[44%] lg:before:-left-2 "
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(
									reviews[slide]?.["excerpt"]["rendered"]
								),
							}}></p>
						<Link
							className=" w-full md:w-1/2 xl:w-48 h-12 lg:ml-24 bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390]  transition-colors flex items-center justify-center font-semibold "
							href={`/reviews/${reviews[slide]?.["slug"]}`}
							shallow>
							Leer Reseña
						</Link>
					</div>
				</div>
				<div className="absolute left-0 bottom-0 w-full h-10 flex items-center justify-center ">
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
