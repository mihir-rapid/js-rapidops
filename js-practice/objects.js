"use strict"

console.log("index");
// function createCourse(title) {
//     return {
//         title,
//         enroll() {
//             console.log("You are sucessfully enrolled")
//         }
//     }
// }

// // Constructor Function

// function Course(title) {
//     this.title = title,
//     this.enroll = function() {
//         console.log("You are sucessfully enrolled")
//     }
// }

// const course = new Course("Fundamentals of JavaScript")

// course.enroll()
// console.log(course)


// const course = {
//     title: "JavaScript",
//     enroll() {
//         console.log("you are sucessfully enrolled")
//     }
// }

// const course_1 = {...course}

// console.log(course)
// console.log(course_1)

// let a = course_1.enroll()

// let obj1 ={
//     a:70
// }

// let obj = {
//     a: 23,
//     'a': "Sanchit",
//     a: 45,
//     "a": "keka",
//     fn: function() {
//         console.log(this.a)
//     },
//     fn2:() =>  () => {
//         console.log(this.a)
//     }
// }

// obj.fn()
// obj.fn2.call(obj1)


// function makeUser(email) {
//     return {
//         email: email,
//         fn: function() {
//             console.log(`user with email ${this.email} created sucessfully`)
//         }
//     }
// }

// let user1 = makeUser("sjdlakjdsl@.com").fn()

// console.log(typeof parseFloat("100px"))


// function sum() {
//     let a = +prompt("enter first number")
//     let b = +prompt("enter second number")
//     alert(a+b)
// }
// sum()


// function readNumber() {
//     let num;

//     do {
//         num = prompt("enter a number please", 0)
//     } while(!isFinite(num))

//     if (num === null || num === '') {
//         return null
//     }

//     return num
// }

// alert(`Read: ${readNumber()}`)

// ========== DATA TYPES =========== //

// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// types: Array, Object, Function

// function makeUser(name, surname, email, post) {
//     return {
//         name,
//         surname,
//         email,
//         post
//     }
// }

// let user = makeUser(
//     prompt("Enter your name"),
//     prompt("Enter your surname"),
//     prompt("enter your email"),
//     prompt("Enter your position")
// )

// if (user) {
//     console.log(`Account created successfully with email ${user.email}`);
//     console.log(user);
// } else {
//     console.log("something went wrong, try again later");
// }

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "hellowrodl@gmail.com",
    fullName: {
        userFullName: {
            firstName: "hitesh",
            lastname: "chadakjd"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



let users = [
    {

    },
    {

    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isLoggedIn'))



const course = {
    courseName: "cs50 101",
    price: "999",
    courseInstructor: "David J Malan"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Mihir",
//     "courseName": "cs50",
//     "price": "free"
// }