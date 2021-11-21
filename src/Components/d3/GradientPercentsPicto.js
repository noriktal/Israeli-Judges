import { useState } from "react";
import Tooltip from "../Tooltip";
import {hammerIcon, judgessHead, judgeSill,graduate,israelIcon,basicGradient,binaryGradient, courtsGradient} from "./customSVGS";
import {colorScale} from "./colorScales";
import { colorOrdinalSVGInnerLegend } from "./colorOrdinalSVGinnerLegend";

//GradientPercentsPicto expects data in the form of a year object;

const customSVGs = {hammerIcon, judgessHead, judgeSill, graduate,israelIcon, basicGradient, binaryGradient,courtsGradient};

export default function GradientPercentsPicto({data, percent,percents, rawPercent,percent2, namesArray, colorsArray, customSVGname,gradientType,width, height, scale, translateGroup,x,y,tooltipTitle1,tooltipTitle2,tooltipContent, innerLegendX, innerLegendY}){

    const year = data.year;
    const icon = customSVGs[customSVGname];

    //colorScale expects a names array for domain, a num code for colors array for range
    const gradientColorScale = colorScale(namesArray, colorsArray);
   
    
    //gradient expects: percent, datum, color1, color2 if regular; courtsGradient expects: percents, datum, courtsArray, colorScale
    const gradient = gradientType === "courtsGradient" ? customSVGs["courtsGradient"](percents,year,namesArray,gradientColorScale) :
                                     customSVGs[gradientType](rawPercent, year, gradientColorScale(namesArray[0]), gradientColorScale(namesArray[1]))

    
    //managing the tooltip

    const [tooltipState, setTooltipState] = useState(false);

    function tooltipEnter(){
        setTooltipState(true);
    }

    function tooltipLeave(){
        setTooltipState(false);
    }


    return (
        <div style={{position: "relative"}}>
            <Tooltip
                title1={tooltipTitle1 ? tooltipTitle1 : ""}
                title2={tooltipTitle2 ? tooltipTitle2 : ""}
                par= {tooltipContent ? tooltipContent : ""}
                style={tooltipState ? 
                {top:"20%", left: "0", backgroundColor: "#463F3A", border: "1px solid #463F3A", padding: 5} :
                {display: "none"} 
                }
                />
            <svg
                width={width}
                height={height}
                
            >
                <defs>
                    {icon}
                    {gradient}
                </defs>

                <g transform="translate(10,0)" className="pictoBox">

                    <use 
                        href={`#${icon.props.id}`}
                        id={`${icon.props.id}${year}`}
                        transform= {`scale(${scale}) translate(${translateGroup})`}
                        x={x}
                        y={y}
                        fill={`url(#gradient${year})`}
                        onMouseEnter={tooltipEnter}
                        onMouseLeave={tooltipLeave}
                    />
                    {gradientType !== "courtsGradient" &&
                        <text
                        className="labelPercent"
                        x={width / 2}
                        y={height - 50}
                        fill={gradientType === "courtsGradient" ? "#463F3A" : gradientColorScale(namesArray[0])}
                        style={{fontFamily:"Rubik", fontSize: 15, textAnchor: "middle"}}
                        >
                        {percent}
                        </text>
                    }
                    {percent2 &&
                        <text
                        className="labelPercent"
                        x={width / 2}
                        y={height - 30}
                        fill={gradientColorScale(namesArray[1])}
                        style={{fontFamily:"Rubik", fontSize: 15, textAnchor: "middle"}}
                    >
                        
                        {percent2}
                    </text>
                    }
                    <text
                        className="labelName"
                        x={innerLegendX ? (width / 2.5) : (width / 2)}
                        y={percents ? (height - 50) : (height-10)}
                        fill="#463F3A"
                        style={{fontFamily:"Rubik", fontSize: 18, textAnchor: "middle"}}
                    >
                        {year}
                    </text>
                    {innerLegendX  && colorOrdinalSVGInnerLegend(percents,namesArray,gradientColorScale, innerLegendX,innerLegendY)}
                </g>
            </svg>
        </div>
    )
}

