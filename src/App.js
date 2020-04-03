import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/home2";
import Friends from "./Components/SocialMeet/friends";
import Header from "./Components/Header";
import Business from "./Components/SocialMeet/business";
import Jobs from "./Components/SocialMeet/jobs";
import ProHome from "./Components/Professional";
import { createBrowserHistory } from "history";

function App() {
    const history = createBrowserHistory();

    return (
        <div className="App">
            <Router>
                {/* {window.location.pathname !== "/" ? <Header /> : null} */}
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/friends">
                        <Friends />
                    </Route>
                    <Route path="/portfolio">
                        <Business />
                    </Route>
                    <Route path="/experience">
                        <ProHome />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
