/**
 * Object.keys(), Object.values(), Object.entries() 를 사용해서 배열의 key, value를 알 수 있다.
 * */
const user = {
    name: "르탄이",
    age: 30,
    isAdmin: true
}

const key = Object.keys(user);
console.log(key); // [ 'name', 'age', 'isAdmin' ]

const values = Object.values(user);
console.log(values); // [ '르탄이', 30, true ]

const entries = Object.entries(user);
console.log(entries); // [ [ 'name', '르탄이' ], [ 'age', 30 ], [ 'isAdmin', true ] ]



/**
 * Object.assign() 를 사용해서 user에 userDetails를 합친다.
 * */
const userDetails = {
    occupation: "개발자",
    age: 32,
}

Object.assign(user, userDetails);
console.log(user) // { name: '르탄이', age: 32, isAdmin: true, occupation: '개발자' }








