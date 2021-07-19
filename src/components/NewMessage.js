import React from "react";
import {connect} from 'react-redux';
import {addNewMessage} from '../redux/actions/index.js'

class NewMessage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content: "",
            user_id: "1",
            conversation_id: this.props.selectedConvo

            /*
                set USER _ ID to logged in user!
            */

        }
    }
    

    handleChange(event) {
        this.setState({content: event.target.value});
      }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state)
        this.props.addNewMessage( this.state )

        this.setState({value: ""});
    }
    render(){
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default connect(null, {addNewMessage})(NewMessage)