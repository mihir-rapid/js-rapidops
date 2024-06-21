let counter = 0

function printHello(){
    console.log("hello");
    counter++
    console.log(counter);

    if (counter > 6) {
        return;
    }
    
    printHello()
}
printHello()


// Technical Suneja
// example

let myArr = [2, 3, 1, 4, 7, 9, 5, 6, 8]
let newArr = []
let i = 0
let j = 1

function isSorted(array){
    for (let i=0; i<array.length; i++){
        if(array[i] > array[i+1]){
            return false
        }
    }
    return true
}

function sortCheck(array){
    if (isSorted(array)){
        newArr = array
        return
    }
    else if (array[i] < array[j]){
        i++
        j++
        sortCheck(array)
    }
    else {
        [array[i],array[j]] = [array[j],array[i]]
        i = 0
        j = 1
        sortCheck(array)
    }
}
sortCheck(myArr)
console.log(newArr)



// using loop
function pow(x, n){
    let res = 1
    for (let i=0; i<n; i++){
        res *= x
    }
    return res
}
console.log(pow(2, 3));

// using recursion
function rec_pow(x, n){
    if (n == 1){
        return x
    } else {
        return x * rec_pow(x, n - 1)
    }
}
console.log(rec_pow(2, 3));


// 

let company = {
    sales: [
        {
            name: "John",
            salary: 1000
        },
        {
            name: "Alice",
            salary: 1600
        }
    ],
    development: {
        sites: [
            {
                name: "Peter",
                salary: 2000
            },
            {
                name: "Alex",
                salary: 1800
            }
        ],
        internals: [
            {
                name: "Jack",
                salary: 1300
            }
        ]
    }
}

// function to do the job
function sumSalaries(department){
    if (Array.isArray(department)){
        return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0
        for (let subdep of Object.values(department)){
            sum += sumSalaries(subdep)
        }
        return sum
    }
}
console.log(sumSalaries(company));



// Linked-List

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
console.log(list);


// alternative of above
let list1 = { value: 1 }
list1.next = { value: 2 }
list1.next.next = { value: 3 }
list1.next.next.next = { value: 4 }
list1.next.next.next.next = null

console.log(list1);

let secondList = list1.next.next
list1.next.next = null

console.log(secondList);


// joining

let list2 = { value: 1 }
list2.next = { value: 2 }
list2.next.next = { value: 3 }
list2.next.next.next = { value: 4 }

list2 = { value: "new item", next: list2}
console.log(list2);



// task 1

// using loop
function sumTo_loop(n){
    let sum = 0
    for (let i=1; i<=n; i++) {
        sum += i
    }
    return sum
}
console.log(sumTo_loop(100));


// using recursion
function sumTo_rec(n){
    if (n == 1) return 1
    return n + sumTo_rec(n-1)
}
console.log(sumTo_rec(100));


// using formula
function sumTo_formula(n){
    return n * ( n + 1 ) / 2 
}
console.log(sumTo_formula(100));



// task 2

function factorial1(n){
    return (n != 1) ? n * factorial1(n - 1) : 1
}
console.log(factorial1(5));


function factorial2(n){
    return n ? n * factorial2(n - 1) : 1
}
console.log(factorial2(5));



// task 3

// function fib(n){
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }
// console.log(fib(3));
// console.log(fib(7));

function fib(n){
    let a = 1
    let b = 1
    for (let i=3; i<=n; i++){
        let c = a + b
        a = b
        b = c
    }
    return b
}
console.log(fib(3));
console.log(fib(7));
console.log(fib(77));



// task 4

// loop based solution
let list3 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printList(list){
    let tmp = list
    while(tmp){
        console.log(tmp.value);
        tmp = tmp.next
    }
}
console.log(printList(list3));


// recursive solution

let list4 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printList1(list){
    console.log(list.value);
    if (list.next){
        printList(list.next)
    }
}
console.log(printList1(list4));



// tast 5

// using loop
function printReverseList(list){
    let arr = []
    let tmp = list
    while(tmp){
        arr.push(tmp.value)
        tmp = tmp.next
    }
    for (let i=arr.length - 1; i>=0; i--){
        console.log(arr[i]);
    }
}
console.log(printReverseList(list3));



// using recursion

function printReverseList1(list){
    if(list.next){
        printReverseList1(list.next)
    }
    console.log(list.value);
}
console.log(printReverseList1(list));