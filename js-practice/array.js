    //  //  //  //  //  //  //  //  //  //
// ========== // Array Methods // ========== //
    //  //  //  //  //  //  //  //  //  //  

// Add/remove items

/*
let myArr = [1, 2, 3, 4, 5]

// 1. arr.push(items)
// adds element to the end
myArr.push(6);
console.log(myArr);

// 2. arr.pop()
// remove element from the end
myArr.pop()
console.log(myArr);

// 3. arr.shift()
// remove element from the beginning
myArr.shift()
console.log(myArr);

// 4. arr.unshift(items)
// adds element to the beginning
myArr.unshift(6)
console.log(myArr);
*/


    //  //  //  //  //  //
// ===== // splice // ===== //
    //  //  //  //  //  //  


/*
let arr = ["I", "go", "home"]item => item.id < 3
delete arr[1]
console.log(arr[1]);
console.log(arr.length);
*/


/*
let arr = ["I", "study", "JavaScript"]
arr.splice(1, 1)
console.log(arr);
*/

/*
let arr = ["I", "study", "JavaScript", "right", "now"]
arr.splice(0, 3, "Let's", "sing")
console.log(arr);
*/

// => splice returns the array of removed elements

/*
let arr = ["I", "study", "JavaScript", "right", "now"]
let removed = arr.splice(0, 2)
console.log(removed);
*/

// => splice method is able to insert elements without any removals
// we need to set delete count 0

/*
let arr = ["I", "study", "JavaScript"]
arr.splice(3, 0, "I", "inserted")
console.log(arr);
*/

// negetive indexing in splice

/*
let arr = [1, 2, 5]
arr.splice(-1, 0, 3, 4)
console.log(arr);
*/



    //  //  //  //  //  //
// ===== // slice // ===== //
    //  //  //  //  //  // 

// simple syntax
// arr.slice(0, 3)

// it makes subarrays
// (1, 3) then it not consider last element only consider (1, 2), (3) is excluded

/*
let arr = ["t", "e", "s", "t"]
console.log(arr.slice(1, 3));

// in negative it takes element from reverse with given number
// (-    //  //  //  //  //  //
// ===== // slice // ===== //
    //  //  //  //  //  // 2) means from two elements from 2nd last element

console.log(arr.slice(-2));
// ["s", "t"]
*/



    //  //  //  //  //  //
// ===== // cocate // ===== //
    //  //  //  //  //  //

// simple syntax
// arr.concat(arr1, arr2)

// let arr = [1, 2, 3, 4]
// let arr1 = [5, 6, 7, 8]
// let arr2 = ["I", "love", "JavaScript"]
// console.log(arr.concat(arr1, arr2));



    //  //  //  //  //  //  //  //  //
// ===== // Iterate: forEach // ===== //
    //  //  //  //  //  //  //  //  //


// syntax
// arr.forEach(function() {
// })

/*
let arr = ["one", "two", "three", "four", "five"]
// arr.forEach((i) => {
//     console.log(i);
// })

arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})
*/



    //  //  //  //  //  //  //  //  //
// ===== // Searching in array // ===== //
    //  //  //  //  //  //  //  //  //

// let arr = [1, 0, false]
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));

// console.log(arr.includes(false));


// let fruits = ["Apple", "Orange", "Apple"]
// console.log(fruits.indexOf('Apple'));
// console.log(fruits.lastIndexOf('Apple'));


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ]

// let user = users.find(item => item.id == 1)
// console.log(user.name);



    //  //  //  //  //  //  
// ===== // filter // ===== //
    //  //  //  //  //  //  

// syntax
// let result = arr.find((item, index, array) {
//     // if true item is pushed to the results 
//      // returns empty array if nothing found 
// })

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];

// let someUsers = users.filter(item => item.id < 3)

// console.log(someUsers);
// console.log(someUsers.length);




    //  //  //  //  //  //  //  //  //  //  //
// ========== // Transform Array // ========== //
    //  //  //  //  //  //  //  //  //  //  //


    //  //  //  //  //  //  
// ===== // map // ===== //
    //  //  //  //  //  // 

// It calls function for each element of the array and returns the array of results

// let result = arr.map((item, index, array) {
//     // returns the new value instead of item
// })

// let friends = ["Mihir", "Aryan", "Anuj", "Mihir", "Yogesh"]
// friends.map((i) => {
//     console.log(i.length);
// });



    //  //  //  //  //  //  
// ===== // sort(fn) // ===== //
    //  //  //  //  //  // 

// sorted as string by default
// consider numbers as string

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// arr.sort()
// console.log(arr);

// function compare(a, b) {
//     if (a > b) return 1
//     if (a == b) return 0
//     if (a < b) return -1
// }
// let arr = [1, 2, 15]
// console.log(arr);

// [1, -2, 15, 2, 0, 8].sort((a, b) => {
//     console.log(a + " <> " + b);
//     return a - b
// })

// right-output
// let arr = [1, 2, 15]
// arr.sort((a, b) => {
//     return a -b
// })
// console.log(arr);



    //  //  //  //  //  //  
// ===== // reverse // ===== //
    //  //  //  //  //  // 

// reverses a array

// let arr = [1, 2, 3, 4, 5]
// arr.reverse()
// console.log(arr);



    //  //  //  //  //  //  //  //    
// ===== // split and join // ===== //
    //  //  //  //  //  //  //  //  

// let names = "Mihir, Aryan, Karan"
// let arr = names.split(', ')
// for (let name of arr) {
//     console.log(`a message to ${name}`);
// }

// => makes array of first n elements (2)
// let arr = 'Mihr, Aryan, Karan, Yogesh'.split(', ', 2)
// console.log(arr);

// => split into letters
// let str = "Mihir"
// console.log(str.split(''));


// ==========> join <==========

// it glues the character

// let arr = ["Mihir", "Aryan", "Karan"]
// console.log(arr.join(';'));



    //  //  //  //  //  //  //  //  //    
// ===== // reduce/reduceRight // ===== //
    //  //  //  //  //  //  //  //  //  

// => syntax
// let arr = [1, 2, 3, 4, 5]
// let value = arr.reduce((accumulator, item, index, array) => {
//     // ...
// }, [initial])

// accumulator - result of the previous function call, equals 'initial' the first time
// item - current array item
// index - is position
// array - is the array

// let arr = [1, 2, 3, 4, 5]
// let result = arr.reduce((sum, current) => sum + current, 0)
// console.log(result);


let myArr = [1, 2, 3, 4, 5]
let res = myArr.reduce((a, b) => a + b)
console.log(res);


// console.log(1+2+3+4+5)