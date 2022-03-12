import React, { Fragment, useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import 'styles/giftGrid.css';
import { getGift } from 'api/getGifts';
const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGift(category)
            .then(setImages)
    }, [category]);

    return (
        <Fragment>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((gif) => {
                    return (
                        <GifGridItem
                            key={gif.id}
                            {...gif}
                        />
                    );
                })
                }
            </div>
        </Fragment>
    )
}

export default GiftGrid