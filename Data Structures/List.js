/*

List ADT implementation

*/

function List() {
  this.size = 0;
  this.data = []; // array of elements
  this.position = 0; // index of current pos for iteration

  this.clear = clear;
  this.find = find;
  this.prettyPrint = prettyPrint; // returns the list as a string
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.curPos = curPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;

}

/*
  Method implementations
*/

// Append: adds an element to the list.
function append(element) {
  this.data[this.size] = element;
  ++this.size;
}

function find(item) {
  for (var  i = 0; i < this.size; ++i) {
    if (this.data[i] === item) {
      return i;
    }
  }
  return -1;
}

// Remove: removes an element from the list
function remove(element) {
  var elementIndex = this.find(element);
  if (elementIndex >= 0) {
    this.data.splice(elementIndex, 1);
    --this.size;
    return true;
  }
  return false;
}

// Length: returns the number of elements in the list
function length() {
  return this.length;
}

function prettyPrint() {
  return this.data;
}

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.data.splice(insertPos + 1, 0, element);
    ++this.size;
    return true;
  }
  return false;
}

function clear() {
  delete this.data;
  this.data = [];
  this.size = this.position = 0;
}

function contains(element) {
  for (var i = 0; i < this.size; ++i) {
    if (this.data[i] == element) {
      return true;
    }
  }
  return false;
}

/*
  Functions used for traversing the list
*/

function front() {
  this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) --this.pos;
}

function next() {
  if (this.pos < this.listSize - 1) ++this.pos;
}

function currPos() {
  return this.pos;
}

function moveTo(pos) {
  this.pos = pos;
}

function getElement() {
  return this.dataStore[this.pos];
}

/*
  Example of how to use the list class
*/

var courses = new List();

courses.append("CS240");
courses.append("CS241");
courses.append("CS370");
courses.append("STAT332");
courses.append("STAT333");

names.front(); // move to the front of the list class
print(names.getElement()); // displays CS240

names.next(); // move to the next element
print(names.getElement()); // displays CS241

for (courses.front(); courses.currPos() < courses.length(); courses.next()) {
  print(courses.getElement());
}
