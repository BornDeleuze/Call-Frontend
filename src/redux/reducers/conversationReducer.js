// eslint-disable-next-line
export default (state = [], action)=> {



    switch(action.type){

        case "FETCH_CONVO":
            return [...action.payload]
        
        case "ADD_CONVERSATION":
            return [...state, action.payload]

        case "ADD_MESSAGE":
            const convosAll = state            
            const selectedConvoIndex = action.payload.conversation_id-1
            const selectedConversation = convosAll[selectedConvoIndex]
            const updatedConversation = {...selectedConversation, messages:[...selectedConversation.messages, action.payload]}
            const newState = [...state]
            newState[selectedConvoIndex] = updatedConversation
            return newState

        default: 
            return state
    }
}