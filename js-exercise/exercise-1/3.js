function dimond(n) {
    for (let i=0; i<5; i++) {
        let str = "";
        for (let j=0; j<10; j++) {
            if (i+j==5 || i==j-5) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
    for (let i=3; i>=0; i--) {
        let str = " ";
        for (let j=1; j<10; j++) {
            if (i+j==5 || i==j-5) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}
dimond(5)


//output

//     *    
//    * *   
//   *   *  
//  *     * 
// *       *
//  *     * 
//   *   *  
//    * *   
//     * 