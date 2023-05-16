import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import Typed from 'typed.js';
import MarkDown from '@/components/PostShow/Markdown';
import MarkdownNavbar from 'markdown-navbar';
import { handleDate } from '@/utils'
import style from '../style/post.module.css';

import { useEffect, useRef } from 'react';
import Head from 'next/head';

type PostProps = {
    post: {
        id: string
        header: string
        date: string
        category: string
        content: string
    }
}
export default function Post(props: PostProps) {
    // const router = useRouter();
    const type = useRef(null);

    const { post } = props;
    useEffect(() => {
        const typed = new Typed(type.current, {
            stringsElement: '#type-string',
            typeSpeed: 100
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return <>
        <Head>
            <title>{post.header}</title>
        </Head>
        <div id={style.header}>
            <div id="type-string" style={{ display: 'none' }}>
                <p>{post.header}</p>
            </div>
            <div id={style.strings}>
                <span ref={type} ></span>
            </div>
            <div id={style.date}>
                <span>{handleDate(post.date)}</span>
            </div>
        </div>
        <div id={style.post}>
            <div id={style.markdown}>
                <div id={style.inner}>
                    <MarkDown post={post.content} />
                </div>
            </div>
            <div id={style.table}>
                <MarkdownNavbar source={post.content} />
            </div>
        </div>
    </>

}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const url = `http://${context.req.headers.host}/api/post/${context.query.id}`;
    const response = await fetch(url);
    const result = await response.json();
    if (!response.ok) {
        // Redirect to the 404 page
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }
    return {
        props: { post: result.body.post }
    }
}
