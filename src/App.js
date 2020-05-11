import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/home2";
import NonMobile from "./Components/nonMobile";
import Friends from "./Components/SocialMeet/friends";
import Header from "./Components/Header";
import Business from "./Components/SocialMeet/business";
import Jobs from "./Components/SocialMeet/jobs";
import ProHome from "./Components/Professional";
import { createBrowserHistory } from "history";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
    const history = createBrowserHistory();

    return (
        <div className="App">
            <div className="mobile-only">
                <Router>
                    {/* {window.location.pathname !== "/" ? <Header /> : null} */}
                    <Route
                        render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={300}
                                >
                                    <Switch location={location}>
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
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                </Router>
            </div>
            <div className="non-mobile">
                <NonMobile />
            </div>
        </div>
    );
}

export default App;
