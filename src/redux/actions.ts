import {sentence} from './../interfaces/sentence'


export interface AddSentenceAction {
    type: "ADD_SENTENCE"
    payload: sentence
}

export interface RemoveSentenceAction {
    type: "REMOVE_SENTENCE"
    payload: string
}


export const removeSentence = (sentenceId: string): RemoveSentenceAction => ({
    type: "REMOVE_SENTENCE",
    payload: sentenceId,
});

export const addSentence = (sentence: sentence): AddSentenceAction => ({
    type: "ADD_SENTENCE",
    payload: sentence,
})

export type SentenceActions = AddSentenceAction | RemoveSentenceAction;