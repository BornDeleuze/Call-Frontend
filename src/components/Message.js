import React from 'react';

function Message(props) {

        return (
            <div  className="message">
                <h4>{props.data.username}:  {props.data.content}</h4>
            </div>
        );
}

export default Message;
