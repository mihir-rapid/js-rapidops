// let john = {
//     name: "jdlada"
// }

// let arr = [john]

// john = null

// // console.log(john);

// let john = { name: "John" }
// let map = new Map()
// map.set(john, '...')
// john = null
// console.log(map);
// console.log(john);


// WeakMap

// let visitsCountMap = new WeakMap()
// function countUser(user){
//     let count = visitsCountMap.get(user) || 0
//     visitsCountMap.set(user, count + 1)
// }
// console.log(visitsCountMap);

// => catching

// not optimal
// let cache = new Map()
// function process(obj){
//     if(!cache.has(obj)){
//         let res = obj
//         cache.set(obj, res)
//         return res
//     }
//     return cache.get(obj)
// }

// let obj = {}
// let res1 = process(obj)
// let res2 = process(obj)
// obj = null

// console.log(cache.size);


// optimal scenario

let cache = new WeakMap()
function process(obj){
    if(!cache.has(obj)){
        let res = obj
        cache.set(obj, res)
        return res
    }
    return cache.get(obj)
}

let obj = {}
let res1 = process(obj)
let res2 = process(obj)

obj = null


// WeakSet

let visitedSet = new WeakSet()
let john = { name: "John" }
let pete = { name: "Pete" }
let mary = { name: "Mary" }

visitedSet.add(john)
visitedSet.add(pete)
visitedSet.add(john)

console.log(visitedSet.has(john));
console.log(visitedSet.has(mary));

john = null


// task-1

let messages = [
    {
        text: "Hello", from: "John"
    },
    {
        text: "How goes?", from: "John"
    },
    {
        text: "See you soon", from: "Alice"
    }
]

let readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])

readMessages.add(messages[0])

console.log("Read message 0: " + readMessages.has(messages[0]));

messages.shift()


// task-2

let messages1 = [
    {
        text: "Hello", from: "John"
    },
    {
        text: "How goes?", from: "John"
    },
    {
        text: "See you soon", from: "Alice"
    }
]

let readMap = new WeakMap()
readMap.set(messages1[0], new Date(2024, 1, 1))
console.log(readMap);