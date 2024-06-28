let c = 0
function fun(x) {
    return function(y) {
        return x+y
    }
}

const newFun = fun(5)
c+=newFun(4)
console.log(c);