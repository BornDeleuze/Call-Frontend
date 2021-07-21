import React from "react";
import {connect} from 'react-redux';
import {addNewConversation} from '../redux/actions/index.js'

class NewConversation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            // receiver: "Receiver",
            user_id: "1",
            conversationName: "Conversation Name"

            /*
                set USER _ ID to logged in user!
            */

        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            // [event.target.receiver]: event.target.value,
            [event.target.name]: event.target.value
        });
        
      }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.addNewConversation( this.state )

        // this.setState({value: ""});
    }
    render(){
            return (
            <form onSubmit={this.handleSubmit} className="new_conversation">
                <label>
                    {/* <input 
                        type="text" 
                        name= "receiver" 
                        value={this.state.receiver} 
                        onChange={this.handleChange} 
                    /> */}

                    <input 
                    type="text" 
                    name= "conversationName"
                    value={this.state.conversationName} 
                    onChange={this.handleChange} 
                    />

                </label>
                <br></br>
                <input type="submit" value="New Conversation" />
            </form>
        )
    }
}

export default connect(null, {addNewConversation})(NewConversation)
// export default connect(null)(addNewConversation)