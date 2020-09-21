import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Image from '../Image/Image';
import detailActions from '../../actions/Detail';
import { getQueryPayload } from '../../helpers/Api';
import Loader from '../Loader/Loader';
import './Detail.css';

const Detail = () => {
    const { id } = useParams();
    const url = `${process.env.REACT_APP_API_URL}/tv/${id}`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    const fetchDetailBegin = () => dispatch(detailActions.fetchDetailBegin());
    const fetchDetailSuccess = (response) => dispatch(detailActions.fetchDetailSuccess(response));
    const fetchDetailError = (error) => dispatch(detailActions.fetchDetailError(error));

    const getDetail = () => {
        const params = {
            params: {
                api_key: apiKey,
                language,
            },
            headers: {
                Accept: 'application/json',
            },
        };
        getQueryPayload(url, params, fetchDetailBegin, fetchDetailSuccess, fetchDetailError);
    };

    useEffect(() => {
        getDetail();
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            {detail.loading ? <Loader />
                : (
                    <div className="detail-container">
                        <div>
                            <Image poster_path={detail.detail.backdrop_path} alt={detail.detail.name} />
                        </div>
                        <div>
                            <h1 className="fw-300 centrar-texto">{detail.detail.name}</h1>
                            <main className="container section contenido-centrado">
                                <div className="resumen-propiedad">
                                    <p className="precio">{detail.detail.vote_average}</p>
                                </div>
                                <p>{detail.detail.overview}</p>
                            </main>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Detail;
