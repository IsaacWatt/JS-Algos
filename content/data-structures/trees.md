# Trees

### Motivation
Trees

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
  this.inOrder = inOrder; 
}
```
