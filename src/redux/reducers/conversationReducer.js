


export default (state = [], action)=> {

    switch(action.type){

        case "FETCH_CONVO":
            return [...action.payload]
        
        default: 
            return state
    }
}