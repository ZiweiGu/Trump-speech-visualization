// data

var dataset = [{"date": "2015-06-16", "length": 34347}, {"date": "2016-03-21", "length": 13157}, {"date": "2016-04-27", "length": 20109}, {"date": "2016-06-13", "length": 17705}, {"date": "2016-06-22", "length": 17935}, {"date": "2016-07-11", "length": 14895}, {"date": "2016-07-16", "length": 22286}, {"date": "2016-07-21", "length": 29069}, {"date": "2016-08-05", "length": 49713}, {"date": "2016-08-08", "length": 21590}, {"date": "2016-08-09", "length": 38823}, {"date": "2016-08-12", "length": 41549}, {"date": "2016-08-15", "length": 28092}, {"date": "2016-08-16", "length": 16643}, {"date": "2016-08-18", "length": 18035}, {"date": "2016-08-19", "length": 23281}, {"date": "2016-08-23", "length": 13392}, {"date": "2016-08-24", "length": 24364}, {"date": "2016-08-30", "length": 11264}, {"date": "2016-08-31", "length": 39904}, {"date": "2016-09-01", "length": 8532}, {"date": "2016-09-03", "length": 8782}, {"date": "2016-09-06", "length": 12130}, {"date": "2016-09-07", "length": 13999}, {"date": "2016-09-08", "length": 15789}, {"date": "2016-09-09", "length": 14953}, {"date": "2016-09-12", "length": 10470}, {"date": "2016-09-13", "length": 10552}, {"date": "2016-09-14", "length": 9881}, {"date": "2016-09-15", "length": 17935}, {"date": "2016-09-16", "length": 9073}, {"date": "2016-09-17", "length": 7548}, {"date": "2016-09-20", "length": 10620}, {"date": "2016-09-22", "length": 12877}, {"date": "2016-09-24", "length": 12614}, {"date": "2016-09-28", "length": 12189}, {"date": "2016-09-29", "length": 10664}, {"date": "2016-09-30", "length": 14380}, {"date": "2016-10-03", "length": 6069}, {"date": "2016-10-04", "length": 15561}, {"date": "2016-10-05", "length": 12131}, {"date": "2016-10-11", "length": 6296}, {"date": "2016-10-12", "length": 45489}, {"date": "2016-10-13", "length": 15166}, {"date": "2016-10-15", "length": 9755}, {"date": "2016-10-17", "length": 12033}, {"date": "2016-10-18", "length": 26871}, {"date": "2016-10-20", "length": 11773}, {"date": "2016-10-21", "length": 9725}, {"date": "2016-10-22", "length": 25565}, {"date": "2016-10-23", "length": 10595}, {"date": "2016-10-26", "length": 14015}, {"date": "2016-10-27", "length": 21464}, {"date": "2016-10-28", "length": 29000}, {"date": "2016-10-29", "length": 12184}, {"date": "2016-10-31", "length": 13775}, {"date": "2016-11-01", "length": 13009}, {"date": "2016-11-02", "length": 26883}, {"date": "2016-11-07", "length": 33146}, {"date": "2016-11-09", "length": 8517}]

