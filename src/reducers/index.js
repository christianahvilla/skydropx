import { combineReducers } from 'redux';
import tv from './Tv';
import onAir from './OnAir';
import rated from './Rated';

export default combineReducers({
    tv,
    rated,
    onAir,
});
