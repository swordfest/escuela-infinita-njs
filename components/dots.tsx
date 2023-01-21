import { useRecoilState } from "recoil";
import Dot from "./dot";
import { itemsSlider, postsList, reviewsList, slideCurrent } from "./store";


export default function Dots () {
    // const { slidesCount, posts } = useContext(SliderContext);
    const [items, setItems] = useRecoilState(itemsSlider);
	const [slide, setSlide] = useRecoilState(slideCurrent);
    const [posts, setPosts] = useRecoilState(postsList)
	const [reviews, setReviews] = useRecoilState(reviewsList);


    return (
        <div className=" flex gap-4 ">
            {
                reviews.map((p: any, index: number) => (
                    <Dot key={index} id={p.id} number={index} />
                ))
            }
        </div>
    )
}
