import {sentence} from '../interfaces/sentence';
import {data as dummySentences} from '../dummyData/data';

//output interface 
import { SentencesState } from './reducer';

const initialValue = () => {
    let ret: SentencesState = { sentences: dummySentences } 
   
    let tempSentences: sentence[] = []; 
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {    
        let sentence = localStorage.getItem(keys[i]);
        tempSentences.push(JSON.parse(sentence!))
    }
    console.log(tempSentences);
    

    if (tempSentences.length !== 0)
    {
        dummySentences.forEach(sentence => {
            localStorage.setItem(sentence.id, JSON.stringify(sentence));
        });
        ret = {
            sentences: tempSentences
        } 
    }
        
    return ret;
}

export default initialValue;