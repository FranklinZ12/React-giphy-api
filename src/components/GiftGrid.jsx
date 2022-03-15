import { useFetchGifs } from 'hooks/useFetchGifs';
import React, { Fragment } from 'react';
import GifGridItem from './GifGridItem';
import 'styles/giftGrid.css';
import ReactLoading from 'react-loading';

const GiftGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className="animate__animated animate__backInDown">{category}</h3>
            {loading &&
                <div className="flex justify-center">
                    <ReactLoading type='bars' color='#808080' height={150} width={100} />
                </div>}
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