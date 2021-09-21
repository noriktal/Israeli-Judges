import * as d3 from "d3";



export default function drawWomenPictogram(svgPlace, percent, year){

    
    const svg = svgPlace.append("svg")
    
    //style variables

    let styles = {
        fontfamily: "Rubik",
        menFill: "#EC382E",
        womenFill: "#6B7FD7"
    }

    const width = 220;
    const height = 380;
    

    //specifying attrs for given svg

    svg.attr("width", width)
       .attr("height", height)
       
       
    // rows and columns defs

    let numRows = 10;
    let numCols = 5;

    // x and y axis scales

    let y = d3.scaleBand()
            .range([0, 300])
            .domain(d3.range(numRows))

    let x = d3.scaleBand()
            .range([0, 180])
            .domain(d3.range(numCols))

    //the "data" is just an array of nums for each cell in the 10X5 grid

    let data = d3.range(numCols*numRows); 

    //icon definitions

        //male judge

        let judgeIcon = svg.append("defs")
                       .append("g")
                       .attr("id", "judgeIcon");
    
        judgeIcon.append("path")
                .attr("d", "M203.977,462.408v26.16c0,12.941,10.491,23.432,23.432,23.432s23.432-10.49,23.432-23.432v-26.16H203.977z")
                .attr("transform", "translate(0,0) scale(0.05)");

        judgeIcon.append("path")
                .attr("d", "M260.96,462.408v26.16h-0.001c0,12.941,10.491,23.432,23.432,23.432s23.432-10.49,23.432-23.432v-26.16H260.96z")
                .attr("transform", "translate(0,0) scale(0.05)");

        judgeIcon.append("path")
                .attr("d", "M354.984,160.122c-0.129-25.352-21.217-45.977-46.57-45.977h-5.421l-38.279,28.709l-8.452-28.709h-0.14l-8.452,28.709 c-13.893-10.42-24.715-18.536-38.279-28.709h-5.805c-25.353,0-46.441,20.625-46.57,45.978v143.455 c-0.054,10.784,8.284,19.57,19.068,19.624c0.034,0,0.067,0,0.1,0c10.738,0,19.831-8.678,19.884-19.428V160.319 c0.011-2.079,2.062-3.758,4.141-3.752c2.078,0.006,3.76,1.693,3.76,3.771v286.038h103.429h0.425 c0-7.246-0.405-279.244-0.424-285.693c0.004-2.186,1.724-3.984,3.908-4.083c2.187-0.1,4.426,1.538,4.624,3.718v143.455 c0.054,10.752,9.146,19.428,19.884,19.428c0.032,0,0.067,0,0.1,0c10.784-0.054,19.122-8.84,19.068-19.624L354.984,160.122 L354.984,160.122z" )
                .attr("transform", "translate(0,0) scale(0.05)");
                
        judgeIcon.append("path")
                .attr("d", "M314.803,63.739c0-5.983-3.431-11.154-8.427-13.685c4.995-2.532,8.427-7.702,8.427-13.685 c0-10.029-9.532-17.508-19.428-14.784C296.121,9.672,286.675,0,275.133,0c-8.516,0-15.797,5.249-18.813,12.682 C253.305,5.249,246.024,0,237.507,0c-11.518,0-20.983,9.642-20.242,21.584c-9.887-2.723-19.427,4.749-19.427,14.784 c0,5.983,3.431,11.154,8.427,13.685c-4.995,2.532-8.427,7.702-8.427,13.685s3.431,11.154,8.427,13.685 c-4.996,2.533-8.427,7.704-8.427,13.686c0,8.477,6.872,15.349,15.349,15.349c8.642,0,15.781-7.189,15.307-16.165 c7.238,6.788,16.965,10.951,27.67,10.951c10.868,0,20.727-4.292,27.998-11.264c-0.664,9.141,6.578,16.478,15.292,16.478 c8.477,0,15.349-6.872,15.349-15.349c0-5.983-3.431-11.154-8.427-13.685C311.371,74.892,314.803,69.722,314.803,63.739z")
                .attr("transform", "translate(0,0) scale(0.05)");

        //female judege
        
        let judgessIcon = svg.append("defs")
        .append("g")
        .attr("id", "judgessIcon");

        judgessIcon.append("path")
                .attr("d", "M461.37,934L461.37,934c26,0,47-21.1,47-47v-13h74.9c7.7,0,13.399-7.1,11.7-14.5L508.37,461V355.4l75.8,33.1c4.5,2,9.2,2.9,14,2.9c6.301,0,12.5-1.7,18-5l78.2-47l-27.6-65.1l-71.2,42.8c0,0-113.3-57.8-146.6-72.1c-4.2-1.8-8.9,1.3-8.9,5.9l0,0V305h-16.7h-34.8h-22.8v-54.1c0-4.8-5-7.9-9.3-5.7c-39.4,20-188,98.8-188,98.8c-9.1,4.8-15.7,13.4-17.9,23.4c-2.2,10.1,0.1,20.6,6.4,28.8l88.7,116c6.9,9,17.3,13.7,27.8,13.7c3.399,0,6.899-0.5,10.3-1.5l-72.8,335c-1.6,7.5,4.1,14.5,11.7,14.5h74.9v13c0,26,21.1,47,47,47l0,0c26,0,47-21.101,47-47v-13h22.7v13C414.271,913,435.37,934,461.37,934z M297.57,461l-59.8-74.3l59.8-31.3V461z")
                .attr("transform", "translate(0,0) scale(0.03)");

        judgessIcon.append("path")
        .attr("d", "M757.771,198.1c1.5,0,3-0.3,4.5-0.9l14.899-6.3c5.9-2.5,8.601-9.3,6.2-15.1l-33.3-78.9c-1.9-4.4-6.1-7.1-10.7-7.1c-1.5,0-3,0.3-4.5,0.9L719.971,97c-5.9,2.5-8.601,9.3-6.2,15.1L599.17,160.5c-1.899-4.4-6.1-7.1-10.699-7.1c-1.5,0-3,0.3-4.5,0.9l-14.9,6.3c-5.9,2.5-8.6,9.3-6.2,15.1l33.3,78.8c1.9,4.4,6.101,7.1,10.7,7.1c1.5,0,3-0.3,4.5-0.9l14.9-6.3c5.899-2.5,8.6-9.3,6.2-15.1l33.1-14l16.8,39.6l27.601,65.1l17.399,41c4.2,10,13.9,16,24.2,16c3.4,0,6.9-0.7,10.2-2.1l0,0c13.3-5.601,19.6-21,13.899-34.4L713.971,205l33.1-14C748.971,195.4,753.271,198.1,757.771,198.1z")
        .attr("transform", "translate(0,0) scale(0.03)");

        judgessIcon.append("path")
        .attr("d", "M520.07,176.3c3.3-3.1,5.3-7.5,5.3-12.3c0-7.3-4.6-13.5-11.1-15.9c3.7-3.1,6.1-7.8,6.1-13.1c0-7.6-5-14-11.8-16.2c3.6-3.1,5.8-7.7,5.8-12.8c0-7.6-5-14-11.899-16.2c2.399-2.9,3.899-6.7,3.899-10.8c0-8.8-6.7-16-15.2-16.9c1.5-2.5,2.4-5.5,2.4-8.7c0-9.4-7.6-17-17-17c-0.1,0-0.1,0-0.2,0l-0.1-0.1c0.1-0.6,0.1-1.3,0.1-1.9c0-9.4-7.6-17-17-17c-1,0-2,0.1-2.899,0.3c-0.7-0.4-1.301-0.8-2-1.2c-8.2-12.1-38.4-16.5-51.5-16.5l0,0l0,0c-13.101,0-43.301,4.4-51.5,16.5c-0.7,0.4-1.301,0.8-2,1.2c-0.9-0.2-1.9-0.3-2.9-0.3c-9.4,0-17,7.6-17,17c0,0.6,0,1.3,0.1,1.9l-0.1,0.1c-0.1,0-0.1,0-0.2,0c-9.399,0-17,7.6-17,17c0,3.2,0.9,6.1,2.4,8.7c-8.601,0.9-15.2,8.1-15.2,16.9c0,4.1,1.5,7.9,3.9,10.8c-6.9,2.2-11.9,8.6-11.9,16.2c0,5.1,2.3,9.7,5.8,12.8c-6.899,2.2-11.8,8.6-11.8,16.2c0,5.3,2.4,9.9,6.1,13.1c-6.5,2.4-11.1,8.6-11.1,15.9c0,4.8,2,9.2,5.3,12.3c-6.6,2.3-11.399,8.6-11.399,16c0,11.4,6.899,22.2,16.399,28.3c11.101,7.2,25.5,6.5,38,4.1c11.8-2.3,23.5-6.3,34.3-11.6c0.101-0.1,0.2-0.1,0.4-0.2c-12.5-7.3-18.9-21.8-22-36.4c13.1,21.7,35.8,36,61.5,36s48.4-14.3,61.5-36c-3.1,14.7-9.5,29.1-22,36.4c0.1,0.1,0.2,0.1,0.4,0.2c10.8,5.3,22.5,9.3,34.3,11.6c12.5,2.4,26.899,3.1,38-4.1c9.399-6.1,16.399-16.9,16.399-28.3C531.471,184.9,526.67,178.6,520.07,176.3z")
        .attr("transform", "translate(0,0) scale(0.03)");



        
        //creating a container for the grid and putting everything together

        let container = svg.append("g")
                           .attr("transform", "translate(25,0)");

        container.selectAll("use")
        .data(data)
        .enter().append("use")
        .attr("href", d => d< percent ? "#judgessIcon" : "#judgeIcon")
        .attr("id", d => "id" + d)
        .attr("x", d => x(d%numCols))
        .attr("y", d => y(Math.floor(d/numCols)))
        .attr("fill", d => d < percent ? styles.womenFill : styles.menFill)
        .attr("stroke", "black")

        container.append("text")
                 .attr("x", 100)
                 .attr("y", 325)
                 .attr("fill", "#463F3A")
                 .text(year)
                 .style("font-family", "Rubik")
                 .style("font-size", "18px")

        container.append("text")
                 .attr("x", 100)
                 .attr("y", 350)
                 .attr("fill", styles.womenFill)
                 .text(`${percent*2}%`)
                 .style("font-family", "Rubik")
                 .style("font-size", "15px")
                 
                 

}

export function drawWomenPictogramLegend(svgPlace){
    const legendSVG = svgPlace.append("svg");

    legendSVG.attr("height", 70);

    legendSVG.append("circle").attr("cx",200).attr("cy",20).attr("r", 6).style("fill", "#6B7FD7")
    legendSVG.append("circle").attr("cx",130).attr("cy",20).attr("r", 6).style("fill", "#EC382E")
    legendSVG.append("text").attr("x", 190).attr("y", 20).text("נשים").style("font-size", "15px").attr("alignment-baseline","middle").attr("fill", "#463F3A").style("font-family", "Rubik").style("font-size", "18px")
    legendSVG.append("text").attr("x", 120).attr("y", 20).text("גברים").style("font-size", "15px").attr("alignment-baseline","middle").attr("fill", "#463F3A").style("font-family", "Rubik").style("font-size", "18px")
}