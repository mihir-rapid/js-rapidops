// function User(name){
//     this.name = name,
//     this.isAdmin = false
// }
// let user = new User("Mihir")
// console.log(user.name);
// console.log(user.isAdmin);


// function User(){
//     console.log(new.target);
// }
// User()
// new User()


// function User(name){
//     if (!new.target) {
//         return new User(name)
//     }
//     this.name = name
// }
// let john = User("John")
// console.log(john.name);


function BigUser(){
    this.name = "John"
    return {
        name: "Godzilla"
    }
}
console.log(new BigUser().name);


function SmallUser(){
    this.name = "Mihir"
    return;
}
console.log(new SmallUser().name);



// => methods in constructor

// function User(name){
//     this.name = name

//     this.sayHi = function(){
//         console.log("My name is: " + this.name);
//     }
// }
// let mihir = new User("Mihir")
// mihir.sayHi()



// tasks

// => task1
let obj = {}
function A(){
    return obj
}
function B(){
    return obj
}

console.log(new A() == new B());


// => task2
function Calculator(){
    this.read = function(){
        this.a = +prompt('a?', 0)
        this.b = +prompt('b?', 0)
    }

    this.sum = function(){
        return this.a + this.b
    }

    this.mul = function(){
        return this.a * this.b
    }
}
let calculator = new Calculator()
calculator.read()

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());


// => task3
function Accumulator(statringValue){
    this.value = statringValue

    this.read  = function(){
        this.value += +prompt("How much to add?", 0)
    }
}
let accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
console.log(accumulator.value);