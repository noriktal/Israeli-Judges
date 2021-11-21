import {colorScale} from "./colorScales";


export  default function ColorOrdinalLegend({namesArray,colorsArray,factorX, shape, shapeScale}){
    
    const itemCount = namesArray.length;
    const factorXNo = parseFloat(factorX);

    //colorScale expects a names array for domain, a num code for colors array for range
    const legendColorScale = colorScale(namesArray, colorsArray);
    
    return(
        
            <>
            {namesArray.map((d,i) => (
                <div 
                key={`legendItem${i}`}
                style={{marginLeft: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <svg
                        height={18}
                        width={factorX ? `${18 + factorXNo}` : (18)}
                        >
                            {shape ? 
                            <defs>
                                {shape}
                            </defs> : 
                            null}
                            {shape ? 
                            <use 
                            href={`#${shape.props.id}`}
                            x={factorX}
                            y={22*i + 10}
                            fill={colorScale(d)}
                            /> :
                            <circle 
                                cx= {factorX? (12 + factorXNo) : 12}
                                cy={10}
                                r="6"
                                fill={legendColorScale(d)}
                            />
                            }
                        </svg>
                        <span
                            style={{fontSize: 18, paddingLeft:3 }}
                        >{d}</span>
                    </div>
            )
            )}
            </>
        )
    }