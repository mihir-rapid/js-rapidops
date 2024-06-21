function row(n) {
    for (let i=0; i<3; i++) {
        let str = "";
        for (let j=0; j<=i; j++) {
            str += "*";
        }
        console.log(str);
    }
    for (let i=2; i>0; i--) {
        let str = "";
        for (let j=1; j<=i; j++) {
            str += "*";
        }
        console.log(str);
    }
}
row(5);


// output

// *
// **
// ***
// **
// *