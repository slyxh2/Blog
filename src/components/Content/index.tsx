import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from '@/types';
import ContentBlock from "./ContentBlock";
type ContentProps = {
    category: string
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    const { category } = props;
    const [posts, setPosts] = useState<Post[]>([]);
    const [remainPage, setRemainPage] = useState<number>(0);
    const [currPage, setCurrPage] = useState<number>(1);
    const handlePosts = () => {
        let baseURL = `/api/allPost?page=${currPage}&size=10`;
        if (category.length > 0) {
            baseURL += `&category=${category}`
        }
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                // setPosts([...posts, ...data.posts.posts]);
                setPosts(data.posts.posts || []);
                setRemainPage(--data.posts.totalPage);
            });
    }
    useEffect(() => {
        handlePosts();
    }, [category])
    return <div>
        {
            posts.map(post => <ContentBlock key={post.id} post={post} />)
        }
        {
            remainPage === 0 && <div>THE END</div>
        }
    </div>
};


export default Content;