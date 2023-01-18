import Image from "next/image";
import useSWR from 'swr'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Link from "next/link";

export default function BlogEntry(props: any) {

    const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());
	const { data: comm, error, mutate } = useSWR(
		`http://localhost/wordpress/wp-json/wp/v2/comments?post=${props.id}`,
		fetcher,
        { revalidateOnFocus: false }
	);

	return (
		<div className="w-full h-auto flex flex-col xl:flex-row gap-[30px]">
			<div className="relative w-full xl:w-[400px] h-[260px] sm:h-[328px] md:h-[428px] lg:h-[640px] xl:h-[360px] image-wrapper">
				<Image className="object-cover" src={props.img} fill alt="Post Thumbnail" />
			</div>
			<div className="content-wrapper w-full xl:w-1/2 flex flex-col justify-between gap-4">
				<div className="flex flex-col gap-2">
                <Link href={props.link}><h1 className=" text-xl xl:text-2xl 2xl:text-3xl font-semibold hover:text-[#174563]">{props.title}</h1></Link>
				<div className="flex gap-2 text-[#7A7A7A] font-semibold text-base xl:text-lg">
					<span>{props.authorName}</span>
                    {'|'}
					<span>{format(new Date(props.date), "d 'de' MMMM yyyy", {locale: es})}</span>
                    {'|'}
					<div className="flex gap-2 items-center">
						{/* {props.cant} */}
                        {comm?.length}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20 2H4C2.897 2 2 2.897 2 4V22L7.333 18H20C21.103 18 22 17.103 22 16V4C22 2.897 21.103 2 20 2ZM20 16H6.667L4 18V4H20V16Z"
								fill="#7A7A7A"
							/>
							<path
								d="M15 12C16.1046 12 17 11.1046 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 11.1046 13.8954 12 15 12Z"
								fill="#7A7A7A"
							/>
							<path
								d="M9 12C10.1046 12 11 11.1046 11 10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10C7 11.1046 7.89543 12 9 12Z"
								fill="#7A7A7A"
							/>
						</svg>
					</div>
				</div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.excerpt }} className="excerpt text-lg"></div>
				<Link className=" w-full lg:1/2 xl:w-48 h-12 bg-[#162330] hover:bg-[#1e3042] transition-colors flex items-center justify-center text-white " href={props.link}>Ver mas</Link>
			</div>
		</div>
	);
}
