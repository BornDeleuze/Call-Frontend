import React, { Component } from 'react';

function Message(props) {
    console.log(props)
    
    
    
    
    
    
    
        return (
            <div>
                <h4> From: {props.data.sender}</h4>
                <h4>{props.data.content}</h4>
            </div>
        );
}

export default Message;
