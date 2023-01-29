import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWR, { preload } from "swr";
import { Mensajes } from "./data";
import useSWRMutation from "swr/mutation";
import { useRecoilState } from "recoil";
import { scrollPercentage } from "./store";
import * as yup from "yup";

async function sendRequest(url: string, { arg }: any) {
	return fetch(url, {
		method: "POST",
		redirect: "follow",
		// mode: 'same-origin',
		body: JSON.stringify(arg),
		headers: {
			Authorization: "Basic bWVuc2FqZXM6bWVuc2FqZXM=",
			// 'Accept': '*/*'
			// 'Allow':'*',
			"Content-Type": "application/json; charset=UTF-8",
			// 'X-Content-Type-Options': 'nosniff',
		},
	}).then((res) => res.json());
}

export default function Contact() {
	const [messageData, setMessageData] = useState<Mensajes>();
	const [scrollPos, setScrollPos] = useRecoilState<number>(scrollPercentage);
	const [enter, setEnter] = useState(false);
	const [success, setSuccess] = useState(false);
	const [isSent, setIsSent] = useState(false);

    let schema = yup.object().shape({
        nombre: yup.string().required(),
        correo: yup.string().email().required(),
        texto_mensaje: yup.string().required(),
      });

    schema.isValid({
        nombre:'jimmy',
        email: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/',
        texto_mensaje: 'Texto del mensaje'
    }).then(function (valid) {
        valid; // => true
      });

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Mensajes>();

	const onSubmit: SubmitHandler<Mensajes> = (data) => {
		setMessageData(data);
		setIsSent(true);
		reset();
	};

	const {
		trigger,
		isMutating,
		error,
	} = useSWRMutation(
		`http://laescuelainfinita.aprendiendo.cu/wp-json/wp/v2/mensajes?title=${`Mensaje de `}${
			messageData?.acf.nombre
		}&acf=${messageData?.acf}`,
		sendRequest,
		{ revalidate: true }
	);

	useEffect(() => {
		if (scrollPos > 0.7) {
			setEnter(true);
		}
	});

	useEffect(() => {
		if (!isMutating && !error && isSent) {
			setSuccess(true);
			setIsSent(false);
			setTimeout(() => setSuccess(false), 4500);
		}
	}, [isMutating, error]);

	useEffect(() => {
		// console.log(props.comments);
		if (messageData != undefined) {
			trigger(messageData);
			reset();
		}
	}, [messageData]);

	return (
		<div
			id="contacto"
			className="col-span-12 w-full h-[720px] lg:h-[860px] gap-8 flex flex-col items-center justify-center">
			<div className="overflow-hidden">
				<h1
					className={`text-3xl text-[#162330] xl:text-5xl uppercase font-black transition-all ease-in-out duration-[1000ms] ${
						enter ? " translate-y-0 " : " translate-y-14 "
					} `}>
					Contáctanos
				</h1>
			</div>

			<div className="write-comment w-2/3 flex flex-col gap-8 ">
				<div
					className={`bg-[#f3f0e7] w-full flex items-center justify-center gap-2 font-semibold overflow-hidden transition-all ease-in-out duration-300 ${
						success ? "h-24" : "h-0"
					}`}>
					<svg className="fill-[#73ca8a] w-6 h-6" viewBox="0 0 24 24">
						<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
					</svg>
					Tu mensaje ha sido enviado satisfactoriamente...
				</div>
				<form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
					<label className="font-semibold" htmlFor="autor">
						Nombre *
					</label>
					<input
						id="autor"
						title="autor"
						type="text"
						placeholder="Escriba su nombre"
						className="h-14 p-4 border-2 bg-transparent border-[#476b91] focus:border-[#162330] focus:outline-none"
						{...register("acf.nombre", { required: true })}
					/>
					{errors.acf?.nombre && (
						<span className="text-red-500">Este campo es requerido</span>
					)}
					<label className="font-semibold" htmlFor="email">
						Email *
					</label>
					<input
						id="email"
						type="text"
						title="Email"
                        aria-invalid={errors.acf?.correo ? "true" : "false"}
						className="h-14 p-4 border-2 bg-transparent border-[#476b91] focus:border-[#162330] focus:outline-none"
						placeholder="Escriba su email"
						{...register("acf.correo", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
					/>
					{errors.acf?.correo && (
						<span className="text-red-500">Dirección de correo requerida</span>
					)}
                    
					<label className="font-semibold" htmlFor="comentario">
						Comentario *
					</label>
					<textarea
						id="comentario"
						title="comentario"
						placeholder="Escribe el comentario"
						className="h-48 p-4 border-2 bg-transparent border-[#476b91] focus:border-[#162330] focus:outline-none"
						{...register("acf.texto_mensaje", { required: true })}
					/>
					{errors.acf?.texto_mensaje && (
						<span className="text-red-500">Este campo es requerido</span>
					)}
					<div className="w-full py-4 flex items-center justify-center">
						<input
							className=" w-full lg:w-56 h-14 px-6 text-white cursor-pointer bg-[#174563] hover:bg-[#1e3042] transition-colors"
							type="submit"
							value={"ENVIAR MENSAJE"}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
