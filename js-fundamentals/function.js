// simple syntax
function showMessage() {
    console.log("Hey, JS");
}

function users(user1, user2, user3) {
    // body
}

showMessage()


// local variables
function showMsg(){
    let message = "Hello, Js Nice to meet ya!"
    console.log(message);
}

showMsg()
// console.log(message);    // Error: local to function


// outer variables
let username = "Richard"
function showGreeting() {
    username = "Alan"
    let message = `Hello, ${username}`
    console.log(message);
}

console.log(username);
showGreeting()
console.log(username);


// parameters & default value
function showHello(from, text = "Hello") {
    from = "*" + from + "*"
    console.log(`${from} : ${text}`);
}

let from = "Ann"
showHello(from, undefined)
console.log(from);


// returning a value
function sum(a, b) {
    return a + b
}

let res = sum(1, 2)
console.log(res);


function checkAge(age) {
    if (age >= 18) {
        return true
    } else {
        return console.log("Do you have permission from your parents?");
    }
} 

let age = 18

if (checkAge(age)) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}


// naming a function

// give name that defines the work of function
// getUser()
// calcExpenses()
// createUser()
// checkAuth()


// function == comments
function showPrime(n) {
    for (let i=2; i<n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n) {
    for (let i=2; i<n; i++) {
        if (n%1 == 0) return false
    }
    return true
}


// task-2
function checkAgeTask(age) {
    return (age > 18) ? true : console.log("Do you have permission?");
}

function checkAgeTask1(age) {
    return (age > 18) || console.log("Do you have permission?");
}

checkAgeTask()
checkAgeTask1()


// task-3
function min(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

function min1(a, b) {
    return a < b ? a : b
}


// task-4
function pow(x, n) {
    let res = x;
    for (let i=1; i<n; i++) {
        res *= x
    }
    return res
}

let x = 5
let n = 50

if (n < 1) {
    console.log(`negetive value not allowed`);
} else {
    console.log(pow(x, n));
}