import React from "react";
import {connect} from 'react-redux';
import {addNewConversation} from '../redux/actions/index.js'

class NewConversation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user_id: this.props.user.id,
            name: "Conversation Name"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
        
      }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.addNewConversation( this.state )
        this.setState({name: ""});
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
                    name= "name"
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    />

                </label>
                <br></br>
                <input type="submit" value="New Conversation" />
            </form>
        )
    }
}

const mapStateToProps =(state)=>{
    return{ 
        user: state.login.user
    }
}

export default connect(mapStateToProps, {addNewConversation})(NewConversation)