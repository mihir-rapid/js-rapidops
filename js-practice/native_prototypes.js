// => Native prototypes

// Object prototype
let obj = {}
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);


// =>
let arr = [1, 2, 3]
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);


// =>
function f() {}
console.log(f.__proto__ == Function.prototype);
console.log(f.__proto__.__proto__ == Object.prototype);


// => chaining native prototypes
String.prototype.show = function(){
    console.log(this);
}
"Hellow".show()



// =>
if (!String.prototype.repeat){
    String.prototype.repeat = function(n){
        return new Array(n + 1).join(this)
    }
}

console.log("Mihir".repeat(3));


// => Borrowing from prototypes
let obj1 = {
    0: "Hello",
    1: "World",
    length: 2
}

obj1.join = Array.prototype.join
console.log(obj1.join(','));


// task 1
Function.prototype.defer = function(ms){
    setTimeout(this, ms)
}

function f(){
    console.log("Hello");
}

f.defer(1000)


// task 2
Function.prototype.defer = function(ms){
    let f = this;
    return function(...args){
        setTimeout(() => f.apply(this, args), ms)
    }
}

function f1(a, b){
    console.log(a+b);
}

f1.defer(1000)(1, 2)


Function.prototype.defer = function(ms){
    let f = this
    return function(...args){
        setTimeout(() => f.apply(this, args), ms)
    }
}

let user = {
    name: "John",
    sayHi(){
        console.log(this.name);
    }
}

user.sayHi = user.sayHi.defer(1000)
user.sayHi()