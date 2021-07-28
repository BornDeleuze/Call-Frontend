import {combineReducers} from 'redux'
import conversations from './conversationReducer'
import login from './loginReducer'


const appReducer =  combineReducers({

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
