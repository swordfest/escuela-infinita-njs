import Image from "next/image";

export default function Slide(props: any) {
	return (
		<Image
			placeholder="blur"
			blurDataURL="/imgs/reviews.jpg"
			fill
			className="object-cover animate-fadeIn"
			src={props.data?.better_featured_image.source_url}
			alt={"books"}
		/>
	);
}
