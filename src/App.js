import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>  
    <div className="app">
      <Header />

      <div className="app_body">
      <Sidebar />
      <Switch>
        <Route path="/mail">
          <Mail />
        </Route>
        <Route path="/">
          <EmailList />
        </Route>
      </Switch>
      </div>

      { sendMessageIsOpen && < SendMail />}
    </div>
    </Router>
  );
}

export default App;

// Header and Sidebar are outside the Switch so when we change into different pages
// the two main components always stays in place.
// Inside the Switch we have a Route. Route is a gateway or another page nested withing the component
// use the method useHistory and push to interact with a Route path given to any icon or container.