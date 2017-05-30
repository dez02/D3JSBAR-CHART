var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Width and height
var svgWidth = 500;
var svgHeight = 100;
var barPadding = 1;  // <-- New!

//Create animation
var  animate = d3.transition()
	 .duration(1000);




//Create SVG element
var svg = d3.select("body")
			.append("svg") // crée un svg
			.attr("width", svgWidth)
            .attr("height", svgHeight);


    svg.selectAll("rect")
	   .data(dataset)
	   .enter() // agit comme une boucle, ici les datas sont appelées 20fois
	   .append("rect")
	   .attr("x",(d, i)=> i * (svgWidth / dataset.length))  //Bar width of 20 plus 1 for padding
       .attr("y", 100)
	   .transition(animate)
	   .attr("y", (d)=> svgHeight - d * 4)
	   .attr("width", svgWidth / dataset.length - barPadding)
	   .attr("height", (d)=> d * 4)
	   .attr("fill", (d) => "rgb(0, 0, " + (d * 10) + ")");

	svg.selectAll('text')
	   .data(dataset)
	   .enter()
	   .append('text')
	   .text((d) => d)
	   .attr("x",(d, i)=> i * (svgWidth / dataset.length)  + (svgWidth / dataset.length - barPadding) / 2)
	   .attr("y", 100 + 14)
	   .transition(animate)
	   .attr("y", (d)=> svgHeight - (d * 4 ) + 14)
	   .attr("font-family", "sans-serif")
	   .attr("font-size", "11px")
	   .attr("fill", "#f00")
	   .attr("text-anchor", "middle");

