let animal = {
    eats: true
}

let rabbit1 = Object.create(animal)

console.log(rabbit1.eats);
console.log(Object.getPrototypeOf(rabbit1) === animal);
Object.setPrototypeOf(rabbit1, {})


// => very plain object
let map = new Map()
let key = "entered key"
map.set(key, "intended key")
console.log(map.get(key));


// =>
let obj = Object.create(null)
let key1 = "entered key"
obj[key1] = "intended value"
console.log(obj[key1]);


// =>
let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

console.log(Object.keys(chineseDictionary)); // hello,bye


// =>
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj))


// task 1
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join()
        }   
    }
})

dictionary.apple = "Apple"
dictionary.__proto__ = "test"

for(let key in dictionary){
    console.log(key);
}

console.log(dictionary);


// task 2
function Rabbit(name){
    this.name = name
}
Rabbit.prototype.sayHi = function(){
    console.log(this.name);
}

let rabbit = new Rabbit("White Rabbit")

rabbit.sayHi()
Rabbit.prototype.sayHi()
Object.getPrototypeOf(rabbit).sayHi()
rabbit.__proto__.sayHi()