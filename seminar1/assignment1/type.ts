//TypeScript 의 Type

let name5: string = '김민욱'
console.log(name5);

let grade: number = 4;

let isDeleted: boolean = false;

const sum = (x: number, y: number): number =>{
    return x * y;
}

const age1: number[] = [1,2,3,4,5];
const age2: Array<number> = [1, 2, 3, 4]; //제네릭 타입

const strArray: Array<string> = ["hi", "hello"];

const objArr: Array<object> = [
    {item: 'value'},
    {item: 'value2'}
];


//Object 와 object의 차이
const f1 = (obj: object): void => {//원시타입 제외한 나머지 다 받기 가능
    console.log(obj);
}

const f2 = (obj: Object): void => { //파라미터의 타입만 다름, 모든 타입다 가능
    console.log(obj);
}

f1([1,2,3,4]);
//f1('hihi');//f1은 이건 안됨,,
f2('hihi');

//함수 타입 표현
const div = (x: number, y: number): number => {
    return x / y;
}
console.log(div);

const foo2 = (a: number, b: number): number => {
    return a + b;
}
const boo2 = (a: number, b: number): number => {
    return a + b;
}

//null, undefined
let p: null = null;

//let x: null = 2; >>오류

let u: undefined = undefined;

//let y: undefined = null; >> 오류


//angle-bracket 타입 단언
let myName: any = '김민욱';//any 마법(아무 타입이나 가능)
let myNameLength: number = (<string>myName).length;// 형변환 느낌?
console.log(myName);


//as 방법
let name6: any = '서버';
let name6Length: number = (name6 as string).length;


//(마법의) any

const unknown: any = {
    name: '김민욱',
    age: 20,
    organization: 'SOPT',
    completrion: [28, 29]
}