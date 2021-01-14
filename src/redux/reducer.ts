import initialValue from './initialValue'
import { SentenceActions } from './actions'


const initialState = initialValue(); 

export const reducer = (state = initialState, action: SentenceActions) => {
    switch (action.type) {
        case "ADD_SENTENCE": {
            const {sentence} = action;
            localStorage.setItem(sentence.id, JSON.stringify(sentence));
            
            return {sentence, ...state}
        }
        case "REMOVE_SENTENCE": {
            const {sentenceId} = action;
            localStorage.removeItem(sentenceId);

            return {...state.sentences.filter(({id}) => id !== sentenceId)}
        }
    
        default:
            return state;
    }
}