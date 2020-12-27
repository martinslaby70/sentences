import React from 'react'

//context
import { SentencesContextProvider } from './contexts/sentenceContext';

//components
import FormContainer from './components/form/formContainer';
import Sentenses from './components/sentences';


const App = () => {


  return(
    <SentencesContextProvider>
      <FormContainer />
      <Sentenses />    
    </SentencesContextProvider>
  )
}

export default App;
