let user1  = {
    name: "Mihir",
    age: 20,
    email: "mihirxtc@gmail.com",
    call: function() {
        console.log(`${this.email} welcome to profile`);
    }
}
user1.call()

// console.log(user1);

// for (let key in user1) {
//     console.log(`${key} : ${user1[key]}`);
// }