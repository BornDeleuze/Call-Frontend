import React from 'react';

function Message(props) {

        return (
            <div>{}
                <h4 className="message"> From: {props.data.user_id}</h4>
                <h4>{props.data.content}</h4>
            </div>
        );
}

export default Message;
