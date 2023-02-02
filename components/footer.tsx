import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";

export default function Footer(props: any) {
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);

	useEffect(() => {
		if (scrollPos === 1) {
			setEnter(true);
		}
	});

	if (props.animate) {
		return (
			<div className="overflow-hidden">
				<div
					className={`summary relative col-span-12 flex flex-col items-center bg-[#174563] justify-center font-semibold w-full h-32 overflow-hidden text-white transition-all ease-in-out duration-[1000ms] ${
						enter ? " translate-y-0 " : " translate-y-32 "
					}`}>
					<div className="overflow-hidden">
						<h1
							className={`text-center text-lg font-semibold transition-all ease-in-out delay-700 duration-[1000ms] ${
								enter ? " translate-y-0 " : " translate-y-10 "
							}`}>
							La Escuela Infinita. Aprender y enseñar en entornos ubicuos
						</h1>
					</div>
					<div className="overflow-hidden">
						<div
							className={`flex items-center gap-2 transition-all ease-in-out delay-700 duration-[1500ms] ${
								enter ? " translate-y-0 " : " translate-y-10 "
							}`}>
							<span className="text-center font-normal">
								<Link
									className="hover:underline "
									href={"https://creativecommons.org/licenses/by/4.0/"}
									target={"_blank"}>
									Creative Commons Attribution 4.0 International license
								</Link>
								<span> © 2023</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className={`summary relative col-span-12 flex flex-col items-center bg-[#174563] justify-center font-semibold w-full h-32 text-white px-4 `}>
				<h1 className={`text-center text-lg font-semibold`}>
					La Escuela Infinita. Aprender y enseñar en entornos ubicuos
				</h1>
				<span className="text-center font-normal">
					<Link
						className="hover:underline "
						href={"https://creativecommons.org/licenses/by/4.0/"}
						target={"_blank"}>
						Creative Commons Attribution 4.0 International license
					</Link>
					<span> © 2023</span>
				</span>
			</div>
		);
	}
}
