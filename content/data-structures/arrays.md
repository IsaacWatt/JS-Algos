# Arrays
Arrays are commonly known as a linear collection of elements, each being accessible using via indices. JavaScript has a different "type" of array! In JavaScript, an Array is actually a special type of object with indices being property names. Since JavaScript arrays are objects, they are not as efficient as arrays in other programming languages. `Array` is a known JavaScript object, thus there are methods that you can use on an `Array` object. 

Arrays can be instantiated several ways, the simplest is using the [] operator. 
`var animals = [];`
You can also use the `Array` constructor, as such: 
`var numbers = new Array(1,2,3);`
It is also worth noting, that unlike many other programming languages, JavaScript array elements do not all need to be the same height. 

### Useful methods to know

```javascript 
arr.indexOf(val); // returns the index of the first occurrence of val, or -1 if val does not exist in arr. 
```
```javascript 
arr.lastIndexOf(val); // returns the index of the last occurrence of val, or -1 if val does not exist in arr. 
```
```javascript 
arr.join(sep); // returns a string of all the elements in arr seperated by sep. By default, sep is ','
```
```javascript 
arr.toString(); // returns a string representing the array.
```
```javascript 
arr.concat(a1,a2,a3,...,an); // returns a new array which is arr concatenated with a1, a2,.. an (the resulting array is not a set), thus the elements are not necessarily unique
```
```javascript 
arr.splice(index, num = 1, i1,i2,..,in); 
// index is required: index is the position in which you would like to begin adding values. index can be negative (this would specify from the end of the array). 
// num: the number of items to be removed beginning from the index 
// i1, .. , in are optional parameters which are the items you would like to add to the array beginning at index
```
```javascript 
arr.split(sep, lim); 
// sep: specifies char or regex to use for splitting the string. If omitted, entire string is returned in an array 
// lim: specifies the number of splits to perform
```
```javascript 
arr.sort(fn); // sorts arr lexicographically by default, however can consume a compare function, fn, which will determine how
to order the data. the sort fn may look as follows: 
function fn(a, b) {
  if (/* a is "less" than b */) {
    return -1; 
  } else if (/* b is "less" than a */) {
    return 1; 
  } else {
    return 0; 
  }
}
```

### Iterator functions 
it is useful to be able to iterate over all the values in an array. The following section demonstrates useful functions for doing so. 
```javascript
// will console.log every element in an array arr.  
arr.forEach(function(element) {
  console.log(element);
}); 

// allEven = true if every element in arr is even
var allEven = arr.every(function(element) {
  return element % 2 == 0; 
});

// allEven = true if every at least one element in arr is even
var allEven = arr.some(function(element) {
  return element % 2 == 0; 
});
```

### Arrays in Objects
We can use arrays to store more complicated data in an object. This way we can add variables associated with our data array, 
along with define methods to be used on our data. This is best shown with a simple example: 

This is best shown with an example: 
```javascript
function temperatures() {
  this.data = []; 
  this.add = add; 
  this.average = average; 
}

function add(item) {
  this.data.push(item); 
}
function average() {
  var total = 0; 
  this.data.forEach( function(element) {
    total += element; 
  }); 
  return total / this.data.length; 
}
```
