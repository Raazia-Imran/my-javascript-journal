// Singleton pattern (when object is created using constructors like Object.create())
// Here we are using object literals (not singleton).

// Object.create can be used to create objects with a prototype, 
// but here we directly define an object literal.

// Creating a unique symbol to use as a key in the object
const mySym = Symbol("key1")

// Defining an object using object literal syntax
const JsUser = {
    name: "Hitesh",                         // normal property
    "full name": "Hitesh Choudhary",        // key with space must be in quotes
    [mySym]: "mykey1",                      // symbol as a property key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing object properties
// console.log(JsUser.email)          // dot notation
// console.log(JsUser["email"])       // bracket notation
// console.log(JsUser["full name"])   // must use bracket notation for keys with space
// console.log(JsUser[mySym])         // accessing symbol key

// Modifying properties
JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser)   // would make the object immutable
JsUser.email = "hitesh@microsoft.com" // won't update if freeze() is active

// Adding methods to the object
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    // 'this' refers to JsUser object
    console.log(`Hello JS user, ${this.name}`);
}

// Method calls
console.log(JsUser.greeting());      // executes and returns undefined (because console.log inside method)
console.log(JsUser.greetingTwo());   // executes and returns undefined
