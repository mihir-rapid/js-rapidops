function slow(x){
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func){
    let cache = new Map();
    return function(x){
        if (cache.has(x)){
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}
slow = cachingDecorator(slow)

console.log(slow(1));
console.log("Again: " + slow(1));

console.log(slow(2));
console.log("Again: " + slow(2));


// => 
let worker = {
    someMethod(){
        return 1;
    },
    slow(x){
        console.log("Called with " + x);
        return x * this.someMethod();
    }
}

function cachingDecorator(){
    let cache = new Map()
    return function(x){
        if(cache.has(x)){
            return cache.get(x)
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}

console.log(worker.slow(1));
worker.slow = cachingDecorator(worker.slow)
console.log(worker.slow(2));



let worker = {
    someMethod(){
        return 1
    },
    slow(x){
        console.log(`Called with ${x}`);
        return x * this.someMethod()
    }
}

function cachingDecorator(func){
    let cache = new Map()
    return function(x){
        if (cache.has(x)){
            return cache.get(x)
        }
        let result = func.call(this, x)
        cache.set(x, result)
        return result
    }
}

worker.slow = cachingDecorator(worker.slow)
console.log(worker.slow(2));
console.log(worker.slow(2));


// two argument
let worker = {  
    slow(min, max){
        console.log(`called with ${min}, ${max}`);
        return min + max
    }
}

function cachingDecorator(func, hash){
    let cache = new Map()
    return function(){
        let key = hash(arguments)
        if (cache.has(key)){
            return cache.get(key)
        }

        let result = func.call(this, ...arguments)
        cache.set(key, result)
        return result
    }
}

function hash(args){
    return args[0] + ',' + args[1]
}

worker.slow = cachingDecorator(worker.slow, hash)
console.log(worker.slow(3, 5));
console.log("Again " + worker.slow(3, 5));



// => func.apply()

// syntax
// func.apply(context, args)

// func.call(context, ...args);
// func.apply(context, args);


let wrapper = function(){
    return func.apply(this, arguments)
}
console.log(wrapper);



// => borrowing a method

function hash(args){
    return args[0] + ',' + args[1]
}

function hash(args){
    return args.join()
}

// error
function hash(){
    console.log(arguments.join());
}
hash(1, 2)


function hash(){
    console.log([].join.call(arguments));
}
hash(1, 2)


// => summary
let wrapper1 = function(){
    return crossOriginIsolated.apply(this, arguments)
}
