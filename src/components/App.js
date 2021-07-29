import React, { Component } from 'react';
import '../App.css';

import { Redirect, Switch, Route} from 'react-router-dom'
import { connect } from "react-redux"
import Header from './Header';
import Footer from './Footer';
import ConversationList from './ConversationsList';
import Login from './Login'
import About from './About'
import Logout from './Logout';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        user: this.props.user
    }  
  }

  

  

  render(){

    return (
      <>
      
        <Header/>
        
            <Switch>

              <Route exact path="/login">
                <Login />
              </Route>
              
              <Route exact path='/'>
              
                {this.props.user==="" ? <Redirect to=
                  {{
                  pathname: "/login",
                  state: { alert: "please log in" }
                  }}
                />:null}
                
                <ConversationList className="sidebar"/>
            
              </Route>

              <Route exact path='/about'>
                <About/>
              </Route>

              <Route exact path='/logout'>
                  <Logout/>
              </Route>

            </Switch>
          <Footer/>
      </>
    )};
}
const mapStateToProps =(state)=>{
  return{ 
      user: state.login.user
  }
}

export default connect(mapStateToProps)(App);