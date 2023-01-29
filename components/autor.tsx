import Image from "next/image";
import Link from "next/link";

export default function Autor(props: any) {
	return (
		<div className={`autor w-full h-full flex flex-col gap-4 `}>
			{/* ${props.appear ? " opacity-100 translate-y-0 " : " opacity-0 translate-y-10 "} */}
			{/* <img src={props.url} alt="Autor" /> */}
			<div className={`overflow-hidden relative w-full `}>
				<div
					className={`relative bg-slate-200 w-full h-[540px] flex origin-bottom transition-all ease-in-out duration-[1200ms] ${
						props.delay
					} ${props.appear ? " translate-y-0 " : " translate-y-[589px] "} `}>
					<Image
						className={`w-full h-full object-cover object-top hover:scale-[1.03] hover:brightness-100 transition-all ease-in-out duration-500 brightness-90 ${props.adjustImage}`}
						src={props.url}
						fill
						alt={`Foto de ${props.name}`}
					/>
				</div>
			</div>

			<div className=" h-28  flex flex-col gap-2">
				<div className="flex flex-col">
					<div className="overflow-hidden">
						<h2
							className={` font-bold text-[#162330] transition-all ease-in-out delay-[1200ms] duration-1000 ${props.appear ? "translate-y-0 " : "translate-y-8 "} `}>
							{props.name}
						</h2>
					</div>
					<div className="overflow-hidden">
						<p
							className={`text-[#7a7a7a] transition-all ease-in-out delay-[1500ms] duration-1000 ${props.appear ? "translate-y-0 " : "translate-y-14 "} `}>
							{props.institucion}
						</p>
					</div>
				</div>
				<div className="redes flex items-center gap-2">
					<Link
						className={`hover:-translate-y-0.5 transition-all ease-in-out delay-[2000ms] duration-1000 ${props.appear ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-6 "}`}
						href={props.orcid}
						target={"_blank"}>
						<svg
							className="fill-[#212121] hover:fill-[#A6CE39] transition-colors"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12Z" />
							<path
								d="M8.64164 16.4542H7.43555V8.12622H8.64164V11.8898V16.4542Z"
								fill="white"
							/>
							<path
								d="M10.4111 8.1261H13.6689C16.7703 8.1261 18.1328 10.3267 18.1328 12.2942C18.1328 14.4325 16.4492 16.4619 13.6845 16.4619H10.4111V8.1261ZM11.617 15.3811H13.5359C16.2692 15.3811 16.8956 13.3205 16.8956 12.2942C16.8956 10.6222 15.8228 9.20693 13.4734 9.20693H11.6167V15.3811H11.617Z"
								fill="white"
							/>
							<path
								d="M8.82874 6.39222C8.82874 6.82 8.47624 7.1775 8.03763 7.1775C7.59929 7.17778 7.24707 6.81972 7.24707 6.39222C7.24718 6.28869 7.26774 6.18619 7.30757 6.09062C7.3474 5.99505 7.40572 5.90829 7.47918 5.83532C7.55264 5.76235 7.63979 5.70462 7.73562 5.66543C7.83146 5.62623 7.93409 5.60636 8.03763 5.60695C8.47651 5.60695 8.82874 5.96445 8.82874 6.39222Z"
								fill="white"
							/>
						</svg>
					</Link>
					<Link
						className={`hover:-translate-y-0.5 transition-all ease-in-out delay-[2500ms] duration-1000 ${props.appear ? " opacity-100 translate-y-0 " : " opacity-0 translate-y-6 "} `}
						href={props.linkedin}
						target={"_blank"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="fill-[#212121] hover:fill-[#0a66c2] transition-colors"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
						</svg>
					</Link>
					<Link
						className={`hover:-translate-y-0.5 transition-all ease-in-out delay-[3000ms] duration-1000 ${props.appear ? " opacity-100 translate-y-0 " : " opacity-0 translate-y-6 "} `}
						href={props.twitter}
						target={"_blank"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="fill-[#212121] hover:fill-[#1a8cd8] transition-colors"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
