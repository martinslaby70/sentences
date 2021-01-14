import {sentence} from './../interfaces/sentence'


export interface AddSentenceAction {
    type: "ADD_SENTENCE"
    payload: sentence
}

export interface RemoveSentenceAction {
    type: "REMOVE_SENTENCE"
    payload: string
}

export type SentenceActions = AddSentenceAction | RemoveSentenceAction;