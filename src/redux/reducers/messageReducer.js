
export default ( state = {
    messages:[] 
}, action ) => {

    switch(action.type){
        
        case "ADD_MESSAGE":
            console.log(state, action.payload)
            return {...state, messages:action.payload};

        default: 
            return state
    }
}


