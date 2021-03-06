import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store'
import {ActionCableProvider} from 'react-actioncable-provider'
import { API_WS_ROOT } from './constants';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  
  <React.StrictMode>
  
    <ActionCableProvider url={API_WS_ROOT}>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </ActionCableProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
