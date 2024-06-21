// Array destructring


// let arr = ["Mihir", "Menon"]
// let [firstName, surname] = arr;

// console.log(firstName);
// console.log(surname);
// console.log(arr);


// let [firstName, surname] = "Mihir Menon".split(' ');
// console.log(firstName);
// console.log(surname);

// let user = {};
// [user.name, user.surname] = "Mihir Menon".split(' ')
// console.log(user.name);
// // console.log(user.surname);


// let user = {
//     name: "Mihir",
//     age: 30
// }

// for (let [key, value] of Object.entries(user)){
//     console.log(`${key}:${value}`);
// }


// using map

let user = new Map()
user.set("name", "Mihir")
user.set("age", "21")

for (let [key, value] of user){
    console.log(`${key}:${value}`);
}



// swapping variables

let guest = "Hello";
let admin = "World";

[guest, admin] = [admin, guest]
console.log(`${guest} ${admin}`);



let [name1, name2, ...rest] = ["Mihir", "Aryan", "Karan", "Anuj"]
console.log(name1);
console.log(name2);
console.log(rest);

console.log(typeof name1);
console.log(rest.length);
// kisi ne aa kaha majnu tuje allah bulata he
// to majnu josh-e vakshat ne ajab kissa sunata he
// are nadan ye kais bhala khuda ke pass kyu jaaye, khuda ko gar jaroorat he to laila banke aajaye