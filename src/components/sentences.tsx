import React, { useContext } from 'react'
import { SentencesContext } from '../contexts/sentenceContext';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons'

//scss
import './../scss/sentences.scss'

const Sentenses = () => {

    const {sentences, removeSentence} = useContext(SentencesContext)!;
    
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