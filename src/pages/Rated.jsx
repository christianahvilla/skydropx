import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ratedActions from '../actions/Rated';
import { getQueryPayload } from '../helpers/Api';

const Rated = () => {
    const url = `${process.env.REACT_APP_API_URL}/tv/top_rated`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    // const rated = useSelector((state) => state.rated);
    const page = 1;
    const fetchRatedBegin = () => dispatch(ratedActions.fetchRatedBegin());
    const fetchRatedSuccess = (response) => dispatch(ratedActions.fetchRatedSuccess(response));
    const fetchRatedError = (error) => dispatch(ratedActions.fetchRatedError(error));

    const getRated = () => {
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
        getQueryPayload(url, params, fetchRatedBegin, fetchRatedSuccess, fetchRatedError);
    };

    useEffect(() => {
        getRated();
    // eslint-disable-next-line
    }, []);

    return (
        <div>Rated Works!</div>
    );
};

export default Rated;
