import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Database from "./Components/Database";
import MainFindings from "./Components/MainFindings";
import QueryPage from "./Components/QueryPage";
import English from "./Components/English";
import NotFound from "./Components/NotFound";


function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Database">
            <Database />
          </Route>
          <Route exact path="/MainFindings">
            <MainFindings />
          </Route>
          <Route exact path="/QueryPage">
            <QueryPage />
          </Route>
          <Route exact path="/English">
            <English />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
