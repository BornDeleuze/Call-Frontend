import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Conversations from './Conversation';
import Header from './Header';
import Footer from './Footer';
import ConversationList from './components/ConverationsList';



function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Conversations className=""/>
        </Switch>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