var dataset2 = [{"date": "2015-06-16", "count": 11, "symbol": "Obama"}, {"date": "2015-06-16", "count": 1, "symbol": "Hillary"}, {"date": "2016-03-21", "count": 4, "symbol": "Obama"},
{"date": "2016-03-21", "count": 2, "symbol": "Hillary"}, {"date": "2016-04-27", "count": 12, "symbol": "Obama"}, {"date": "2016-04-27", "count": 9, "symbol": "Hillary"},
{"date": "2016-06-13", "count": 4, "symbol": "Obama"}, {"date": "2016-06-13", "count": 36, "symbol": "Hillary"}, {"date": "2016-06-22", "count": 2, "symbol": "Obama"},
{"date": "2016-06-22", "count": 84, "symbol": "Hillary"}, {"date": "2016-07-11", "count": 2, "symbol": "Obama"}, {"date": "2016-07-11", "count": 24, "symbol": "Hillary"},
{"date": "2016-07-16", "count": 5, "symbol": "Obama"}, {"date": "2016-07-16", "count": 19, "symbol": "Hillary"}, {"date": "2016-07-21", "count": 7, "symbol": "Obama"},
{"date": "2016-07-21", "count": 22, "symbol": "Hillary"}, {"date": "2016-08-05", "count": 16, "symbol": "Obama"}, {"date": "2016-08-05", "count": 48, "symbol": "Hillary"},
{"date": "2016-08-08", "count": 17, "symbol": "Obama"}, {"date": "2016-08-08", "count": 54, "symbol": "Hillary"}, {"date": "2016-08-09", "count": 15, "symbol": "Obama"},
{"date": "2016-08-09", "count": 29, "symbol": "Hillary"}, {"date": "2016-08-12", "count": 9, "symbol": "Obama"}, {"date": "2016-08-12", "count": 40, "symbol": "Hillary"},
{"date": "2016-08-15", "count": 14, "symbol": "Obama"}, {"date": "2016-08-15", "count": 26, "symbol": "Hillary"}, {"date": "2016-08-16", "count": 2, "symbol": "Obama"},
{"date": "2016-08-16", "count": 30, "symbol": "Hillary"}, {"date": "2016-08-18", "count": 4, "symbol": "Obama"}, {"date": "2016-08-18", "count": 44, "symbol": "Hillary"},
{"date": "2016-08-19", "count": 5, "symbol": "Obama"}, {"date": "2016-08-19", "count": 51, "symbol": "Hillary"}, {"date": "2016-08-23", "count": 7, "symbol": "Obama"},
{"date": "2016-08-23", "count": 53, "symbol": "Hillary"}, {"date": "2016-08-24", "count": 14, "symbol": "Obama"}, {"date": "2016-08-24", "count": 44, "symbol": "Hillary"},
{"date": "2016-08-30", "count": 0, "symbol": "Obama"}, {"date": "2016-08-30", "count": 31, "symbol": "Hillary"}, {"date": "2016-08-31", "count": 13, "symbol": "Obama"},
{"date": "2016-08-31", "count": 42, "symbol": "Hillary"}, {"date": "2016-09-01", "count": 3, "symbol": "Obama"}, {"date": "2016-09-01", "count": 29, "symbol": "Hillary"},
{"date": "2016-09-03", "count": 0, "symbol": "Obama"}, {"date": "2016-09-03", "count": 0, "symbol": "Hillary"}, {"date": "2016-09-06", "count": 1, "symbol": "Obama"},
{"date": "2016-09-06", "count": 39, "symbol": "Hillary"}, {"date": "2016-09-07", "count": 10, "symbol": "Obama"}, {"date": "2016-09-07", "count": 27, "symbol": "Hillary"},
{"date": "2016-09-08", "count": 0, "symbol": "Obama"}, {"date": "2016-09-08", "count": 24, "symbol": "Hillary"}, {"date": "2016-09-09", "count": 5, "symbol": "Obama"},
{"date": "2016-09-09", "count": 60, "symbol": "Hillary"}, {"date": "2016-09-12", "count": 2, "symbol": "Obama"}, {"date": "2016-09-12", "count": 34, "symbol": "Hillary"},
{"date": "2016-09-13", "count": 4, "symbol": "Obama"}, {"date": "2016-09-13", "count": 13, "symbol": "Hillary"}, {"date": "2016-09-14", "count": 3, "symbol": "Obama"},
{"date": "2016-09-14", "count": 20, "symbol": "Hillary"}, {"date": "2016-09-15", "count": 8, "symbol": "Obama"}, {"date": "2016-09-15", "count": 15, "symbol": "Hillary"},
{"date": "2016-09-16", "count": 5, "symbol": "Obama"}, {"date": "2016-09-16", "count": 6, "symbol": "Hillary"}, {"date": "2016-09-17", "count": 2, "symbol": "Obama"},
{"date": "2016-09-17", "count": 12, "symbol": "Hillary"}, {"date": "2016-09-20", "count": 2, "symbol": "Obama"}, {"date": "2016-09-20", "count": 37, "symbol": "Hillary"},
{"date": "2016-09-22", "count": 4, "symbol": "Obama"}, {"date": "2016-09-22", "count": 10, "symbol": "Hillary"}, {"date": "2016-09-24", "count": 3, "symbol": "Obama"},
{"date": "2016-09-24", "count": 16, "symbol": "Hillary"}, {"date": "2016-09-28", "count": 2, "symbol": "Obama"}, {"date": "2016-09-28", "count": 46, "symbol": "Hillary"},
{"date": "2016-09-29", "count": 2, "symbol": "Obama"}, {"date": "2016-09-29", "count": 42, "symbol": "Hillary"}, {"date": "2016-09-30", "count": 4, "symbol": "Obama"},
{"date": "2016-09-30", "count": 78, "symbol": "Hillary"}, {"date": "2016-10-03", "count": 1, "symbol": "Obama"}, {"date": "2016-10-03", "count": 2, "symbol": "Hillary"},
{"date": "2016-10-04", "count": 14, "symbol": "Obama"}, {"date": "2016-10-04", "count": 32, "symbol": "Hillary"}, {"date": "2016-10-05", "count": 10, "symbol": "Obama"},
{"date": "2016-10-05", "count": 33, "symbol": "Hillary"}, {"date": "2016-10-11", "count": 0, "symbol": "Obama"}, {"date": "2016-10-11", "count": 31, "symbol": "Hillary"},
{"date": "2016-10-12", "count": 17, "symbol": "Obama"}, {"date": "2016-10-12", "count": 69, "symbol": "Hillary"}, {"date": "2016-10-13", "count": 1, "symbol": "Obama"},
{"date": "2016-10-13", "count": 29, "symbol": "Hillary"}, {"date": "2016-10-15", "count": 5, "symbol": "Obama"}, {"date": "2016-10-15", "count": 29, "symbol": "Hillary"},
{"date": "2016-10-17", "count": 9, "symbol": "Obama"}, {"date": "2016-10-17", "count": 35, "symbol": "Hillary"}, {"date": "2016-10-18", "count": 7, "symbol": "Obama"},
{"date": "2016-10-18", "count": 36, "symbol": "Hillary"}, {"date": "2016-10-20", "count": 1, "symbol": "Obama"}, {"date": "2016-10-20", "count": 20, "symbol": "Hillary"},
{"date": "2016-10-21", "count": 2, "symbol": "Obama"}, {"date": "2016-10-21", "count": 8, "symbol": "Hillary"}, {"date": "2016-10-22", "count": 5, "symbol": "Obama"},
{"date": "2016-10-22", "count": 15, "symbol": "Hillary"}, {"date": "2016-10-23", "count": 5, "symbol": "Obama"}, {"date": "2016-10-23", "count": 26, "symbol": "Hillary"},
{"date": "2016-10-26", "count": 3, "symbol": "Obama"}, {"date": "2016-10-26", "count": 13, "symbol": "Hillary"}, {"date": "2016-10-27", "count": 21, "symbol": "Obama"},
{"date": "2016-10-27", "count": 41, "symbol": "Hillary"}, {"date": "2016-10-28", "count": 20, "symbol": "Obama"}, {"date": "2016-10-28", "count": 42, "symbol": "Hillary"},
{"date": "2016-10-29", "count": 13, "symbol": "Obama"}, {"date": "2016-10-29", "count": 32, "symbol": "Hillary"}, {"date": "2016-10-31", "count": 6, "symbol": "Obama"},
{"date": "2016-10-31", "count": 55, "symbol": "Hillary"}, {"date": "2016-11-01", "count": 10, "symbol": "Obama"}, {"date": "2016-11-01", "count": 7, "symbol": "Hillary"},
{"date": "2016-11-02", "count": 13, "symbol": "Obama"}, {"date": "2016-11-02", "count": 46, "symbol": "Hillary"}, {"date": "2016-11-07", "count": 11, "symbol": "Obama"},
{"date": "2016-11-07", "count": 40, "symbol": "Hillary"}, {"date": "2016-11-09", "count": 0, "symbol": "Obama"}, {"date": "2016-11-09", "count": 2, "symbol": "Hillary"}]

