import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


// normal store set-up and export
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store


//saga middleware export 
// function setupStore(initialState){
//     const sagaMiddleware = createSagaMiddleware()
//     const store = createStore(
//         rootReducer, initialState, applyMiddleware(
//           sagaMiddleware)
//     )
//     sagaMiddleware.run(saga)
//     return store
// }
// export default setupStore