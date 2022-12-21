export default function Logo(props:any) {
	return (
		<div className={(" logo w-auto h-full bg-slate-500 flex items-center transition-all ") + (props.width)}>
			<img alt="logo" src={"/logo.svg"} />
		</div>
	);
}
