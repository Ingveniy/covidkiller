import {combineReducers} from 'redux';
import elements from './elements/reducer';
import score from './score/reducer';

const rootReducer = combineReducers({elements, score});

export default rootReducer;
