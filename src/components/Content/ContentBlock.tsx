import React from 'react';
import style from './content.module.css';
import { Post } from '@/types';

type ContentBlockProps = {
    post: Post
}

const handleDate = (inputDate: string): string => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {
    let { header, date, id } = props.post;
    date = handleDate(date);
    return <a className={style.block} href={`/post/${id}`} target="_blank">
        <h3>{header}</h3>
        <div className={style.date}>{date}</div>
    </a>
}


export default React.memo(ContentBlock, (prev, next) => {
    return prev.post.id === next.post.id
});