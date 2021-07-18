const messageAll = [
    
    { id: 1, sender:1, content: "Hi how are you"},

    { id: 2, sender: 2,content: "Ok how you doing?"},
    { id: 3, sender: 1,content: "Just busy with things you knowwww"},
    { id: 4, sender: 1,content: "You wanna go swimming?"},
    { id: 5, sender: 2,content: "O hell yeah lets goooooo"},
]

export default function messageReducer (state = messageAll, action){
    const addNewMessage =()=>{ 
        return{
            ...action.payload
        }
    } 

    switch(action.type){

        case "GET_MESSAGES":
            return [...action.payload]

        case "ADD_MESSAGE":
            console.log("HELLLLLO", state[0])
            return [...state, addNewMessage()]

        default: 
            return state
    }
}

