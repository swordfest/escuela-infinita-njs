import { useRecoilState } from "recoil";
import { slideCurrent } from "./store";


export default function Dot(props: any) {
    const [slide, setSlide] = useRecoilState(slideCurrent)
	return (
		<div
			key={props.id}
			className={`w-4 h-4 border-2 cursor-pointer transition-all border-white rounded-full ${slide === props.number ? 'bg-white' : 'bg-transparent'}`}
            onClick={()=> setSlide(props.number)}></div>
	);
}
