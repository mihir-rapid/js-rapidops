## let, const & var
- var: can be redeclared & updates global scope variable    // beta
- let: cannot be redeclared but can update block scope variable // alpha
- const: cannot be redeclared or update block scope variable    // sigma

- variables are containers for data


## operators
- arithmetic operators ( +, -, *, / ) 

- modules
- exponention ( ** )
- increment ( ++ )
- decrement ( -- )

- assignment operators ( =, +=, -=, *=, /=, **= )

- comparision operators
- equal to ( == )
- not equal to ( != )
- equal to & type ( === )
- not equal to & type ( !== )
- ( >, >=, <, <= )

- logical operator
-- logical (AND) &&
-- logical (OR) ||
-- logical (NOT) !


## conditional statement

- if statement
-- let color
-- if (mode == 'dark-mode') {
--     color = 'black'
-- }

- if-else statement
-- let color
-- if (mode == 'dark-mode') {
--     color = 'black'
-- } else {
--     color = 'white'
-- }

- else-if statement
-- if (age < 18) {
--     log('junior')
--} else if (age > 60) {
--     log('senior')
--} else {
--     log('middle')
-- }

- ternery operators
-- condition ? true : false
-- (age > 18) ? 'adult' : 'child'


## string methods

- buit in functions to manipulate string

- str.toUpperCase() - uppercase all the letters
- str.toLowerCase() - lowercase all the letters
- str.trim() - removes all whitespaces
- str.slice(start, end) - prints certain part of string
- str.concate(str2) - concates/joins two string
- str.replace('oldval', 'newval') - replace old value with new
- str.charAt(index) - return element of index
- str.substring(start, end) - returns portion from start to end index, negetive indexing not allowed

## array methods

- create array 
````
- let superheros = ['batman', 'spiderman' , 'ironman', 'hulk']
- let numbers = [1, 2, 3, 4, 5]
- let info = ['hulk', 44 , 'spiderman']
````

- push() - add element to end
- pop() - removes element from end & return
- toString() - converts array to string
- concate() - joins multiple arrays & returns result
- unshift() - add to start
- shift() - delete from start & return
- slice() - return piece of array slice(startIdx, endIdx)
- splice() - change original array (add, remove, replace), array.splice(startIdx, deleleCount, newElement)
- sort() - ex: arr.sort((a, b) => a-b) - sorts the element of array
- indexOf() - looks for index of element
- lastIndexOf() - looks for the last index of perticular element
- includes() - checks if element is present in array
- find() - filter element through function, returns first/all values that makes it true
- findIndex() - it's like find but returns index
- findLastIndex() - filter element through function, returns index of last element
- split() - convert string to array
- join() - convert array to string
- reverse() - reverses the array
- 

## advance array methods

- map()
- creates a new array with the result of some operation. the value it's callback returns are used to form a new array

- filter()
- creates a new array of elements that give true for condition filter, ex: all even elements

- reduce()
- perform some operations & reduces the array to a single value, it returns that single value

- forEach()



## numbers methods

- toStinng(base) - returns a string representation of num in numeral system
- Math.floor(3.1) - give lower value of number (3)
- Math.ceil(3.1) - give upper value of number (4)
- Math.round(3.1) - rounds a number as power of 1to9, if more than 4 then give upper value
- Math.trunc(3.1) - removes decimal number
- Math.random() - gives random number

- isFinite() - checks if number is finite or not
- isNan() - gives true if values is NaN

- parseInt() - converts string into number
- parseFloat() - converts string into number

- Math.max() - prints max value 
- Math.min() - prints min value

