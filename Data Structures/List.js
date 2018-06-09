/*

List ADT implementation

*/

function List() {
  this.size = 0;
  this.data = []; // array of elements
  this.clear = clear;
  this.find = find;
  this.append = append;
}

function append(element) {
  this.data[this.size++] = element;
}


function find(item) {
  for (var  i = 0; i < this.size; ++i) {
    if (this.data[i] === item) {
      return i;
    }
  }
  return -1;
}
