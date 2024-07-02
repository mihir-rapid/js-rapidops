// let arr = [1, 2, 3, 4, 5]

// function main(a, n) {
//     if (n < 1) {
//         return
//     }
//     let tmp = new Array(n -1)
//     for (let i=0; i<n-1; i++) {
//         let x = a[i] + a[i + 1]
//         tmp[i] = x
//     }
//     main(tmp, n-1)

//     if (n == 1) {
//         console.log(a);
//     }
// }
// main(arr, 5)


let user1 = {
    name: "jack",
    age: 21
}

// let user2 = Object.assign({},user1);

let user2 = {...user1}

user1.age = 10
console.log("user1:", user1);
console.log("user2:", user2);