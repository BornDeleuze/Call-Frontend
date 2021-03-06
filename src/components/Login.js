import React from 'react';
import { connect} from 'react-redux';
import {login} from '../redux/actions/index.js'
import { Redirect } from 'react-router';

class Login extends React.Component {

    constructor(){
        super()
        this.state={
            user: null,
            username: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        
    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({username: event.target.value});
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.login(this.state)
    }
    
    render(){
        return(
        <div className="login_form">
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <label>Please Enter Your Handle</label>
                <br></br><br></br><br></br>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                
                <br></br>
                <input type="submit" value="Send" />
            </form>
            {this.props.user ? <Redirect to={{pathname: "/"}} />:null}
        </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{ 
            user: state.login.user
    }
  }

export default connect(mapStateToProps, {login})(Login)

