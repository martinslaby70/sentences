import { createStore, combineReducers } from 'redux';
import {reducer as sentenceReducer} from './reducer';

const reducers = combineReducers({
    sentences: sentenceReducer
});

export const store = createStore(reducers);