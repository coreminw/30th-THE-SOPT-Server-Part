//interface
interface ServerPart{
    name: string;
    age: number;
    group: string;
    mbti: string[];
    organization: string;
    completion: number[];
}

const serverPart: ServerPart = {
    name: '김민욱',
    age: 20,
    group: 'YB',
    mbti: ['ESFJ', 'ANGEL'],
    organization: 'SOPT',
    completion: [28, 29]
}
console.log(serverPart);

//인터페이스 자체를 배열로도 사용 가능

//선택적 프로퍼티 ?를 붙임
interface Closet{
    name: string;
    shirt: number;
    pants: number;
    hat?: number;
    sunglass?: number; // optional
}

const closet: Closet[] = [
    {
        name: '김민욱',
        shirt: 1,
        pants: 2
    }
]