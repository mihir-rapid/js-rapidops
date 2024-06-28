let userGreeting = {
    call: function(){
        console.log(`${this.email} welcome to the dashboard`);
    }
}

let user1 = {
    name: "Christophar Nolan",
    age: 29,
    email: "chirstophernolan@hollywood.com",
    // call: function(){
    //     console.log(`${this.email} welcome to the personal dashboard`);
    // }
}

let user2 = {
    name: "Alan Peabody",
    age: 23,
    email: "alanpeabodytheme@gmail.com"
}

// setting prototype

user1.__proto__ = userGreeting
user2.__proto__ = userGreeting

// user1.call()
// user2.call()


// other example

let baseFeatures = {
    color: "Space Black",
    maxSpeed: "320 kph",
    groundClearance: "2.2 mm"
}

let car1 = {
    name: "Mercedece CTR GTR",
    color: "Neavy Blue",
    maxSpeed: "420 kph",
    groundClearance: "1.3 mm"
}

let car2 = {
    name: "Wolksvegan EV 2"
}

// using .__proto__
car1.__proto__ = baseFeatures
// car2.__proto__ = baseFeatures

// using Object.create(baseObject)
car2 = Object.create(baseFeatures)

console.log(car1);
console.log(car2.__proto__);

// console.log(Object.getPrototypeOf(car2));


// mdn docs

// shadowing properties

const myDate = new Date(1995, 11, 17)
// console.log(myDate.getTime());

myDate.getTime = function(){
    console.log("something else");
}
// myDate.getTime()


// setting prototype

// object.create

