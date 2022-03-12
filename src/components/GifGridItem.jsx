import React, { Fragment } from 'react';
import 'styles/gifGridItem.css'
const GifGridItem = ({ id, title, url }) => {
    console.log(id, title, url)
    return (
        <Fragment>
            <div className='card'>
                <p>{title}</p>
                <img src={url} alt={title} />
            </div>
        </Fragment>
    )
}

export default GifGridItem