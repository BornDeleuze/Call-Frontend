import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'
import Conversation from './Conversation';
import Header from './Header';
import Footer from './Footer';
import ConversationList from './ConversationsList';
import Login from './Login'
import { API_ROOT } from '../constants';
import { connect } from "react-redux"
import { LoginVerification } from './LoginVerification';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
        conversations: [],
        selectedConversation: null,
        username: null
    }  
  }

  componentDidMount = () => {
        fetch(`${API_ROOT}/conversations`)
            .then(res => res.json())
            .then(convos => this.setState({ conversations: convos }))
    };
  

  render(){

    return (
      <>
        <Header/>
          <Router>
            <Switch>
              {/* <LoginVerification username={this.state.username}/> */}
              

              <Route exact path="/login">
                <Login path="/login" />
              </Route>

              <Route exact path='/'>
                {this.state.username ? <Redirect to="/login"/>:<h1>hello</h1>}
                <ConversationList className="sidebar"/>
                <Conversation selectedConvo= "0" className="conversation"/>
              </Route>

            </Switch>
          </Router>
        <Footer/>
      </>
    )};
}

const mapStateToProps =(state)=>{
  return{ 
          conversationsPortal: state
  }
}

export default connect(mapStateToProps)(App);