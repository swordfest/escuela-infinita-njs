import { useEffect, useRef, useState } from "react";
import Button from "./button";

export default function DownloadBookBar(props: any) {
    const [enter, setEnter] = useState(false)

	useEffect(() => {
	  if (props.appear > 0.07) {
		setEnter(true)
	  }
	})
	

	return (
		// relative w-screen h-auto xl:h-32 right-1/2 left-1/2 mr-[-50vw] ml-[-50vw]
		<div className="download-book bg-gradient-to-b from-[#D9D6CC] to-[#FFFCF1] col-span-12 flex items-center justify-center text-white">
			<div className={("container h-auto xl:h-40 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 p-4 opacity-0 translate-y-4 transition-all duration-200 ") + (enter && 'opacity-100 -translate-y-1')}>
				<Button
					text={"DESCARGAR LIBRO - PDF"}
					type={"button"}
					link={"#"}
                    isVisible={enter}
                    delay={'100'}
				/>

				<Button
					text={"DESCARGAR LIBRO - EPUB"}
					type={"button"}
					link={"#"}
                    isVisible={enter}
                    delay={'300'}
				/>
				
				<Button
					text={"DESCARGAR LIBRO - CAPITULOS"}
					type={"menu"}
					link={"#"}
                    isVisible={enter}
                    delay={'500'}
				/>
			</div>
		</div>
	);
}
