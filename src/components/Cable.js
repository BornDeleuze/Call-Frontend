import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';


const Cable = ({ conversations, handleReceivedMessage }) => {
  return (
    <div key="cablekey">
      {conversations.map(conversation => {
        return (<>
          <ActionCableConsumer
            key={conversation.id}
            channel={{ key: conversation.id, channel: 'MessagesChannel', id: conversation.id }}
            onReceived={(data) => handleReceivedMessage(data)}
          />
        </>
        );
      })}
    </div>
  );
};


export default Cable;