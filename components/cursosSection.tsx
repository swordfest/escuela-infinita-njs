import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "./button";
import Curso from "./curso";
import { scrollPercentage } from "./store";

export default function CursosSection(props: any) {
	const [hasMounted, setHasMounted] = useState(false);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);

	useEffect(() => {
		if (scrollPos > 0.55) {
			setEnter(true);
		}
	});

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<section
			id="courses"
			className="courses w-full h-auto pt-8 pb-24 col-span-12 flex flex-col gap-12 items-center justify-center leading-8">
			<div className="overflow-hidden">
				<h1
					className={`text-3xl text-[#162330] xl:text-5xl uppercase font-black transition-all ease-in-out duration-[1000ms] ${
						enter ? " translate-y-0 " : " translate-y-10 "
					} `}>
					Cursos Disponibles
				</h1>
			</div>
			<div className="flex flex-col gap-20 items-center ">
				<div className="cursos flex flex-col xl:flex-row gap-6 xl:gap-8">
					{hasMounted &&
						props.lista
							.slice(0, 3)
							.map((c: any, index: number) => (
								<>
								<Curso
									appear={enter}
									delay={index}
									iframe={
										" h-56 lg:h-[640px] xl:h-[280px] brightness-75 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700 "
									}
									key={c.id}
									url={c.acf.video_thumbnail}
									title={c.title.rendered}
									excerpt={c.excerpt.rendered}
									slug={c.slug}
								/>
								{/* {console.log(index)} */}
								</>
							))}
				</div>
				<Button
					isVisible={true}
					type={"button"}
					text={"MÁS CURSOS"}
					link={"/cursos"}
					download={true}
				/>
			</div>
		</section>
	);
}
