import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div>
    <Router>
    <Header />

    <HelloWorld name="tlfzg"/>

    <Switch>
      <Route exact path="/">
        <h1 className="font-bold text-2xl"> This is the home page</h1>
      </Route>
      <Route path="/about">
      <h1 className="font-bold text-2xl"> About us</h1>
      </Route>
    </Switch>

    </Router>
     <Footer />
   </div>
  );
}

export default App;
