import { tvConstants } from '../helpers/Constants';

const initialState = {
    tv: [],
    loading: false,
    error: '',
    total_pages: 0,
    total_results: 0,
    page: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case tvConstants.FETCH_TV_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case tvConstants.FETCH_TV_SUCCESS:
        return {
            ...state,
            loading: false,
            tv: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
        };

    case tvConstants.FETCH_TV_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
