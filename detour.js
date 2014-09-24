/*

Lyft Programming Challenge
Hareesh Nagaraj
9/24/2014

Calculate the detour distance between two different rides. 
Given four latitude / longitude pairs, where driver one is traveling from point A to point B
and driver two is traveling from point C to point D, write a function (in your language of choice)
to calculate the shorter of the detour distances the drivers would need to take to pick-up and drop-off the other driver.

I chose to implement the solution to this problem in Javascript, since it's the language I'm most comfortable in.

*/

var A = [0,0];        //Placeholder values for the geolocation of points A,B,C,D, to be used for this program but may be changed
var B = [0,210];
var C = [210,0];
var D = [210,210];

var locationMap = {   //Creating a hashmap that can be accessed from the string value of the point
  'A':A,
  'B':B,
  'C':C,
  'D':D
};

var routes = [['A','C','D','B'],['C','A','B','D']]; //The possible routes that must be taken - driver 1 picking up driver 2, or vice versa
var routeDistances = {}; //Mapping each route with its calculated distance

/*
This function returns the value for shortest distance, is the 'driver' for the functionality
First, we iterate through the possible paths defined in the 'routes' variable
For each path we calculate the distance between the current point and the next point

*/
function getShortestDistance(){     
  for(var i = 0; i < routes.length; i++){
    var path = routes[i];
    var distance = 0;
    for(var j = 0; j < routes[i].length - 1; j++){
      var point1 = routes[i][j];
      var point2 = routes[i][j+1];
      distance += calculateDistance(point1,point2);
    }
    routeDistances[i] = distance;
  }
  
  var leastDistance = routeDistances[0];
  var bestPath = 0;
  for(var key in routeDistances){
    if(routeDistances[key] < leastDistance){
      leastDistance = routeDistances[key];
      bestPath = key;
    }
  }

  var outputPath = '';
  for(var k = 0; k < routes[bestPath].length; k++){
    outputPath += routes[bestPath][k];
  }
  console.log("The best path is " + outputPath + " with a distance of " + leastDistance);
}