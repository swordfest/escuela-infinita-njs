import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { menuMobileOpen } from "./store";


export default function MenuItem (props: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);
    const [section, setSection] = useState(0)

    useEffect(() => {
        setSection(document.querySelector(props.section)?.getBoundingClientRect().top)
        console.log(section)
    },[])

    // window.scrollTo({
    //     left: x,
    //     top: y,
    //     behavior: 'smooth'
    //   });

    return (
        <div className="relative w-auto h-7 flex items-center font-semibold after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300 ">
            <a className="w-auto h-full " onClick={() => {setMobileMenuOpen(false); window.scrollTo({top: section, behavior: "smooth"});}} >{props.name}</a>
        </div>
    )
}