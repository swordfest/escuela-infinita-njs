import Image from "next/image";

export default function Thumbnail(props: any) {
	return (
		<div onClick={() => props.handleClick(props.id)} className="relative w-auto h-auto group ">
			<Image
				// onClick={() => props.handleClick(props.id)}
				className="flex px-2 overflow-hidden brightness-75 group-hover:brightness-100 transition-all group-hover:scale-[1.02]"
				key={props.id}
				src={props.url}
				alt={"aaa"}
				width={"640"}
				height={"360"}
			/>
			<svg
				// onClick={() => props.handleClick(props.id)}
				className="absolute fill-red-600 overflow-hidden top-0 left-0 bottom-0 right-0 m-auto opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 duration-500"
				width="72"
				height="72"
				viewBox="0 0 72 72"
				>
				<path
					d="M64.779 21.609C64.4373 20.3412 63.7695 19.185 62.8421 18.2555C61.9147 17.326 60.76 16.6556 59.493 16.311C54.795 15.021 36 15 36 15C36 15 17.208 14.979 12.507 16.212C11.2408 16.5725 10.0885 17.2524 9.16071 18.1864C8.23294 19.1205 7.56087 20.2774 7.20901 21.546C5.97001 26.244 5.95801 35.988 5.95801 35.988C5.95801 35.988 5.94601 45.78 7.17601 50.43C7.86601 53.001 9.89101 55.032 12.465 55.725C17.211 57.015 35.955 57.036 35.955 57.036C35.955 57.036 54.75 57.057 59.448 55.827C60.7155 55.483 61.8713 54.8142 62.801 53.8866C63.7307 52.9589 64.4022 51.8047 64.749 50.538C65.991 45.843 66 36.102 66 36.102C66 36.102 66.06 26.307 64.779 21.609Z"
					fill="#FF0202"
				/>
				<path
					d="M30.003 27.015L29.988 45.015L45.624 36.03L30.003 27.015Z"
					fill="white"
				/>
			</svg>
		</div>
	);
}
