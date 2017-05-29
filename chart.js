var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Width and height
var svgWidth = 500;
var svgheight = 100;

//Create SVG element
var svg = d3.select("body")
			.append("svg") // crée un svg
			.attr("width", svgWidth)
            .attr("height", svgheight);


    svg.selectAll("rect")
	   .data(dataset)
	   .enter() // agit comme une boucle, ici les datas sont appelées 20fois
	   .append("rect")
	   .attr("x",(d, i)=> i * (svgWidth / dataset.length))  //Bar width of 20 plus 1 for padding
	   .attr("y", 0)
	   .attr("width", 20)
	   .attr("height", 100);