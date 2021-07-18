import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Conversation from './Conversation';
import Header from './Header';
import Footer from './Footer';
import ConversationList from './ConversationsList';
import FetchConvesations from './FetchConvesations';



// change to class, to have lifecycle component did mount
function App() {


  //go fetch the all the things in compdidmount


  return (
    <>
      {/* <FetchConvesations/> */}
      <Header/>
        <Router>
          <ConversationList className="sidebar"/>
          <Switch>
            <Conversation selectedConvo= "0" className="conversation"/>
          </Switch>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
