import { useRouter } from "next/router";
import useSWR, { preload } from "swr";

export default function Post () {
    const router = useRouter()
    const { slug } = router.query

    const fetcher = (url: any) => fetch(url).then((res) => res.json())
    const { data: post, error } = useSWR(`http://localhost/wordpress/wp-json/wp/v2/posts?_embed&slug=${slug}` , fetcher) 

    if (error) return <>Error!!!</>
    if (!post) return <>Loading...</>

    return (<>Post slug ID: {post[0].id}</>)
}