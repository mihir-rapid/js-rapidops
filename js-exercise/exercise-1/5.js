function pattern(len) {
    for (let i=0; i<len; i++) {
        let str = "";
        for (let j=0; j<i; j++) {
            str += " ";
        }
        for (let k=0; k<len-i; k++) {
            str += (k+i+1) + " ";
        }
        console.log(str);
    }
    for (let i=1; i<len; i++) {
        let str = "";
        for (let k=0; k<len-i-1; k++) {
            str += " ";
        }
        for (let j=i; j>=0; j--) {
            str += (len-j) + " ";
        }
        console.log(str);
    }
}
pattern(5);

// output

// 1 2 3 4 5 
//  2 3 4 5 
//   3 4 5 
//    4 5 
//     5 
//    4 5 
//   3 4 5 
//  2 3 4 5 
// 1 2 3 4 5 