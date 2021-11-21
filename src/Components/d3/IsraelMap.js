import { useState } from "react";
import * as d3 from "d3";
import { geoPath } from "d3-geo";
import Tooltip from "../Tooltip";
import SVGtooltip from "./SVGtooltip";
import styles from "./IsraelMap.module.css";

const width = 300;
const height = 350;


export default function IsraelMap({mapData, places, title1, total}){
     
    const [svgTooltipState, setsvgTooltipState] = useState({
                                                state: false,
                                                 x:0,
                                                 y:0,
                                                nameHE:"",
                                                percent: 0});

    const [tooltipState, setTooltipState] = useState(false);
    

    function svgTooltipEnter(event,d){
        setsvgTooltipState({
            state: true,
            x: event.nativeEvent.layerX,
            y: event.nativeEvent.layerY,
            nameHE: d.nameHE,
            percent: d.percent});
    }
    
    function svgTooltipLeave() {
        setsvgTooltipState({
            state: false,
            x:0, 
            y:0,
            nameHE:"",
            percent: 0}) 
    }

    function tooltipEnter(){
        setTooltipState(true);
    }

    function tooltipLeave(){
        setTooltipState(false);
    }

    const relevantPlaces = places.filter(place => place.count > 0);

    const projection = d3.geoMercator()
                       .center([35, 32])   // GPS of location to zoom on
                       .scale(4000)        // This is like the zoom
                       .translate([ width/2, height/2 ])
    
    const path = d3.geoPath(projection);

    return (
        <>
        {mapData &&
         
            <div style={{position: "relative"}}>
                    <svg
                    width={width}
                    height={height}
                    style={{position: "relative"}}
                    >
                        <g 
                        transform= "translate(0 -30)"
                        >
                            <path 
                                d={path(mapData)}
                                style={{fill: "var(--orange)"}}
                                
                            />
                            {svgTooltipState.state && 
                                <SVGtooltip
                                    svgTooltipState = {svgTooltipState}
                                    width="168"
                                    xFactor="35"
                                    yFactor="10"
                                    fillBG = "#463F3A"
                                    fill = "#fff"
                                    content= {`${svgTooltipState.nameHE} - ${svgTooltipState.percent}%`}
                                />
                            }
                            {places.map((d, i)=> {
                                if(d.count > 0){
                                    const [x,y] = projection([d.longitude, d.latitude]);
                                    return (

                                        <circle className={styles.circle}  
                                            key={`circle${d.nameEN}`} 
                                            cx={x} 
                                            cy={y} 
                                            r="4.5" 
                                            fill="#7F7473" 
                                            opacity="0.8"
                                            onMouseEnter={(event) => svgTooltipEnter(event,d)}
                                            onMouseLeave={svgTooltipLeave}
                                        />
                                    )
                                }
                            })}
                            <text className={styles.caption}
                                x={(width / 2) - 50}
                                y={ height - 25}
                                fill="#463F3A"
                                onMouseEnter={tooltipEnter}
                                onMouseLeave={tooltipLeave}
                            >
                            {title1}
                            </text>
                        </g>
                    </svg>
                    <Tooltip 
                    style={tooltipState ? 
                        {top:"50%", left: "60%", zIndex: 2, backgroundColor:"#463F3A", border: "1px solid #463F3A", padding: 5, borderRadius: 4}:
                        {display: "none"} 
                        }
                    par={relevantPlaces.map((place,i) => (
                        <span key={`span${place.nameEN}${i}`} style={{fontSize:14}}>{place.abbreviationHE} - {` ${total} / ${place.count}`}</span>
                    ))

                    }
                    />
            
            
            </div>}
        </>
    )
}