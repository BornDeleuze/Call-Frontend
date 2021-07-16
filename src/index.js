import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store'
// import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux'
// import rootReducer from './redux/reducers'

import {ActionCableProvider} from 'react-actioncable-provider'
import { API_WS_ROOT } from './constants';
import App from './components/App';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

// let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
// let store = createStore(rootReducer, composeEnhancer))
// let store = createStore(rootReducer)

ReactDOM.render(
  
  <React.StrictMode>
    <ActionCableProvider url={API_WS_ROOT}>
      <Provider store = {store}>
      
        <App />

      </Provider>
    </ActionCableProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
