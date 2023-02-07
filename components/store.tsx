import { atom, selector } from "recoil";

export const menuMobileOpen = atom({
	key: "menuMobileOpen",
	default: false,
});

export const scrollPercentage = atom({
	key: "scrollPercentage",
	default: 0,
});

export const itemsSlider = atom({
	key: "itemsSlider",
	default: [],
});

export const slideCurrent = atom({
	key: "slideCurrent",
	default: 0,
});

export const postsList = atom({
	key: "postsList",
	default: [],
});

export const reviewsList = atom({
	key: "reviewsList",
	default: [],
});

export const mediaList = atom({
	key: "mediaList",
	default: [],
});

export const cursosList = atom({
	key: "cursosList",
	default: [],
});

// const goToSlide = (number: number) => {
//     setSlide(number % props.posts.length);
// };

export const optionsOpenGraph = {
	title: "La Escuela Infinita. Aprender y enseñar en entornos ubicuos",
	description:
		"La Escuela Infinita propone bases para un nuevo modelo de escolarización universal y explica cómo aprender y enseñar de forma híbrida en el siglo XXI. Desde planteamientos disruptivos crea su relato a través de seis metáforas claves: la escuela vista como una conversación transmedial, como abundancia, como ubicuidad líquida, como totalidad que integra múltiples relaciones, como espacio invisible y como una comunidad conectada.",
	type: "book",
	book: {
		releaseDate: "2023-01-31T09:30:00Z",
		isbn: "978-959-13-4462-5",
		authors: [
			"https://orcid.org/0000-0002-6339-7047",
			"https://orcid.org/0000-0002-1995-0239",
			"https://orcid.org/0000-0002-9006-0087",
		],
		tags: [
			"educación",
			"aprendizaje",
			"entornos ubicuos",
			"libro",
			"tecnología",
			"transmedia",
			"disruptivo",
			"espacio invisible",
			"comunidad conectada",
		],
	},
	images: [
		{
			url: "https://laescuelainfinita.aprendiendo.cu/imgs/book.png",
			width: 850,
			height: 650,
			alt: "Cover of the book",
		},
	],
	locale: "es_IE",
	url: "https://laescuelainfinita.aprendiendo.cu",
	siteName: "La Escuela Infinita. Aprender y enseñar en entornos ubicuos",
};

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
