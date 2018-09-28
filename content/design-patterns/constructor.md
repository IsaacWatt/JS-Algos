# Constructor Pattern

The `Constructor` design pattern is used for customizing your objects through setting field values. 

### Introductory Constructors
Constructors are an implementation of "class" instances. JavaScript does not specifically support the concept of classes, however
it does support constructor functions. By using the `new` keyword, the function is treated as a constructor function, instantiating a new object. 
The keyword `this` is a reference to the object being created. An example of a constructor may be as such: 
```javascript
function Book(title, numPages, isHeavy ) {
  // fields
  this.title = title; 
  this.numPages = numPages; 
  this.isHeavy = isHeavy 
  
  // methods
  this.prettyPrint = function() {
    var weightStr = this.isHeavy ? "is heavy" : "is light"; 
    return this.title + " has " + this.numPages + " pages. It " + weightStr; 
  }
}

var comic = new("Cracking the coding interview", 696, true); 
console.log(comic,prettyPrint());
```

### Prototype Constructors
JavaScript functions have a `prototype`. When you call a constructor function, the constructors `prototype` fields are all made available
to the new object. Thus multiple `Book`s can be created, and all use the same prototype. Follows is a redefinition of our `Book` constructor:
```javascript
function Book(title, numPages, isHeavy ) {
  // fields
  this.title = title; 
  this.numPages = numPages; 
  this.isHeavy = isHeavy;
}

function Book.prototype.prettyPrint = function() {
    var weightStr = this.isHeavy ? "is heavy" : "is light"; 
    return this.title + " has " + this.numPages + " pages. It " + weightStr;
}
```

Now a single instance of `prettyPrint` will be shared amongst all `Book` objects. 
