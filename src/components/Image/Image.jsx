import React from 'react';
import './style.css';
import notFound from './404.jpg';

const Image = (props) => {
    const {
        poster_path,
        alt,
    } = props;

    const handlleSrcImage = () => {
        return poster_path ? `${process.env.REACT_APP_IMAGE_URL}${poster_path}` : notFound;
    };

    return (
        <img className="images" src={handlleSrcImage()} alt={alt} />
    );
};

export default Image;
