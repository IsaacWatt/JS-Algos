# Lists

### Explination
insert here

### Implementation
```javascript
function List() {

  // fields
  this.size = 0;
  this.data = [];
  this.position = 0;

  // methods
  this.clear = clear;
  this.find = find;
  this.getData = getData;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}
```

```javascript
// Append: adds an element to the list.
function append(element) {
  this.data[this.size] = element;
  ++this.size;
}

// find: returns the index of the consumed item or -1 if not found
function find(item) {
  for (var  i = 0; i < this.size; ++i) {
    if (this.data[i] === item) {
      return i;
    }
  }
  return -1;
}

// Remove: removes an element from the list if it exists
// returns true if element was removed, false if element was not in the list
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

// getData: returns the List data
function getData() {
  return this.data;
}

// insert: inserts 'element' after the element 'after'
// returns true if this was successful, returns false if 'after'
// was not found in the List
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.data.splice(insertPos + 1, 0, element);
    ++this.size;
    return true;
  }
  return false;
}

// clear: reclaims space, and deletes all data in the List
function clear() {
  delete this.data;
  this.data = [];
  this.size = this.position = 0;
}

// contains: returns true if 'element' is found in the List
// false if 'element' is not in the list
function contains(element) {
  for (var i = 0; i < this.size; ++i) {
    if (this.data[i] == element) {
      return true;
    }
  }
  return false;
}
```

```javascript
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
  return this.data[this.pos];
}
```
