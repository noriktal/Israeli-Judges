import * as d3 from "d3";

//drawHammer() expects to accept an array of objects with a year property 

//for gender- data is a year object - data for data() is an inner array

export default function drawHammer(svgPlace, data){
    

    // const innerArray = data.countsPerCourt;

    const innerArray = data.countsPerCourt;
    const year = data.year;
    
    const svg = svgPlace.append("svg")
    
    //style variables

    let styles = {
        fontfamily: "Rubik",
        menFill: "#EC382E",
        womenFill: "#6B7FD7"
    }


    const width = 490;
    const height = 230;

    //specifying attrs for given svg

    svg.attr("width", 490) 
       .attr("height", 230) 
    

    
        //gradient def
    
        const hammerIconDefs = svg.append("defs");
    
        const gradients = hammerIconDefs.selectAll("linearGradient")
                        .data(innerArray)
                        .enter()
                        .append("linearGradient")
                        .attr("id", (d,i) => `gradient${year}${i}`)
                        .attr("x1", "0%").attr("y1", "0%")
                        .attr("x2", "0%").attr("y2", "100%");
        
        gradients.append("stop")
                .attr('offset', '0%')
                .attr("stop-color", "#6B7FD7")

        gradients.append("stop")
        .attr('offset', d => `${Math.floor(d.percentOfTotal)}%`)
        .attr("stop-color", "#6B7FD7")

        gradients.append("stop")
                .attr("offset", d => `${Math.floor(d.percentOfTotal)}%`)
                .attr("stop-color", "#EC382E")
        
            gradients.append("stop")
                    .attr("offset", "100%")
                    .attr("stop-color", "#EC382E")

    //icon definitions

    const hammerIcon = hammerIconDefs.append("g")
                       .attr("id", "hammerIcon");
    
    hammerIcon.append("path")
             .attr("d", "M97.082,84.759L69.068,56.747c-0.812-0.812-2.127-0.811-2.938,0l-0.757,0.755l-13.18-13.18l8.899-8.898l1.612,1.61c0.812,0.813,2.127,0.813,2.938,0l8.357-8.356c0.811-0.812,0.811-2.126,0-2.938L48.871,0.609c-0.812-0.812-2.126-0.812-2.938,0l-8.358,8.357c-0.39,0.389-0.609,0.917-0.609,1.469c0,0.55,0.219,1.079,0.609,1.469l1.612,1.611L13.515,39.191l-1.611-1.613c-0.39-0.39-0.918-0.608-1.469-0.608l0,0c-0.551,0-1.08,0.219-1.469,0.608l-8.358,8.359C0.219,46.327,0,46.854,0,47.406c0,0.55,0.219,1.08,0.608,1.469l25.13,25.13c0.812,0.812,2.127,0.812,2.938,0l8.358-8.359c0.39-0.39,0.609-0.917,0.609-1.469c0-0.55-0.219-1.079-0.609-1.469l-1.612-1.611l8.9-8.899l13.179,13.18l-0.756,0.753c-0.39,0.39-0.608,0.919-0.608,1.469c0,0.553,0.219,1.079,0.608,1.47L84.76,97.083c0.39,0.39,0.918,0.607,1.469,0.607s1.078-0.219,1.469-0.607l9.385-9.386C97.895,86.885,97.895,85.572,97.082,84.759z")
             

    //creating a container for the icons and putting everything together

    let container = svg.append("g")
    .attr("transform", "translate(10,0)")
    .attr("class", "hammerContainer")

    const hammers = container.selectAll("use")
        .data(innerArray)
        .enter().append("use")
        .attr("href","#hammerIcon")
        .attr("id", (d,i) => "id" + i)
        .attr("transform", "scale(0.8) translate(30)")
        .attr("x", (d,i) => 105*i)
        .attr("y", 20)
        .attr("fill", (d,i) => {
            if( year >= 1969 || (year < 1969 && i < 3)){
                return `url(#gradient${year}${i})`;
            }else if(year < 1969 && i >= 3){
                return "#463F3A";
            }
        })
        
    // Adding labels

        //year label for a group
        
        container.append("text")
                 .attr("x", 250)
                 .attr("y", 180)
                 .attr("fill", "#463F3A")
                 .text(year)
                 .style("font-family", "Rubik")
                 .style("font-size", "18px")

        // percent and name labels for each hammer
        
        container.selectAll(".labelPercent")
                 .data(innerArray)
                 .enter()
                 .append("text")
                 .attr("class", "labelPercent")
                 .attr("x", (d,i) => 115 + i*80)
                 .attr("y", 120)
                 .attr("fill", styles.womenFill)
                 .text((d,i) => {
                    if( year >= 1969 || (year < 1969 && i < 3)){
                        return `${d.percentOfTotal}%`;
                    }else if(year < 1969 && i >= 3){
                        return "-";
                    }
                 })
                 .style("font-family", "Rubik")
                 .style("font-size", "15px")

        container.selectAll(".labelName")
                 .data(innerArray)
                 .enter()
                 .append("text")
                 .attr("class", "labelName")
                 .attr("x", (d,i) => i < 3 ? (115 + i*80) : (130 + i*80))
                 .attr("y", 140)
                 .attr("fill", "#463F3A")
                 .text(d => d.nameHE)
                 .style("font-family", "Rubik")
                 .style("font-size", "15px")
}

