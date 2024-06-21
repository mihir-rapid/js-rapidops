// the "name" property

function sayHi(){
    console.log("Hi");
}
console.log(sayHi.name);    // prints name of function


let sayHi1 = function(){
    console.log("Hi");
}
console.log(sayHi1.name);

function f(sayHi = function() {}){
    console.log(sayHi.name);
}
f()



// object methods have names too

let user = {
    sayHi(){
    },
    sayBye: function(){
    }
}
console.log(user.sayHi.name);
console.log(user.sayBye.name);



// => length property

// returns the length of argument in function

function f1(a){}
function f2(a, b){}
function many(a, b, ...more){}

console.log(f1.length)
console.log(f2.length);
console.log(many.length);



// function ask(question, ...handlers){
//     let isYes = confirm(question)

//     for(let handler of handlers){
//         if (handler.length == 0){
//             if (isYes) handler()
//         } else {
//             handler(isYes)
//         }
//     }
// }
// alert("Question?", () => alert("you said yes"), result => alert(result));



// => custom properties

function sayHi2(){
    console.log("Hi");
    sayHi2.counter++
}
sayHi2.counter = 0
sayHi2()
sayHi2()
sayHi2()
console.log(`Called ${sayHi2.counter} times`);



function makeCounter(){
    function counter(){
        return counter.count++
    }
    counter.count = 0
    return counter
}
let counter = makeCounter()
console.log(counter());
console.log(counter());


function makeCounter1(){
    function counter(){
        return counter.count++
    }
    counter.count = 0
    return counter
}
let counter1 = makeCounter1()
counter1.count = 10
console.log(counter1());


let sayHi3 = function func(who){
    if (who){
        console.log(`Hello ${who}`);
    } else {
        func("Guest")
    }
}
sayHi3("admin");



// task 1
function makeCounter2(){
    let count = 0
    function counter(){
        return count++
    }
    counter.set = value => count = value
    counter.decrease = () => count--
    return counter
}


// task 2
function sum(a){
    let currentSum = a
    function f(b){
        currentSum += b
        return f
    }
    f.toString = function(){
        return currentSum
    }
    return f
}
console.log(sum(1)(2));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));
