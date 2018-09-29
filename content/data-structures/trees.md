# Trees

### Motivation
A `Tree` is a data structure made up of `Node`s connected by edges that looks as folows:
```
     22           <- Level 0            1
    /  \                              / | \
   99   -3        <- Level 1        45  5  34
       /  \                         /      | \
     -43   111    <- Level 2       3       5  55
     /  \
    33  22        <- Level 3 
```
Trees can be split up into "levels", as depicted in the diagram. The "first" or top Node, is called the `root`. Each Node may have children, in the case of a Binary Tree (our example), each Node may have a `left` and `right` child. A node with no children (ie the node with value 99, 33, 22, and 111 in our example) is called a leaf. A Binary Search Tree is a Binary tree with the following ordering property: For each `Node` n, 
`n.left.value <= n.value <= n.right.value`. Below we will implement a Binary Search Tree.

### Implementation 
```javascript
function Node(data, left, right) {
  this.data = data; 
  this.left = left; 
  this.right = right; 
  this.show = show; 
}

function show() {
  return this.data; 
}

function BinarySeachTree() {
  this.root = null; 
  this.insert = insert;
  this.printInOrder = printInOrder; 
  this.printPostOrder = printPostOrder; 
  this.printPreOrder = printPreOrder; 
}

function insert(data) {
  var newNode = new Node(data, null, null); 
  
  if (this.root == null) {
    this.root = newNode;
  } else {
    var curr = this.root; 
    var parent;
    while (true) {
      parent = curr; 
      
      if (data < curr.data) { 
        curr = curr.left; 
        if (current == null) {
          parent.left = n;
          break; 
        } 
        
        else {
          current = current.right; 
          if (current == null) {
            parent.right = n;
            break; 
          }
        }
        
      }
    }
  } 
}

// (Left, Root, Right)
function printInOrder(node) { 
  if (!(node == null)) { 
    printInOrder(node.left);
    putstr(node.show() + " ");
    printInOrder(node.right);
  }
}

// (Root, Left, Right)
function printPostOrder(node) { 
  if (!(node == null)) { 
    putstr(node.show() + " ");
    printPostOrder(node.left);
    printPostOrder(node.right);
  }
}

// (Left, Right, Root)
function printPreOrder(node) { 
  if (!(node == null)) { 
    printPreOrder(node.left);
    printPreOrder(node.right);
    putstr(node.show() + " ");
  }
}
```
