//primitive types

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

// console.log(typeof(score));
// console.log(score);
// console.log(typeof(scoreValue));
// console.log(scoreValue); 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// console.log(typeof(isLoggedIn));
// console.log(isLoggedIn);
// console.log(typeof(outsideTemp));
// console.log(outsideTemp);
// console.log(typeof(userEmail));
// console.log(userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

//Reference (Non- primitive Datatype)
//Array, Object, Function

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}
//console.log(typeof(anotherId));

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@gmail.com"

console.log(userOne);
console.log(userTwo);

