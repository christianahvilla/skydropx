import { combineReducers } from 'redux';
import popular from './Popular';
import onAir from './OnAir';
import rated from './Rated';
import detail from './Detail';

export default combineReducers({
    popular,
    rated,
    onAir,
    detail,
});
