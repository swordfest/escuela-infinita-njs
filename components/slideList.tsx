import { useRecoilState } from "recoil";
import Slide from "./slide";
import { itemsSlider, postsList, slideCurrent } from "./store";

export default function SlideList() {
	const [items, setItems] = useRecoilState(itemsSlider);
	const [slide, setSlide] = useRecoilState(slideCurrent);
	const [posts, setPosts] = useRecoilState(postsList);

	return (
		<div
			className={` relative w-full h-full flex transition-all brightness-50 `}>
			<Slide key={slide} data={posts[slide]} />
			<Slide key={slide} data={posts[slide]} />
		</div>
	);
}
