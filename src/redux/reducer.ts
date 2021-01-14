import initialValue from './initialValue'
import { SentenceActions } from './actions'


const initialState = initialValue(); 

export const reducer = (state = initialState, action: SentenceActions) => {
    switch (action.type) {
        case "ADD_SENTENCE": {
            console.log(action);
            const sentence = action.payload;
            localStorage.setItem(sentence.id, JSON.stringify(sentence));
            
            return {...state, sentence: [sentence, ...state.sentences]}
        }
        case "REMOVE_SENTENCE": {
            const sentenceId = action.payload;
            localStorage.removeItem(sentenceId);

            return {...state, sentence: [...state.sentences.filter(({id}) => id !== sentenceId)]}
        }
    
        default:
            return state;
    }
} 