import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import './style.css';

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
        <div className="item">
            <Image poster_path={poster_path} alt={name} />
            <div className="content-item">
                <h3>{name}</h3>
                <p className="voted">{vote_average}</p>
                <Link to={`/detail/${id}`}>
                    <button type="button" className="button d-block">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CardItem;
