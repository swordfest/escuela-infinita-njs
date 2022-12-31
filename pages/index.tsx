import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Meta } from "../components/meta";
import Navbar from "../components/navbar";
import Header from "../components/header";
import DownloadBook from "../components/downloadBookBar";
import VideosSection from "../components/videosSection";
import useSWR from "swr";
import Sumario from "../components/sumarioSection";
import Cursos from "../components/cursosSection";
import Autors from "../components/autorsSection";
import Sponsors from "../components/sponsorsSection";
import Footer from "../components/footer";
import Reviews from "../components/reviewsSection";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "../components/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());
	const { data: posts, error } = useSWR(
		"http://localhost/wordpress/wp-json/wp/v2/posts",
		fetcher
	);
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [hasMounted, setHasMounted] = useState(false);

	// const handleScroll = () => {
	// 	setScrollPos(window.scrollY)
	// 	console.log(scrollPos)
	// }

	useEffect(() => {
		setHasMounted(true);
		window.addEventListener("scroll", handleScroll);
		
	});

	const handleScroll = () => {
		let scrollPercentage =
			(document.documentElement.scrollTop + document.body.scrollTop) /
			(document.documentElement.scrollHeight -
				document.documentElement.clientHeight);
		setScrollPos(scrollPercentage);
		console.log(scrollPos)

		// setScrollPos(scrollPercentage);
	};

	// const handleScroll = () => {
	// 	let scrollPercentage =
	// 		(document.documentElement.scrollTop + document.body.scrollTop) /
	// 		(document.documentElement.scrollHeight -
	// 			document.documentElement.clientHeight);
	// 	setScrollPos(scrollPercentage);
	// 	console.log(scrollPercentage);
	// }

	return (
		<>
			<Meta />
			<Navbar />
			{/* <main className="grid grid-cols-12 auto-rows-auto mx-auto w-full h-auto"> */}
			<Header />
			<DownloadBook appear={scrollPos} />
			<main className="container col-span-12 grid grid-cols-12 auto-rows-auto mx-auto px-4 xl:px-0 mt-8 w-full h-auto">
				{/* <Header /> */}
				{/* <DownloadBook /> */}
				<Sumario />
				<Reviews />
				<Autors />
				<Cursos />
				<VideosSection />
				<Sponsors />
				{/* <Footer /> */}
			</main>
			<Footer />
			{/* </main> */}
		</>
	);
}
