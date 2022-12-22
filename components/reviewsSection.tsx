import Image from "next/image"


export default function Reviews() {
    return (
        <section id="reviews" className="reviews relative overflow-visible w-screen h-[560px] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-slate-400 col-span-12 flex items-center justify-center">
            {/* <Image className="w-full h-full object-cover " src="/imgs/reviews.jpg" alt="books" />*/}
            <Image placeholder="blur" blurDataURL="/imgs/reviews.jpg" fill style={{objectFit:"cover", width: '100%', height: '100%'}} src={"/imgs/reviews.jpg"} alt={"books"}/>
            {/* <img className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5" alt="books" /> */}
            <span className="text-white absolute" >Reviews, Noticias y Articulos</span>
        </section>
    )
}