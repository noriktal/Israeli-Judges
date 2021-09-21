import * as d3 from "d3";
import drawColorOrdinalLegend from "./drawColorOrdinalLegend";



//drawJudgess() expects to accept an array of objects with a year property 

//for gender- data is a year object - data for data() is an inner array

export default function drawJudgess(svgPlace, data, courtsEN, colorScale){
    

    const innerArray = data.countsPerCourt;
    const year = data.year;

    const svg = svgPlace.append("svg");

    const width = 340;
    const height = 300;

    //specifying attrs for given svg

    svg.attr("width", width)
       .attr("height", height)

    //gradient def

       //helper function and variable for calculating offsets for colors

        const combinedPercents = []; 
        
        innerArray.forEach((court,i) =>{
            if(i === 0){
                combinedPercents.push(Number(court.percentOfAllWomen))
                
            }else{
            combinedPercents.push(Number(court.percentOfAllWomen) + Number(combinedPercents[i-1]))
            
        }});
        
    
        const judgessDefs = svg.append("defs");
    
        const gradient = judgessDefs.append("linearGradient")
                        .attr("id", `judgessGradient${year}`)
                        .attr("x1", "0%").attr("y1", "0%")
                        .attr("x2", "0%").attr("y2", "100%");
        
        //magistrate
        gradient.append("stop")
        .attr('offset', '0%')
        .attr("stop-color", colorScale("Magistrate"));

        gradient.append("stop")
        .attr('offset', `${Math.floor(combinedPercents[0])}%`)
        .attr("stop-color", colorScale("Magistrate"));

        //district
        gradient.append("stop")
        .attr('offset', `${Math.floor(combinedPercents[0])}%`)
        .attr("stop-color", colorScale("District"));

        gradient.append("stop")
        .attr('offset', `${Math.floor(combinedPercents[1])}%`)
        .attr("stop-color", colorScale("District"));

        //supreme
        gradient.append("stop")
        .attr('offset', `${Math.floor(combinedPercents[1])}%`)
        .attr("stop-color", colorScale("Supreme"));
            
        if(year > 1969){

            gradient.append("stop")
            .attr('offset', `${Math.floor(combinedPercents[2])}%`)
            .attr("stop-color", colorScale("Supreme"));

            //labor regional

            gradient.append("stop")
            .attr('offset', `${Math.floor(combinedPercents[2])}%`)
            .attr("stop-color", colorScale("Labor Regional"));

            gradient.append("stop")
            .attr('offset', `${Math.floor(combinedPercents[3])}%`)
            .attr("stop-color", colorScale("Labor Regional"));

             //labor national
             
             gradient.append("stop")
             .attr('offset', `${Math.floor(combinedPercents[3])}%`)
             .attr("stop-color", colorScale("Labor National"));
 
             gradient.append("stop")
             .attr('offset', "100%")
             .attr("stop-color", colorScale("Labor National"));
        }else{
            gradient.append("stop")
            .attr('offset', "100%")
            .attr("stop-color", colorScale("Supreme"));
        };
        
    //icon def

    const judgessFaceDef = judgessDefs.append("g")
                       .attr("id", "judgessFace");

   judgessFaceDef.append("path")
              .attr("d", "M372.816,322.828c-60.436-21.786-79.748-10.809-79.748-50.174c0-1.879,0.119-5.41,0.34-9.022h2.957c41.301,3.012,81.092,5.89,89.947-0.301c14.143-9.88-34.811-25.105-34.811-152.92c0-64.582-42.562-110.41-107.145-110.41c-0.549,0-1.088,0.033-1.629,0.043c-0.152-0.004-0.307-0.006-0.455-0.014V0.018c-0.242,0-0.484-0.018-0.727-0.018c-0.076,0-0.15,0.004-0.227,0.004c-0.073,0-0.146-0.004-0.223-0.004c-0.071,0-0.142,0.004-0.213,0.006C240.812,0.004,240.741,0,240.67,0c-0.076,0-0.149,0.004-0.223,0.004c-0.076,0-0.15-0.004-0.227-0.004c-0.242,0-0.484,0.018-0.727,0.018V0.03c-0.149,0.008-0.303,0.01-0.455,0.014c-0.542-0.01-1.081-0.043-1.629-0.043 c-64.581,0-107.145,45.828-107.145,110.41c0,127.814-48.951,143.041-34.811,152.92c8.856,6.188,48.647,3.312,89.948,0.301h2.958c0.22,3.612,0.338,7.146,0.338,9.022c0,39.365-19.313,28.388-79.747,50.174c-60.62,21.863-78.095,44.152-78.095,59.355c0,15.181,0,99.58,0,99.58h209.438h0.302h0.286h0.286h0.302h209.439c0,0,0-84.399,0-99.58C450.91,366.982,433.436,344.693,372.816,322.828z")
    
    //creating a container for the icons and putting everything together

    let container = svg.append("g")
    .attr("transform", "translate(40,0)")

    const judgessFace = container.selectAll("use")
        .data([data])
        .enter().append("use")
        .attr("href","#judgessFace")
        .attr("id", (d,i) => "id" + i)
        .attr("transform", "scale(0.4) translate(30)")
        .attr("x", 0)
        .attr("y", 20)
        .attr("fill", `url(#judgessGradient${year})`);

// Adding labels

        //year label for a group
        
        container.append("text")
                 .attr("x", 120)
                 .attr("y", 260)
                 .attr("fill", "#463F3A")
                 .text(year)
                 .style("font-family", "Rubik")
                 .style("font-size", "18px")

        // percent labels for each judgess

        container.selectAll("circle")
             .data(courtsEN)
             .enter()
             .append("circle")
             .attr("cx", 265)
             .attr("cy", (d,i) => 70 + i*20)
             .attr("r", 5)
             .attr("fill", d => colorScale(d))
             

       
        container.selectAll(".percentLabels")
             .data(innerArray)
             .enter()
             .append("text")
             .attr("class", "percentLabels")
             .attr("x", 255)
             .attr("y",(d,i) =>  74 + i*20)
             .text((d,i) => `${d.percentOfAllWomen === "0.0" ? 0 : d.percentOfAllWomen }%`)
             .attr("fill", d => colorScale(d.nameEN))
             .style("font-family", "Rubik")
             .style("font-size", "15px")
}

export function drawJudgessLegend(svgPlace, courts, colorScale){
    
    //General courts legend for the whole section

    const legendJudgessSVG = svgPlace.append("svg");

    legendJudgessSVG.attr("height", 70);
    legendJudgessSVG.attr("width", 530);

    const legendContanier = legendJudgessSVG.append("g");
    
    legendContanier.selectAll("circle")
             .data(courts)
             .enter()
             .append("circle")
             .attr("cx", (d,i) => 510 - i*100)
             .attr("cy", 20)
             .attr("r", 6)
             .attr("fill", d => colorScale(d.nameEN))
             

       
    legendContanier.selectAll(".percentLabels")
             .data(courts)
             .enter()
             .append("text")
             .attr("class", "percentLabels")
             .attr("x", (d,i) => 510 - i*100 - 8)
             .attr("y",24)
             .text(d => d.nameHE)
             .attr("fill", d => colorScale(d.nameEN))
             .style("font-family", "Rubik")
             .style("font-size", "15px")
        
}