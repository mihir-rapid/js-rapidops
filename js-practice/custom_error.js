// => Custom erros, extending error

let json = `{"name": "John", "age": 30}`;

class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error";
        // this.stack = <call stack>
    }
}

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function test() {
//     throw new ValidationError("Whoops!");
// }

// try {
//     test();
// } catch(err) {
//     console.log(err.message);
//     console.log(err.name);
//     console.log(err.stack);
// }


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No field: age");
    }

    if (!user.name) {
        throw new ValidationError("No field: name");
    }

    return user;
}

try {
    let user = readUser('{"name": "mihir"}')
} catch(err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message);
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err;
    }
}



// => further inheritance

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property)
        this.name = "PropertyRequiredError"
        this.property = property
    }
}

function readUser(json) {
    let user = JSON.parse(json)

    if (!user.age) {
        throw new PropertyRequiredError("age")
    }

    if (!user.name) {
        throw new PropertyRequiredError("name")
    }

    return user
}

try {
    let user = readUser('{"age": 25}')
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message)
        console.log(err.name)
        console.log(err.property)
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message)
    } else {
        throw err
    }
}


// => custom Error simplified

class MyError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property)
        this.property = property
    }
}

console.log(new PropertyRequiredError("field").name)



// => Wrapping exceptions

class ReadError extends Error {
    constructor(message, cause) {
        super(message)
        this.cause = cause
        this.name = "ReadError"
    }
}

class ValidationError extends Error {}
class PropertyRequiredError extends ValidationError {}

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age")
    }
    if (!user.name) {
        throw new PropertyRequiredError("name")
    }
}

function readUser(json) {
    let user
    try {
        user = JSON.parse(json)
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err)
        } else {
            throw err
        }
    }

    try {
        validateUser(user)
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err)
        } else {
            throw err
        }
    }
}

try {
    readUser('{bad json}')
} catch (err) {
    if (err instanceof ReadError) {
        console.log(err);
        console.log("Original error: " + err.cause);
    } else {
        throw err
    }
}


// => task

class FormatError extends SyntaxError {
    constructor(message) {
        super(message)
        this.name =
        class FormatError extends SyntaxError {
            constructor(message) {
                super(message)
                this.name = this.constructor.name
            }
        }
        
        let err = new FormatError("formatting error")
        
        console.log(err.message)
        console.log(err.name)
        console.log(err.stack)
        
        console.log(err instanceof SyntaxError); this.constructor.name
    }
}

let err = new FormatError("formatting error")

console.log(err.message)
console.log(err.name)
console.log(err.stack)

console.log(err instanceof SyntaxError);