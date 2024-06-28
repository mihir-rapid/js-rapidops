// slice()
let arr = ["one", "two", "three", "four", "five"]
console.log(arr.slice(0, 2))

// splice()
// it modifies array

console.log(arr.splice(0, 2));
arr.splice(3, 0, "six")
console.log(arr);


// concate
let arr1 = ["one", "two", "three"]
let arr2 = ["first", "second", "third"]
console.log(arr1.concat(arr2));

arr1.forEach((value) => {
    console.log(value);
})

// find()
let users = [
    {
        id: 1,
        name: "Mihir"
    },
    {
        id: 2,
        name: "Alan"
    },
    {
        id: 2,  // returns the first occurence only
        name: "Brian" 
    },
    {
        id: 3,
        name: "Michele"
    },
    {
        id: 4,
        name: "Adam"
    }
]

let user = users.find((item) => item.id == 2)
console.log(user);


// filter()
let ini_users = users.filter((item) => item.id < 3)
console.log(ini_users);


// map()
let initial = users.map((item) => item.name)
console.log(initial);

// split()
let name = "Mihir"
let nameArr = name.split("")
console.log(nameArr);

// join()
let arrToStr = nameArr.join("")
console.log(arrToStr);

// reduce()
let values = [1, 2, 3, 4, 5, 6]
let ans = values.reduce((a, b) => a + b, 4)
console.log(ans);