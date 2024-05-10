const list = [
    {
        name: "르탄이1",
        age: 31,
        isAdmin: true
    },
    {
        name: "르탄이2",
        age: 32,
        isAdmin: false
    },
    {
        name: "르탄이3",
        age: 33,
        isAdmin: false
    }
]


/**
 * map
 * 리턴받은 객체만 새로운 배열로 만든다.
 * */
console.log("========================map==============================")
let mapList = list.map((user) => {
    user.age = user.age + 1;
    return user;
});

console.log(mapList)

/* console.log
* [
  { name: '르탄이1', age: 32, isAdmin: true },
  { name: '르탄이2', age: 33, isAdmin: false },
  { name: '르탄이3', age: 34, isAdmin: false }
]
* */


/**
 * filter
 * boolean 을 리턴받아 true 인 객체만 새로운 배열로 만든다.
 * */
console.log("========================filter==============================")
let filterList = list.filter((user) => {
    return user.age % 2 === 0;
});

console.log(filterList)
/* console.log
* [
  { name: '르탄이1', age: 32, isAdmin: true },
  { name: '르탄이3', age: 34, isAdmin: false }
]
* */

/**
 * reduce
 * a = 누적된 값
 * b = 일반값
 * 첫번째 돌 때는 a는 1 , b는 2 가 된다.
 * 두번째 돌 때는 a는 3(첫번째 합산된 a+b=3 이기 때문에) , b는 3이 된다.
 * */
console.log("========================reduce==============================")
const numberList = [1,2,3,4,5]

const sumAge = numberList.reduce((a, b) => {
return a + b;
});

console.log(sumAge) // 15


/**
 * sort
 * abcList 배열 요소들을 sort 한다.
 * 주의할 점으로 abcList의 원본의 요소를 바꾸기 때문에 불변성 주의
 * */
console.log("========================sort==============================")
const abcList = ["c","a","b","t","g"]
console.log(abcList);

const sortedAbcList = abcList.sort();
console.log(sortedAbcList);
console.log(abcList);
/*
[ 'c', 'a', 'b', 't', 'g' ]
[ 'a', 'b', 'c', 'g', 't' ]
[ 'a', 'b', 'c', 'g', 't' ]
* */

/**
 * sort 비교 옵션
 * */
console.log("========================sort==============================")
numberList.sort(function (a,b) {
    // return a - b; // 오름차순  [ 1, 2, 3, 4, 5 ]
    return b - a; // 내림차순 [ 5, 4, 3, 2, 1 ]
})

console.log(numberList);



