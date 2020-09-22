import onAirActions from './onAir';
import { onAirConstants } from '../helpers/constants';

describe('OnAir Actions', () => {
    it('fetchOnAirBegin', () => {
        const expectedAction = {
            type: onAirConstants.FETCH_ON_AIR_BEGIN,
        };
        expect(onAirActions.fetchOnAirBegin()).toEqual(expectedAction);
    });
    it('fetchOnAirSuccess', () => {
        const response = {
            data: {
                resulst: [],
                total_pages: 0,
                page: 0,
                total_results: 0,
            },
        };
        const expectedAction = {
            type: onAirConstants.FETCH_ON_AIR_SUCCESS,
            payload: response.data,
        };
        expect(onAirActions.fetchOnAirSuccess(response)).toEqual(expectedAction);
    });
    it('fetchOnAirError', () => {
        const response = {
            data: 'Network Error',
        };
        const expectedAction = {
            type: onAirConstants.FETCH_ON_AIR_ERROR,
            payload: response.data,
        };
        expect(onAirActions.fetchOnAirError(response)).toEqual(expectedAction);
    });
});
