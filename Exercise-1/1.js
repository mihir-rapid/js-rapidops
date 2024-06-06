function printX(n) {
    for (let i=1; i<=n; i++) {
        let str = "";
        for (let j=1; j<=n; j++) {
            if (j==i || j==n-i+1) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}
printX(5);


// output

// *   *
//  * * 
//   *  
//  * * 
// *   *