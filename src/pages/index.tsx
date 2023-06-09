import { useEffect, useRef, useState } from 'react';
// import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Typed from 'typed.js';
// import { Categories } from '@/types';
import style from './style/index.module.css';
import avatar from '@/assets/img/avatar.jpg';
import arrow from '@/assets/img/arrow-down.svg';
// import Content from '@/components/Content';
// import Avatar from '@/components/Avatar';
// import Author from '@/components/Author';
// import Category from '@/components/Category';
const Avatar = dynamic(() => import('@/components/Avatar'));
const Author = dynamic(() => import('@/components/Author'));
const Category = dynamic(() => import('@/components/Category'), { ssr: false });
const Content = dynamic(() => import('@/components/Content'), { ssr: false });

// type HomeProps = {
//   categories: Categories
// }

export default function Home() {
  // const { categories } = props;
  const type = useRef(null);
  const mainRef = useRef(null);
  const handleClickArrow = () => {
    if (mainRef.current) {
      (mainRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }
  const [selected, setSelected] = useState<string>('');
  useEffect(() => {
    const typed = new Typed(type.current, {
      stringsElement: '#type-string',
      typeSpeed: 100
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Patrick&apos;s Blog</title>
      </Head>
      <div id={style.cover} />
      <div id={style.show}>
        <Avatar
          src={avatar}
          id={style.avatar}
          size='350px'
          alt="avatar"
        />
        <div id="type-string" style={{ display: 'none' }}>
          <p>Welcome to Patrick&apos;s Blog</p>
        </div>
        <div id={style.strings}>
          <span ref={type} ></span>
        </div>

        <Image
          src={arrow}
          alt="arrow"
          id={style.arrow}
          onClick={handleClickArrow}
        />
      </div>

      <div id={style['main-container']}>
        <main id={style.main} ref={mainRef}>
          <div id={style.category}>
            <Category selected={selected} setSelected={setSelected} />
          </div>
          <div id={style.content}>
            <Content category={selected} />
          </div>
          <div id={style.author}>
            <Author />
          </div>
        </main>
      </div>
    </>
  )
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const base = 'http://' + context.req.headers.host;
//   const response = await fetch(base + "/api/category");
//   const result = await response.json();
//   return {
//     props: { categories: [{ name: "All Post", id: "" }, ...result.categories] }
//   }
// }
