//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jyoti",
            lastname: "Prajapati"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//Object.assign(target, source);
//const obj3 = Object.assign({}, obj1, obj2,obj4)
//console.log(obj3);

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com" 
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstrutor

//destructuring

const {courseInstructor } = course
console.log(courseInstructor);

//destructuring ko another name assign kar rakte hai
const {courseInstructor:Instructor} = course
console.log(Instructor);

//JSON Format data
// { 
//     "name": "hitesh",
//     "coursename": "JS in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

// https://randomuser.me/
// https://jsonformatter.org/