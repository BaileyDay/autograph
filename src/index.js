import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/noMatch";
import About from "./components/about";
import Lessons from "./components/lessons";
import Boarding from "./components/boarding";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" exact component={About} />
        <Route path="/lessons" exact component={Lessons} />
        <Route path="/boarding" exact component={Boarding} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
