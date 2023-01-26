import Image from "next/image";
import Link from "next/link";

export default function HeaderSingle(props: any) {
	return (
		<div className="relative w-full h-[292px] bg-gradient-to-tr from-[#162330] to-[#23374b]">
			{/* <Image src={'/imgs/header-single.svg'} fill alt='Header Single Page' /> */}
			<div className="absolute w-[1024px] h-full opacity-20 lg:opacity-100 ">
				<Image
					className="object-cover"
					src={"/imgs/arte1.svg"}
					fill
					alt="Header Single Page"
				/>
			</div>
			<div className="container w-full h-full mx-auto flex flex-col items-end justify-center gap-4  ">
				{/* -left-0 xl:-left-12 2xl:-left-48 */}
				<div className="text-4xl w-full text-white font-semibold text-center lg:text-right">
					{props.title}
				</div>
				<div className="flex gap-2">
					<Link className="flex group " href={"/"}>
						{/* <svg
							xmlns="http://www.w3.org/2000/svg"
							className=" group-hover:-translate-x-1 fill-white transition-all duration-200 "
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"></path>
							<path d="M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path>
						</svg> */}
						<span className="text-white h-6 text-lg align-middle leading-5 group-hover:underline group-hover:underline-offset-[5px] ">Home</span>
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
