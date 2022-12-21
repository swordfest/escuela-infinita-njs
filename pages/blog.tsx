import Link from "next/link";
import { Meta } from "../components/meta";

export default function Cursos() {
    return (
        <>
            <Meta />
            <section className="summary w-full h-[560px] bg-slate-200 col-span-12 flex items-center justify-center gap-8">
                <span>Cursos Disponibles</span>
                
                <Link href={'/'}>Home</Link>
            </section>
        </>
    )
}