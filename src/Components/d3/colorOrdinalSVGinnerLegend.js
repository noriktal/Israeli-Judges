export function colorOrdinalSVGInnerLegend(percents,namesArray,colorScale,x,y){
   
    return(
            <g>
            {namesArray.map((name,i) => (
                <g key={`innerLabels${i}`}>
                    <circle 
                        cx={+x + 10}
                        cy={+y + i*20 }
                        r="5"
                        fill={colorScale(name)}
                    />
                    <text
                        x={+x}
                        y={+y + 4 + i*20}
                        fill={colorScale(name)}
                        style={{fontFamily: "Rubik", fontSize:15}}
                        >
                            {`${percents[i] === "0.0" ? 0 : percents[i]}%`}
                    </text>
                </g>
            ))
            }
        </g>
    )
}