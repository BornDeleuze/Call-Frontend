import React from 'react'


import Conversation from '../Conversation'

function ConversationList(props){
    console.log(props)
    const allConversations = props.conversationsPortal.map((convo)=>{
        return <Conversation key={convo.id} convo={convo} />
    })
    return(
    <div className="conversation">
        {allConversations}
    </div>
    )
}
export default ConversationList