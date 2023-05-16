import { useEffect } from "react";
import useSWR from "swr";
import Markdown from "./Markdown";
// import { getPostSubHead } from '@/utils';

type GetPost = {
    body: string
}



const PostShow: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR<GetPost>("/api/post/1", fetcher);
    useEffect(() => {
        if (data?.body) {
            // console.log(getPostSubHead(data.body));
            console.log(data);
        }
    }, [data]);
    return isLoading || !data ?
        <div>Loading...</div>
        :
        <Markdown post={data.body} />
}

export default PostShow;