import React from 'react';
import Message from './Message';
import NewMessage from './NewMessage';
import { connect } from "react-redux"

function Conversation(props) {
  
    // selectedConvo into an actual selected message
    // gotta get the conversation ID, and the sender_id
    const selectedConvoIndex = props.selectedConversation - 1
    // const convo = props.messagePortal.conversations.filter(convo=>convo.id===selectedConvoNumber)
    const convo = props.messagePortal.conversations[selectedConvoIndex]
    

    const allMessages = convo.messages.map(message=>{
      return <Message key={message.id} data={message} /> 
    })

    


    return (
      <div className="conversation">
      
      {allMessages}
      <NewMessage selectedConvo={convo}/>
        
      </div>
    );
  
}

const mapStateToProps =(state)=>{
    return{ messagePortal: state
    }
}


export default connect(mapStateToProps)(Conversation);

