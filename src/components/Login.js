import React from 'react';
import { connect } from 'react-redux';
import {login} from '../redux/actions/index.js'

class Login extends React.Component {

    constructor(){
        console.log("hello this is login page")
        super()
        this.state={
            username: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state)
        this.props.login(this.state)
    }
    
    render(){
        return(
        <div className="login_form">
            <form onSubmit={this.handleSubmit}>
                <label>Please Log In</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                
                <br></br>
                <input type="submit" value="Send" />
            </form>
        </div>
        )
    }
}

export default connect(null, {login})(Login)

