import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";

export default function Sponsors() {
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);

	useEffect(() => {
		if (scrollPos > 0.9 && scrollPos <= 1) {
			setEnter(true);
		}
	});
	return (
		<section
			id="sponsors"
			className="sponsors w-full h-auto col-span-12 flex flex-col gap-4 xl:gap-12 items-center justify-center pt-8 pb-24">
			<div className="flex flex-col gap-16 my-10 items-center justify-center ">
				<div className="overflow-hidden">
					<h1
						className={`text-3xl text-[#162330] xl:text-5xl uppercase font-black transition-all ease-in-out duration-[1000ms] ${
							enter ? " translate-y-0 " : " translate-y-10 "
						} `}>
						Casa Editorial
					</h1>
				</div>
				<div className="overflow-hidden">
					<img
						className={`w-40 xl:w-64 h-auto transition-all ease-in-out duration-[1500ms] ${
							enter ? " translate-y-0 " : " translate-y-48 "
						}`}
						src="/imgs/logo-editorial.svg"
						alt="Logo Editorial Pueblo y Educación"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-16 xl:my-10 items-center justify-center ">
				<div className="overflow-hidden">
					<h2
						className={`text-xl xl:text-3xl uppercase font-black transition-all ease-in-out duration-[1500ms] ${
							enter ? " translate-y-0 " : " translate-y-10 "
						} `}>
						Con la colaboración de
					</h2>
				</div>

				<div className=" flex flex-col xl:flex-row items-center justify-center gap-20 ">
					<div className="overflow-hidden">
						<img
							className={`w-40 h-auto transition-all ease-in-out duration-[1500ms] ${
								enter ? " translate-y-0 " : " translate-y-40 "
							}`}
							src="/imgs/logo-dte.svg"
							alt="Logo Editorial Pueblo y Educación"
						/>
					</div>
					<div className="overflow-hidden">
						<img
							className={`w-72 h-auto transition-all ease-in-out delay-150 duration-[1500ms] ${
								enter ? " translate-y-0 " : " translate-y-40 "
							}`}
							src="/imgs/logo-mined.svg"
							alt="Logo Editorial Pueblo y Educación"
						/>
					</div>
					<div className="overflow-hidden">
						<img
							className={`w-32 h-auto mix-blend-multiply transition-all ease-in-out delay-250 duration-[1500ms] ${
								enter ? " translate-y-0 " : " translate-y-40 "
							}`}
							src="/imgs/logo-cresp.svg"
							alt="Logo Editorial Pueblo y Educación"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
