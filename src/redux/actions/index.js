import { API_ROOT } from '/Users/mattb/Flatiron/code/Call/call/src/constants/index.js';
// import store from '/Users/mattb/Flatiron/code/Call/call/src/index.js'

export const addNewMessage =(message)=>{
    return{

        type: "ADD_MESSAGE", payload: message

    }

}

export const fetchConversations =()=>{
    return (dispatch)=>{
        // console.log("HELLLOOO WE ARE IN THE FETCH FUNCTION")
        fetch(`${API_ROOT}/conversations`)
        .then(resp => resp.json())
        .then(convos => { dispatch({ type: "FETCH_CONVO", payload: convos })
        })
    }
}