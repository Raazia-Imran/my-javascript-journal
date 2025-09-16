// Creating object in two ways:
// const tinderUser = new Object()   // singleton object
const tinderUser = {}                // non-singleton object (object literal)

// Adding properties
tinderUser.id = "123abc"
tinderUser.name = "Anybody"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ali",
            lastname: "choudhary"
        }
    }
}

// Accessing nested object values
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Different ways of combining objects:
// const obj3 = { obj1, obj2 }   // ❌ nests obj1 and obj2 inside obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // ✅ merges into a single object

const obj3 = {...obj1, ...obj2}  // ✅ spread operator (most common way)
// console.log(obj3);

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "h2@gmail.com" },
    { id: 3, email: "h3@gmail.com" },
]

// Accessing array of objects
users[1].email   // "h2@gmail.com"
// console.log(tinderUser);

// Object utility methods
// console.log(Object.keys(tinderUser));    // returns array of keys
// console.log(Object.values(tinderUser));  // returns array of values
// console.log(Object.entries(tinderUser)); // returns array of [key, value] pairs

// Checking if a property exists in an object
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Object Destructuring
// const { courseInstructor } = course;
const { courseInstructor: instructor } = course  // rename property during destructuring

// console.log(courseInstructor);  // ❌ not defined (renamed)
// console.log(instructor);        // ✅ "hitesh"

// Example JSON object (API-style data)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Example array of objects (like database entries)
// [
//     {},
//     {},
//     {}
// ]
