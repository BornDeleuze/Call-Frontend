import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { NavLink } from 'react-router-dom';

const Cable = ({ conversations, handleFetchedMessage }) => {
  return (
    <>
      {conversations.map(conversation => {
        const url = "/conversation"+conversation.id
        return (<>
          <ActionCableConsumer
            key={conversation.id}  
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleFetchedMessage}
          />
        <NavLink to={url} className="convo_link"><h5>{conversation.name}</h5></NavLink>  
        </>
        );
      })}
    </>
  );
};

export default Cable;
// this code renders the list of conversations but it should not be in cable
{/* <NavLink to={url} className="convo_link"><h5>{conversation.name}</h5></NavLink> */}