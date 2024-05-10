/**
 * Spread Operator
 * */
/*
 * 객체에서의 사용
 * */
const originalUser = { name: "르탄이", age: 28 };
const updatedUser = { ...originalUser, location: "한국" };
console.log(updatedUser);  // { name: "르탄이", age: 28, location: "한국" }

/*
 * 배열에서의 사용
 * */
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(combined);  // [1, 2, 3, 4, 5, 6]


/**
 *  rest operator
 * */
/*
* 함수 매개변수
* */
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


/*
* 객체 분해 할당
* */
const person = {
    name: "John",
    age: 30,
    country: "USA",
    occupation: "Developer"
};

const { country, ...rest } = person;
console.log(rest); // { name: "John", age: 30, occupation: "Developer" }







