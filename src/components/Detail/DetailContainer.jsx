import React from 'react';
import Image from '../Image/Image';
import './style.css';

const DetailContainer = (props) => {
    const {
        detail: {
            backdrop_path,
            name,
            vote_average,
            overview,
            languages,
        },
    } = props;

    return (
        <div className="detail-container">
            <div>
                <Image poster_path={backdrop_path} alt={name} />
            </div>
            <div>
                <h1 className="fw-300 centrar-texto">{name}</h1>
                <main className="container section content-centered">
                    <div className="overview">
                        <div>
                            <div>
                                <p>Score: </p>
                                <p className="voted great">
                                    <span>{vote_average}</span>
                                    /10
                                    {' '}
                                    <i className="far fa-heart" />
                                </p>
                            </div>
                            <div>
                                <p>{`Languages: ${languages}`}</p>
                            </div>
                        </div>
                    </div>
                    <p className="detail=text">{overview}</p>
                </main>
            </div>
        </div>
    );
};

export default DetailContainer;
