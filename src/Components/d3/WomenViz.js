import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./WomenViz.module.css"
import drawWomenPictogram, { drawWomenPictogramLegend } from "./drawWomenPictogram";
import drawHammer from "./drawHammer.js";
import drawJudgess, {drawJudgessLegend} from "./drawJudgess.js"
import { useSelector, useDispatch } from "react-redux";
import { selectGenderDataPreChosenYears, selectPreChosenYears, selectGenderDataPerCourtPreChosenYears, selectCourts, selectCourtsEN, selectCourtsHE } from "../../RootReducer";

const WomenViz = () => {

    const pictoRef = useRef();
    const legendPictoRef = useRef();
    const hammerRef = useRef();
    const legendPictoRef2 = useRef();
    const judgessRef = useRef();
    const legendPictoRef3 = useRef();
    const genderCount = useSelector(selectGenderDataPreChosenYears);
    const preChosenYears = useSelector(selectPreChosenYears);
    const genderCountsPerCourt = useSelector(selectGenderDataPerCourtPreChosenYears)
    const courtsEN = useSelector(selectCourtsEN);
    const courtsHE = useSelector(selectCourtsHE);
    const courts = useSelector(selectCourts);
    const percentsOfWomen = [(genderCount.womenCount1955/(genderCount.womenCount1955 + genderCount.menCount1955))*100,
                            (genderCount.womenCount1965/(genderCount.womenCount1965 + genderCount.menCount1965))*100,
                            (genderCount.womenCount1975/(genderCount.womenCount1975 + genderCount.menCount1975))*100,
                            (genderCount.womenCount1985/(genderCount.womenCount1985 + genderCount.menCount1985))*100,
                            (genderCount.womenCount1995/(genderCount.womenCount1995 + genderCount.menCount1995))*100,
                            (genderCount.womenCount2005/(genderCount.womenCount2005 + genderCount.menCount2005))*100,
                            (genderCount.womenCount2015/(genderCount.womenCount2015 + genderCount.menCount2015))*100
                            ]
    
    const percentsOfWomenStrings = percentsOfWomen.map(percent => percent.toFixed(1));
    
    //for drawJudgess & drawJudgessLegend

    const colorScale = d3.scaleOrdinal()
                             .domain(courtsEN)
                             .range(["#C18E02", "#4392F1","#FF9505", "#463F3A", "#C6C7C4"])  

    //no. of icons to color as women

    let percentsOfWomenModified = percentsOfWomenStrings.map(percent => percent/2);
 
    
  useEffect(() => {
    const svgPlacePicto = d3.select(pictoRef.current);
    const svgPlacePictoLegend = d3.select(legendPictoRef.current);
    const svgPlacePictoLegend2 = d3.select(legendPictoRef2.current);
    const svgPlacePictoLegend3 = d3.select(legendPictoRef3.current);
    const svgPlaceHammer = d3.select(hammerRef.current);
    const svgPlaceJudgess = d3.select(judgessRef.current);

    drawWomenPictogramLegend(svgPlacePictoLegend);
    drawWomenPictogramLegend(svgPlacePictoLegend2);
    drawJudgessLegend(svgPlacePictoLegend3, courts, colorScale);

    percentsOfWomenModified.forEach((percent, index) => {
        let year = preChosenYears[index];
        drawWomenPictogram(svgPlacePicto, percent, year);
    })

    genderCountsPerCourt.forEach(yearObj => {
        drawHammer(svgPlaceHammer, yearObj);
        drawJudgess(svgPlaceJudgess, yearObj, courtsEN, colorScale);
    })

    
  }, []);

  return (
  <div className={styles.womenVizContainer}>
    <h1 className= {styles.h1}>אחוז הנשים מכלל השופטים לאורך השנים</h1>
    <div ref={legendPictoRef} className={styles.legendPictoContainer}></div>
    <div ref={pictoRef} className={styles.pictoContainer}></div>
    <h1 className= {styles.h1}>אחוז הנשים מכלל השופטים בכל ערכאה לאורך השנים</h1>
    <h2 className= {styles.h2}>*בתי הדין לעבודה הוקמו בשנת 1969</h2>
    <div ref={legendPictoRef2} className={styles.legendPictoContainer}></div>
    <div ref={hammerRef} className={styles.hammerContainer}></div>
    <h1 className= {styles.h1}>אחוז הנשים בכל ערכאה מכלל השופטות לאורך השנים</h1>
    <div ref={legendPictoRef3} className={styles.legendPictoContainer}></div>
    <div ref={judgessRef} className={styles.judegessContainer}></div>
  </div>
  
  );
}
 
export default WomenViz;