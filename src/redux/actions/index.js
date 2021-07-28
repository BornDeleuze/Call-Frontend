import { API_ROOT, HEADERS } from '/Users/mattb/Flatiron/code/Call/call/src/constants/index.js';
import store from '../store'


export const fetchConversations =()=>{
    return (dispatch)=>{
        fetch(`${API_ROOT}/conversations`)
        .then(resp => resp.json())
        .then(conversations => { 
            dispatch({ 
                type: "FETCH_CONVO", payload: conversations 
            })
        })
    }
}

export const login =(username)=>{
    return(dispatch) => {
        return fetch('http://localhost:3000/users', {
            method: 'POST', 
            headers: HEADERS, 
            body: JSON.stringify({name: username})
        })
        .then(response => response.json())
        .then(user => {
            dispatch({ type: 'LOGIN', payload: user })
        })
    }
}

export const addNewConversation =(newConversation)=>{
    return(dispatch) => {
        return fetch('http://localhost:3000/conversations', {
            method: 'POST', 
            headers: HEADERS, 
            body: JSON.stringify({conversation: newConversation})
        })        
    }
}
export const addConversationToRedux = (newConversation) => {
    store.dispatch({
    type: 'ADD_CONVERSATION', payload: newConversation
    })
}



export const addNewMessage = (newMessage) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/messages', {
            method: 'POST', 
            headers: HEADERS, 
            body: JSON.stringify({message: newMessage})
        })
    }
}
export const addMessageToRedux = (newMessage) => {
    store.dispatch({
    type: 'ADD_MESSAGE', payload: newMessage
    })
}


export function logout() {
    return {
        type: "LOGOUT" 
    }
}


