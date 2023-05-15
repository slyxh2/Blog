import { memo } from 'react';
import Image from 'next/image';
import star from '@/assets/img/star.svg';
import style from './category.module.css';

type CategoryItemProps = {
    name: string
    id: string
    isSelected: boolean
    handleSelect: Function
}

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
    const { name, id, isSelected, handleSelect } = props;
    const listClassName = isSelected ? style.selected : '';
    return <li onClick={() => handleSelect(id)} className={listClassName}>
        <Image src={star} alt="star" className={style.icon} />
        <h3>{name}</h3>
    </li>
}

export default CategoryItem;