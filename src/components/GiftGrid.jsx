import { useFetchGifs } from 'hooks/useFetchGifs';
import React, { Fragment, useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import 'styles/giftGrid.css';

const GiftGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className="animate__animated animate__backInDown">{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading..</p>}
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