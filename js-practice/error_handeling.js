// basic syntax

try {

} catch(err) {

}


// => if the try block has no error then catch block is ignored

try {
    console.log("Hello, World!");
    func
} catch(err) {
    console.log("Error occured", err);
}

// => code executed line by line in try-catch

try {
    console.log("Happy World??");
    func   
    console.log("Sad World!!"); // this line won't execute
} catch(err) {
    console.log("Error occured", err);
}

// => violating try-catch{} syntax

try {
    // {{{{{{{{    // unexpected token 'catch'
} catch(err) {
    console.log("Invalid Syntax", err);
}

// => try-catch work synchronously

try {
    setTimeout(() => {
        variable;
    }, 1000)
} catch(err) {
    console.log("won't work", err);
}

setTimeout(() => {
    try {
        variable
    } catch(err) {
        console.log("Error caught", err);
    }
}, 1000)

// => Error object

try {
    novariable
} catch(err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

// => optional catch binding

try {
    // code...
} catch {
    console.log("error");   // without error object
}

// => try handles only synchronous code, not scheduled code

// => it will not handeled
try {
    setTimeout(() => {
        func
    }, 100)
} catch {
    console.log("big error");
}

// => it works
setTimeout(() => {
    try {
        func
    } catch {
        console.log("big error");
    }
}, 100)


// => examples

let json = "{no message}"

try {
    let user = JSON.parse(json)
    console.log(user.name);
} catch(err) {
    console.log("Sorry, Data coundn't be retrived");
    console.log(err.name);
    console.log(err.message);
}

// => Throwing our own errors

let json1 = '{"age": 30}'

try {
    let user = JSON.parse(json1)
    console.log(user.name);
} catch(err) {
    console.log("Defect detected"); 
}
// undefined


// => "Throw operator"

// syntax
// throw <err object>

// => example

let json5 = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json5); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}


let json2 = '{"age": 30}'

try {
    let user = JSON.parse(json2);
    if(!user.name) {
        throw new SyntaxError("Incomplete data: no name")
    }
    console.log(user.name);
} catch(err) {
    console.log("JSON Error: " + err.message);
}

// => Rethrowing

let json3 = '{"age": 30}'

try {
    user = JSON.parse(json3)
} catch(err) {
    console.log("JSON Error: " + err);
}


// => checking typeof error

try {
    user = { /*...*/ };
} catch (err) {
    if (err instanceof ReferenceError) {
      alert('ReferenceError'); // "ReferenceError" for accessing an undefined variable
    }
}

// => example

let json6 = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json6);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  console.log( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    console.log( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}

let json4 = '{"age": 30}'
try {
    let user = JSON.parse(json4)
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name")
    }
    blabla()
    console.log(user.name);
} catch(err) {
    if (err instanceof SyntaxError) {
        console.log("JSON Error: " + err.message);
    } else {
        throw err // rethrow(*)
    }
}

// => example

function readData() {
    let json = '{"age": 30}'
    try {
        blabla()
    } catch(err) {
        if (!(err instanceof SyntaxError)) {
            throw err           
        }
    }
}

try {
    readData()
} catch(err) {
    console.log("External catch got: " + err);
}
// readData only knows how to handle SyntaxError, while the outer try...catch knows how to handle everything.


// => try... catch... finally

try {
    // ... try to execute the code ...
 } catch (err) {
    // ... handle errors ...
 } finally {
    // ... execute always ...
 }


try {
    console.log("All Okay");
    dlasdalksdjlajdadoa[sod-a]
} catch(err) {
    console.log("Not okay");
} finally {
    console.log("finally runs");
}

// The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

// let num = +prompt("Enter a positive integer number?", 35)
let num = 35;

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "error occurred");

console.log( `execution took ${diff}ms` );



// => gloabl catch

window.onerror = (message, url, line, col, error) => {
    console.log(`${message}\n At ${line}:${col} of ${url}`);
}

function readData() {
    badFunc()
}

readData()

// => task
