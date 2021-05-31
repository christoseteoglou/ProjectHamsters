import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
