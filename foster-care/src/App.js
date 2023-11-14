import React from 'react';
import "./nav.css";
import "./App.css";
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import Index from "./Case 1/tabs";
import FORMS from './Case 1/tabs/forms';
import complete from "./Case 1/complete";
import narrative from "./Case 1/tabs/narrative";
import PDFS from "./Case 1/tabs/pdfs";
import likertScale from "./Case 1/tabs/Likert";

function App() {
    return (
        <div className="App">
            <Router basename="/foster-care-website.github.io">
                {window.location.pathname !== '/complete' && (
                    <div className="nav">
                        <nav>
                            <ul className="align-items">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/pdfs">PDFs</Link></li>
                                <li><Link to="/forms">Forms</Link></li>
                                <li><Link to="/narrative">Narrative</Link></li>
                            </ul>
                        </nav>
                    </div>
                )}
                {/* goes to home page upon starting */}
                <Route exact path="/" render={() => <Redirect to="/home" />} />

                <Route path="/home" component={Index} />
                <Route path="/pdfs" component={PDFS} />
                <Route path="/forms" component={FORMS} />
                <Route path="/narrative" component={narrative} />
                <Route path="/complete" component={complete} />
                <Route path="/likert" component={likertScale} />
            </Router>
        </div>
    );
}

export default App;
