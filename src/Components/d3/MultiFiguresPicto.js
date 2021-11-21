import * as d3 from "d3";
import { useState } from "react";
import Tooltip from "../Tooltip";
import {judgeIconFigurine, judgessIconFigurine,hammerIcon, judgessHead, judgeSill,graduate} from "./customSVGS";
import { colorOrdinalSVGInnerLegend } from "./colorOrdinalSVGinnerLegend";
import {colorScale} from "./colorScales";



//MultiFiguresPicto expects an array of numbers representing percents of groups (numbers to present differently in pictogram) and year data

//available icons:
const customSVGs = {judgeIconFigurine, judgessIconFigurine,hammerIcon, judgessHead, judgeSill, graduate};


// const width = 270;
// const height = 400;

// rows and columns defs

const numRows = 10;
const numCols = 5;



//the "data" is just an array of nums for each cell in the 10X5 grid

const data = d3.range(numCols*numRows); 



export default function MultiFiguresPicto({
    namesArray, 
    colorsArray,
    customSVGname1,
    customSVGname2,
    noOfDifferents,
    SVGtitle1,
    width,
    height,
    SVGtitle1X, 
    tooltipTitle1, 
    tooltipTitle2, 
    tooltipContent, 
    innerLegendX,
    innerLegendY}){
    
    const [tooltipState, setTooltipState] = useState(false);

    function tooltipEnter(){
        setTooltipState(true);
    }

    function tooltipLeave(){
        setTooltipState(false);
    }

    //colorScale expects a names array for domain, a num code for colors array for range
    const pictoColorScale = colorScale(namesArray, colorsArray);

    // x and y axis scales

    const y = d3.scaleBand()
            .range([0, (height - 100)])
            .domain(d3.range(numRows))

    const x = d3.scaleBand()
            .range([0, (width - 100)])
            .domain(d3.range(numCols))

    //pictogram has 50 figurines, so noOfDifferents should be halved 
    
    const noOfDifferentsModified = noOfDifferents.map(number => 
        (number /2 < 1) && (number / 2 > 0.15) ? 
         1 : (number /2) 
    );

    //helper function to determine the correct href for <use>

    function hrefSetter(singleNum){
        if(customSVGname2){
            if(singleNum < noOfDifferentsModified){
                return `#${customSVGs[customSVGname2].props.id}`;
            }else{
                return `#${customSVGs[customSVGname1].props.id}`;
            }
        }else{
            return `#${customSVGs[customSVGname1].props.id}`;
        }
    }

    //Helper functions to determine the coorect fill for <use>

    const combinedNumbers = [];

    noOfDifferentsModified.forEach((number, i) => {
        if (i === 0) {
            combinedNumbers.push(number);
        } else {
            combinedNumbers.push(number + combinedNumbers[i - 1])

        }
    });
    
    const groupsNo = combinedNumbers.length;

    function fillSetter(singleNum){
        if(singleNum < combinedNumbers[0]){
            return pictoColorScale(namesArray[0])
        }else if((singleNum >= combinedNumbers[0] && groupsNo === 1) ||
                 (singleNum >= combinedNumbers[0] && singleNum < combinedNumbers[1] && groupsNo === 2)){
            return pictoColorScale(namesArray[1])
        }else if(singleNum >= combinedNumbers[groupsNo - 2] && groupsNo >= 2){
            return pictoColorScale(namesArray[groupsNo - 1])
        }else{
            for(let i = 0; i <= combinedNumbers.length - 1; i++){
               if(singleNum >= combinedNumbers[i] && singleNum < combinedNumbers[i+1]){
                   return pictoColorScale(namesArray[i+1]);
               }
            }
        }
        
    }

    return (

        <div 
          style={{position: "relative"}}
        >
          <Tooltip
                title1= {tooltipTitle1 ? tooltipTitle1 : ""} 
                title2= {tooltipTitle2 ? tooltipTitle2 : ""}
                par = {tooltipContent ? tooltipContent : ""}
                style={tooltipState ? 
                {top:"20%", left: "20%", backgroundColor: "#463F3A", border: "1px solid #463F3A", padding: 3} :
                {display: "none"} 
                }
              />
            <svg 
                width={width} 
                height={height}
                onMouseEnter={tooltipEnter}
                onMouseLeave={tooltipLeave}
            >
                <defs>
                    {customSVGs[customSVGname1]}
                    {customSVGname2 ? customSVGs[customSVGname2] : ""}
                </defs>
                <g transform="translate(25,0)">
                    {
                        data.map(singleNum => (
                            <use
                            key={`icon${singleNum}`} 
                            href={hrefSetter(singleNum)}
                            x= {x(singleNum % numCols)}
                            y={y(Math.floor(singleNum / numCols))}
                            fill={fillSetter(singleNum)}
                        /> 
                            )   
                        )
                    }
                </g>
                <text
                    x={SVGtitle1X}
                    y="340px"
                    fill="#463F3A"
                    style={{fontFamily: "Rubik", fontSize: 18, textAnchor: "middle"}}
                >
                {SVGtitle1}
                </text>
                {!innerLegendX  && 
                    <text
                    x="110px"
                    y="360px"
                    fill={pictoColorScale(namesArray[0])}
                    style={{fontFamily: "Rubik", fontSize: 15, textAnchor: "middle"}}
                >
                    {`${noOfDifferents}%`}
                </text>}
                {innerLegendX  && colorOrdinalSVGInnerLegend(noOfDifferents,namesArray,pictoColorScale,innerLegendX, innerLegendY)}
            </svg>
    </div>
    )
}

                 
                