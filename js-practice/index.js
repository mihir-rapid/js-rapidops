// let now = new Date()
// console.log(now);


// let Jan01_1970 = new Date(0)
// console.log(Jan01_1970);

// let Jan02_1970 = new Date(24 * 3600 * 1000)
// console.log(Jan01_1970);


// let Dec31_1969 = new Date(-24 * 3600 * 1000)
// console.log(Dec31_1969);


// let date = new Date("2017-01-26")
// console.log(date);

// console.log(new Date(2011, 0, 1, 0, 0, 0, 0));
// console.log(new Date(2011, 0, 1));


// let date1 = new Date(2011, 0, 1, 2, 3, 4, 567)
// console.log(date1);


// => Access date components

// getFullYear()
// getMonth()
// getDate()
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()


// let date = new Date()
// console.log(date.getHours());
// console.log(date.getUTCHours());


// getTime()
// getTimezoneOffset()

// console.log(new Date().getTimezoneOffset());


// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)


// let today = new Date()
// today.setHours(0)
// console.log(today);

// today.setHours(0, 0, 0, 0)
// console.log(today);


// => Autocorrection

// let date2 = new Date(2013, 0, 32)
// console.log(date2); 

// let date3 = new Date(2016, 1, 28)
// date2.setDate(date.getDate() + 2)
// console.log(date3);

// let date4 = new Date()
// date4.setDate(date.getDate() + 2)
// console.log(date4);

// let date5 = new Date(2016, 0, 2)
// date5.setDate(1)
// console.log(date5);

// date5.setDate(0)
// console.log(date5);


// => Date to number, date diff

// let date = new Date()
// console.log(+date);


// let start = new Date()
// for (let i=0; i<10000000000; i++) {
//     let doSomething = i * i * i
// }

// let end = new Date()
// console.log(`The loop took ${end - start} ms`);



// => Date.now()

// let start = Date.now()

// for (let i=0; i<100000; i++) {
//     let doSomething = i * i * i
// }

// let end = Date.now()
// console.log(`The loop took ${end - start} ms`);


// => Benchmarking

// function diffSubstract(date1, date2) {
//     return date2 - date1
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime()
// }

// function bench(f) {
//     let date1 = new Date(0)
//     let date2 = new Date()
    
//     let start = Date.now()
//     for (let i=0; i<100000; i++) f(date1, date2);
//     return Date.now() - start
// }

// let time1 = 0
// let time2 = 0

// for (let i=0; i<10; i++) {
//     time1 += bench(diffSubstract)
//     time2 += bench(diffGetTime)
// }

// console.log(`Total time for diffSubstract: ` + time1);
// console.log(`Total time for diffGetTime ` + time2);


// // => Date.parse from a string

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00')
// console.log(ms);
// console.log(typeof ms);


// let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"))
// console.log(date);



// const user = {
//     username: "hitesh",
//     price: 199
// }

// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)



const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37},
]

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max)

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min)

console.log(maxFruit);
console.log(minFruit);