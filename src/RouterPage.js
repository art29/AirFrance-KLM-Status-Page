import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Status from "./Status";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

const RouterPage = () => {
    return (
        <div>
            <Header/>
            <Router>
                <Route exact path="/" component={Status}/>
                <Route path="/about" component={About}/>
            </Router>
            <Footer/>
        </div>
    );
};

export default RouterPage;