// var dataset2 = [{"date": "2015-06-16", "count_o": 11, "count_h": 1}, {"date": "2016-03-21", "count_o": 4, "count_h": 2}, {"date": "2016-04-27", "count_o": 12, "count_h": 9}, {"date": "2016-06-13", "count_o": 4, "count_h": 36}, {"date": "2016-06-22", "count_o": 2, "count_h": 84}, {"date": "2016-07-11", "count_o": 2, "count_h": 24}, {"date": "2016-07-16", "count_o": 5, "count_h": 19}, {"date": "2016-07-21", "count_o": 7, "count_h": 22}, {"date": "2016-08-05", "count_o": 16, "count_h": 48}, {"date": "2016-08-08", "count_o": 17, "count_h": 54}, {"date": "2016-08-09", "count_o": 15, "count_h": 29}, {"date": "2016-08-12", "count_o": 9, "count_h": 40}, {"date": "2016-08-15", "count_o": 14, "count_h": 26}, {"date": "2016-08-16", "count_o": 2, "count_h": 30}, {"date": "2016-08-18", "count_o": 4, "count_h": 44}, {"date": "2016-08-19", "count_o": 5, "count_h": 51}, {"date": "2016-08-23", "count_o": 7, "count_h": 53}, {"date": "2016-08-24", "count_o": 14, "count_h": 44}, {"date": "2016-08-30", "count_o": 0, "count_h": 31}, {"date": "2016-08-31", "count_o": 13, "count_h": 42}, {"date": "2016-09-01", "count_o": 3, "count_h": 29}, {"date": "2016-09-03", "count_o": 0, "count_h": 0}, {"date": "2016-09-06", "count_o": 1, "count_h": 39}, {"date": "2016-09-07", "count_o": 10, "count_h": 27}, {"date": "2016-09-08", "count_o": 0, "count_h": 24}, {"date": "2016-09-09", "count_o": 5, "count_h": 60}, {"date": "2016-09-12", "count_o": 2, "count_h": 34}, {"date": "2016-09-13", "count_o": 4, "count_h": 13}, {"date": "2016-09-14", "count_o": 3, "count_h": 20}, {"date": "2016-09-15", "count_o": 8, "count_h": 15}, {"date": "2016-09-16", "count_o": 5, "count_h": 6}, {"date": "2016-09-17", "count_o": 2, "count_h": 12}, {"date": "2016-09-20", "count_o": 2, "count_h": 37}, {"date": "2016-09-22", "count_o": 4, "count_h": 10}, {"date": "2016-09-24", "count_o": 3, "count_h": 16}, {"date": "2016-09-28", "count_o": 2, "count_h": 46}, {"date": "2016-09-29", "count_o": 2, "count_h": 42}, {"date": "2016-09-30", "count_o": 4, "count_h": 78}, {"date": "2016-10-03", "count_o": 1, "count_h": 2}, {"date": "2016-10-04", "count_o": 14, "count_h": 32}, {"date": "2016-10-05", "count_o": 10, "count_h": 33}, {"date": "2016-10-11", "count_o": 0, "count_h": 31}, {"date": "2016-10-12", "count_o": 17, "count_h": 69}, {"date": "2016-10-13", "count_o": 1, "count_h": 29}, {"date": "2016-10-15", "count_o": 5, "count_h": 29}, {"date": "2016-10-17", "count_o": 9, "count_h": 35}, {"date": "2016-10-18", "count_o": 7, "count_h": 36}, {"date": "2016-10-20", "count_o": 1, "count_h": 20}, {"date": "2016-10-21", "count_o": 2, "count_h": 8}, {"date": "2016-10-22", "count_o": 5, "count_h": 15}, {"date": "2016-10-23", "count_o": 5, "count_h": 26}, {"date": "2016-10-26", "count_o": 3, "count_h": 13}, {"date": "2016-10-27", "count_o": 21, "count_h": 41}, {"date": "2016-10-28", "count_o": 20, "count_h": 42}, {"date": "2016-10-29", "count_o": 13, "count_h": 32}, {"date": "2016-10-31", "count_o": 6, "count_h": 55}, {"date": "2016-11-01", "count_o": 10, "count_h": 7}, {"date": "2016-11-02", "count_o": 13, "count_h": 46}, {"date": "2016-11-07", "count_o": 11, "count_h": 40}, {"date": "2016-11-09", "count_o": 0, "count_h": 2}];

