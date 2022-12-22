import Link from "next/link";
import { useState, useRef } from "react";
import { useOutsideClick } from "./functions";




export default function ButtonDownload(props: any) {
    const [open, setOpen] = useState(false)

    const handleClickOutside = () => {
        setOpen(false)
    }

    const ref = useOutsideClick(handleClickOutside)

    if (props.type === 'button') {
        return (
            <button name="Descarga" className=" w-60 h-14 bg-[#174563] flex items-center justify-center transition-all hover:bg-[#143c57] active:bg-[#194c6e]" >
                <Link href={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    if (props.type === 'menu') {
        return (
            <div onClick={()=> setOpen(!open)} title="Descargar Capitulos" className=" relative w-auto h-14 bg-[#174563] hover:bg-[#143c57] flex items-center justify-center px-4 cursor-pointer " >
                <span className=" w-full h-auto flex gap-4">
                    {props.text}
                    <svg className={("fill-white transition-transform ") + (open && 'rotate-180')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </span>
                <ul ref={ref} className={("menu absolute w-full h-auto top-14 bg-[#174563] flex flex-col items-center justify-start transition-transform  ") + (open ? '' : 'hidden')}>
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#174563] transition-all hover:bg-[#143c57]">Capitulo 1</li>                    
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#174563] transition-all hover:bg-[#143c57]">Capitulo 2</li>                    
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#174563] transition-all hover:bg-[#143c57]">Capitulo 3</li>                    
                    <li className=" w-full h-14 flex items-center justify-start px-4 bg-[#174563] transition-all hover:bg-[#143c57]">Capitulo 4</li>                    
                </ul>
            </div>
        )
    }

    return <>Especifica el tipo</>
}