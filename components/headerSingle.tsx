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
			<div className="container w-full h-full mx-auto flex items-center justify-end lg:justify-between  ">
				{/* -left-0 xl:-left-12 2xl:-left-48 */}
				<div className="text-4xl w-full text-white font-semibold text-center lg:text-right">
					{props.title}
				</div>
				<div className="flex gap-2">
					<Link href={"/"}>Home</Link>
					<div>{"»"}</div>
					<Link className="capitalize" href={`/${props.page}`}>
						{props.page}
					</Link>
				</div>
			</div>
		</div>
	);
}
