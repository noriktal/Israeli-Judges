import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { loadJudges, loadUniColleges } from "./RootReducer";
import data from "./Data/judgesData_new.json";
import data2 from "./Data/Institution Coordinates.json";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
// import { arSD } from '@material-ui/data-grid';

import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import AboutPage from "./Components/Pages/AboutPage";
import DatabasePage from "./Components/Pages/DatabasePage";
import MainFindingsPage from "./Components/Pages/MainFindingsPage";
import QueryPage from "./Components/Pages/QueryPage";
import EnglishPage from "./Components/Pages/EnglishPage";
import ChangesPage from './Components/Pages/ChangesPage';

import NotFound from "./Components/Pages/NotFound";
import { useGeoData } from "./Components/useGeoData";



const theme = createTheme({
  palette:{
    primary: {
      main: "#4392F1"
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
            
            <Route path="/About" element={<AboutPage />}/>
            <Route path="/Database" element={<DatabasePage />}/>
            <Route path="/MainFindings" element={<MainFindingsPage />}/>
            <Route path="/QueryPage" element={<QueryPage />}/>
            <Route path="/Changes" element={<ChangesPage />}/>
            <Route path="/English" element= {<EnglishPage />} />
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
           
          </Routes>
        </div>
      </Router>
      </ThemeProvider>
  );
}

export default App;
