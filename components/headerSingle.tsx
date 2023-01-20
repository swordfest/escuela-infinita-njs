import Image from "next/image";
import Link from "next/link";

export default function HeaderSingle(props: any) {
	return (
		<div className="relative w-full h-[292px] bg-gradient-to-tr from-[#162330] to-[#23374b]">
			{/* <Image src={'/imgs/header-single.svg'} fill alt='Header Single Page' /> */}
			<div className="container relative lg:static h-full mx-auto flex items-center justify-center lg:justify-between">
				<div className="absolute lg:relative w-[720px] h-full opacity-20 lg:opacity-100 ">
					<Image src={"/imgs/heads.svg"} fill alt="Header Single Page" />
				</div>
				<div className=" flex flex-col items-center lg:items-end gap-4 px-4 lg:px-0 text-white text-lg">
					<div className="text-4xl w-full text-white font-semibold text-center lg:text-right">{props.title}</div>
					<div className="flex gap-2">
						<Link href={"/"}>Home</Link>
						<div>{"»"}</div>
						<Link className="capitalize" href={`/${props.page}`}>{props.page}</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
