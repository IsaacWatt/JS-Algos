# Creational Pattern

The `Creational` design pattern is the building block for design patterns in JavaScript. The creational pattern is the idea of creating a new "thing". In this case, that "thing" is an object!

There are 3 ways to instantiate a new object in JavaScript
```JavaScript
var obj = {};

var obj2 = Object.create(null);

var obj3 = new Object();
```

There are 4 ways to assign keys and values to an object
```JavaScript
// dot syntax
obj.myKey = 'value'; // write a property
var val = obj.myKey; // access property

// [] syntax
obj['myKey'] = 'value'; // write property
var val = obj['myKey']; // access property

// Object.defineProperty
Object.defineProperty(obj, "aKey", {
  value: 'more control',
  writable: false, // obj.aKey = '3' will throw an error in strict mode
  enumerable: true,
  configurable: true;
});

// Object.defineProperties
Object.defineProperties(obj, {
  "aKey": {
    value: 3,
    writable: true
  },
  "aDifferentKey": {
    value: 'val',
    writable: false
  }
});
```
