import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
// import styles from "./WomenViz.module.css"
// import drawWomenPictogram, { drawWomenPictogramLegend } from "./drawWomenPictogram";
import { useSelector, useDispatch } from "react-redux";
import { selectGenderDataPreChosenYears, selectPreChosenYears, selectGenderDataPerCourtPreChosenYears, selectCourts, selectCourtsEN, selectCourtsHE } from "../../RootReducer";


const SupremeViz = () => {

return(
  <>
    <h1>בית המשפט העליון בנתונים</h1>
    <div className="chooseYearContainer">
            
    </div>
</>
)

}

export default SupremeViz;