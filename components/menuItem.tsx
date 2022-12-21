import Link from "next/link";


export default function MenuItem (props: any) {
    return (
        <div className="relative w-auto h-7 flex items-center font-semibold after:block after:w-24 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-24 after:bg-black hover:after:translate-x-24 after:duration-300 ">
            <Link className="w-auto h-full" href={'#'}>{props.name}</Link>
        </div>
    )
}