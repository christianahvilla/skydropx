import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import onAirActions from '../actions/OnAir';
import { getQueryPayload } from '../helpers/Api';

const OnAir = () => {
    const url = `${process.env.REACT_APP_API_URL}/tv/on_the_air`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const language = 'EN_US';
    const dispatch = useDispatch();
    // const onAir = useSelector((state) => state.onAir);
    const page = 1;
    const fetchOnAirBegin = () => dispatch(onAirActions.fetchOnAirBegin());
    const fetchOnAirSuccess = (response) => dispatch(onAirActions.fetchOnAirSuccess(response));
    const fetchOnAirError = (error) => dispatch(onAirActions.fetchOnAirError(error));

    const getOnAir = () => {
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
        getQueryPayload(url, params, fetchOnAirBegin, fetchOnAirSuccess, fetchOnAirError);
    };

    useEffect(() => {
        getOnAir();
    // eslint-disable-next-line
    }, []);

    return (
        <div>OnAir Works!</div>
    );
};

export default OnAir;
