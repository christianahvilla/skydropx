import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import detailActions from '../actions/detail';
import { getQueryPayload } from '../helpers/api';
import Loader from '../components/Loader/Loader';
import DetailContainer from '../components/Detail/DetailContainer';

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
                    <div>
                        <DetailContainer detail={detail.detail} />
                    </div>
                )}
        </div>
    );
};

export default Detail;
