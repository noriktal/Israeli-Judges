import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { loadJudges } from "./RootReducer";
import data from "./Data/judgesData.json";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
// import { arSD } from '@material-ui/data-grid';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Database from "./Components/Database";
import MainFindings from "./Components/MainFindings";
import QueryPage from "./Components/QueryPage";
import English from "./Components/English";
import NotFound from "./Components/NotFound";


const theme = createTheme({
  palette:{
    primary: {
      main: "#EC382E"
    },
    secondary: {
      main: "#7F7473"
    }
  },
  typography: {
    fontFamily: '"Rubik", "Arial"'
  },
  direction: "rtl"

}, heIL)


function App() {

  const dispatch = useDispatch();
  //const judges = useSelector(selectJudges);

  useEffect(() => {
    dispatch(loadJudges(data.judges));
  }, [])

  return (
    <ThemeProvider theme={theme}>
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
      </ThemeProvider>
  );
}

export default App;
