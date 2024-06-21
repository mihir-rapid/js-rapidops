let user = {
    name: "Mihir",
    surname: "Menon",
    age: 20,
    isAdmin: true
}

let user_json = JSON.stringify(user)

console.log(user);
console.log(user_json);


let myJson = `{
    "login": "mihir-rapid",
    "id": 171319376,
    "node_id": "U_kgDOCjYgUA",
    "avatar_url": "https://avatars.githubusercontent.com/u/171319376?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mihir-rapid",
    "html_url": "https://github.com/mihir-rapid",
    "followers_url": "https://api.github.com/users/mihir-rapid/followers",
    "following_url": "https://api.github.com/users/mihir-rapid/following{/other_user}",
    "gists_url": "https://api.github.com/users/mihir-rapid/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mihir-rapid/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mihir-rapid/subscriptions",
    "organizations_url": "https://api.github.com/users/mihir-rapid/orgs",
    "repos_url": "https://api.github.com/users/mihir-rapid/repos",
    "events_url": "https://api.github.com/users/mihir-rapid/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mihir-rapid/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2024-05-31T06:31:37Z",
    "updated_at": "2024-05-31T12:55:23Z"
    }`

let myJson_parsed = JSON.parse(myJson)

console.log(myJson)
console.log("++++++++++++++++++++++++++++");
console.log(myJson_parsed);



// Documentation

let user2 = {
    name: "Mihir",
    age: 20,
    toString(){
        return `{name: "${this.name}", age: ${this.age}}`
    }
}
console.log(user);


// JSON.stringify

let student = {
    name: "Mihir",
    age: 20,
    isAdmin: false,
    courses: ['front-end', 'back-end', 'ui-ux']
}

let json = JSON.stringify(student)
console.log(json);
console.log(typeof json);


let student1 = `{
    "name": "Mihir",
    "age": "20",
    "isAdmin": "false",
    "courses": "['front-end', 'back-end', 'ui-ux']"
}`

let obj = JSON.parse(student1)
console.log(obj);



// => data-type supported by JSON
// Objects, Arrays, Pritives as [strings, numbers, boolean, null]

console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));



let meetup1 = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
}
// console.log(JSON.stringify(meetup));



let room = {
    number: 23
}

let meetup3 = {
    title: "Conference",
    participants: [{name: "Mihir"}, {name: "Aryan"}],
    place: room
}

room.occupiedBy = meetup3
3
console.log(JSON.stringify(meetup3, ['title', 'participants', 'place', 'name', 'number']));


console.log(JSON.stringify(meetup1));



// => excluding and transforming: replacer

let room3 = {
    number: 23
}

let meetup = {
    title: "Conference",
    participants: [
        {
            name: "Mihir"
        },
        {
            name: "Aryan"
        }
    ],
    place: room3
}

room.occupiedBy = meetup

console.log(JSON.stringify(meetup, function replacer(key, value){
    // console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value
}));



// => formatting: space

let user1 = {
    name: "Mihir",
    age: 20,
    roles: {
        isAdmin: false,
        isIntern: true
    }
}

console.log(JSON.stringify(user1, null, 2));



// => custom "toJSON"

let room1 = {
    number: 23
}

let meetup2 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room1
}
console.log(JSON.stringify(meetup2));


let room2 = {
    number: 23,
    toJSON(){
        return this.number
    }
}

let meetup6 = {
    title: "Conference",
    room
}

console.log(JSON.stringify(room2));
console.log(JSON.stringify(meetup6));



// => JSON.parse

let numbers = "[0, 1, 2, 3]"
numbers = JSON.parse(numbers)
console.log(numbers[1]);


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user3 = JSON.parse(userData)
console.log(user3.friends[1]);


// => Using reviver

let str = '{"title":"Conference","date":"2017-11-20T12:00:00.000Z"}';

// let meetup4 = JSON.parse(str)
// console.log(meetup4.date.getDate());
// Error

let meetup4 = JSON.parse(str, (key, value) => {
    if (key == "date") {
        return new Date(value)
    }
    return value
})

console.log(meetup4.date.getDate());



// => with nested objects

let schedule = `{
    "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;

schedule = JSON.parse(schedule, function(key, value){
    if (key == 'date') return new Date(value)
    return value
})

console.log(schedule.meetups[1].date.getDate());




// task-1

let user5 = {
    name: "Mihir Menon",
    age: 20
}

let user4 = JSON.parse(JSON.stringify(user5))
console.log(user4);



// task-2

let room5 = {
    number: 23
}

let meetup5 = {
    title: "Conference",
    occupiedBy: [
        { name: "John" },
        { name: "Alice" }
    ],
    place: room
}

room.occupiedBy = meetup5
meetup.self = meetup5

console.log(JSON.stringify(meetup5, replacer = (key, val) => {
    return ( key != "" && val == meetup5) ? undefined : val
}));