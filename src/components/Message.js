import React from 'react';

function Message(props) {

        return (
            <div>
                <h4> From: {props.data.sender}</h4>
                <h4>{props.data.content}</h4>
            </div>
        );
}

export default Message;
