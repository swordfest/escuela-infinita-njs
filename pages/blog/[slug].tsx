import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { preload } from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { Meta } from "../../components/meta";

export async function getStaticProps(context: any) {
	const {
		params: { slug },
	} = context;

	const data = await fetch(
		`http://localhost:8000/wp-json/wp/v2/posts?_embed&slug=${slug}`
		// `http://localhost/wordpress/wp-json/wp/v2/posts?_embed&slug=${slug}`
	);

	const result = await data.json();

	const comments = await fetch(
		// `http://localhost/wordpress/wp-json/wp/v2/comments?post=${result[0].id}`
		`http://localhost:8000/wp-json/wp/v2/comments?post=${result[0].id}`
	);

	const resComment = await comments.json();

	return {
		notFound: result.length == 0,
		props: {
			...result[0],
			comments: resComment,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

type Inputs = {
	author_name: string;
	author_email: string;
	content: string;
};

async function sendRequest(url: string, { arg }: any) {
	return fetch(url, {
		method: "POST",
		body: JSON.stringify(arg),
	}).then((res) => res.json());
}

export default function Post(props: any) {
	// const [author, setAuthor] = useState("");
	// const [email, setEmail] = useState("");
	// const [content, setContent] = useState("");
	const [commentData, setCommentData] = useState<Inputs>();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setCommentData(data);
	};

	// ?post=${props.id}
	const { trigger, isMutating } = useSWRMutation(
		`http://localhost:8000/wp-json/wp/v2/comments?post=${props.id}&author_name=${commentData?.author_name}&author_email=${commentData?.author_email}&content=${commentData?.content}`,
		sendRequest,
        { revalidate: true }
	);

	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());
	const { data: comm, error, mutate } = useSWR(
		`http://localhost:8000/wp-json/wp/v2/comments?post=${props.id}`,
		fetcher,
        { revalidateOnFocus: false }
	);

	if (error) <>Error...</>;
	if (!comm) <>Loading...</>;

	useEffect(() => {
		// console.log(props.comments);
		if (commentData != undefined) {
			trigger(commentData);
            reset()
		}
		console.log(commentData);
	}, [commentData]);

    useEffect(()=> {
        if (!isMutating) {
            mutate()
        }
    }, [isMutating])

	return (
		<>
			{/* <Meta title={props.title} /> */}
			{/* <div dangerouslySetInnerHTML={{ __html: props.content.rendered }}></div> */}
			<div>{props.id}</div>
			<div className="comments">
				<div className="lista">
					{comm?.map((c: any) => (
						// <span key={c.id}  >{c.content.rendered}</span>
						<div
							key={c.id}
							dangerouslySetInnerHTML={{ __html: c.content.rendered }}></div>
					))}
				</div>
				<div className="write-comment flex flex-col">
					<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor="autor">Nombre</label>
						<input
							id="autor"
							title="autor"
							type="text"
							placeholder="Escriba su nombre"
							{...register("author_name", { required: true })}
						/>
						{errors.author_name && <span>This field is required</span>}
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="text"
							title="Email"
							placeholder="Escriba su email"
							{...register("author_email", { required: true })}
						/>
						{errors.author_email && <span>This field is required</span>}
						<label htmlFor="comentario">Comentario</label>
						<input
							id="comentario"
							type="text"
							title="comentario"
							placeholder="Escribe el comentario"
							{...register("content", { required: true })}
						/>
						{errors.content && <span>This field is required</span>}
						<input type="submit" />
					</form>
				</div>
			</div>
		</>
	);
}
