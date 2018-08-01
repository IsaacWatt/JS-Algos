# Singleton Pattern

The `Singleton` design pattern is used to restrict the instation of a class to a single object. In conventional software engineering, 
a Singleton can be implemented by creating a class with a method that creates a new instance of the class if and 
only if one does not already exist. If an instance of the class does exist, it simply returns a reference to the object. 

In JavaScript a `Singleton` is used to serves as a namespace provider which will not expose implementation code to the global namespace.
Thus there is only a single point of access to the functions. 

In its simplest form, a `Singleton` is an object literal grouped with its methods and properties. Such as the following:
```javascript
var singleton = {
  prop1: 'hello', 
  prop2: 'goodbye', 
  method1: function () {
    console.log('hello world'); 
  }
};
```

This idea can be extended in such a way where you may add private properties and methods to the Singleton. To do this, simply encapsulate
variable and function declarations inside of a closure. Only expose the ones in which you wish to make public. Such as:
```javascript
var singleton = function () {

  var privateVar = 'password'; 
  
  function getPassword () {
    console.log( privateVar ); 
  }
  
  return {
  
    publicGetPass: function () {
      getPassword();
    }, 
    publicVar: 'user name'
  }; 
}; 
```
This can now be used like this
```javascript
var theSingleton = singleton(); 
theSingleton.publicGetPass(); // will console log 'password'
console.log( theSingleton.publicVar ); // will console log 'user name'
```

Now lets consider an example where you only instantiate the singleton when it is needed. We will place the instantiation code inside
of another constructor function. 
```javascript
var Singleton = (function () {
  var instantiated; 
  
  function initialize () {
    // here we will place the singleton itself
    
    return {
      publicMethod: function () {
        console.log('hello and welcome' ); 
      }, 
      publicProp: 'hi'
    };
  }
  
  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = initialize();
      }
      return instantiated; 
    }
  }; 
  
})(); 
```

We can then easily call public methods using `Singleton.getInstance().publicMethod()`. 

The `Singleton` pattern is useful when only one object is required to coordinate patterns accross the system. 
