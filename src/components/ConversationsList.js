import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from './Cable';
import { connect } from "react-redux"
import { fetchConversations } from '../redux/actions';

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
        this.handleFetchedConversation = this.handleFetchedConversation.bind(this);
    }

    

    //simple compdidmount fetch
    // componentDidMount = () => {
    //     fetch(`${API_ROOT}/conversations`)
    //         .then(res => res.json())
    //         .then(convos => this.setState({ conversations: convos }))
    // };
    

    componentDidMount(){
        this.props.fetchConversations()
    }

    handleFetchedConversation = response => {
        console.log(response)
        const { conversation } = response;
        this.setState({
        conversations: [...this.state.conversations, conversation]
        });
    };

    
    render(){
        const { conversations } = this.state;
        return(
            
        <div className="conversation_list">
            
            <ActionCableConsumer
                channel={{ channel: 'ConversationsChannel' }}
                onReceived={this.handleFetchedConversation}
            />
            <br></br>
            <Cable
                conversations={conversations}
                handleReceivedConversation={this.handleReceivedConversation}
          />
          <NewConversation/>
        </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{ 
            conversationsPortal: state
    }
}

// use this with simple fetch in compdidmount
// export default connect(mapStateToProps)(ConversationList);

export default connect(mapStateToProps, {fetchConversations})(ConversationList);