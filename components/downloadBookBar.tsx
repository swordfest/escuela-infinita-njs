import { useEffect, useRef, useState } from "react";
import Button from "./button";

export default function DownloadBookBar() {
    const [enter, setEnter] = useState(false)
	const [winHeight, setWinHeight] = useState(0)
    const section = useRef<HTMLDivElement>(null)
    const [top, setTop] = useState(0)
    const [reveal, setReveal] = useState(130)
    // const [flag, setFlag] = useState(false)

    // const handleScroll = (event: any) => {

	// 	console.log(event.currentTarget.scrollTop)
    //     // console.log(winHeight)
    //     // console.log(enter)
    //     // setEnter(true)
    // }

	// useEffect(() => {
    //     // setTop(section.current?.getBoundingClientRect().top!)
    //     // setTop(document.querySelector('.sumario')?.getBoundingClientRect().top!)
    //     // setWinHeight(window.innerHeight)
        
    // })

	return (
		<div className="download-book relative w-screen h-32 right-1/2 left-1/2 mr-[-50vw] ml-[-50vw] bg-gradient-to-b from-[#D9D6CC] to-[#FFFCF1] col-span-12 flex items-center justify-center text-white">
			<div className="container h-full mx-auto flex items-center justify-center gap-6 ">
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
