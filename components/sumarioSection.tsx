import { useEffect, useRef, useState } from "react"


export default function Sumario() {

    // const handleScroll = () => {
    //     console.log(top)
    //     if (top < winHeight) {
    //         setFlag(true)
    //     } else {
    //         setFlag(false)
    //     }
    // }

    // useEffect(() => {
    //     // setTop(section.current?.getBoundingClientRect().top!)
    //     setTop(document.querySelector('.sumario')?.getBoundingClientRect().top!)
    //     setWinHeight(window.innerHeight)
    //     // console.log(top)
    //     // console.log(winHeight)
    //     // console.log(flag)
    // },[top])

    return (
        // h-[80vh]
        <section  id="sumario" className="sumario show w-full h-auto col-span-12 gap-8 xl:gap-24 flex flex-col xl:flex-row items-center justify-center pt-8 pb-24 ">
            <div className={"w-full h-full flex flex-col items-center xl:items-start gap-4 text-justify leading-8 transition-all"}>
            {/* translate-y-10 */}
                <h1 className="text-3xl xl:text-5xl uppercase font-black ">Síntesis</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Enim sit diam ultrices amet scelerisque quis enim. Lorem sed amet et eget ut. Molestie leo adipiscing at platea. Iaculis dolor eu vel tortor metus urna nulla nullam. Elementum pellentesque sed sed faucibus tortor tincidunt egestas. Facilisis fermentum mauris iaculis fusce quisque venenatis. Lacinia id molestie duis ultrices suspendisse. Pulvinar laoreet pretium ullamcorper tincidunt quisque. Augue tristique vestibulum duis quam. Bibendum ultrices elit ac aenean. Eget duis quis egestas pellentesque. Cursus sapien tempor lorem et donec ornare et ac. In risus risus diam ipsum magna diam et arcu ultricies. Diam posuere nibh dignissim nisi malesuada et.
                </p>
                <p>
                    Eget vitae aliquet tincidunt diam tellus maecenas in amet cras. At volutpat ullamcorper condimentum ultrices proin. Vulputate praesent arcu felis ultrices nunc in sagittis dapibus. Tortor libero arcu bibendum bibendum. Consectetur id proin nisl malesuada cras fermentum venenatis volutpat cursus. Elementum eros vivamus aenean ridiculus. Eget hendrerit aliquet eu maecenas quisque nulla sed aliquet mi. Vestibulum augue sapien nisi sit nunc ut aliquam. A eu sed lectus consequat sit. Quam sit diam adipiscing commodo vel vitae mauris facilisi mattis. Facilisis imperdiet facilisi morbi eu at vel a tortor convallis. Ac risus nunc arcu ut ac velit ut porta lectus. Vulputate platea eu amet donec. Est pretium ornare ornare diam pharetra quam. Viverra praesent ornare in arcu.
                </p>
            </div>
            <div className="w-full h-full flex flex-col items-center xl:items-end justify-end gap-4 leading-8  ">
                <h1 className=" text-3xl xl:text-5xl uppercase font-black " >Sumario</h1>
                <p className="text-justify ">
                    Lorem ipsum dolor sit amet consectetur. Enim sit diam ultrices amet scelerisque quis enim. Lorem sed amet et eget ut. Molestie leo adipiscing at platea. Iaculis dolor eu vel tortor metus urna nulla nullam. Elementum pellentesque sed sed faucibus tortor tincidunt egestas. Facilisis fermentum mauris iaculis fusce quisque venenatis. Lacinia id molestie duis ultrices suspendisse. Pulvinar laoreet pretium ullamcorper tincidunt quisque. Augue tristique vestibulum duis quam. Bibendum ultrices elit ac aenean. Eget duis quis egestas pellentesque. Cursus sapien tempor lorem et donec ornare et ac. In risus risus diam ipsum magna diam et arcu ultricies. Diam posuere nibh dignissim nisi malesuada et.
                </p>
                <p className="text-justify">
                    Eget vitae aliquet tincidunt diam tellus maecenas in amet cras. At volutpat ullamcorper condimentum ultrices proin. Vulputate praesent arcu felis ultrices nunc in sagittis dapibus. Tortor libero arcu bibendum bibendum. Consectetur id proin nisl malesuada cras fermentum venenatis volutpat cursus. Elementum eros vivamus aenean ridiculus. Eget hendrerit aliquet eu maecenas quisque nulla sed aliquet mi. Vestibulum augue sapien nisi sit nunc ut aliquam. A eu sed lectus consequat sit. Quam sit diam adipiscing commodo vel vitae mauris facilisi mattis. Facilisis imperdiet facilisi morbi eu at vel a tortor convallis. Ac risus nunc arcu ut ac velit ut porta lectus. Vulputate platea eu amet donec. Est pretium ornare ornare diam pharetra quam. Viverra praesent ornare in arcu.
                </p>
            </div>
        </section>
    )
}