import './App.css';
import './components/decipher.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Decipher from "./components/decipher"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Decipher}/>
      </Switch>
    </Router>
  );
}

export default App;
