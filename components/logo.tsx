import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";

export default function Logo(props: any) {
	const [enter, setEnter] = useState(false);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);

	useEffect(() => {
		if (scrollPos >= 0) {
			setEnter(true);
		}
	});
	return (
		<div
			className={` logo w-auto h-full bg-transparent flex items-center transition-all overflow-hidden ${props.width} `}>
			<img
				className={`transition-all ease-in-out delay-1000 duration-[1000ms] ${enter ? " translate-x-0 " : " -translate-x-20 "}`}
				alt="logo"
				src={"/logo.svg"}
			/>
		</div>
	);
}
