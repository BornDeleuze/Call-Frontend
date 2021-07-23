import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';


const Cable = ({ conversations, handleReceivedMessage }) => {
  return (
    <>{console.log(conversations)}
      {conversations.map(conversation => {
        return (<>
          <ActionCableConsumer
            key={conversation.id}
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          />
        </>
        );
      })}
    </>
  );
};

export default Cable;