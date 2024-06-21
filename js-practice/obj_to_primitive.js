// let user = {
//     name: "John",
//     money: 1000,

//     [Symbol.toPrimitive](hint) {
//         console.log(`hint: ${hint}`);
//         return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// }

// console.log(user);
// console.log(+user);
// console.log(user + 500);


// => toString/valueOf

// let user = {
//     name: "username"
// }
// console.log(user);
// console.log(user.valueOf() === user);



// let user = {
//     name: "Mihir",
//     money: 1000,

//     toString(){
//         return `{name: "${this.name}"}`
//     },

//     valueOf(){
//         return this.money
//     }
// }

// console.log(user);
// console.log(+user);
// console.log(user + 500);



let user = {
    name: "Mihir",
    toString(){
        return this.name
    }
}
console.log(user);
console.log(user + 500);



// => further conversions

let obj = {
    toString(){
        return "2"
    }
}
console.log(obj * 2);


let obj1 = {
    toString(){
        return "2"
    }
}
console.log(obj1 + 2);


// summary

// 3 types
// => string
// => number
// => default

// The conversion algorithm is:

// 1. Call obj[Symbol.toPrimitive](hint) if the method exists,
// 2. Otherwise if hint is "string"
// - try calling obj.toString() or obj.valueOf(), whatever exists.
// 3. Otherwise if hint is "number" or "default"
// - try calling obj.valueOf() or obj.toString(), whatever exists.