import React, { useState } from 'react'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
//components
import SentenceForm from './sentenceForm';

//scss
import './../../scss/form.scss'


const FormContainer = () => {

    const [isCompressed, setCompression] = useState(true);

    const formClasses = isCompressed ? 'formContainer compressed' : 'formContainer openned';
    const arrowIcon = <FontAwesomeIcon icon={isCompressed ? faArrowDown : faArrowUp } />;
    

    return(
        <div className={formClasses}>
            <div onClick={() => setCompression(!isCompressed)} className="header">
                <h2>Add sentence</h2>
                <span>{arrowIcon}</span>
            </div>
            
            <SentenceForm />
        </div>
    )
}

export default FormContainer;