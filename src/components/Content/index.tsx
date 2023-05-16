import { useEffect, useState } from "react";
import { Pagination } from 'antd';

import { Post } from '@/types';
import ContentBlock from "./ContentBlock";
type ContentProps = {
    category: string
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    const { category } = props;
    const [posts, setPosts] = useState<Post[]>([]);
    const [totalItem, setTotalItem] = useState<number>(10);
    const [currPage, setCurrPage] = useState<number>(1);
    const handlePosts = () => {
        let baseURL = `/api/allPost?page=${currPage}&size=10`;
        if (category.length > 0) {
            baseURL += `&category=${category}`
        }
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts.posts || []);
                setTotalItem(data.posts.totalPage * 10);
            });
    }
    const handlePageClick = (page: number) => {
        setCurrPage(page);
    }
    handlePosts();
    useEffect(() => {
        handlePosts();
    }, [category, currPage])
    return <div>
        {
            posts.map(post => <ContentBlock key={post.id} post={post} />)
        }
        <Pagination
            defaultCurrent={1}
            total={totalItem}
            onChange={handlePageClick}
            style={{ width: 'max-content', margin: 'auto' }}
        />
    </div>
};


export default Content;