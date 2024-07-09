// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     formateUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Mihir", "mihirxtc@gmail.com", 8011)

// console.log(user1);
// console.log(user1.formateUsername());
// console.log(user1.encryptPassword());


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.formateUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const user1 = new User("Mihir", "mihirxtc@gmail.com", "2110")
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.formateUsername());