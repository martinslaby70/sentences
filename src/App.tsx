import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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

      <LazyLoadComponent>
        <Sentenses />   
      </LazyLoadComponent> 

    </Provider>
  )
}

export default App;
