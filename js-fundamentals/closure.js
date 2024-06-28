// => function along with it's lexical scope bundle together forms a closure

function x() {
    var a = 7
    function y() {
        console.log(a);
    }
    return y
}

var z = x()
console.log(z);

z()
