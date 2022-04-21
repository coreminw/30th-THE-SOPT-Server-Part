//sopt 1차 세미나

//변수 재할당과 재선언
var name = '김민욱'; //name 김민욱을 할당
var name = '미누기'; // 재선언

console.log(name);

let name2 = '김민욱';
let name2 = '미누기';

console.log(name2);

let name3 = '김민욱';
name3 = '우기';

console.log(name3);

const name4 = '미누기';
name4 = '미눅';

console.log(name4);

//에러가 나는데 var let const 의 재선언과 재할당의 가능유무를 잘 알아야함!


//Function Scope와 Block Scope
if(true){
    var x = 'var variable';
}
console.log(x);

// if(true){
//     const y = 'const variable';
// }
// console.log(y);//여기서 에러가 남. 이유는 const는 block 스코프이기 때문에!

function foo(){
    if(true){
        var name = '김민욱';
        console.log('if - block - ', name);
    }
    console.log('function - block -', name);
}
console.log('global - ', name);//함수 밖에서는 오류가 남.