import React, { Fragment, useState } from 'react'
import AddCategory from './AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Jujutsu Kaisen', 'Hunter X Hunter', 'Kimetsu no Yaiba']);

    // const handleAdd = () => {
    //     setCategories(cats => ['Quan zhi Gao Shou', ...cats]);
    // };

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return (
                            <li key={category}>{category}</li>
                        )
                    })
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp