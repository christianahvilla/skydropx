import popularActions from './popular';
import { popularConstants } from '../helpers/constants';

describe('Popular Actions', () => {
    it('fetcPopularBegin', () => {
        const expectedAction = {
            type: popularConstants.FETCH_POPULAR_BEGIN,
        };
        expect(popularActions.fetchPopularBegin()).toEqual(expectedAction);
    });
    it('fetcPopularSuccess', () => {
        const response = {
            data: {
                resulst: [],
                total_pages: 0,
                page: 0,
                total_results: 0,
            },
        };
        const expectedAction = {
            type: popularConstants.FETCH_POPULAR_SUCCESS,
            payload: response.data,
        };
        expect(popularActions.fetchPopularSuccess(response)).toEqual(expectedAction);
    });
    it('fetcPopularError', () => {
        const response = {
            data: 'Network Error',
        };
        const expectedAction = {
            type: popularConstants.FETCH_POPULAR_ERROR,
            payload: response.data,
        };
        expect(popularActions.fetchPopularError(response)).toEqual(expectedAction);
    });
});
