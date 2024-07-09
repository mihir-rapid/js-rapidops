class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`${this.username} welcome to dashboard`);
    }

    static createId() {
        return `123`
    }
}

const user1 = new User("Mihir")
// console.log(user1.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username) 
        this.email = email
    }
}

const teacher1 = new Teacher("Admin", "admin@phpnpe")
console.log(teacher1.logMe());
