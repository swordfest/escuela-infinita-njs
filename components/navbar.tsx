import { useEffect, useState } from "react";
import Logo from "./logo";
import MenuNavbar from "./menu";


export default function Navbar (props: any) {
    // const [scrolled, setScrolled] = useState('h-24')
    const [scrolled, setScrolled] = useState('h-24')
    const [scrolledLogo, setScrolledLogo] = useState(' origin-left scale-100 ')


    useEffect(() => {
        let prevScrollpos = window.scrollY
        window.onscroll = () => {
            let currentScrollpos = window.scrollY
            if (prevScrollpos > currentScrollpos) {
                setScrolled('h-24')
                // setScrolled('top-0')
                setScrolledLogo('origin-left scale-100')
            } else {
                setScrolled('h-20')
                setScrolledLogo(' origin-left scale-[0.9] ')
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
        <nav className={("navbar fixed top-0 w-full bg-slate-400 shadow-lg transition-all ") + (scrolled)}>
            <div className="nav-wrapper container w-full h-full mx-auto bg-slate-300 flex items-center justify-between ">
                <Logo width={scrolledLogo}/>
                <MenuNavbar/>
            </div>
        </nav>
    )
}