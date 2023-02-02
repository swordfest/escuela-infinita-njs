import Image from "next/image";
import Link from "next/link";

export default function HeaderSingle(props: any) {
	return (
		<div className="relative w-full h-[292px] bg-gradient-to-tr from-[#162330] to-[#23374b]">
			{/* <Image src={'/imgs/header-single.svg'} fill alt='Header Single Page' /> */}
			<div className="absolute left-0 top-0 w-[1024px] h-full opacity-20 lg:opacity-100 ">
				<Image
					className="object-cover"
					src={"/imgs/arte1.svg"}
					fill
					alt="Header Single Page"
				/>
			</div>
			<div className="container z-[1] relative w-full h-full mx-auto flex flex-col items-center lg:items-end  justify-center gap-4 text-center  ">
				{/* -left-0 xl:-left-12 2xl:-left-48 */}
				<div className="text-4xl text-white font-semibold text-center lg:text-right">
					{props.title}
				</div>
				<div
					className={`text-4xl text-white font-semibold  ${
						props.isBlog ? "" : "hidden"
					}`}>
					{props.page}
				</div>
				<div className="flex gap-2">
					<Link
						className=" bg group text-center text-white h-6 text-lg align-middle leading-5 hover:underline hover:underline-offset-[5px] "
						href={"/"}>
						{/* <div className="text-white h-6 text-lg align-middle leading-5 group-hover:underline group-hover:underline-offset-[5px] "> */}
						Home
						{/* </div> */}
					</Link>
					{/* <div>{"»"}</div> */}
					{/* <Link className="capitalize" href={`/${props.page}`}>
						{props.page}
					</Link> */}
				</div>
			</div>
		</div>
	);
}
