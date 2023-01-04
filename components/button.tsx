import Link from "next/link";
import { useState, useRef } from "react";
import { useOutsideClick } from "./functions";




export default function Button(props: any) {
    const [open, setOpen] = useState(false)
    const [delay, setDelay] = useState(' delay-[' + props.delay + '] ')
    // const [isVisible, setIsVisible] = useState(false)

    const handleClickOutside = () => {
        setOpen(false)
    }

    const ref = useOutsideClick(handleClickOutside)

    if (props.type === 'button') {
        return (
            <button name="Descarga" className={(" w-full xl:w-60 h-14 bg-[#98CCA5] text-white select-none flex items-center justify-center opacity-0 transition-all duration-200 hover:bg-[#a5dfb4] active:bg-[#85b390] -translate-x-4 ") + delay + (props.isVisible && ('translate-x-0  opacity-100 ')) } >
                <Link className="text-[#0d2636] font-semibold" href={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    if (props.type === 'menu') {
        return (
            <div ref={ref} onClick={()=> setOpen(!open)} title="Descargar Capitulos" className={("relative w-full xl:w-auto h-14 bg-[#98CCA5] hover:bg-[#a5dfb4] select-none flex items-center justify-between xl:justify-center opacity-0 transition-all duration-200 -translate-x-4  cursor-pointer") + (' delay-' + props.delay) + (props.isVisible && (' translate-x-0 opacity-100 delay-' + props.delay))} >
                <span className=" w-full h-auto flex justify-between px-4 xl:justify-start gap-4 text-[#0d2636] font-semibold">
                    {props.text}
                    <svg className={("fill-[#0d2636] transition-transform ") + (open && 'rotate-180')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </span>

                <ul className={("menu absolute w-full h-auto top-14 bg-[#98CCA5] text-[#0d2636] font-semibold flex flex-col items-center justify-start transition-transform  ") + (open ? '' : 'hidden')}>
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">Capitulo 1</li>                    
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">Capitulo 2</li>                    
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">Capitulo 3</li>                    
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#98CCA5] transition-all hover:bg-[#85b390]">Capitulo 4</li>                    
                </ul>
            </div>
        )
    }
    if (props.type === 'slider') {
        return (
            <button title="slide-button" name="Descarga" className={(" absolute z-[1] w-10 h-10 bg-[#174563] hover:scale-105 select-none flex items-center justify-center transition-all hover:bg-[#143c57] active:bg-[#194c6e] ") + (props.side === 'left' ? '-left-12 top-[40%] ' : '') + (props.side === 'right' ? '-right-12 top-[40%] ' : '')} >
                <svg className={props.side === 'left' ? 'fill-white' : 'hidden'} width="36" height="36" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                <svg className={props.side === 'right' ? 'fill-white' : 'hidden'} width="36" height="36" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            </button>
        )
    }

    return <>Especifica el tipo</>
}