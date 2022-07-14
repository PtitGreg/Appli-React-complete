import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error/index";
import Results from "./pages/Results"
import Freelances from "./pages/Freelances"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Header />
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/survey/:questionNumber">
				<Survey />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
      <Route>
        <Freelances />
      </Route>
			<Route>
				<Error />
			</Route>
		</Switch>
	</Router>
);
