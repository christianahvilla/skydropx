import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import popularActions from '../actions/Popular';
import { getQueryPayload } from '../helpers/Api';

const Popular = () => {
    const url = `${process.env.REACT_APP_API_URL}/tv/popular`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    // const popular = useSelector((state) => state.popular);
    const page = 1;
    const fetchPopularBegin = () => dispatch(popularActions.fetchPopularBegin());
    const fetchPopularSuccess = (response) => dispatch(popularActions.fetchPopularSuccess(response));
    const fetchPopularError = (error) => dispatch(popularActions.fetchPopularError(error));

    const getPopular = () => {
        const params = {
            params: {
                page,
                api_key: apiKey,
                language,
            },
            headers: {
                Accept: 'application/json',
            },
        };
        getQueryPayload(url, params, fetchPopularBegin, fetchPopularSuccess, fetchPopularError);
    };

    useEffect(() => {
        getPopular();
    // eslint-disable-next-line
    }, []);

    return (
        <div>Popular Works!</div>
    );
};

export default Popular;
