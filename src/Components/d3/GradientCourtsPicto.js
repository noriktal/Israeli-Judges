import { useState } from "react";
import {hammerIcon, judgessHead, judgeSill,graduate,basicGradient,binaryGradient, courtsGradient} from "./customSVGS";
import {colorScale} from "./colorScales";


//GradienCourtsPicto is a specific variant of GradientPercentsPicto.
// It expects a yearObject with an array of courts counts and percents.

const customSVGs = {hammerIcon, judgessHead, judgeSill, graduate, basicGradient, binaryGradient,courtsGradient};



const width = 500;
const height = 230;

//for gender- data is a year object - data for data() is an inner array

export default function GradientCourtsPicto({data, namesArray,colorsArray,customSVGname}){

    const innerArray = data.countsPerCourt;
    const year = data.year;
    const percents = innerArray.map(d => d.percentOfTotal);
    const [tooltipState, setTooltipState] = useState(false);
    const icon = customSVGs[customSVGname];

    //colorScale expects a names array for domain, a num code for colors array for range
    const gradientColorScale = colorScale(namesArray, colorsArray);
    //gradient is always the binaryGradient which expets an array of data (unlike basic gradient)
    const gradients = binaryGradient(innerArray, percents, year, gradientColorScale(namesArray[0]), gradientColorScale(namesArray[1]));


    

    const conditionalFill = (year, i) => {
            if(year >= 1969 || (year < 1969 && i < 3)){
            return `url(#gradient${year}${i})`;
             }else if(year < 1969 && i >= 3){
            return gradientColorScale(namesArray[2]);
            }
        }

    const percentLabel =(percent, i) => {
        if( year >= 1969 || (year < 1969 && i < 3)){
            return `${percent}%`;
        }else if(year < 1969 && i >= 3){
            return "-";
        }
    }

    function tooltipEnter(){
        setTooltipState(true);
    }

    function tooltipLeave(){
        setTooltipState(false);
    }

    return(
        <div>
            <svg
            width={width}
            height={height}
            >
                <defs>
                    {icon}
                    {gradients}
                </defs>
                <g transform="translate(10,0)" className="hammerContainer">
                    {innerArray.map((court,i) => (
                        <g key={`courtHammer${i}`}>
                            <use 
                                href="#hammerIcon"
                                
                                id={`courtHammer${year}${i}`}
                                transform= "scale(0.8) translate(30)"
                                x={105*i}
                                y="20"
                                fill={conditionalFill(year, i)}
                                onMouseEnter={tooltipEnter}
                                onMouseLeave={tooltipLeave}
                            />
                            <text
                                className="labelPercent"
                                x={115 + i*80}
                                y="120"
                                fill={gradientColorScale(namesArray[0])}
                                style={{fontFamily:"Rubik", fontSize: 15}}
                            >
                                {percentLabel(court.percentOfTotal, i)}
                            </text>
                            <text
                                className="labelName"
                                x={i < 3 ? (115 + i*80) : (130 + i*80)}
                                y="140"
                                fill="#463F3A"
                                style={{fontFamily:"Rubik", fontSize: 15}}
                            >
                                {court.nameHE}
                            </text>
                            <rect 
                                x={105*i}
                                rx="5"
                                y="20"
                                fill="#463F3A"
                                width= "65"
                                height="30"
                                style={tooltipState ? 
                                    {top:"5", left: "5"} :
                                    {display: "none"} }>
                            </rect>
                            <text 
                                fill="#000"
                                x={105*i + 60}
                                y="40"
                                fill="#FFFFFF"
                                style={tooltipState ? 
                                    {fontFamily:"Rubik", fontSize: 13} :
                                    {display: "none"} }
                            >
                                {`${court.totalJudges} / ${court.count}`}
                            </text>
                        </g>
                    ))
                    }
                </g>
                <text
                    x="250"
                    y="180"
                    fill="#463F3A"
                    textAnchor="middle"
                    style={{fontFamily:"Rubik", fontSize: 18}}
                >
                    {year}
                </text>
          </svg>
        </div>
    )
}