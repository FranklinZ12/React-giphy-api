import React, { Fragment } from 'react';
import 'styles/gifGridItem.css'
const GifGridItem = ({ id, title, url }) => {
    return (
        <Fragment>
            <div className='card animate__animated animate__backInDown'>
                <p>{title}</p>
                <img src={url} alt={title} />
            </div>
        </Fragment>
    )
}

export default GifGridItem