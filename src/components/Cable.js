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

        <NavLink to={url} className="convo_link">{conversation.name}</NavLink>
        </>
        );
      })}
    </>
  );
};

export default Cable;