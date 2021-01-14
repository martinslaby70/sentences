import { createStore, combineReducers } from 'redux';
import {reducer} from './reducer';

/* const reducers = combineReducers({
    sentences: reducer
});  */

export const store = createStore(reducer);