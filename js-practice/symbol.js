// let id1 = Symbol("id")
// let id2 = Symbol("id")
// console.log(typeof id1.toString());
// console.log(typeof id1.description);
// console.log(typeof id1);
// console.log(typeof id2);
// console.log(typeof id);

// console.log(id1 == id2);


// => "hidden" properties
// let user = {
//     name: "John"
// }
// let id = Symbol("id")
// user[id] = 1
// console.log(user[id]);
// console.log(typeof user[id]);


// let user = {
//     name: "Mihir"
// }

// user.id = "Our id value"
// user.id = "their id value"

// console.log(user);


// => symbols in object literal

// let id = Symbol("id")
// let name = Symbol("name")
// let user = {
//     [name]: "Mihir",
//     [id]: 123
// }
// console.log(user)


// => Symbol are skipped by for..in loop

// let id = Symbol("id")
// let user = {
//     name: "Mihir",
//     age: 20,
//     [id]: 123
// }

// for (let key in user) {
//     console.log(key);
// }

// console.log("direct: " + user[id]);



// let id = Symbol("id")
// let user = {
//     [id]: 123
// }

// let clone = Object.assign({}, user)
// let clone = {...user}
// console.log(clone[id]);


// => global symbol

let id = Symbol.for("id")
let idAgain = Symbol.for("id")
console.log(id === idAgain);


// => Symbol.keyFor

let sym = Symbol.for("name")
let sym2 = Symbol.for("id")

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));


let globalSymbol = Symbol.for("name")
let localSymbol = Symbol("name")

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));

console.log(localSymbol.description);


// => System symbols

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive



// Summary

// Symbol is a primitive type for unique identifiers

// Symbols are created with Symbol() call with an optional description

// use-cases of symbol

// 1. hidden