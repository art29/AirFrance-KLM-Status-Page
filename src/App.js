import './App.css';
import Header from "./Header";
import {HashRouter, Route} from "react-router-dom";
import Status from "./Status";
import About from "./About";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <HashRouter basename="/">
                <Header/>
                <Route exact path="/" component={Status}/>
                <Route path="/about" component={About}/>
                <Footer/>
            </HashRouter>
        </div>
    );
}

export default App;
