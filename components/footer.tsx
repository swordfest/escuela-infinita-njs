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
							className={`text-center transition-all ease-in-out delay-700 duration-[1000ms] ${
								enter ? " translate-y-0 " : " translate-y-10 "
							} `}>
							La Escuela Infinita. Enseñar y Aprender en Entornos Virtuales.
						</h1>
					</div>
					<div className="overflow-hidden">
						<div
							className={`flex items-center gap-2 transition-all ease-in-out delay-700 duration-[1500ms] ${
								enter ? " translate-y-0 " : " translate-y-10 "
							}`}>
							{"Copyright "}
							<span>
								<svg className="w-4 h-4 fill-white " viewBox="0 0 24 24">
									<path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
									<path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
								</svg>
							</span>{" "}
							2023
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className={`summary relative col-span-12 flex flex-col items-center bg-[#174563] justify-center font-semibold w-full h-32 text-white `}>
				<h1
					className={`text-center  `}>
					La Escuela Infinita. Enseñar y Aprender en Entornos Virtuales.
				</h1>
				<div className={`flex items-center gap-2 `}>
					{"Copyright "}
					<span>
						<svg className="w-4 h-4 fill-white " viewBox="0 0 24 24">
							<path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
							<path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
						</svg>
					</span>{" "}
					2022
				</div>
			</div>
		);
	}
}
