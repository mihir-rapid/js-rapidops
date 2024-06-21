// {
//     let message = "Mihir"
//     console.log(message);
// }

// {
//     let message = "Hello"
//     console.log(message);
// }

// if (true) {
//     let phrase = "jlkjdal"
//     console.log(phrase);
// }
// // console.log(phrase);

// for (let i=0; i<3; i++) {
//     console.log(i);
// }
// // console.log(i);


// => Nested functoins

// function sayHiBye(firstName, lastName) {
//     function getFullName() {
//         return firstName + " " + lastName
//     }
//     getFullName("Mihir", "Menon")

//     console.log("Hello, " + getFullName());
//     console.log("Bye, " + getFullName());

// }
// sayHiBye()

// => counter

// function makeCounter() {
//     let count = 0

//     return function() {
//         return count++
//     }
// }

// let counter = makeCounter()

// console.log(counter());
// console.log(counter());
// console.log(counter());



console.log(addOne(5))
function addOne(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));
