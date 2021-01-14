import React from 'react'

//redux
import { store } from './redux/store';
import { Provider } from "react-redux";

//components
import FormContainer from './components/form/formContainer';
import Sentenses from './components/sentences';


const App = () => {


  return(
    <Provider store={store}>
      <FormContainer />
      <Sentenses />    
    </Provider>
  )
}

export default App;
