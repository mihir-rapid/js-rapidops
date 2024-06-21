// Symbol.iterator

// let range = {
//     from: 1,
//     to: 5
// }

// range[Symbol.iterator] = function(){
//     return{
//         current: this.from,
//         last: this.to,
//         next(){
//             if (this.current <= this.last){
//                 return{
//                     done: false,
//                     value: this.current++
//                 }
//             } else{
//                 return{
//                     done: true
//                 }
//             }
//         }
//     }
// }

// for (let num of range){
//     console.log(num);
// }


// let range = {
//     from: 1,
//     to: 10000,

//     [Symbol.iterator](){
//         this.current = this.from
//         return this
//     },

//     next(){
//         if (this.current <= this.to){
//             return{
//                 done: false,
//                 value: this.current++
//             }
//         } else {
//             return {
//                 done: true
//             }
//         }
//     }
// }

// for (let num of range){
//     console.log(num);
// }



// => stirng is iterable
for (let char of "bottle"){
    console.log(char);
}

let str = "✨🚀"
for (let char of str){
    console.log(char);
}


// => calling an iterator explicitly

let str1 = "Hello"
let iterator = str[Symbol.iterator]()
while(true){
    let res = iterator.next()
    if (res.done) break;
    console.log(res.value);
}


// => iterable and array-likes

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// }
// for (let item of arrayLike) {}

let arrayLike = {
    0: "Hello",
    1: "wORLD",
    length: 2
}

let arr = Array.from(arrayLike)
console.log(arr);
console.log(arr.pop());



let str2 = "✨🚀"
let chars = []
for(let char of str2){
    chars.push(char)
}

console.log(chars);
console.log(chars[0]);
console.log(chars[1]);



function slice(str, start, end){
    return Array.from(str).slice(start, end).join('')
}
let str3 = "✨🚀🔥"

console.log(slice(str3, 1, 3));
console.log(str3.slice(1, 3));
