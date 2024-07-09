class User {
    constructor(username) {
        this.username = username;
    };

    logMe() {
        console.log(`welcome to dashboard ${this.username}`);
    };
};

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    };

    addCourses() {
        console.log(`new course added by ${this.username}`);
    };
};

const teacher1 = new Teacher("mihir", "mihir@harvard.edu", "909919");

console.log(teacher1);

teacher1.addCourses();

const user1 = new User("blackdevil");
user1.logMe();

console.log(user1 instanceof User);
console.log(teacher1 instanceof Teacher);