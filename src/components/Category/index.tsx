
import Image from 'next/image';
import Head from 'next/head';
import style from './category.module.css';
import star from '@/assets/img/star.svg';
import { Categories } from '@/types';
import CategoryItem from './CategoryItem';


type CategoryProps = {
    selected: string
    categories: Categories
    setSelected: Function
}

const Category: React.FC<CategoryProps> = (props: CategoryProps) => {
    const { selected, categories, setSelected } = props;
    const handleSelect = (id: string) => {
        setSelected(id);
    }
    return <div id={style.category}>
        <ul>
            {
                categories.map(category =>
                    <CategoryItem
                        key={category.id}
                        name={category.name}
                        id={category.id}
                        isSelected={category.id === selected}
                        handleSelect={handleSelect}
                    />)
            }
        </ul>
    </div>
}

export default Category;