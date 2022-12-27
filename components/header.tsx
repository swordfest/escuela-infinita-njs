import Image from "next/image";

export default function Header() {
	return (
		<header className="header relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-96 xl:h-auto col-span-12 flex items-center justify-center">
			{/* <img
				className=" object-cover w-full h-[1084px]"
				src={"https://images.unsplash.com/photo-1508169351866-777fc0047ac5"}
				alt="book opened"
			/> */}
            {/* <Image placeholder="blur" blurDataURL="/imgs/header.jpg" fill style={{objectFit:"cover", width: '100%', height: '100%'}} src={"/imgs/header.jpg"} alt={"header"}/> */}
            {/* <Image placeholder="blur" blurDataURL="/imgs/reviews.jpg" fill style={{objectFit:"cover", width: '100%', height: '100%'}} src={"/imgs/reviews.jpg"} alt={"books"}/> */}
			<img className="w-full h-full object-cover " src="/imgs/header.jpg" alt="header" />
		</header>
	);
}
