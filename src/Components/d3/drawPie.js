import * as d3 from "d3";


//drawPie() expects to accept array of objects, each with name,count, percent as properties- as second parameter

export default function drawPie(svgPlace, data){
    
    console.log(data);

    //The Layout of the graph

    const dims = {height: 250, width: 250, radius:125};

    const cent = {x: (dims.width/2 +5), y: (dims.height/2 +5)};

    const svg = svgPlace
                .append("svg")
                .attr("width", dims.width + 230)
                .attr("height", dims.height + 150);

    const graph = svg.append("g")
                    .attr("transform", `translate(${cent.x}, ${cent.y})`);

    //pie generator to find out the angles of the wedges

    const pie = d3.pie()
                .sort(null)
                .value(d => d.count);

    //arc generator to find out the d attribute for the <path> for wedges

    const arcPath = d3.arc()
                    .outerRadius(dims.radius)
                    .innerRadius(dims.radius/2);

    //creating color scale

    const color = d3.scaleOrdinal(["#EC382E", "#463F3A", "#4392F1", "#F8F32B", "#090446", "#BA685F"])
                    .domain(data.map(d => d.name))

    //tooltip setup

    // let tooltip = d3.select("body").append("div")
    //     .attr("class", "tooltip")
    //     .style("opacity", 0);

// Twin functions for animations

        const arcTweenEnter = (d) => {

            let i = d3.interpolate(d.endAngle, d.startAngle);

            return function (t){
                d.startAngle = i(t);
                return arcPath(d)
            }
        }

    //join enhanced (pie) data to path elements

    

    let paths = graph.selectAll("path")
                    .data(pie(data))
                    .enter()
                    .append("path")
                    .attr("class", "arc")
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 3)
                    .attr("fill", d => color(d.data.name))
                    .attr("d", arcPath)
                    .transition().duration(750)
                    .attrTween("d", arcTweenEnter)
                    

    //labels setup
    svg.append("g")
	   .attr("class", "labels")

    const filteredData = data.filter(object => object.percent !== '0.0%');
       
    const text = svg.select(".labels").selectAll("text")
       .data(filteredData)
       .enter()
       .append("text")
       .attr("x",(d,i) => { return dims.width + 140})
       .attr("y", (d,i) => {return 50 +i*25} )
       .text(d => `${d.name}-${d.percent}`)
       .attr("fill", d => color(d.name))
       .style("font-size", 18);
                    
       

    


        // //adding events
        
        // graph.selectAll("path")
        //     .on("mouseover", handleMouseOver)
        //     .on("mouseout", handleMouseOut)
        //     .on("click", handleClick)


    

    //event handlers

    // const handleMouseOver = (e, d) => {
    // console.log(d);

    //show tooltip
    // tooltip.transition()
    //         .duration(200)
    //         .style("opacity", .9);
    // tooltip.html(`<span id="name">${d.data.name}</span><br><span id="cost">${d.data.cost}</span>`)
    //         .style("left", (e.pageX) + "px")
    //         .style("top", (e.pageY - 10) + "px");

    //change wedge
    // d3.select(e.target)
    //     .transition("changeSliceFill").duration(300)
    //     .attr("fill", "#fff");
    // };

    // const handleMouseOut = (e,d) => {

    // //hide tooltip

    // tooltip.transition()
    //         .duration(300)
    //         .style("opacity", 0);

    // //change wedge back to normal

    // d3.select(e.target)
    //     .transition("changeSliceFill").duration(300)
    //     .attr("fill", color(d.data.name));
    // };


}