//cleaning data
dataset.forEach(function(d){ d.date = d3.time.format("%Y-%m-%d").parse(d.date); });
dataset2.forEach(function(d){ d.date = d3.time.format("%Y-%m-%d").parse(d.date); });

//formatting things
var format_len = d3.format(",");
var format_time = d3.time.format("%m/%d/%Y");

//margins and heights/stuff
var svgWidth = 800, svgHeight = 500;
var margin = { top: 20, right: 20, bottom: 70, left: 50 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
var padding = 50;

//first graph
var x = d3.time.scale()
  .domain([new Date(2015,5,1), new Date(2016,11,1)])
  .range([padding, width - 10]);

var y = d3.scale.linear()
  .domain([0, 50000]).nice()
  .range([height,0]);

var svg = d3.select("#vis-container").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var line = d3.svg.line()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y(d.length); });

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .ticks(d3.time.months)
  .tickValues(dataset.date)
  .tickFormat(d3.time.format("%m/%y"));

var yAxis = d3.svg.axis().scale(y)
  .orient("left")
  .ticks(4);

var tooltip = d3.select("#vis-container").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

var tipMouseOver = function(d) {
  var html = "Words: " + format_len(d.length) +
    "\n Date: " + format_time(d.date);
  tooltip.html(html)
    .style("left", (d3.event.pageX + 10) + "px")
    .style("top", (d3.event.pageY - 20) + "px")
  .transition()
    .duration(200)
    .style("opacity", .9);
};

