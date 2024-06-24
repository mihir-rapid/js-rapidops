// getters and setters

let obj = {
    get propName(){
        // getter
    },
    set propName(value){
        // setter
    }
}

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }
// }
// console.log(user.fullName);

let user = {
    name: "Ed",
    surname: "Sheeran",
    get fullName(){
        return `${this.name} ${this.surname}`
    },
    set fullName(value){
        [this.name, this.surname] = value.split(" ")
    }
}
user.fullName = "Betty Cooper"
console.log(user.name);
console.log(user.surname);



// => Accessor descriptor

let user1 = {
    name: "cheyrl",
    surname: "Blossom"
}

Object.defineProperty(user1, 'fullName', {
    get(){
        return `${this.name} ${this.surname}`
    },
    set(value){
        [this.name, this.surname] = value.split(" ")
    }
})
console.log(user1.fullName);
for (let key in user1) console.log(key);



// => smarter getters/setters

let user2 = {
    get name(){
        return this._name.toUpperCase();
    },
    set name(value){
        if (value.length < 4){
            console.log("Name is too short, need atleast 4 characters");
            return;
        }
        this._name = value;
    }
}

user2.name = "Pete is name";
console.log(user2.name);



// => using for compatibility

function User(name, birthday){
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get(){
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear()
        }
    })
}

let john = new User("John", new Date(2003, 21, 10))
console.log(john.birthday);
console.log(john.age);