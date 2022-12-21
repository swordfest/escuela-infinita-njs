import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Meta } from "../components/meta";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

	return (
		<>
			<Meta />
      <Navbar />
			<div className="container grid grid-cols-12 auto-rows-auto mx-auto w-full h-auto mt-24 bg-slate-200 scroll-smooth">
        <div className="header w-full h-[1084px] bg-slate-500 col-span-12 flex items-center justify-center">Aqui va la imagen del header</div>
        <div className="download-book w-full h-14 bg-slate-700 col-span-12 flex items-center justify-center text-white">Aqui va la descarga de los libros</div>
        <div className="videos w-full h-[860px] bg-slate-300 col-span-12 flex items-center justify-center">Materiales Visuales</div>
        <div className="summary w-full h-[860px] bg-slate-600 col-span-12 flex items-center justify-center">Sintesis y Sumario</div>
        <div className="summary w-full h-[560px] bg-slate-200 col-span-12 flex items-center justify-center">Cursos Disponibles</div>
        <div className="summary w-full h-[560px] bg-slate-400 col-span-12 flex items-center justify-center">Reviews, Noticias y Articulos</div>
        <div className="summary w-full h-[560px] bg-slate-600 col-span-12 flex items-center justify-center">Autores</div>
        <div className="summary w-full h-[560px] bg-slate-300 col-span-12 flex items-center justify-center">Sponsors</div>
        <div className="summary w-full h-32 bg-slate-700 col-span-12 flex items-center justify-center">Footer</div>
      </div>
		</>
	);
}
