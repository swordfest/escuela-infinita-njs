import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Meta } from "../components/meta";
import Navbar from "../components/navbar";
import Header from "../components/header";
import DownloadBook from "../components/downloadBookBar";
import VideosSection from "../components/videosSection";
import useSWR from 'swr'
import Sumario from "../components/sumarioSection";
import Cursos from "../components/cursosSection";
import Autors from "../components/autorsSection";
import Sponsors from "../components/sponsorsSection";
import Footer from "../components/footer";
import Reviews from "../components/reviewsSection";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const fetcher = (...args: [any, any]) => fetch(...args).then((res) => res.json())
  const { data: posts, error } = useSWR('http://localhost/wordpress/wp-json/wp/v2/posts', fetcher)

  // if (error) {
  //   return <>Error!</>
  // }

  // if (!posts) {
  //   return <>Loading...</>
  // }

  // useEffect(() => {
  //   document.querySelector('html')?.classList.add('scroll-smooth')
  // })

  return (
    <>
      <Meta />
      <Navbar />
      <main className="container grid grid-cols-12 auto-rows-auto mx-auto w-full h-auto">
        <Header />
        <DownloadBook />
        <Sumario />
        <Reviews />
        <Autors />
        <Cursos />
        <VideosSection />
        <Sponsors />
        <Footer />
      </main>
    </>
  );
}
