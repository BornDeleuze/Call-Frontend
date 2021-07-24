
export default ( state = {
    messages:[] 
}, action ) => {

    switch(action.type){
        
        case "ADD_MESSAGEAA":
            console.log(state)
            return {...state, messages:action.payload};

        default: 
            return state
    }
}


