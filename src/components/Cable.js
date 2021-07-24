import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';


const Cable = ({ conversations, handleReceivedMessage }) => {
  return (
    <>
      {conversations.map(conversation => {
        return (<>
          <ActionCableConsumer
            key={conversation.id}
            channel={{ key: conversation.id, channel: 'MessagesChannel', id: conversation.id }}
            // onReceived={console.log("HELLLOOOO")}
            onReceived={(data) => handleReceivedMessage(data)}
          />
          {/* {console.log(conversation.id)} */}
        </>
        );
      })}
    </>
  );
};


export default Cable;