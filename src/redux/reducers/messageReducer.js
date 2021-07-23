
export default ( state = {
    messages:[] 
}, action ) => {

    switch(action.type){
        
        case "ADD_MESSAGE":
            console.log("this is the reducer")
            return {...state, messages:action.payload};

        default: 
            return state
    }
}


