
import style from './category.module.css';
import { Categories } from '@/types';
import { GetServerSidePropsContext } from 'next';
import CategoryItem from './CategoryItem';
import { useCallback, useEffect, useState } from 'react';
import Skeleton from '../Skeleton';


type CategoryProps = {
    selected: string
    setSelected: Function
}

const Category: React.FC<CategoryProps> = (props: CategoryProps) => {
    const { selected, setSelected } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<Categories>([]);
    const [isFirst, _] = useState(0);
    const handleSelect = (id: string) => {
        setSelected(id);
    }
    const handleCategory = useCallback(() => {
        fetch('/api/category')
            .then(res => res.json())
            .then(result => {
                setCategories([{ name: "All Post", id: "" }, ...result.categories]);
                setLoading(false);
            })
    }, [isFirst]);
    useEffect(() => {
        handleCategory();
    }, []);
    if (loading) return <div>
        {[...Array(6)].map((x, i) =>
            <Skeleton key={i} />
        )}
    </div>
    return <div id={style.category}>
        <ul>
            {
                categories && categories.map(category =>
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