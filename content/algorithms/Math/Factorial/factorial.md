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

#### Iterative Solution
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
