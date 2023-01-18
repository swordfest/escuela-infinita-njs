import { useRecoilState } from "recoil";
import Dot from "./dot";
import { itemsSlider, postsList, slideCurrent } from "./store";


export default function Dots () {
    // const { slidesCount, posts } = useContext(SliderContext);
    const [items, setItems] = useRecoilState(itemsSlider);
	const [slide, setSlide] = useRecoilState(slideCurrent);
    const [posts, setPosts] = useRecoilState(postsList)

    return (
        <div className=" flex gap-4">
            {
                posts.map((p: any, index: number) => (
                    <Dot id={p.id} number={index} />
                ))
            }
        </div>
    )
}
