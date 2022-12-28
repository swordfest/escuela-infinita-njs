import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { menuMobileOpen } from "./store";
import { Link, animateScroll } from "react-scroll";


export default function MenuItem (props: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(menuMobileOpen);
    const [section, setSection] = useState(0)

    // useEffect(() => {
    //     setSection(document.querySelector(props.section)?.getBoundingClientRect().top)
    //     console.log(section)
    // },[])

    // window.scrollTo({
    //     left: x,
    //     top: y,
    //     behavior: 'smooth'
    //   });

    return (
        <div className=" w-auto h-auto flex items-center font-semibold select-none  ">
            {/* <a className="w-auto h-full " href={props.link} onClick={() => setMobileMenuOpen(false)} >{props.name}</a> */}
            <Link className=" relative w-auto h-6 cursor-pointer after:block after:w-32 after:h-[3px] after:absolute overflow-hidden after:transition-transform after:bottom-0 after:-left-32 after:bg-black hover:after:translate-x-32 after:duration-300  " activeClass="visited:underline visited:underline-offset-4 visited:decoration-[3px]" to={props.link} spy={true} smooth={true} offset={props.offset} duration={50} onClick={() => setMobileMenuOpen(false)} >{props.name}</Link>
        </div>
        // window.scrollTo({top: section, behavior: "smooth"});
    )
}