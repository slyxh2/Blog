import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import MarkDown from '@/components/PostShow/Markdown';
import MarkdownNavbar from 'markdown-navbar';
import style from '../style/post.module.css';

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
    const router = useRouter();
    const { post } = props;

    return <div id={style.post}>
        <div id={style.markdown}>
            <div id={style.inner}>
                <MarkDown post={post.content} />
            </div>
        </div>
        <div id={style.table}>
            <MarkdownNavbar source={post.content} />
        </div>


    </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const url = `http://${context.req.headers.host}/api/post/${context.query.id}`;
    const response = await fetch(url);
    const result = await response.json();
    return {
        props: { post: result.body.post }
    }
}
