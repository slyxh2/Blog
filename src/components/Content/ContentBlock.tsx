import React from 'react';
import Link from 'next/link';
import style from './content.module.css';
import { Post } from '@/types';
import { handleDate } from '@/utils'

type ContentBlockProps = {
    post: Post
}

const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {
    let { header, date, id } = props.post;
    date = handleDate(date);
    return <Link className={style.block} href={`/post/${id}`} target="_blank">
        <h3>{header}</h3>
        <div className={style.date}>{date}</div>
    </Link>
}


export default React.memo(ContentBlock, (prev, next) => {
    return prev.post.id === next.post.id
});