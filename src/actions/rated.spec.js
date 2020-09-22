import ratedActions from './rated';
import { ratedConstants } from '../helpers/constants';

describe('Rated Actions', () => {
    it('fetcRatedBegin', () => {
        const expectedAction = {
            type: ratedConstants.FETCH_RATED_BEGIN,
        };
        expect(ratedActions.fetchRatedBegin()).toEqual(expectedAction);
    });
    it('fetcRatedSuccess', () => {
        const response = {
            data: {
                resulst: [],
                total_pages: 0,
                page: 0,
                total_results: 0,
            },
        };
        const expectedAction = {
            type: ratedConstants.FETCH_RATED_SUCCESS,
            payload: response.data,
        };
        expect(ratedActions.fetchRatedSuccess(response)).toEqual(expectedAction);
    });
    it('fetcRatedError', () => {
        const response = {
            data: 'Network Error',
        };
        const expectedAction = {
            type: ratedConstants.FETCH_RATED_ERROR,
            payload: response.data,
        };
        expect(ratedActions.fetchRatedError(response)).toEqual(expectedAction);
    });
});