var tipMouseOut = function(d) {
  tooltip.transition()
    .duration(300) // ms
    .style("opacity", 0); // don't care about position!
};

svg.append("g")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + 25)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("# of words");

svg.append("g")
  .attr("transform", "translate(0," + (height) + ")")
  .call(xAxis)
.selectAll("text")
  .attr("y",5)
  .attr("x",9)
  .attr("dy", ".35em")
  .attr("transform","rotate(45)")
  .style("text-anchor", "start");

svg.append("text")
  .attr("transform",
        "translate(" + (width/2) + " ," +
                       (height + margin.top + 40) + ")")
  .style("text-anchor", "middle")
  .text("Date");

svg.append("path")
  .attr("class", "line")
  .attr("clip-path", "url(#clip)")
  .attr("d", line(dataset));

svg.selectAll(".dot")
  .data(dataset)
.enter().append("circle")
  .attr("class","dot")
  .attr("r", 5)
  .attr("cx", function(d) { return x(d.date); })
  .attr("cy", function(d) { return y(d.length); })
  .on("mouseover", tipMouseOver)
  .on("mouseout", tipMouseOut);











//second graph
var svg2 = d3.select("#vis-container2").append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var y2 = d3.scale.linear()
  .domain([0, 100]).nice()
  .range([height,0]);

var line2 = d3.svg.line()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y2(d.count); });

var yAxis2 = d3.svg.axis().scale(y2)
  .orient("left")
  .ticks(5);

var tooltip2 = d3.select("#vis-container2").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

var tipMouseOver2 = function(d) {
  var html = d.symbol + " Mentions: " + format_len(d.count) +
    "\n Date: " + format_time(d.date);
  tooltip2.html(html)
    .style("left", (d3.event.pageX + 10) + "px")
    .style("top", (d3.event.pageY - 20) + "px")
  .transition()
    .duration(200)
    .style("opacity", .9);
};

var tipMouseOut2 = function(d) {
    tooltip2.transition()
      .duration(300) // ms
      .style("opacity", 0); // don't care about position!
};

var dataNest = d3.nest()
  .key(function(d) {return d.symbol;})
  .entries(dataset2);

var color = d3.scale.category10();

dataNest.forEach(function(d){
  svg2.append("path")
    .attr("class","line")
    .attr("data-legend",function() { return d.symbol})
    .style("stroke", function() {
      return d.color = color(d.key); })
    .attr("d", line2(d.values));
});

svg2.append("g")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis2);

svg2.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + 25)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("# of mentions");

svg2.append("g")
  .attr("transform", "translate(0," + (height) + ")")
  .call(xAxis)
.selectAll("text")
  .attr("y",5)
  .attr("x",9)
  .attr("dy", ".35em")
  .attr("transform","rotate(45)")
  .style("text-anchor", "start");

svg2.append("text")
  .attr("transform",
        "translate(" + (width/2) + " ," +
                       (height + margin.top + 40) + ")")
  .style("text-anchor", "middle")
  .text("Date");

svg2.selectAll(".dot")
  .data(dataset2)
.enter().append("circle")
  .attr("class","dot")
  .attr("r", 5)
  .attr("cx", function(d) { return x(d.date); })
  .attr("cy", function(d) { return y2(d.count); })
  .on("mouseover", tipMouseOver2)
  .on("mouseout", tipMouseOut2);

//Trying to do legend
// var legend = svg2.append("g")
//   .attr("class","legend")
//   .attr("transform","translate(50,30)")
//   .style("font-size","12px")
//   .call(d3.legend);
//
// legend.append("text")
//   .attr("x", radius + 30)
//   .attr("y", 9.5)
//   .attr("dy", "0.32em")
//   .text(function(d) {
//     return d.data.type;
//   });
//
// legend.append("rect")
//   .attr("x", radius + 10)
//   .attr("width", 19)
//   .attr("height", 19)
//   .attr("fill", function(d) {
//     return color(d.data.type);
//   });
