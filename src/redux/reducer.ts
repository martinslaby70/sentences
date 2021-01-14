import {sentence} from '../interfaces/sentence';
import initialValue from './initialValue'
import { SentenceActions } from './actions'

export interface SentencesState {
    sentences: sentence[]
}

export const reducer = (state: SentencesState = initialValue(), action: SentenceActions) => {
    switch (action.type) {
       case "ADD_SENTENCE": {
            const {sentence} = action;
            localStorage.setItem(sentence.id, JSON.stringify(sentence));

            return {...state, sentence: [...state.sentences , sentence] }
       }
       case "REMOVE_SENTENCE": {
            const {sentenceId} = action;
            localStorage.removeItem(sentenceId);

            return {...state.sentences.filter(stateSentence => stateSentence.id !== sentenceId)}
       }
    
        default:
            return state;
    }
}