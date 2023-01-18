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
// import Cursos from "../components/cursosSection";
import CursosSection from "../components/cursosSection";
import Autors from "../components/autorsSection";
import Sponsors from "../components/sponsorsSection";
import Footer from "../components/footer";
import Reviews from "../components/reviewsSection";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { postsList, scrollPercentage } from "../components/store";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
	const data = await fetch(
		`http://localhost/wordpress/wp-json/wp/v2/courses`
	);
	const cursos = await data.json();

	const dataPosts = await fetch(
		`http://localhost/wordpress/wp-json/wp/v2/posts?_embed`
	);
	const posts = await dataPosts.json();

	return {
		props: {
			cursos,
			posts,
		},
	};
}

export default function Home(props: any) {
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [posts, setPosts] = useRecoilState(postsList);

	// const [hasMounted, setHasMounted] = useState(false);
	
	useEffect(() => {
		setPosts(props.posts)
		window.addEventListener("scroll", () => handleScroll);
		return window.removeEventListener("scroll", () => handleScroll);
	});

	const handleScroll = () => {
		let scrollPercentage =
			(document.documentElement.scrollTop + document.body.scrollTop) /
			(document.documentElement.scrollHeight -
				document.documentElement.clientHeight);
		setScrollPos(scrollPercentage);
		console.log(scrollPos);
	};

	return (
		<>
			<Meta />
			<Navbar />
			<Header appear={scrollPos} />
			<main className="container col-span-12 grid grid-cols-12 auto-rows-auto mx-auto px-4 xl:px-0 mt-8 w-full h-auto">
				{/* <Header /> */}
				{/* <DownloadBook /> */}
				<Sumario appear={scrollPos} />
				<Reviews posts={props.posts} />
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
