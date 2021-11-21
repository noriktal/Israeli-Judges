import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./ReligionViz.module.css";
import drawPie from "./drawPie";
import { useSelector, useDispatch } from "react-redux";
import { selectReligionActiveJudges } from "../../RootReducer";



const ReligionViz = () => {

    const religionRef = useRef();
    const religionActiveCount = useSelector(selectReligionActiveJudges);

    useEffect(() => {
        
        if(religionActiveCount[1].count > 0){
            const svgPlaceReligionPie = d3.select(religionRef.current);
            drawPie(svgPlaceReligionPie, religionActiveCount);
        }  
        
      }, [religionActiveCount]);

    return ( 
        <div className={styles.ReligionVizContainer}>
            <h1 className= {styles.h1}>פילוח השופטים הפעילים כיום לפי דת</h1>
            <div ref={religionRef} className={styles.religionContainer}></div>
        </div>
     )
}
 
export default ReligionViz;