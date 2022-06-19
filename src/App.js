import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/about-component/About";
import Home from "./component/home-component/Home";
import Settings from "./component/settings-component/Settings";

function App() {
  return (
    <Router>
      <div class="app">
        <h1>Hii App Component Here</h1>
        <div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/settings">Settings</Link>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div>
<Home />
<About />
<Settings />
</div> */
}
