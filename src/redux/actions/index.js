import { API_ROOT } from '/Users/mattb/Flatiron/code/Call/call/src/constants/index.js';
// import store from '/Users/mattb/Flatiron/code/Call/call/src/index.js'

export const login =(username)=>{
    return{
        type: "LOGIN", payload: username
    }
}

export const fetchConversations =()=>{
    return (dispatch)=>{
        // console.log("HELLLOOO WE ARE IN THE FETCH FUNCTION")
        fetch(`${API_ROOT}/conversations`)
        .then(resp => resp.json())
        .then(conversations => { 
            dispatch({ 
                type: "FETCH_CONVO", payload: conversations 
            })
        })
    }
}

export const addNewConversation =(conversation)=>{
    return{
        type: "ADD_CONVERSATION", payload: conversation
    }
}

export const addNewMessage =(message)=>{
    return{
        type: "ADD_MESSAGE", payload: message
    }
}