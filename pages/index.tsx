import Head from "next/head";
import Image from "next/image";
// import { Inter, Archivo } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Meta } from "../components/meta";
import Navbar from "../components/navbar";
import Header from "../components/header";
import DownloadBook from "../components/downloadBookBar";
import VideosSection from "../components/videosSection";
import useSWR from "swr";
import Sumario from "../components/sumarioSection";
// import Cursos from "../components/cursosSection";
import CursosSection from "../components/cursosSection";
import Autors from "../components/autorsSection";
import Sponsors from "../components/sponsorsSection";
import Footer from "../components/footer";
import Reviews from "../components/reviewsSection";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cursosList, mediaList, postsList, reviewsList, scrollPercentage } from "../components/store";
import SumarioTesting from "../components/sumarioSectionTesting";
import ReviewsTesting from "../components/reviewsSectionTesting";

// const inter = Inter({ subsets: ["latin"] });
// const archivo = Archivo({ subsets: ["latin"] });

export async function getStaticProps() {
	const data = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/cursos?_embed`
	);
	const cursos = await data.json();

	const dataReviews = await fetch(
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/resenas?_embed`
	);
	const reviews = await dataReviews.json();

	return {
		props: {
			cursos,
			reviews,
		},
	};
}

export default function Home(props: any) {
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [posts, setPosts] = useRecoilState(postsList);
	const [reviews, setReviews] = useRecoilState(reviewsList);
	const [media, setMedia] = useRecoilState(mediaList);
	const [cursos, setCursos] = useRecoilState(cursosList);

	// const [hasMounted, setHasMounted] = useState(false);
	
	useEffect(() => {
		setReviews(props.reviews)
		setCursos(props.cursos)
		console.log(scrollPos)
		window.addEventListener("scroll", handleScroll);
	});

	const handleScroll = () => {
		let scrollPercentage =
			(document.documentElement.scrollTop + document.body.scrollTop) /
			(document.documentElement.scrollHeight -
				document.documentElement.clientHeight);
		setScrollPos(scrollPercentage);
	};

	return (
		<>
			<Meta />
			<Navbar />
			<Header appear={scrollPos} />
			<main className={`container col-span-12 grid grid-cols-12 auto-rows-auto mx-auto mt-8 w-full h-auto ${''}`}>
				{/* <Header /> */}
				{/* <DownloadBook /> */}
				<SumarioTesting appear={scrollPos} />
				<ReviewsTesting />
				<Autors />
				<CursosSection lista={props.cursos} />
				<VideosSection />
				<Sponsors />
				{/* <Footer /> */}
			</main>
			<Footer />
			{/* </main> */}
		</>
	);
}
