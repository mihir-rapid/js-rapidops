let obj = {
    name: "Lawrence",
    surname: "Bishnoi",
    age: 32,
    city: "rajasthan",
    call: function(){
        console.log(`${this.name} ${this.surname} of age ${this.age} is from ${this.city}`)
    }
}

let obj2 = {
	name: "Salman"
}

obj2.__proto__ = obj

obj2.call()
