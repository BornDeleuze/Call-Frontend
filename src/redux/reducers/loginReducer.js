export default (state = {
    user: ""
}, action)=> {

    switch(action.type){

        case "LOGIN":
            console.log(action.payload)
            return {user: action.payload}
        
        default: 
            return state
    }
}