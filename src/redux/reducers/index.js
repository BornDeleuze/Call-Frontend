import {combineReducers} from 'redux'
import messages from './messageReducer'
import conversations from './conversationReducer'
import login from './loginReducer'


export default combineReducers({
    // messages,

    login,

    conversations

})