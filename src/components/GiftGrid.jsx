import { useFetchGifs } from 'hooks/useFetchGifs';
import React, { Fragment } from 'react';
import GifGridItem from './GifGridItem';
import 'styles/giftGrid.css';
import ReactLoading from 'react-loading';

const GiftGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h5 className="animate__animated animate__backInDown tracking-wider pl-20 text-yellow-50 font-extrabold">{category}</h5>
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
            <hr className="border-0 border-t-4 border-double border-white pt-2 w-11/12" />
        </Fragment>
    )
}

export default GiftGrid