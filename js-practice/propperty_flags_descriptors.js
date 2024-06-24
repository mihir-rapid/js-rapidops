// "use strict"

// property flags

// 1. writable - if true value "can be changed"
// 2. enumerable - if true then "listed in loops"
// 3. configurable - if true "property can be deleted" and "attributes can be modified"


// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)


let user = {
    name: "Mihir"
}

let descriptor = Object.getOwnPropertyDescriptor(user, "name")

console.log(JSON.stringify(descriptor, null, 2));


let user2 = {}
Object.defineProperty(user2, "name", {
    value: "Armstrong"
})
let descriptor2 = Object.getOwnPropertyDescriptor(user2, "name")

console.log(JSON.stringify(descriptor2, null, 2));



// => non-writable

let user3 = {
    name: "Mihir"
}

Object.defineProperty(user3, "name", {
    writable: false
})

user3.name = "pete"
console.log(user3);


// => example

let user4 = {}
Object.defineProperty(user4, "name", {
    value: "Alan",
    enumerable: true,
    configurable: true
})

console.log(user4.name);
user4.name = "Pete"



// => Non-enumerable

let user5 = {
    name: "Kevin",
    toString(){
        return this.name
    }
}

Object.defineProperty(user5, "toString", {
    enumerable: false
})

for(let key in user5) {
    console.log(key);KT
}

// Non-enumerable properties are excluded from Object.keys
console.log(Object.keys(user5));



// => Non-configurable

let descriptor3 = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(JSON.stringify(descriptor3, null, 2));

Math.PI = 3 // Error
// Object.defineProperty(Math, "PI", {
//     writable: true
// })   // Error, configurable: false



// configurable: false prevents changes of property flags and its deletion, while allowing to change its value


let user6 = {
    name: "Adam"
}

Object.defineProperty(user6, "name", {
    configurable: false
})

user6.name = "Smith"
delete user6.name   // Error
console.log(user6);


// making user.name constant: writable: false

let user7 = {
    name: "Apple"
}

Object.defineProperty(user7, "name", {
    writable: false,
    configurable: false
})

user7.name = "Samsung"
delete user7.name
// Object.defineProperty(user7, "name", { value: "Nokia" })
console.log(user7);



// => Object.defineProperties

// Object.defineProperty(obj, {
//     prop1: descriptor1,
//     prop2: descriptor2
// })

let user8 = {}

Object.defineProperties(user8, {
    name: {
        value: "Adam",
        writable: false
    },
    surname: {
        value: "Smith",
        writable: false
    }
})
console.log(user8);



// => Object.getOwnPropertyDescriptors

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user7))
console.log(clone);