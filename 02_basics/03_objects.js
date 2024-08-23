//singleton

//Object.create
//Object.literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jyoti",
    "full name": "jyoti Prajapati",
    [mySym] : "mykey1",
    age: 18,
    location: "Mumbai",
    email: "Jyoti@gmail.com",
    isLogged: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //we can access object dot(.) and [" "] 
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    
}
//console.log(JsUser.greeting);//function refrence
//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



