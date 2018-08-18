# Linked Lists

### Motivation
A `Linked List` is a collection of `Nodes` (each `Node` is linked to a successor `Node` using an object reference). The end of a `Linked List`
is marked by a `NULL` node.

### Advantages
Inserting a new node is very efficient. Simply set the link of the previous node to point to the new node, and the new nodes link is set to the node
that the previous node was pointing to. Removing items is also easy to do, simply redirect the link that points to the node that must be removed, 
to now point to the node that follows the one being removed. 

### Design 
We will use an object based design to create our `LinkedList` which will provide functions for inserting, removing, and other 
important functionalities. 

The following is our `Node` constructor. Our element can be anything from an int, to a string, to another linked list. 
```javascript
function Node(element) {
  this.element = element; 
  this.next = NULL; 
}
```

We now define our `Linked List`. 
```Javascript
function LinkedList() {
  this.head = new Node('head'); 
  this.find = find; 
  this.insert = insert; 
  this.remove = remove; 
  this.display = display; 
}
```

Implementation of functions
```javascript
function find (item) {
  var currNode = this.head; 
  while (currNode.next) {
    if (currNode.element == item) {
      return currNode; 
    }
    currNode = currNode.next; 
  }
  return false; 
}

/* insert a Node containing newEl after the Node containing item */
function insert(newEl, item) { 
  var newNode = new Node(newEl); 
  var current = this.find(item);  
  newNode.next = current.next; 
  current.next = newNode; 
}

function remove(item) {
  // find the Node before the Node containing item 
  var prevNode = this.head;
  while ( (prevNode.next != null) && (prevNode.next.element != item) ) {
    prevNode = prevNode.next;
  }
  
  if (prevNode.next != null) {
       prevNode.next = prevNode.next.next;
   }
}
```
