import React from 'react';
import "./nav.css";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Home from "./Home";
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import complete from "./complete";
import Tree from "./Tab2test";

function App() {
    return (
        <div className="App">
            <Router>
                {window.location.pathname !== '/complete' && (
                    <div className="nav">
                        <nav>
                            <ul className="align-items">
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/tab1">PDFs</Link>
                                </li>
                                <li>
                                    <Link to="/tab2">Narrative</Link>
                                </li>
                                <li>
                                    <Link to="/tab2test">Forms</Link>
                                </li>

                                {/*<li>*/}
                                {/*    <Link to="/complete">complete</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </nav>
                    </div>
                )}
                {/* goes to home page upon starting */}
                <Route exact path="/" render={() => <Redirect to="/home" />} />

                <Route path="/home" component={Home} />
                <Route path="/tab1" component={Tab1} />
                <Route path="/tab2" component={Tab2} />
                <Route path="/tab2test" component={Tree} />
                <Route path="/complete" component={complete} />
            </Router>
        </div>
    );
}

export default App;
