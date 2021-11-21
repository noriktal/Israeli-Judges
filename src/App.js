import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { loadJudges, loadUniColleges } from "./RootReducer";
import data from "./Data/judgesData.json";
import data2 from "./Data/Institution Coordinates.json";
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
import ChangesForm from './Components/ChangesForm';

import NotFound from "./Components/NotFound";
import { useGeoData } from "./Components/useGeoData";



const theme = createTheme({
  palette:{
    primary: {
      main: "#FF9505"
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
  
  useGeoData();

  useEffect(() => {
    dispatch(loadJudges(data.judges));
    dispatch(loadUniColleges(data2.uniColleges));
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router >
        <div className="App">
          <Navbar />
          <Routes>
            
            <Route path="/About" element={<About />}/>
            <Route path="/Database" element={<Database />}/>
            <Route path="/MainFindings" element={<MainFindings />}/>
            <Route path="/QueryPage" element={<QueryPage />}/>
            <Route path="ChangesForm" element={<ChangesForm />}/>
            <Route path="/English" element= {<English />} />
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
           
          </Routes>
        </div>
      </Router>
      </ThemeProvider>
  );
}

export default App;
