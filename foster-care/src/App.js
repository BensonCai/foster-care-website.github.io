import React from 'react';
import "./nav.css";
import "./App.css";
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Index from "./Cases/Case 1";
import FORMS from './Cases/Case 1/forms';
import complete from "./Cases/complete";
import narrative from "./Cases/Case 1/narrative";
import case1PDFS from "./Cases/Case 1/case1PDFS";
import likertScale from "./Cases/Case 1/likert";
import Navigation from "./Cases/navigation";
import case2PDFS from "./Cases/Case 2/case2PDFS";
import case3PDFS from "./Cases/Case 3/case3PDFS";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HashRouter basename="foster-care-website/">
                    {window.location.pathname !== '/complete' && (
                        <Navigation/>
                    )}
                    {/* goes to home page upon starting */}
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={Index} />
                        <Route path="/case1pdfs" component={case1PDFS} />
                        <Route path="/case2pdfs" component={case2PDFS} />
                        <Route path="/case3pdfs" component={case3PDFS} />
                        <Route path="/forms" component={FORMS} />
                        <Route path="/narrative" component={narrative} />
                        <Route path="/likert" component={likertScale} />




                        <Route path="/complete" component={complete} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
