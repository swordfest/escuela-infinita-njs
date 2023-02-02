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
import {
	cursosList,
	mediaList,
	postsList,
	reviewsList,
	scrollPercentage,
} from "../components/store";
import SumarioTesting from "../components/sumarioSectionTesting";
import Contact from "../components/contact";
import { useRouter } from "next/router";
// const inter = Inter({ subsets: ["latin"] });
// const archivo = Archivo({ subsets: ["latin"] });

export async function getStaticProps() {
	const data = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/cursos?_embed`
	);
	const cursos = await data.json();

	const dataReviews = await fetch(
		`https://apiei.aprendiendo.cu/wp-json/wp/v2/resenas`
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
	// const [posts, setPosts] = useRecoilState(postsList);
	const [reviews, setReviews] = useRecoilState(reviewsList);
	// const [media, setMedia] = useRecoilState(mediaList);
	const [cursos, setCursos] = useRecoilState(cursosList);

	const router = useRouter();

	const [hasMounted, setHasMounted] = useState(false);

	// const hashChanger = () => {
	// 	return
	// }

	// const onHashChangeStart = (url: any) => {
	// 	console.log(`Path changing to ${url}`);
	// };

	const handleScroll = () => {
		let scrollPercentage =
			(document.documentElement.scrollTop + document.body.scrollTop) /
			(document.documentElement.scrollHeight -
				document.documentElement.clientHeight);
		setScrollPos(scrollPercentage);
	};

	useEffect(() => {
		window.addEventListener('onload', () => window.scrollTo(0, 0))
		setReviews(props.reviews);
		setCursos(props.cursos);
		console.log(scrollPos);
		window.addEventListener("scroll", handleScroll);
		window.onbeforeunload = () => {
            // window.scrollTo(0, 0);
			// if(window.location.hash != '') {
			// 	window.location.hash = '#'
			// }
			window.removeEventListener("scroll", handleScroll);
			setScrollPos(0)
        }; 
		 
	});

	useEffect(() => {
		if (hasMounted) {
			console.log('Hay un hash', window.location.hash != '');
			window.location.hash = '#'
			
		} else {
			setHasMounted(true);
		}
		// document.addEventListener('hashchange', hashChanger)
	}, [hasMounted]);

	// useEffect(() => {
	// 	// console.log(window.location)

	//     router.events.on("hashChangeStart", onHashChangeStart);
	// 	// return () => {
	//     //     router.events.off("hashChangeStart", onHashChangeStart);
	//     // };
	// }, [router.events]);

	// useEffect(() => {
	// 	const hash = router.asPath.split("#")[1];
	// 	console.log(hash)
	// }, [router.asPath]);



	return (
		<>
			<Meta />
			<Navbar />
			<Header appear={scrollPos} />
			<main
				className={`main-container container scroll-smooth col-span-12 grid grid-cols-12 auto-rows-auto mx-auto mt-8 w-full h-auto px-4 ${""}`}>
				{/* <Header /> */}
				{/* <DownloadBook /> */}
				<SumarioTesting appear={scrollPos} />
				<Reviews />
				<Autors />
				<CursosSection lista={props.cursos} />
				<VideosSection />
				<Contact />
				<Sponsors />
				{/* <Footer /> */}
			</main>
			<Footer animate={true} />
			{/* </main> */}
		</>
	);
}
