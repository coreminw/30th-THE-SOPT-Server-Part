//Object
const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'IOS'],
    president: '김규민',
    introduce: function(){
        this.part.map(name =>{
            console.log(`솝트 내 파트는 &{name} 파트가 있어요!`);
        })
    }
}

//Array
let array = [1, 2, 3, 4]
console.log(array);
array.map(item => console.log(item));

let array2 = [
    {
        name: '김민욱',
        age: 5
    },
    {
        name: '솝트',
        age: 30
    }
];
console.log(array2);
console.log(typeof array2);


//Function

//함수 선언식
function menus(dinner){
    return `오늘 메뉴는 ${dinner} 입니다.`
}

const str = menus('삼겹살');
console.log(str);

//함수 표현식
const menu = (dinner) =>{
    return `오늘 메뉴는 ${dinner} 입니다.`
}
const str2 = menu('곱창');
console.log(str2);

const func = (num) =>{
    return num * num;
}
const multiple = (func, num) => {
    console.log(func(num));
}

multiple(func, 3);// 함수 표현식과 선언식 잘 알아두기!


//연산자
let a1 = 2;
let b1 = a1++;
console.log(b1);

let a = 2 + 3;
let x = 5;
let b = 2 * 3;
let c = 3 - 2;
let d = 4 / 2;
let y = '5';

console.log(a,b,c,d);

// == 은 값만 비교 === 타입까지비교
if(a === x){
    console.log('a===x');
}

if(a === y){
    console.log('a==y');
}

if (b % d == 0){
    console.log(b % d);
    console.log('나머지 0');
}

// and or
// && ||

if(a === 5 && d ===2){
    console.log('hi');
}

if(a === 4 || d === 2){
console.log('or');
}

console.log(typeof a);

console.log(typeof(typeof a));
if(typeof a == 'number'){
    console.log(a);
}