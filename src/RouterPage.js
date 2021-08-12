import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Status from "./Status";
import About from "./About";
import Header from "./Header";

const RouterPage = () => {
    return (
        <div>
            <Header/>
            <Router>
                <Route exact path="/" component={Status}/>
                <Route path="/about" component={About}/>
            </Router>
        </div>
    );
};

export default RouterPage;