import React from 'react';
import Image from '../Image/Image';
import './item.css';

const Item = (props) => {
    const {
        src,
        name,
    } = props;

    return (
        <div className="pruduct-managment-container">
            <div className="image-container">
                <Image url={src} />
            </div>
            <div className="body-card-container">
                <div className="text-card-container">
                    <p className="text-indigo product-name">{name}</p>
                    <div className="name-price-card-container" />
                </div>
            </div>
        </div>
    );
};

export default Item;
