// import Post from "@/components/PostShow"
import style from './style/index.module.css';
import { useEffect } from 'react';
import { Category, Categories } from '@/types';

type HomeProps = {
  categories: Categories
}

export default function Home(props: HomeProps) {
  const { categories } = props;
  useEffect(() => {
    // console.log(categories);
  }, [])
  return (
    <div id="main">
      {/* <Post></Post> */}
    </div>
  )
}

export async function getServerSideProps() {
  const result = await fetch("http://localhost:3000/api/category");
  const categories = await result.json();
  return {
    props: { categories }
  }
}
