/*
useful methods on arrays:
========================
indexOf, lastIndexOf, join, to String,
concat, splice,
push, unshift, pop, shift, reverse,
sort (lexicographically default),
compare, every, some, reduce,
map, filter, forEach
/*


/* Jagged Arrays : Arrays where the rows in the array may have
   a different number of elements
*/
var grades = [[80, 75], [50, 52, 99], [73]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  print("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
  total = 0;
}

/* Arrays of Objects */
function Posn(x, y) {
  this.x = x;
  this.y = y;
}

var origin = new  Posn(0, 0);
var randomPoint = new Posn(39, 10);
var Pts = [origin, randomPoint];

function displayPosns(posnArr) {
  for (var curPoint = 0; curPoint < posnArr.length; ++i) {
    print(arr[i].x + ", " + arr[i].y);
  }
}

/* Arrays in Objects */
function Temperatures() {
  this.data = [];
  this.addData = add;
  this.average = average;
}

function addData(temperature) {
  this.data.push(temperature);
}

function average() {
  var total = 0;
  for (var i = 0; i < this.data.length; ++i) {
    total += this.data[i];
  }
  return total / this.data.length;
}

var myTemps = new Temperatures();
myTemps.add(50);
myTemps.add(52);
myTemps.add(49);
print(myTemps.average());
