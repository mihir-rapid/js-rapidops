// // let object = {
// //     name: "John",
// //     city: "London",
// //     getIntro: function(){
// //         console.log(`${this.name} is from ${this.city}`);
// //     }
// // }

// // let object2 = {
// //     name: "Aditya"
// // }

// // object2.__proto__ = object

// // console.log(object2.getIntro());

// // let myHeros = ["thor", "spiderman"]
// // let heroPower = {
// //     thor: "hammer",
// //     spiderman: "sling",
// //     getSpiderPower: function(){
// //         console.log(`Spidy power is ${this.spiderman}`);
// //     }
// // }


// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal
// console.log(rabbit.__proto__);
// console.log(rabbit.eats);
// console.log(rabbit.jumps);



let animal = {
    eats: true,
    walk(){
        console.log("Animal walk");
    }
}

let rabbit = {
    jumps: true,
    __proto__: animal
}

rabbit.walk = function(){
    console.log("Rabbit! Bounce-bounce");
}

let longEar = {
    earLength: 10,
    __proto__: rabbit
}

longEar.walk()
console.log(longEar.jumps);
rabbit.walk()
// => writing doesn't use prototype



let user = {
    name: "John",
    surname: "Smith",
    set fullName(value){
        [this.name, this.surname] = value.split(" ")
    },
    get fullName(){
        return `${this.name} ${this.surname}`
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}

console.log(admin.fullName);

admin.fullName = "FP Jones"
console.log(admin.fullName);
console.log(user.fullName);



// => the value of "this"

let animal1 = {
    walk(){
        if (!this.isSleeping){
            console.log(`I walk`);
        }
    },
    sleep(){
        this.isSleeping = true
    }
}

let rabbit1 = {
    name: "Scooby",
    __proto__: animal1
}

rabbit1.sleep()
console.log(rabbit1.isSleeping);
console.log(animal1.isSleeping);



// => for...in loop

let animal2 = {
    eats: true
}

let rabbit2 = {
    jumps: true,
    __proto__: animal2
}

console.log(Object.keys(rabbit2));
for (let prop in rabbit2) {
    console.log(prop);
}


// 

let animal3 = {
    eats: true
}

let rabbit3 = {
    jumps: true,
    __proto__: animal3
}

for (let prop in rabbit3){
    let isOwn = rabbit3.hasOwnProperty(prop)

    if (isOwn){
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}



// task 1

let head = {
    glasses: 1
}

let table = {
    pen: 3,
    __proto__: head
}

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}

let pockets = {
    money: 2000,
    __proto__: bed
}

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);


// task 2

let hamster = {
    stomach: [],
    eat(food){
        this.stomach.push = [food]
    }
}

let speedy = {
    __proto__: hamster,
    stomach: []
}

let lazy = {
    __proto__: hamster,
    stomach: []
}

speedy.eat("apple")
console.log(speedy.stomach);

console.log(lazy.stomach);