export default function Autor(props: any) {
	return (
		<div className="autor flex flex-col gap-4">
			<img src={props.url} alt="Autor" />
			<h2 className=" font-bold text-[#162330] ">{props.name}</h2>
			<p className="leading-8">{props.resume}</p>
		</div>
	);
}
