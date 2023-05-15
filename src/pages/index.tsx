// import Post from "@/components/PostShow"

import { useEffect, useRef, lazy, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Typed from 'typed.js';
import { Categories } from '@/types';
import style from './style/index.module.css';
import avatar from '@/assets/img/avatar.jpg';
import arrow from '@/assets/img/arrow-down.svg';

const Avatar = lazy(() => import('@/components/Avatar'));
const Author = lazy(() => import('@/components/Author'));
const Category = lazy(() => import('@/components/Category'));

type HomeProps = {
  categories: Categories
}

export default function Home(props: HomeProps) {
  const { categories } = props;
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
      <div id={style.cover} />
      <div id={style.show}>
        <Avatar
          src={avatar}
          id={style.avatar}
          size='350px'
          alt="avatar"
        />
        <div id="type-string" style={{ display: 'none' }}>
          <p>Welcome to Patrick's Blog</p>
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
        <div id={style.main} ref={mainRef}>
          <div id={style.category}>
            <Category selected={selected} categories={categories} setSelected={setSelected} />
          </div>
          <div id={style.content}>
            <h1>Content</h1>
          </div>
          <div id={style.author}>
            <Author />
          </div>
        </div>
      </div>

    </>

  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const base = 'http://' + context.req.headers.host;
  const response = await fetch(base + "/api/category");
  const result = await response.json();
  return {
    props: { categories: [{ name: "All Post", id: "" }, ...result.categories] }
  }
}
