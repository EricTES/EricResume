import React, { Component } from "react";
import {Route} from 'react-router-dom';
import HomePage from "./HomePage";
import Contact from './Components/Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Route path="/contact"  component={Contact} />
        <Route path="/" exact component={HomePage} />
      </div>
    );
  }
}
export default App;
