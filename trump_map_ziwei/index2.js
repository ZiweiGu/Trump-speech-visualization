
var w = 900;
var h = 600;

var projection = d3.geo.albersUsa()
             .translate([w/2, h/2])
             .scale([1000]);

var path = d3.geo.path()
         .projection(projection);

var color = d3.scale.linear()
          .range(["rgb(237,61,67)", "rgb(10,100,200)",]);

var legendText = [ "Clinton", "Trump"];

var svg = d3.select("#div2")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

var div = d3.select("#div2")
            .append("div")
          .attr("class", "tooltip")
        .style("opacity", 0);

d3.csv("http://0.0.0.0:8000/win.csv", function(data) {
color.domain([0,1]);

d3.json("http://0.0.0.0:8000/us-states.json", function(json) {

  for (var i = 0; i < data.length; i++) {

    var dataState = data[i].state;

    var dataValue = data[i].visited;

    for (var j = 0; j < json.features.length; j++)  {

      var jsonState = json.features[j].properties.name;

      if (dataState == jsonState) {

        json.features[j].properties.visited = dataValue;
        break;
      }
    }
  }

svg.selectAll("path")
   .data(json.features)
   .enter()
   .append("path")
   .attr("d", path)
   .style("stroke", "#fff")
   .style("stroke-width", "1")
   .style("fill", function(d) {

    var value = d.properties.visited;

  if (value) {
  return color(value);
  } else {
  return "rgb(213,222,217)";
     }
});

svg.append("text")
     .attr("x", (w / 2))
     .attr("y", 40)
     .attr("text-anchor", "middle")
     .style("font-size", "16px")
     .text("What topics did Trump talk about in each state?");
});
    });
