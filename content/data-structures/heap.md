# Heaps

This section will discuss (binary) min, and max heaps. A (max) `Heap` is a binary tree will the following two properties: 
```
1. Structural Property - Heaps are completely filled (except possibly the last level, which is left justified). 
2. Heap Order Preoperty - For any node i, the key of the parent node is >= the key of i.  
```
A min heap is the same except with the opposite heap order property. 

The reason we use a heap is because we can extract the min in `O(1)` time for a min-heap, and the max in `O(1)` time for a max heap. 
A common mistake, is to think that searching is `O(log(n))`. This is false, because a heap is not necessarily a binary search tree. It is simply a binary where child node key is less than (or greater for a max heap) its parent. 

### Implementation 
We are essentially going to store our heap the same way we would store a binary tree, however implement different operations that are commonly used for a heap. We will implement a min heap, however the implementation for a max heap is similar. 

```javascript
function Node(data, left, right) {
  this.data = data; 
  this.left = left; 
  this.right = right; 
  this.show = show;
  this.getMax = max; 
  this.DeleteMax = deleteMax
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
```
