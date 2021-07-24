import React from "react";
import {connect} from 'react-redux';
import {addNewMessage} from '../redux/actions/index.js'

class NewMessage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content: "",
            user_id: this.props.user.id,
            conversation_id: this.props.selectedConvo.id

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({content: event.target.value});
      }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.addNewMessage(this.state)
        this.setState({content: ""});
    }
    render(){
            return (
                <form onSubmit={this.handleSubmit} className="message_form">
                <label>
                    <textarea value={this.state.content} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Send" />
            </form>
        )
    }
}

const mapStateToProps =(state)=>{
    return{ 
        user: state.login.user
    }
  }

export default connect(mapStateToProps, {addNewMessage})(NewMessage)