//JavaScript is a dynamically typed language, which means that type checks are performed at runtime, when the program is executing. This allows variables to hold values of different types during runtime, without the need to explicitly declare the data type.
// how we put data in memory and then access them, dependency of this there are two  type of data
// 1.  Primitive: call by value
//2.  Non primitive: refeserence 

//  7 types of primitive data type : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3