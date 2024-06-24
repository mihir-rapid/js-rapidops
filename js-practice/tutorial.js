let userDetails = {
    name: "Mihir Menon",
    age: 20,
    designation: "Software Engineer Intern",
    printDetails: function(){
        console.log(this);
    }
}
userDetails.printDetails()

let userDetails2 = {
    name: "Kuldeep Solanki",
    age: 27,
    designation: "Customer Success Associate"
}

// function borrowing
userDetails.printDetails.call(userDetails2)