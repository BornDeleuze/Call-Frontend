export default function messageReducer (state = messageAll, action){
    const addNewMessage =()=>{ 
        return{
            ...action.payload
        }
    } 

    switch(action.type){

        case "ADD_MESSAGE":
            return [...state, addNewMessage()]

        default: 
            return state
    }
}

