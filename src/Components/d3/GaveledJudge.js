import { selectActiveJudgesCountPreChosenYears, selectPreChosenYears } from "../../RootReducer";
import { useSelector } from "react-redux";
import * as d3 from 'd3';
import { judgeSill } from "./customSVGS";
import Tooltip from "../Tooltip";
import { useState } from "react";


//GaveledJudge expects a year object with a year and a count/percent property

const graphWidth = 250;
const graphHeight = 320;
const width = graphWidth + 50;
const height = graphHeight + 50;

//helper function to calculate needed y translation of <use> tags

function translateMe(i){
    if(i < 3){
        return i*290;
    }else if((i >= 3) && (i < 5)){
        return i*390;
    }else if(i === 5){
        return i*430;
    }else if(i === 6){
        return i*500;
    }
}

export default function GaveledJudge() {

    const activeJudgesCounts = useSelector(selectActiveJudgesCountPreChosenYears);
    const activeJudgesCountsRev = [...activeJudgesCounts].reverse();
    // const preChosenYears = [...useSelector(selectPreChosenYears)].reverse();
    const counts = [...activeJudgesCountsRev.map(yearObj => yearObj.count)];
    const [tooltipState, setTooltipState] = useState(false);

    function tooltipEnter(){
        setTooltipState(true);
    }

    function tooltipLeave(){
        setTooltipState(false);
    }

    // scale for determining size (according to judge count)

    const size = d3.scaleLinear()
        .domain([0, d3.max(counts)])
        .range([0, graphHeight])

    
    // scale for determining color (according to year)

    const color = d3.scaleOrdinal()
        .domain(["judges","lawyers"])
        .range(["#4392F1", "#FF9505"])
    

    return (
        <div className="svgsContainer" style={{width: "80vw", height:300, display: "flex", alignItems: "flex-end", justifyContent: "space-evenly", margin: "10px auto"}}>
        {
            activeJudgesCountsRev.map((yearObj, i) => (
                <div key ={i}className="svgBox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center", position:"relative" }}>
                     <Tooltip
                        par= {
                                <span style={{fontSize:14}}> {yearObj.count}</span>
                            }
                        style={tooltipState ? 
                        {top: 70, left: -28} :
                        {display: "none"} 
                        }
                        />
                    <svg 
                        width="112" 
                        height="170"
                        style={{position: "relative"}} 
                        
                        // width={size(yearObj.count) > 120 ? (size(yearObj.count) * 0.5) : size(yearObj.count) } 
                        // height={size(yearObj.count) > 80 ? (size(yearObj.count) * 0.8) : size(yearObj.count)* 1.2 }
                    >
                        <defs>
                            {judgeSill}
                        </defs>
                        <use 
    
                            key={i} 
                            href="#judge-sill" 
                            fill={color("judges")} 
                            transform={`scale(${Math.sqrt(0.00003* size(yearObj.count))}) translate(0 ${translateMe(i)})`}
                            onMouseEnter={tooltipEnter}
                            onMouseLeave={tooltipLeave} 
                            />
                        </svg>
                    <h3 style={{textAlign: "center", transform:"rotate(45deg)", color: "#463F3A"}}>{yearObj.year}</h3>
                </div>
            ))
        }
    </div>
    )
}