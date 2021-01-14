import React from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { sentence } from '../interfaces/sentence';
import { InitialState } from '../redux/initialValue';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons'

//scss
import './../scss/sentences.scss'



const Sentenses = () => {

    const sentences = useSelector<InitialState, InitialState["sentences"]>((state) => state.sentences);
    const dispatch = useDispatch();


    const removeSentence = (sentenceId: string) => {
        dispatch({
            type: "ADD_SENTENCE",
            payload: sentenceId
        })
    }

    console.log(sentences);
    console.log(typeof sentences);
    
    

    const displaySentences = sentences.map(sentence => {    
        
        const {who, when, what, where} = sentence.sentence;
        
        const backgorundStyle: React.CSSProperties = { 
            backgroundColor: sentence.avatar.background + 'df' 
        };
        
        return(
            <div key={sentence.id}  className="sentence">
                <div className="avatar">
                    <div style={backgorundStyle}> 
                        <FontAwesomeIcon icon={faUser} color={sentence.avatar.foreground}/>
                    </div>
                </div>
                <div>
                    <p>{who} {what} {where} {when}.</p>
                    <p className="time">{sentence.created}</p>
                </div>
                <div className="delete" onClick={() => removeSentence(sentence.id)}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
        )
    })

    return (
        <div className="sentenceContainer">
            {displaySentences}
        </div>
    )
}

export default Sentenses;