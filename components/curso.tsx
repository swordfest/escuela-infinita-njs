import Link from "next/link";
import { useState } from "react";

export default function Curso(props: any) {
    const [transition, setTransition] = useState('')

    // const handleLeave = () => {
    //     setTransition('group-hover:scale-100 group-hover:transition-all group-hover:duration-700')
    // }

    // const handleEnter = () => {
    //     setTransition('group-hover:scale-[1.02] group-hover:transition-all group-hover:duration-700')
    // }
    // onMouseEnter={() => handleEnter()} onMouseLeave={() => handleLeave()}

	return (
		<Link href={`#curso`}>
			<div id="curso" className="w-full h-auto flex flex-col gap-4 group ">
                <div className={"img-wrapper w-full h-auto overflow-hidden "}>
				<img className={("w-full h-auto group-hover:scale-105 group:ease-in-out group-hover:transition-all group-hover:duration-700 " ) + (transition)}src={props.url} alt={props.descp} />
                </div>
				<h2 className=" text-xl font-bold ">{props.title}</h2>
				<p>{props.excerpt}</p>
			</div>
		</Link>
	);
}
