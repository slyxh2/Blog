// import Post from "@/components/PostShow"
import style from './style/index.module.css';
import { useEffect, useRef, lazy } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import { Category, Categories } from '@/types';
import avatar from '@/assets/img/avatar.jpg';
import arrow from '@/assets/img/arrow-down.svg';

const Avatar = lazy(() => import('@/components/Avatar'));
const Author = lazy(() => import('@/components/Author'));
type HomeProps = {
  categories: Categories
}

export default function Home(props: HomeProps) {
  // const { categories } = props;
  const type = useRef(null);
  const mainRef = useRef(null);
  const handleClickArrow = () => {
    console.log(22);
    if (mainRef.current) {
      (mainRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    const typed = new Typed(type.current, {
      stringsElement: '#type-string',
      typeSpeed: 100
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
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
            <h1>Category</h1>
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

// export async function getServerSideProps() {
//   const result = await fetch("http://localhost:3000/api/category");
//   const categories = await result.json();
//   return {
//     props: { categories }
//   }
// }
