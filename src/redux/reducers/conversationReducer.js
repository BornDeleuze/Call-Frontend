export default (state = [], action)=> {



    switch(action.type){

        case "FETCH_CONVO":
            return [...action.payload]
        
        case "ADD_CONVERSATION":
            return [...state, action.payload]

        
        default: 
            return state
    }
}