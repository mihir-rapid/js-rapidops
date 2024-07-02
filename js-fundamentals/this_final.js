"use strict"
// global space

console.log(this);

// inside a function

    function x() {
    // the value depends on strict / non strict mode
        console.log(this);
    }

    // x()

// this in non-strict mode - (this substitution)

// if the value of this keyword is undefined or null this will be replaced with gloabalObject only in non-strict mode 

// this keyword value depends on how this is called (windows)

    x()
    window.x()

// this inside a object's method

const student1 = {
    name: "Mihir",
    printName: function() {
        console.log(this.name);
    }
}
student1.printName()

const student2 = {
    name: "Vidhi"
}

// call, apply, bind methods (sharing methods)

student1.printName.call(student2)   // value of this = student2

// this inside arrow function

// => arrow function do not have their own this, they take the value of their lexical environment where they enclosed

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
}
obj.x()

// this inside nested arrow function

const obj2 = {
    a: 10,
    x: function() {
        const y = () => {
            console.log(this);
        }
        y()
    }
}
obj2.x()
