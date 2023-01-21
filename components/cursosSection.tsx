import { useEffect, useState } from "react";
import Button from "./button";
import Curso from "./curso";

export default function CursosSection(props: any) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<section
			id="courses"
			className="courses w-full h-auto pt-8 pb-24 col-span-12 flex flex-col gap-8 items-center justify-center leading-8">
			<h1 className="text-3xl xl:text-5xl uppercase font-black ">
				Cursos Disponibles
			</h1>
			<div className="cursos flex flex-col xl:flex-row gap-6 xl:gap-8">
				{hasMounted &&
					props.lista
						.slice(0, 3)
						.map((c: any) => (
							<Curso
								iframe={
									" h-56 lg:h-[640px] xl:h-[280px] brightness-75 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700 "
								}
								key={c.id}
								link={c.slug}
								url={c.acf.video_thumbnail}
								title={c.title.rendered}
								excerpt={c.excerpt.rendered}
							/>
						))}
			</div>
			<Button
				isVisible={true}
				type={"button"}
				text={"MAS CURSOS"}
				link={"/cursos"}
			/>
		</section>
	);
}
