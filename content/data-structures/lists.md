# Lists

### Motivation
A list is a sequence of data which is ordered. Each item which is stored in a list is called an `element` of the list. In JavaScript, each `element` in a list can be of different types. It is worth noting that their is no limit on the number of elements a list can hold (other than the amount of memory available to the program which is using the list). A list that has no elements is called an `empty` list. Each available operation for our list ADT and its implementation is available below. 

### Implementation
```javascript
function List() {

  this.size = 0;
  this.data = [];
  this.pos = 0;

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
  return this.size;
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
  this.size = 0; 
  this.pos = 0;
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

The methods below will be used for traversing our list. These can be used as an iterator, which allows the client to move through the list without the developer having to exposing the `List` class. 

```javascript
function front() {
  this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
  --this.pos;
}

function next() {
  ++this.pos;
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

### Examples
traversing a list using the above code would look as follows: 
```javascript 
var courses = new List(); 
courses.append('cs241'); 
courses.append('cs240'); 
courses.append('cs370'); 
courses.append('stat333'); 
courses.append('math235'); 
courses.append('math237'); 

for (courses.front(); courses.currPos() < courses.length(); courses.next()) {
  console.log(courses.getElement()); 
}
```

Our list can also store lists, objects, objects with lists, lists of lists of lists, ... ect. Below I have provided an example of a list of `Customer`s. Each `Customer` has a `name` and a `shoppingCart`. Their `name` is simply a string, and their `shoppingCart` is a list of `Product`. A `Product` has a `name` which is also simply a string, and a `price` which is a number. I also have included a function called `getTotal` which consumes a `Customer` and returns their total owed. 

```javascript
// Product constructor 
function Product(name, price) {
  this.name = name; 
  this.price = price; 
  
  this.getPrice = function() {
    return this.price; 
  }
}

// Customer constructor
function Customer(name, shoppingCart) {
  this.name = name; 
  this.shoppingCart = shoppingCart; 
  
  this.getCart = function () {
    return this.shoppingCart; 
  }
}

// create a few products
var batteries = new Product('batteries', 12); 
var cereal = new Product('cereal', 5); 
var computer = new Product('cereal', 1200); 
var smartphone = new Product('smartphone', 1000);
var shoes = new Product('shoes', 99); 

// create a few shopping carts
var cart1 = new List(); 
cart1.append(batteries); 
cart1.append(computer); 
cart1.append(smartphone); 

var cart2 = new List(); 
cart2.append(shoes); 
cart2.append(cereal); 

// create a few customers
var jon = new Customer('Jon', cart1); 
var jessy = new Customer('Jessy', cart2); 

// create our list of Customers 
var customers = new List(); 
customers.append(jon); 
customers.append(jessy); 

function getTotal(customer) {
  var total = 0; 
  var cart = customer.getCart(); 
  for (cart.front(); cart.currPos() < cart.length(); cart.next() ) {
    total += cart.getElement().getPrice(); 
  }
  return total; 
}

```
