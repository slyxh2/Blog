import React, { lazy } from 'react';
import Image from 'next/image';
import style from './author.module.css';
import avatar from '@/assets/img/avatar.jpg';
import email from '@/assets/img/email.svg';
import github from '@/assets/img/github.svg';
import linkedin from '@/assets/img/linkedin.svg';
import resume from '@/assets/img/resume.svg';
import Avatar from '../Avatar';


// const Avatar = lazy(() => import('../Avatar'));

const Author = () => {

    return <div id={style.author}>
        <div id={style.intro}>
            <Avatar
                src={avatar}
                id={style.avatar}
                size='60px'
                alt="avatar"
            />
            <div id={style['author-inf']}>
                <p className={style.special}>Patrick Huang</p>
                {/* <p>Tech Lover</p> */}
            </div>
        </div>
        <div id={style.social}>
            <a href="https://github.com/slyxh2" target="_blank" className={style.icon}>
                <Image src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/patrickhuangxy/" target="_blank" className={style.icon}>
                <Image src={linkedin} alt="linkedin" />
            </a>
            <a href="mailto:xueyanhuangpatrick@gmail.com" target="_blank" className={style.icon}>
                <Image src={email} alt="email" />
            </a>
            <a href="https://drive.google.com/file/d/1GLC6I0yH3upknjvyAJlj6R_SK0NLsZOJ/view?usp=sharing" target="_blank" className={style.icon}>
                <Image src={resume} alt="resume" />
            </a>
        </div>
    </div>
}

export default React.memo(Author);
