import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import themeObject from "./theme";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

// MUI Stuff
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme(themeObject);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
