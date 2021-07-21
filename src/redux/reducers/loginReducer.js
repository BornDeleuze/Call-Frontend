export default (state = [], action)=> {

    switch(action.type){

        case "LOGIN":
            console.log(action.payload)
            return [...state, action.payload]
        
        default: 
            return state
    }
}