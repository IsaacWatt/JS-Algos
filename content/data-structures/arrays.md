# Arrays

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
```
