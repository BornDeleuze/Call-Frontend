import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Conversations from './Conversation';
import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Header/>
      {/* <Switch> */}
        <Conversations className="sidebar"/>
      {/* </Switch> */}
      <Footer/>
      
    </div>
  );
}

export default App;
