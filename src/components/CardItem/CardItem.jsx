import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import './CardItem.css';

const CardItem = (props) => {
    const {
        item: {
            name,
            vote_average,
            poster_path,
            id,
        },
    } = props;

    return (
        <div className="anuncio">
            <Image poster_path={poster_path} alt={name} />
            <div className="contenido-anuncio">
                <h3>{name}</h3>
                <p className="precio">{vote_average}</p>
                <Link to={`/detail/${id}`}>
                    <button type="button" className="boton boton-amarillo d-block">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CardItem;
