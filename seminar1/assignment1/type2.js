const name = '김민욱';
console.log(typeof name);

let age = 18;
console.log(typeof age);

let server = true;
console.log(typeof server);


//백틱이없다면
//안녕하세요 제 이름은 김민욱입니다. 제 나이는 18살 입니다. 를 찍고싶다면..
console.log('안녕하세요 제 이름은'+ name + '입니다. 제 나이는'+ age + '살 입니다.');

//백틱을 해본다면
console.log(`안녕하세요 제 이름은 ${name} 입니다. 제 나이는 ${age}살 입니다.`);

console.log(typeof null);
console.log(typeof undefined);

// let arr = ['안녕', 1, '나는', true];

let num = [1, 2, 3, 4];
const newNumArr = num.map(x => x * 2);
console.log(newNumArr);

for(const x of newNumArr){
    console.log(x);
}