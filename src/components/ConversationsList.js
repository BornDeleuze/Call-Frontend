import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from './Cable';
import { connect } from "react-redux"
import { fetchConversations } from '../redux/actions';
import { API_ROOT } from '/Users/mattb/Flatiron/code/Call/call/src/constants/index.js';

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

    componentDidMount(){
        console.log(this.props.conversationsPortal)
        this.setState({ conversations: this.props.conversationsPortal})
            // ((convo)=>{ return <h5> key={convo.id} name={convo.name}</h5>})
        
        console.log(this.state)
    }

    //simple compdidmount fetch, but not mapping to state
    componentDidMount = () => {
        fetch(`${API_ROOT}/conversations`)
            .then(res => res.json())
            .then(convos => this.setState({ conversations: convos }))
    };
      
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.fetchConversations()
    // }

    handleFetchedConversation = response => {
        const { conversation } = response;
        this.setState({
        conversations: [...this.state.conversations, conversation]
        });
    };

    
    render(){
        const { conversations } = this.state;
        return(
            
        <div className="conversation_list">
            <NewConversation/>
             
            <ActionCableConsumer
                channel={{ channel: 'ConversationsChannel' }}
                onReceived={this.handleFetchedConversation}
            />
            <br></br>
            <Cable
                conversations={conversations}
                handleReceivedConversation={this.handleReceivedConversation}
          />
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