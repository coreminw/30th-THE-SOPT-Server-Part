import express, {Request, Response, NextFunction} from 'express';

const app = express(); //express 객체 받아옴

app.use(express.json()); //express 에서 request body를 json 으로 받아오겠다.

app.use('/api', require('./api')); // use -> 모든 요청
// localhost:8000/api -> api 폴더
// localhost:8000/api/user ->user.ts

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! My name is Minwook!');
}); // get -> http method
//어떤 요청이 들어오느냐에따라 다름 app.delete app.put ... 일 수도 있음

app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
}); //8000 번 포트에서 서버를 실행하겠다 ~ 라는 뜻

// {
//     "watch": [
//         "src",
//         ".env"
//     ], // 변경 감지 경로 -> nodemon 코드 변경을 감지해서 서버를 자동으로 재시작
//     "ext": "js,ts,json", // 변경 감지 확장자 -> 아~ 나는 js, ts, json 파일이 변경되면 재시작 하겠다!
//     "ignore": [ 
//         "src/**/*.spec.ts"  
//     ], // 변경 감지를 무시한다. spec.ts - > test code
//     "exec": "ts-node  --transpile-only ./src/index.ts" 
//     // nodemon 실행 명령
// }