import { useEffect, useState } from "react";
import Logo from "./logo";
import MenuNavbar from "./menu";


export default function Navbar (props: any) {
    // const [scrolled, setScrolled] = useState('h-24')
    const [scrolled, setScrolled] = useState('h-20 text-[14px]')
    const [scrolledLogo, setScrolledLogo] = useState(' origin-left scale-100 text-normal ')


    useEffect(() => {
        let prevScrollpos = window.scrollY
        window.onscroll = () => {
            let currentScrollpos = window.scrollY
            // if (prevScrollpos > currentScrollpos || prevScrollpos == 0) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

                setScrolled('h-24 text-normal')
                // setScrolled('top-0')
                setScrolledLogo('origin-left scale-100 ')
            } else {
                setScrolled('h-20 text-[14px] bg-transparent')
                setScrolledLogo(' origin-left scale-[0.9]  ')
            }
            prevScrollpos = currentScrollpos
            // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            //     setScrolled('h-20')
            // } else {
            //     setScrolled('h-24')
            // }
        }
    })
    

    return (
        <nav className={("navbar fixed top-0 z-[1] w-full bg-white shadow-lg transition-all ") + (scrolled)}>
            <div className="nav-wrapper container 2xl:w-full h-full mx-auto bg-white  flex items-center justify-between ">
                <Logo width={scrolledLogo}/>
                <MenuNavbar/>
            </div>
        </nav>
    )
}