import React, { Fragment, useState } from 'react'
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Jujutsu Kaisen']);

    // const handleAdd = () => {
    //     setCategories(cats => ['Quan zhi Gao Shou', ...cats]);
    // };

    return (
        <Fragment>
            <h2 className="text-center font-bold pb-2 text-white">Busca tu Gif</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GiftGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp