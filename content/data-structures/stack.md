# Stacks

### Motivation
A `Stack` is a list of elements that can only be accessed from one end of the list (the top). A Stack follows a "last-in, first-out" methodology (items are placed and removed from the top). Thus, the only way to get the bottom element of a stack, is to remove everything before it, or "on top" of it.

### Visualization
Imagine our stack is initially empty. The following visualizes a few calls of adding and removing elements:
```
                                              -----
                                             |  4  |
                            -----             -----          -----                           -----
                           |  2  |           |  2  |        |  2  |                         |  9  |
          -----             -----             -----          -----         -----             -----
push 3:  |  3  |  push 2 : |  3  |  push 4:  |  3  |  pop:  |  3  |  pop: |  3  |  push 9:  |  3  |
          -----             -----             -----          -----         -----             -----  
```

Below is an implementation of a `Stack` (we will use an array for our data).

### Implementation

```javascript
function Stack() {
  this.data = [];
  this.top = 0;

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
  this.data = [];
}
```

We can use our stack class to implement a function `isPalindrome` which consumes a string and returns true if it is a palindrome, else false.

We will push each char of the consumed string onto a `Stack` moving through the string left to right.
This will leave us with a stack that has the first char of our string at the bottom, and the last char at the top.

We can then begin to pop chars off of the stack and put them into a new string `reverse`. Finally we will compare `reverse` with the initial string.

```javascript
function isPalindrome(word) {
  var word_stack = new Stack();
  var reverse = "":

  for (int i = 0; i < word.length; ++i) {
    word_stack.push(word[i]);
  }

  while(word_stack.length > 0) {
    reverse += word_stack.pop()
  }

  return word == reverse;
}
```
