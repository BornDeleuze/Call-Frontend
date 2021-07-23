import {combineReducers} from 'redux'
import messages from './messageReducer'
import conversations from './conversationReducer'
import login from './loginReducer'

// const initialState = {
//     login: {
//         user:""
//     },
    
//   }


const appReducer =  combineReducers({
    messages,

    login,

    conversations

})
  
const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        console.log()
      return appReducer(undefined, action)
    }
  
    return appReducer(state, action)
  }

export default rootReducer

// export default combineReducers({
//     messages,
//     login,
//     conversations
// })