import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Conversation from './Conversation';
import Header from './Header';
import Footer from './Footer';
import ConversationList from './ConversationsList';



function App() {
  return (
    <div>
      <Header/>
      <ConversationList className="sidebar"/>
      <Router>
        <Switch>
          <Conversation className="conversation"/>
        </Switch>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
