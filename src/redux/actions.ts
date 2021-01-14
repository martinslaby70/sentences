import {sentence} from './../interfaces/sentence'

export const ADD_SENTENCE = "ADD_SENTENCE";
export const REMOVE_SENTENCE = "REMOVE_SENTENCE";

export interface AddSentenceAction {
    type: typeof ADD_SENTENCE
    sentence: sentence
}

export interface RemoveSentenceAction {
    type: typeof REMOVE_SENTENCE
    sentenceId: string
}

export type SentenceActions = AddSentenceAction | RemoveSentenceAction;