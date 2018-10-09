# Factorial!

In mathematics, the `factorial` of a non-negative integer n, is the product of all positive integers less and or equal to n. That is,
```
n! = n(n-1)(n-2)(n-3) .... (3)(2)(1)
Note: We typically define 0! = 0
```
There is an extension of the factorial called the [Gamma Function](https://en.wikipedia.org/wiki/Gamma_function). which is used for calculating the factorial of non-integers. This comes up a lot in statistics, and I would recommend reading over it if you are interested.

This section will discuss two techniques for computing the factorial of an integer n, and disucss their relative runtimes.
```javascript
/**
 * @param {number} number
 * @return {number}
 */
```

### Recursive Solution
```javascript
function factorial(n) {
  if (n <= 1) return n;
  else return n * factorial(n - 1);
}
```
This solutions computes the factorial recursively. The runtime of this needs to be looked at a little bit more carefully. For this we will set up a recurrence relation. Notice that each iteration runtime, say `T(n)` depends on `T(n-1)`, in other words,
```
T(n)     = T(n-1) + O(1)
```
Solving this recurrence gives that `T(n) = O(n)` thus our algorithm runs in `O(n)` time (which makes sense).
Another thing to to note, is that we end up with a "recursion tree" that must push every single call to `factorial` into a "stack" in memory. Since there are n calls to factorial, this tree (more like a linked list) will have height n. Thus we get an additional space complexity of `O(n)`. 
### Iterative Solution
```javascript
function factorial(n) {
  var result = 1;

  // n! = 1 * 2 * 3 * .... * n
  for (let i = 2; i <= n; ++i) {
    result *= i
  }
  return result;
}
```
This solution computes the factorial iteratively. The runtime is straight forward in this case, as it is simply a loop from 2 to n. The loop will run `O(n - 1)` times with each iteration simply multiplying the result which is `O(1)`. Thus the runtime is `O(n)`.  
