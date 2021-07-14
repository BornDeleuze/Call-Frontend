import React from 'react';
import Message from './Message';
import NewMessage from './NewMessage';
import { connect } from "react-redux"

function Conversations(props) {


    const allMessages = props.messagePortal.map(  (message)=>{  return <Message key={message.id} data={message} /> }  )

  return (
    <div>
     
    {allMessages}
      <NewMessage/>
      
    </div>
  );

}

const mapStateToProps =(state)=>{

    return{ messagePortal: state 
    }
}


export default connect(mapStateToProps)(Conversations);

