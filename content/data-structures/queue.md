# Queues

### Motivation
A `Queue` is a type of list, where elements are inserted at the `Back` and are removed from the `Front`. This is useful, as it
stores data in the order in which they occur (as opposed to a `Stack` where the last item inserted is the first to be processed). 
A Queue is a "first in, first out" structure (similar to a checkout line at a grocery store). 

### Operations
The primary operations of a `Queue` include inserting a new item into a queue (this is an `enqueue`), and removing items from
the queue (this is a `dequeue`). We can also call `peek` to see who is at the front of the queue. 

### Visualization 
Imagine our Queue is initially empty. The following visualizes a few calls to `enqueue` and `dequeue` 
```
Front                 Back
 ----- ----- ----- ----- -----
|  X  |     |     |     |     | X arrives in queue
 ----- ----- ----- ----- -----
 
 ----- ----- ----- ----- -----
|  X  |  Y  |     |     |     | Y arrives in queue
 ----- ----- ----- ----- -----
 
 ----- ----- ----- ----- -----
|  X  |  Y  |  Z  |     |     | Z arrives in queue
 ----- ----- ----- ----- -----
           
 ----- ----- ----- ----- -----
|  Y  |  Z  |     |     |     | X leaves in queue
 ----- ----- ----- ----- -----   
 
 ----- ----- ----- ----- -----
|  Z  |     |     |     |     | Y leaves in queue
 ----- ----- ----- ----- -----       
``` 

### Implementation

```javascript
function Queue() {
  this.data = []; 
  
  this.enqueue = enqueue; 
  this.dequeue = dequeue; 
  this.front = front; 
  this.back = back; 
  this.toString = toString; 
  this.clear = clear;
  this.isEmpty = isEmpty; 
}

function enqueue(data) {
  this.data.push(data);
}

function dequeue() {
  return this.data.shift(); 
}

function front() {
  return this.data[0];
}

function back() {
  return this.data[this.data.length - 1];
}

function toString() {
  var result = ""; 
  for (var i = 0; i < this.data.length; ++i) {
    result += this.data[i] + '\n'; 
  }
  return result; 
}

function isEmpty() {
  return this.data.length == 0; 
}

function clear () {
  delete this.data;
  this.data = [];
}
```
