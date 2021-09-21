import { color } from "d3";

//z- distance between two circle centers on x plane
export default function drawColorOrdinalLegend(svgPlace,colorScale, data, cx = 130, z = 70){

    const legendSVG = svgPlace.append("svg");

    legendSVG.attr("height", 70);

    legendSVG.selectAll("circle")
             .enter(data)
             .append("circle")
             .attr("cx", (d,i) => cx + i*z)
             .attr("cy", 20)
             .attr("r", 6)
            //  .fill(d, d => colorScale(d.name))

    legendSVG.selectAll("text")
             .enter(data)
             .append("text")
             .attr("x", (d,i) => cx -10 + i*z )
             .attr("y", 20)
            //  .text(d.name)
             .style("font-family", "Rubik")
             .style("font-size", "18px")

}