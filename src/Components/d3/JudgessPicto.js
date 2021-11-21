import { useState } from "react";
import Tooltip from "../Tooltip";
import {judgessHead, courtsGradient} from "./customSVGS";


//for gender- data is a year object - data for data() is an inner array


const width = 340;
const height = 300;

export default function JudgessPicto({data, courtsEN, colorScale}){

    const innerArray = data.countsPerCourt;
    const { year, totalWomen } = data;
    const percents = innerArray.map(d => d.percentOfAllWomen);
    const gradients = courtsGradient(percents, year, courtsEN, colorScale);
    const [tooltipState, setTooltipState] = useState(false);

    function tooltipEnter(){
        setTooltipState(true);
    }

    function tooltipLeave(){
        setTooltipState(false);
    }


     


    return(
        <div style={{position: "relative"}}>
            <Tooltip
            title1= "מספרים מוחלטים:" 
            par= {
                innerArray.map((court,i) => (
                    <span key={`span${court}${i}`} style={{fontSize:14}}>{court.nameHE} - {` ${totalWomen} / ${court.count}`}</span>
                ))

            }
            style={tooltipState ? 
              {top:"20%", left: "0", backgroundColor: "#463F3A", border: "1px solid #463F3A", padding: 3} :
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
                    {judgessHead}
                    {gradients}
                </defs>
                <g
                transform="translate(40,0)"
                >
                    <use
                    href="#judgessHead"
                    id={`judgessHead${year}`}
                    transform= "scale(0.4) translate(30)"
                    x="0"
                    y="20"
                    fill= {`url(#gradientCourts${year})`}
            
                    />
                    <text
                    x="120"
                    y="260"
                    fill="#463F3A"
                    style={{fontFamily: "Rubik", fontSize:18}}
                    >
                        {year}
                    </text>
                    <g>
                        {courtsEN.map((court,i) => (
                            <g key={`innerLabels${i}`}>
                                <circle 
                                    cx="265"
                                    cy={70 + i*20}
                                    r="5"
                                    fill={colorScale(court)}
                                />
                                <text
                                    x="255"
                                    y={74 + i*20}
                                    fill={colorScale(court)}
                                    style={{fontFamily: "Rubik", fontSize:15}}
                                    >
                                        {`${percents[i] === "0.0" ? 0 : percents[i]}%`}
                                </text>
                            </g>
                        ))
                        }
                    </g>
                </g>

            </svg>
        </div>
    )
}
