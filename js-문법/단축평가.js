/**
 * 논리 연상자
 * truthy, falsy
 * falsy : false, 0, "", null, undefined, NaN
 * */

/*
* ! 을 사용하면 falsy로 인식
* */
const getUserName = (user) => {
    if (!user.name) { //falsy한 값이라면
        return "신원미상";
    }
    return user.name;
}


/*
* || 는 falsy한 값이라면 우변을 아니라면 좌변을 리턴함 (논리합)
* */
const getUserName2 = (user) => {
    return user.name || "신원미상" // || <= falsy한 값이라면 "신원미상" 아니라면  user.name
}


const person = {
    age: "르탄이"
}

console.log(getUserName2(person));

/**
 * ?? 는 좌변이 null과 undefined가 맞을 경우 우변을 출력한다,
 * */
const userPerference = {
    test: undefined
}
console.log(userPerference.test ?? 10);

/**
 * 논리곱(&&)
 * 좌변이 trusy할 때만 우변을 실행한다.
 * */
const loggedIn = false;
const userName = "르탄이";

loggedIn && console.log(userName) //trusy할 때만  를 실행한다


/**
 * optional chaining
 * ?를 사용하면 optional를 안전하게 처리할 수 있다.
 * */
const user = {
    profile2: {
        name: "르탄이",
        details: {
            age: 30,
            location: "dosi"
        }
    }
}

console.log(user.profile?.name);


