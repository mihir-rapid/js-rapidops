// ========== Array ========== //

const myArr = [1, 2, 3, 4, 5]

// console.log(myArr)

// Array methods

// 1. push()
// add element to the last position of array

// myArr.push(6)
// console.log(myArr)


// 2. pop()
// removes the last element from array
// do not take any arguments

// myArr.pop()
// console.log(myArr)


// 3. unshift()
// adds element in the first index of array
// myArr.unshift(6)
// console.log(myArr)

// 4. shift()
// removes first element from array
// do not take any argument

// myArr.shift()
// console.log(myArr)


// includes()
// true - false
// console.log(myArr.includes(9))


// indexOf()
// returns index of element
// console.log(myArr.indexOf(1))


// join()
// converts into string
// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)


// slice(), splice()

// console.log("A ", myArr);

// const arr1 = myArr.slice(1, 3)
// console.log(arr1);

// console.log("B ", myArr);

// const arr2 = myArr.splice(1, 3)

// console.log("C ", myArr);
// console.log(arr2);



// 02_array

const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);



// flat() 
// convert all the sub array of array in one array
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);



// console.log(Array.isArray("Infinity"))
// console.log(Array.from("Infinity"));


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


// let users = ["mihir", "aryan", "anuj", "dip", "karan", "prince", "aayush", "yogesh"]
// // users.forEach((i) => {
// //     console.log(i);
// // })

// users.map((user)=>{
//     console.log(user);
//     console.log(user.length);
//     console.log(users.length);
// })