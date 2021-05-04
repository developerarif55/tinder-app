import React from 'react';
import './App.css';
import ChatScreen from "./ChatScreen";
import Chats from "./Chats";
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">

<Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//  {/* header */}
//  {/* tender cards */}
//  {/* message screen */}
//  {/* individual  meaasage */}
