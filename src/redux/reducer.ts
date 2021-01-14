import initialValue from './initialValue'
import { SentenceActions } from './actions'


const initialState = initialValue(); 

export const reducer = (state = initialState, action: SentenceActions) => {
    switch (action.type) {
        case "ADD_SENTENCE": {  
            console.log('adding');      
            localStorage.setItem(action.payload.id, JSON.stringify(action.payload));            
            return {...state, sentences: [action.payload, ...state.sentences]}
        }
        case "REMOVE_SENTENCE": {
            console.log('removing');
            localStorage.removeItem(action.payload);
            return {...state, sentences: [...state.sentences.filter(({id}) => id !== action.payload)]};        
        }
    
        default:
            return state;
    }
} 