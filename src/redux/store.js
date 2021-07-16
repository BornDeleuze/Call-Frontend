import {createStore} from 'redux'


const conversationsAll = [
    {id: 1, name: "Krop", messages: [
        {id: 1, content: "Hi how are you", sender:1, conversation_id: 1},
        { id: 2, content: "Ok how you doing?", sender: 2, conversation_id: 1},
        { id: 3, content: "Just busy with things you knowwww", sender: 1, conversation_id: 1},
        { id: 4, content: "You wanna go swimming?", sender: 1, conversation_id: 1},
        { id: 5, content: "O hell yeah lets goooooo", sender: 2, conversation_id: 1}
    ]},
    {id: 2, name: "M Shelly", messages: [
        {id: 6, content: "Hi how are you", sender:1, conversation_id: 1},
        { id: 7, content: "Ok how you doing?", sender: 2, conversation_id: 1},
        { id: 8, content: "Just busy with things you knowwww", sender: 1, conversation_id: 1},
        { id: 9, content: "You wanna go swimming?", sender: 1, conversation_id: 1},
        { id: 10, content: "O hell yeah lets goooooo", sender: 2, conversation_id: 1}
    ]},
    {id: 3, name: "Emma G", messages: [
        {id: 11, content: "Hi how are you", sender:1, conversation_id: 1},
        { id: 12, content: "Ok how you doing?", sender: 2, conversation_id: 1},
        { id: 13, content: "Just busy with things you knowwww", sender: 1, conversation_id: 1},
        { id: 14, content: "You wanna go swimming?", sender: 1, conversation_id: 1},
        { id: 15, content: "O hell yeah lets goooooo", sender: 2, conversation_id: 1}
    ]},
    {id: 4, name: "Slavoj", messages: [ 
        {id: 16, content: "Hi how are you", sender:1, conversation_id: 1},
        { id: 17, content: "Ok how you doing?", sender: 2, conversation_id: 1},
        { id: 18, content: "Just busy with things you knowwww", sender: 1, conversation_id: 1},
        { id: 19, content: "You wanna go swimming?", sender: 1, conversation_id: 1},
        { id: 20, content: "O hell yeah lets goooooo", sender: 2, conversation_id: 1}
    ]},
]

// const messagesAll = [
//     { id: 1, content: "Hi how are you", sender:1, conversation_id: 1},
//     { id: 2, content: "Ok how you doing?", sender: 2, conversation_id: 1},
//     { id: 3, content: "Just busy with things you knowwww", sender: 1, conversation_id: 1},
//     { id: 4, content: "You wanna go swimming?", sender: 1, conversation_id: 1},
//     { id: 5, content: "O hell yeah lets goooooo", sender: 2, conversation_id: 1},
// ]

function rootReducer(state = conversationsAll, action){
    switch(action.type){

        case "GET_MESSAGES":
            return [...action.payload]

        case "GET_CONVERSATIONS":
            return [...action.payload]

        default: return state
    }
}

let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store