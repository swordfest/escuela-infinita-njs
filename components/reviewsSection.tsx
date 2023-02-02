import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, createContext } from "react";
import { useRecoilState } from "recoil";
import Dots from "./dots";
import {
	itemsSlider,
	postsList,
	reviewsList,
	scrollPercentage,
	slideCurrent,
} from "./store";

export const SliderContext = createContext({});

// {
//     autoPlay: boolean,
//     autoPlayTime: number,
//     width: '%' | 'px',
//     height:  '%' | 'px',
//  }

export default function ReviewsTesting() {
	// const [isCurrent, setIsCurrent] = useState(false);
	// const [postIndex, setPostIndex] = useState(props.posts.length);
	const [items, setItems] = useRecoilState(itemsSlider);
	const [slide, setSlide] = useRecoilState(slideCurrent);
	const [posts, setPosts] = useRecoilState(postsList);
	const [reviews, setReviews] = useRecoilState(reviewsList);
	const [touchPosition, setTouchPosition] = useState(null);
	const [hasChanged, setHasChanged] = useState(false);

	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);

	const changeSlide = (direction = 1) => {
		let slideNumber = 0;
		if (slide + direction < 0) {
			slideNumber = reviews.length - 1;
		} else {
			slideNumber = (slide + direction) % reviews.length;
		}
		setSlide(slideNumber);
		setHasChanged(true);
	};

	useEffect(() => {
		// if (!autoPlay) return;
		// setPosts(props.posts);
		if (scrollPos > 0.16) {
			setEnter(true);
		}
		const interval = setInterval(() => {
			changeSlide(1);
		}, 12000);

		// console.log(reviews.length);

		return () => {
			clearInterval(interval);
		};
	}, [reviews.length, slide]); // when images uploaded or slide changed manually we start timer

	return (
		// ${enter && 'animate-reviewsEnter'}
		<div
			className={`padre-reviews relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden col-span-12  transition-all ease-in-out duration-[1200ms] ${
				enter ? "w-screen" : "w-0"
			}`}>
			<section
				id="reviews"
				className={`reviews relative z-[1] w-screen h-[1280px] lg:h-[560px] bg-[#000000] flex items-start lg:items-center justify-center `}>
				{/* className={`reviews relative w-screen lg:h-[560px] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]  bg-[#000000] col-span-12 flex items-start lg:items-center justify-center `}> */}
				<Image
					className="object-cover object-top z-[0] opacity-40 "
					alt=""
					src={"/imgs/reviews.jpg"}
					fill
				/>
				<div className="content z-[1] w-full xl:w-3/4 h-auto flex flex-col items-start justify-center lg:justify-end gap-4 px-4 py-12 xl:px-0  ">
					<div className="flex flex-col lg:flex-row shrink-0 w-full h-auto items-center justify-center gap-4 lg:gap-20  ">
						<div
							// ${ hasChanged ? "opacity-100" : "opacity-0"}
							className={`autor-resena relative flex shrink-0 w-full sm:w-72 h-96 transition-all ease-linear duration-500  
						`}>
							<Image
								className="object-cover "
								alt=""
								src={reviews[slide]?.["better_featured_image"]["source_url"]}
								fill
							/>
						</div>

						<div className="flex flex-col w-full h-full items-center lg:items-start justify-center gap-4 py-4 ">
							<div className="flaticon-036-quote w-8 h-8 inline "></div>
							<p
								// ${slide && "animate-fadeIn"}
								className={`relative w-full text-white text-xl lg:text-2xl italic leading-relaxed py-2 text-center lg:pl-24 pt-24 lg:pt-0 lg:text-start `}
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(
										reviews[slide]?.["excerpt"]["rendered"]
									),
								}}></p>
							{/* <p
								// ${slide && "animate-fadeIn"}
								className={`relative w-full text-white text-xl lg:text-2xl italic leading-relaxed py-2 text-center lg:pl-24 pt-24 lg:pt-0 lg:text-start before:content-['\f123'] font-flaticon before:text-7xl before:absolute before:top-0 lg:before:-top-1.5 before:left-[36%] sm:before:left-[42%] md:before:left-[44%] lg:before:-left-2 before:z-[1] `}
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(
										reviews[slide]?.["excerpt"]["rendered"]
									),
								}}></p> */}
							<div className="flex lg:pl-24 gap-2 text-xl font-light text-[#c7c7c7]">
								<span className="relative animate-fadeIn text-center lg:text-left ">
									{`${reviews[slide]?.["acf"]["nombre_autor"]}. ${reviews[slide]?.["acf"]["institucion_autor"]}. ${reviews[slide]?.["acf"]["pais_autor"]}`}
								</span>
							</div>
							<Link
								className=" w-full md:w-1/2 xl:w-48 h-12 lg:ml-24 bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390]  transition-colors flex items-center justify-center font-semibold "
								href={`/reviews/${reviews[slide]?.["slug"]}`}
								shallow>
								Leer Reseña
							</Link>
						</div>
					</div>
					<div className=" left-0 bottom-0 w-full h-10 flex items-center justify-center ">
						<Dots />
					</div>
				</div>
			</section>
		</div>
	);

	// return (
	// 	// ${enter && 'animate-reviewsEnter'}
	// 	<div
	// 		className={`padre-reviews relative lg:h-[560px] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden col-span-12  transition-all ease-in-out duration-[1200ms] ${
	// 			enter ? "w-screen" : "w-0"
	// 		}`}>
	// 		<section
	// 			id="reviews"
	// 			className={`reviews relative z-[1] w-screen lg:h-[560px] bg-[#000000] flex items-start lg:items-center justify-center `}>
	// 			{/* className={`reviews relative w-screen lg:h-[560px] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]  bg-[#000000] col-span-12 flex items-start lg:items-center justify-center `}> */}
	// 			<Image
	// 				className="object-cover object-top z-[0] opacity-40 "
	// 				alt=""
	// 				src={"/imgs/reviews.jpg"}
	// 				fill
	// 			/>
	// 			<div className="content z-[1] w-full xl:w-3/4 h-auto flex flex-col items-start justify-center lg:justify-end gap-4 px-4 py-12 xl:px-0  ">
	// 				<div className="flex flex-col lg:flex-row shrink-0 w-full h-auto items-center justify-center gap-4 lg:gap-20  ">
	// 					<div
	// 						// ${ hasChanged ? "opacity-100" : "opacity-0"}
	// 						className={`autor-resena relative flex shrink-0 w-full sm:w-72 h-96 transition-all ease-linear duration-500
	// 					${reviews.indexOf(reviews[slide]?.["id"]) ? "opacity-100" : "opacity-0"}`}>
	// 						<Image
	// 							className="object-cover "
	// 							alt=""
	// 							src={reviews[slide]?.["better_featured_image"]["source_url"]}
	// 							fill
	// 						/>
	// 					</div>

	// 					<div className="flex flex-col w-full h-full items-center lg:items-start justify-center gap-4 py-4 ">
	// 						<p
	// 							// ${slide && "animate-fadeIn"}
	// 							className={`relative w-full text-white text-xl lg:text-2xl italic leading-relaxed py-2 text-center lg:pl-24 pt-24 lg:pt-0 lg:text-start before:content-['\f123'] font-flaticon before:text-7xl before:absolute before:top-0 lg:before:-top-1.5 before:left-[36%] sm:before:left-[42%] md:before:left-[44%] lg:before:-left-2 `}
	// 							dangerouslySetInnerHTML={{
	// 								__html: DOMPurify.sanitize(
	// 									reviews[slide]?.["excerpt"]["rendered"]
	// 								),
	// 							}}></p>
	// 						<div className="flex lg:pl-24 gap-2 text-xl font-light text-[#c7c7c7]">
	// 							<span className="relative animate-fadeIn ">
	// 								{`${reviews[slide]?.["acf"]["nombre_autor"]}. ${reviews[slide]?.["acf"]["institucion_autor"]}. ${reviews[slide]?.["acf"]["pais_autor"]}`}
	// 							</span>
	// 						</div>
	// 						<Link
	// 							className=" w-full md:w-1/2 xl:w-48 h-12 lg:ml-24 bg-[#98CCA5] hover:bg-[#a5dfb4] active:bg-[#85b390]  transition-colors flex items-center justify-center font-semibold "
	// 							href={`/reviews/${reviews[slide]?.["slug"]}`}
	// 							shallow>
	// 							Leer Reseña
	// 						</Link>
	// 					</div>
	// 				</div>
	// 				<div className=" left-0 bottom-0 w-full h-10 flex items-center justify-center ">
	// 					<Dots />
	// 				</div>
	// 			</div>
	// 		</section>
	// 	</div>
	// );
}
