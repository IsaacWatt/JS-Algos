# Stacks

### Exp
insert here

### Implementation

```javascript
function Stack() {
  this.data = [];
  this.top = 0; // keeps track of the top of the stack

  this.push = push;
  this.pop = pop;
  this.peek = peek;

  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.data[this.top++] = element;
}

function pop() {
  return this.data[--this.top];
}

function peek() {
  return this.data[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}
```
