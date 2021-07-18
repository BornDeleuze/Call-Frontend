import React from 'react';
import Message from './Message';
import NewMessage from './NewMessage';
import { connect } from "react-redux"

function Conversation(props) {

  // selectedConvo into an actual selected message
  // gotta get the conversation ID, and the sender_id

  const selectedConvo = props.selectedConvo

  const allMessages = props.messagePortal[selectedConvo].messages.map((message)=>{  
    return <Message key={message.id} data={message} /> 
  })


  return (
    <div className="conversation">
     
    {allMessages}

    <NewMessage selectedConvo={selectedConvo}/>
      
    </div>
  );
}

const mapStateToProps =(state)=>{
    return{ messagePortal: state
    }
}


export default connect(mapStateToProps)(Conversation);

