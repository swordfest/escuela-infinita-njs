export default function Logo(props:any) {
	return (
		<div className={(" logo w-auto h-full bg-transparent flex items-center transition-all ") + (props.width)}>
			<img alt="logo" src={"/logo.svg"} />
		</div>
	);
}
