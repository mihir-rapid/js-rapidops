let users = {
    email: "mihir@google.con",
    user: {
        user1: {
            name: "one",
            email: "one@google.com"
        },
        user2: {
            name: "two",
            email: "two@google.com"
        },
        
    },
    print: function(){
        console.log(`${this.email} welcome to dashboard`);
    }
}

console.log(users.print());