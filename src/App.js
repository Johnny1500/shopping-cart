import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className="container">
            
              <Navbar/>
              
             </div>
       </BrowserRouter>
    );
  }
}

export default App;
