// eslint-disable-next-line
export default (state = {
    user: ""
}, action)=> {

    switch(action.type){

        case "LOGIN":
            return {user: action.payload}

        default: 
            return state
    }
}