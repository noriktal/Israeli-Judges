import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styles from "./SupremeViz.module.css"
// import drawWomenPictogram, { drawWomenPictogramLegend } from "./drawWomenPictogram";
import { useSelector } from "react-redux";
// import { } from "../../RootReducer";
import YearSearch from "../YearSearch";
import SupremeChosenYearCanvas from "./SupremeChosenYearCanvas";

const SupremeViz = () => {

    const [canvasState, setCanvasState] = useState("hidden");
    const [selectedYear, setSelectedYear] = useState("");

return(
  <>
    <h1>בית המשפט העליון בנתונים</h1>
    <div className="supremeContainer">
            <YearSearch 
                setCanvasState={setCanvasState}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear} />
            <SupremeChosenYearCanvas 
            setCanvasState={setCanvasState} 
            canvasState={canvasState} />
    </div>
</>
)

}

export default SupremeViz;