import React from 'react'
import { connect } from "react-redux"
import Conversation from './Conversation'

 ConversationList(props){

    const allConversations = props.conversationsPortal.map((convo)=>{
        return <h2 key={convo.name}>{convo.name}</h2>
        // return <Conversation key={convo.id} convo={convo} />
    })
    return(
    <div className="conversation_list">
        {allConversations}
    </div>
    )
}

const mapStateToProps =(state)=>{
    return{ 
            conversationsPortal: state
            
    }
}


export default connect(mapStateToProps)(ConversationList);