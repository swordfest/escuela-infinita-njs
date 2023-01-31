import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";

export default function Logo(props: any) {
	const [enter, setEnter] = useState(false);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	var scrollIntoView = require("scroll-into-view");

	useEffect(() => {
		if (scrollPos >= 0) {
			setEnter(true);
		}
	});
	return (
		<div
		onClick={() =>
			scrollIntoView(
				document.getElementById("header"),
				{
					time: 0, // half a second
					align: {
						top: 0,
						topOffset: 80,
					},
				}
			)
		}
			className={` logo w-auto h-full cursor-pointer bg-transparent flex items-center transition-all overflow-hidden ${props.width} `}>
			<img
				className={`transition-all ease-in-out delay-1000 duration-[1000ms] ${enter ? " translate-x-0 " : " -translate-x-20 "}`}
				alt="logo"
				src={"/logo.svg"}
			/>
		</div>
	);
}
