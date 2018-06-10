/*

List ADT implementation

*/

function List() {
  this.size = 0;
  this.data = []; // array of elements
  this.position = 0; // index of current pos for iteration

  this.clear = clear;
  this.find = find;
  this.prettyPrint = prettyPrint;
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
