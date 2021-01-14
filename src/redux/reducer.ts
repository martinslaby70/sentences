import initialValue from './initialValue'
import { SentenceActions } from './actions'


const initialState = initialValue(); 

export const reducer = (state = initialState, action: SentenceActions) => {
    switch (action.type) {
        case "ADD_SENTENCE": {        
            localStorage.setItem(action.payload.id, JSON.stringify(action.payload));            
            return {...state, sentence: [action.payload, ...state.sentences]}
        }
        case "REMOVE_SENTENCE": {
            localStorage.removeItem(action.payload);
            return {...state, sentence: [...state.sentences.filter(({id}) => id !== action.payload)]};
        }
    
        default:
            return state;
    }
} 