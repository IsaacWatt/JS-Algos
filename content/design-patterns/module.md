# Module Pattern

The `Module` design pattern is a way of further emulating classes (allows us to have private and public methods / variables).
This will "shield" from the global scope. This also helps to reduce variable / function names from conflicting. 

##Privacy
The module pattern encapsulates privacy, state, and organization using closures. This protects pieces from leaking into the global scope (and accidentally colliding with another developers interface). This pattern will only return a public API, keeping everything else within the closure private.  

##Example 
```javascript
var Module - (function () {
  var count = 0; 
  return {
    incrementCount: function () {
      ++count; 
      return count; 
    }, 
    resetCount: function () {
      console.log('counter was:' + count);
      count = 0; 
    }
  };
})();

// Note that the Module is instantly instantiated
// we can now call: 
Module.incrementCount(); 
and Module.resetCount(); 
```

Another good example using namespacing private and public vars: 
```javascript
var myNamespace = (function () {
  var privateVar = 0; 
  var privateMethod = function (text) {
    console.log(text);
  }; 
  
  return {
    publicVar: 'bar',
    
    publicFunction: function (foo) {
      ++privateVar; 
      privateMethod(foo); 
    }
  }; 
})();
```

##Advantages 


##Disadvantages 
