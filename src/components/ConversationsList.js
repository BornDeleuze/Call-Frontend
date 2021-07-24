import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from './Cable';
import { connect } from "react-redux"
import { addConversationToRedux, addMessageToRedux, fetchConversations } from '../redux/actions';
import Conversation from './Conversation';
import NewConversation from './NewConversation';

class ConversationList extends Component{
    constructor(props){
        super(props)

        this.state = {
            // username: "",
            conversations: [],
            selectedConversationId: null,
            hello: ""
        }
        this.handleReceivedConversation = this.handleReceivedConversation.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchConversations()
        this.setState({
            conversations: this.props.conversations
        })
    }

    handleClick(id){
        this.setState({ selectedConversationId: id });
      };

    handleReceivedConversation = response => {
        const { conversation } = response;
        addConversationToRedux(conversation)
    };

    handleReceivedMessage = response => {
        const { message } = response;
        addMessageToRedux(message)
    };
    
    render(){
        const { conversations, selectedConversationId } = this.state;
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
            
            {selectedConversationId ? (
                <Conversation selectedConversationId={selectedConversationId}/>
        
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

export default connect(mapStateToProps, {fetchConversations})(ConversationList);