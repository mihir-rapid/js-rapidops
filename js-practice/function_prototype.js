// javascript.info

// =>
let animal = {
    eats: true
}

function Rabbit(name){
    this.name = name
}

Rabbit.prototype = animal

let rabbit = new Rabbit("White Rabbit")
console.log(rabbit.eats);


// =>
function Rabbit1(){}
let rabbit1 = new Rabbit1()
console.log(rabbit1.constructor == Rabbit1);


// => 
function Rabbit2(name){
    this.name = name
    console.log(name);
}

let rabbit2 = new Rabbit2("white rabbit")
let rabbit99 = new rabbit2.constructor("black rabit")



// => JavaScript itself does not ensure the right "constructor" value

function Rabbit3(){
    Rabbit3.prototype={
        jumps: true
    }
}

let rabbit3 = new Rabbit3()
console.log(rabbit3.constructor === Rabbit3);


// The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.
// The value of F.prototype should be either an object or null: other values won’t work.
// The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.

function Rabbit4() {}
Rabbit4.prototype = {
    eats: true
};

let rabbit4 = new Rabbit4();

// Rabbit4.prototype = {};
// Rabbit4.prototype.eats = false;
// delete rabbit4.eats
delete Rabbit4.prototype.eats

console.log( rabbit4.eats ); // ?
