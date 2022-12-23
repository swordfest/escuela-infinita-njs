import Link from "next/link";


export default function MenuItem (props: any) {
    return (
        <div className="relative w-auto h-7 flex items-center font-semibold after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 ">
            <a className="w-auto h-full " href={props.link} >{props.name}</a>
        </div>
    )
}