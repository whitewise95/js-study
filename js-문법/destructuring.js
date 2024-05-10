/**
 * 객체 Destructuring
 * */
let item = {name: "커피", price: 4000};

const {name, price} = item;
console.log(name);  // 커피
console.log(price); // 4000

/*
* 변수명을 다르게 하고 싶다면 ex) 오리지널 변수명 : 변경할 변수명
* */
const {name: name2, price: price2} = item;
console.log(name2);  // 커피
console.log(price2); // 4000

/*
* 인자명과 파라미터명은 상관없음 단지 순서가 중요
* */
function greet({name, age2}) {
    console.log(`안녕하세요, 제 이름은 ${name}이고 나이는 ${age2}살입니다.`);
}

greet({name: "르순이", age: 28});



/**
 * 배열 Destructuring
 * 배열의 요소를 위치에 따라 변수로 할당
 * */
let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;
console.log(firstColor);  // red
console.log(secondColor); // green



