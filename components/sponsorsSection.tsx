export default function Sponsors() {
	return (
		<section
			id="sponsors"
			className="sponsors w-full h-auto col-span-12 flex flex-col gap-4 xl:gap-12 items-center justify-center my-8 xl:my-20">
			<div className="flex flex-col gap-16 my-10 items-center justify-center ">
				<h1 className="text-3xl xl:text-5xl uppercase font-black ">Casa Editorial</h1>
				<img
					className=" w-40 xl:w-80 h-auto"
					src="/imgs/logo-editorial.svg"
					alt="Logo Editorial Pueblo y Educación"
				/>
			</div>
            <div className="flex flex-col gap-16 xl:my-10 items-center justify-center ">
				<h2 className=" text-xl xl:text-3xl uppercase font-black ">
					Con la colaboración de
				</h2>
				<div className=" flex flex-col xl:flex-row items-center justify-center gap-12 ">
					<img
						className="w-40 h-auto"
						src="/imgs/logo-dte.svg"
						alt="Logo Editorial Pueblo y Educación"
					/>
					<img
						className="w-72 h-auto"
						src="/imgs/logo-mined.svg"
						alt="Logo Editorial Pueblo y Educación"
					/>
					<img
						className="w-32 h-auto mix-blend-multiply "
						src="/imgs/logo-cresp.svg"
						alt="Logo Editorial Pueblo y Educación"
					/>
				</div>
			</div>
		</section>
	);
}
