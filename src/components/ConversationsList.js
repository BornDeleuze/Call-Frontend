import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from './Cable';
import { connect } from "react-redux"
import { fetchConversations } from '../redux/actions';
import Conversation from './Conversation';

import NewConversation from './NewConversation';

class ConversationList extends Component{
    constructor(props){
        super(props)

        this.state = {
            // username: "",
            conversations: [],
            selectedConversation: null,
            hello: ""
        }
        this.handleReceivedConversation = this.handleReceivedConversation.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchConversations()
        this.setState({})
    }

    handleClick(id){
        this.setState({ selectedConversation: id });
      };

    handleReceivedConversation = response => {
        const { conversation } = response;
        this.setState({
        conversations: [...this.state.conversations ,conversation]
        });
    };

    handleReceivedMessage = response => {
        const { message } = response;
        const conversations = [...this.state.conversations];
        const conversation = conversations.find(
          conversation => conversation.id === message.conversation_id
        );
        conversation.messages = [...conversation.messages, message];
        this.setState({ conversations });
    };
    
    render(){
        const { conversations, selectedConversation } = this.state;
        return(
           
        <>
            <div className="conversation_list">
                
                <ActionCableConsumer
                    channel={{ channel: 'ConversationsChannel' }}
                    onReceived={this.handleReceivedConversation}
                />
                <div>{listConversations(this.props.conversations, this.handleClick)}</div>
                
                <Cable
                    conversations={conversations}
                    handleReceivedMessage={this.handleReceivedMessage}
                />
                <NewConversation/>
            </div>
            
            {selectedConversation ? (
                <Conversation selectedConversation={selectedConversation}/>
            ):(
                <div className="conversation">
                <h4>please select a conversation on the left</h4>
                </div>
            )}
        </>
        )
    }
}

const mapStateToProps =(state)=>{
    return{ 
            // conversationsPortal: state
            conversations: state.conversations
    }
}

const listConversations = (conversations, handleClick) => {
    return conversations.map(convo => {
      return (
        <h5 key={convo.id} onClick={() => handleClick(convo.id)}>
          {convo.name}
        </h5>
      );
    });
}

// use this with simple fetch in compdidmount
// export default connect(mapStateToProps)(ConversationList);

export default connect(mapStateToProps, {fetchConversations})(ConversationList);