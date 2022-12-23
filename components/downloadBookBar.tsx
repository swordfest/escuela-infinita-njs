import Button from "./button";

export default function DownloadBookBar() {
	return (
		<div className="download-book relative w-screen h-32 right-1/2 left-1/2 mr-[-50vw] ml-[-50vw] bg-gradient-to-b from-[#D9D6CC] to-[#FFFCF1] col-span-12 flex items-center justify-center text-white">
			<div className="container h-full mx-auto flex items-center justify-center gap-6 ">
				<Button
					text={"DESCARGAR LIBRO - PDF"}
					type={"button"}
					link={"#"}
				/>
				<Button
					text={"DESCARGAR LIBRO - EPUB"}
					type={"button"}
					link={"#"}
				/>
				<Button
					text={"DESCARGAR LIBRO - CAPITULOS"}
					type={"menu"}
					link={"#"}
				/>
			</div>
		</div>
	);
}
