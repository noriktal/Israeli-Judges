import * as d3 from 'd3';

export function colorScale(namesArray, colorsArray){
    
    const colorNames2 = ["#FF9505", "#4392F1"];
    const colorNames3 = ["#FF9505", "#4392F1", "#463F3A"];
    const colorNames5 = ["#C18E02", "#4392F1","#FF9505", "#463F3A", "#EC382E"];
    const colorNames6 = ["#C18E02", "#4392F1","#FF9505", "#463F3A", "#EC382E", "#7F7473"];

    let choice;

    switch(colorsArray) {
        case "2":
          choice = colorNames2;
          break;
        case "3":
          choice = colorNames3;
          break;
        case "5":
          choice = colorNames5;
          break;
        case "6":
          choice = colorNames6;
          break;
        default:
            choice = colorNames5;
      }

    const colorScale = d3.scaleOrdinal()
                            .domain(namesArray)
                            .range(choice);
    
    return colorScale;
}

