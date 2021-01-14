import {data as dummySentences} from '../dummyData/data';

//interfaces 
import { sentence } from '../interfaces/sentence';
export interface InitialState {
    sentences: sentence[]
}

const initialValue = ():InitialState => {
    let ret = dummySentences;
   
    let tempSentences: sentence[] = []; 
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {    
        let sentence = localStorage.getItem(keys[i]);
        tempSentences.push(JSON.parse(sentence!))
    } 

    if (tempSentences.length !== 0)
    {
        dummySentences.forEach(sentence => {
            localStorage.setItem(sentence.id, JSON.stringify(sentence));
        });
        ret = tempSentences;
    }
    
    return {
        sentences: ret
    }
}

export default initialValue;