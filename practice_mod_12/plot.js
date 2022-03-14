//console.log(cityGrowths);


//Sort the cities in descending order of population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

console.log(sortedCities);


//Select only the top five cities in terms of growth.
//var topFiveCities = sortedCities.slice(0,5);
var topFiveCities = sortedCities.slice(0,7);

console.log(topFiveCities);

// The parseInt converts strings into integers.
var topFiveCityNames = topFiveCities.map(city => city.City);


var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames)
console.log(topFiveCityGrowths)


var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);