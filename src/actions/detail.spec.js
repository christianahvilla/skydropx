import detailActions from './detail';
import { detailConstants } from '../helpers/constants';

describe('Detail Actions', () => {
    it('fetchDetailBegin', () => {
        const expectedAction = {
            type: detailConstants.FETCH_DETAIL_BEGIN,
        };
        expect(detailActions.fetchDetailBegin()).toEqual(expectedAction);
    });
    it('fetchDetailSuccess', () => {
        const response = {
            data: {
                detail: {},
            },
        };
        const expectedAction = {
            type: detailConstants.FETCH_DETAIL_SUCCESS,
            payload: response.data,
        };
        expect(detailActions.fetchDetailSuccess(response)).toEqual(expectedAction);
    });
    it('fetchDetailError', () => {
        const response = {
            data: 'Network Error',
        };
        const expectedAction = {
            type: detailConstants.FETCH_DETAIL_ERROR,
            payload: response.data,
        };
        expect(detailActions.fetchDetailError(response)).toEqual(expectedAction);
    });
});
