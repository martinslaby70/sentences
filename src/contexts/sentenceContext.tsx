import React, {createContext, useState} from 'react'
import {sentence} from '../interfaces/sentence';
import {data as dummySentences} from '../dummyData/data';
interface SentencesContextType {
    sentences: sentence[],
    addSentence: (sentenceToAdd: sentence) => void,
    removeSentence: (sentenceID: string) => void;
}

export const SentencesContext = createContext<SentencesContextType | null>(null);

interface props {
    children: React.ReactNode
}
export const SentencesContextProvider = ({children}: props) =>{

    const defaultValue = () => {
        let tempSentences: sentence[] = []; 
        let keys = Object.keys(localStorage);
        let i = keys.length;

        while (i--) {    
            let sentence = localStorage.getItem(keys[i]);
            tempSentences.push(JSON.parse(sentence!))
        }
        console.log(tempSentences);
        

        if (tempSentences.length === 0)
        {
            dummySentences.forEach(sentence => {
                localStorage.setItem(sentence.id, JSON.stringify(sentence));
            });
            return dummySentences
        }
            

        return tempSentences;
    }

    const [sentences, setSentences] = useState(defaultValue); 

    const addSentence = (sentenceToAdd: sentence) => {
        localStorage.setItem(sentenceToAdd.id, JSON.stringify(sentenceToAdd));
        setSentences([sentenceToAdd ,...sentences]);
    }

    const removeSentence = (sentenceIdToRemove: string) => {
        localStorage.removeItem(sentenceIdToRemove);
        setSentences(sentences.filter(sentence => sentence.id !== sentenceIdToRemove));
    }

    return(
        <SentencesContext.Provider value={{sentences, addSentence, removeSentence}}>
            {children}
        </SentencesContext.Provider>
    )
}
