import React from "react";
import { HomePage, Prueba } from "./containers";
import { Redirect, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.sass";
import "./App.css";
// import "./App.sass";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/prueba" component={Prueba} />
        <Redirect path="/" to="/not-found" />
      </Switch>
    </>
  );
};

export default App;
