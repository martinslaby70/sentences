import {sentence} from './../interfaces/sentence'

export interface AddSentenceAction {
    type: "ADD_SENTENCE"
    sentence: sentence
}

export interface RemoveSentenceAction {
    type: "REMOVE_SENTENCE"
    sentenceId: string
}

export type SentenceActions = AddSentenceAction | RemoveSentenceAction;