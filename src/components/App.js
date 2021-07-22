import React, { Component } from 'react';
import '../App.css';
import { Redirect, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import ConversationList from './ConversationsList';
import Login from './Login'
import About from './About'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
        conversations: [],
        selectedConversation: null,
        username: null
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
                {/* {!this.state.username ? <Redirect to=
                  {{
                  pathname: "/login",
                  state: { alert: "please log in" }
                  }}
                />:null} */}
                <ConversationList className="sidebar"/>
              </Route>

              <Route exact path='/about'>
                <About/>
              </Route>

              <Route exact path='/logout'>

              </Route>
            </Switch>
          <Footer/>
      </>
    )};
}

// const mapStateToProps =(state)=>{
//   return{ 
//           conversationsPortal: state
//   }
// }

export default App;