// svgTooltipState = {svgTooltipState}
//         width="165"
//         xFactor="35"
//         yFactor="10"
//         content= {`${svgTooltipState.nameHE} - ${svgTooltipState.percent}%`}

        export default function SVGtooltip({svgTooltipState, width, xFactor, yFactor, content, fillBG,fill}){

            const x = svgTooltipState.x;
            const y = svgTooltipState.y;
            const xFactorNum = parseFloat(xFactor);
            const yFactorNum = parseFloat(yFactor);
            const widthNum = parseFloat(width)
    return (
        
            <>
        <rect 
        x={x + xFactorNum - widthNum} 
        rx="5"
        y={y + yFactorNum}
        fill={fillBG}
        width= {width}
        height="20"
        style={{zIndex: 2}}
        >
        </rect>
        <text  
            x={x + xFactorNum - 3} 
            y={y + 12 + yFactorNum} 
            fill={fill}
            style={{zIndex: 2}}         
        >
            {content}
        </text>
        </>
        
    )
}