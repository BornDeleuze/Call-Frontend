import {createStore} from 'redux'


const conversationsAll = [
    
    { id: 1, sender:1, content: "Hi how are you"},

    { id: 2, sender: 2,content: "Ok how you doing?"},
    { id: 3, sender: 1,content: "Just busy with things you knowwww"},
    { id: 4, sender: 1,content: "You wanna go swimming?"},
    { id: 5, sender: 2,content: "O hell yeah lets goooooo"},
]

function rootReducer(state = conversationsAll, action){
    switch(action.type){
        default: return state
    }
}

let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store