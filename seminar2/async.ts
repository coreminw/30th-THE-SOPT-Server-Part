console.log('안녕하세요');

setTimeout(()=>{
    console.log('Set Time out');
    
}, 2000)//바로옆에있는 숫자 이후의 시간 후에 시작됨. 1000 -> 1초

console.log('끝');

// 비동기 방식으로 흘러감!
// '끝'이 set time out 보다 먼저 나온걸 보면 비동기방식을 알 수 있음
// 콜백함수는 많이 쓰이지는 않음. 쓰면 쓸수록 중첩이 되고 코드의 가독성이 떨어짐
 

// Promise
// promise의 3가지 상태 1.pending(대기) 2.Fullfiled(이행) 3.Rejected(실패)

const condition: boolean = false;

const promise = new Promise((resolve, reject) =>{
    if(condition){
        resolve('성공');//resolve는 성공했을때
    }else{
        reject(new Error('reject !! error'));
    }
});

promise.then((resolveData): void =>{
    console.log(resolveData); 
}).catch(error => console.log(error)); //reject는 catch를 통해 전달됨.




const restaurant = (callback: () => void, time: number) =>{
    setTimeout(callback, time);
}

//주문
const order = (): Promise<string> => {
    return new Promise((resolve, reject)=>{
        restaurant( () =>{
            console.log('레스토랑 진행상황 - 음식주문');
            resolve('음식 주문 시작');
        },1000);
    });
}

const cook = (progress: string): Promise<string> =>{
    return new Promise((resolve,reject)=>{
        restaurant(()=>{
            console.log('[레스토랑 진행상황 - 음식 조리 중]');
            resolve(`${progress}->음식 조리 중`);
        }, 2000);
    });
}

const serving = (progress: string): Promise<string> => {
    return new Promise((resolve,reject)=>{
        restaurant(()=>{
            console.log('[레스토랑 진행 상황 - 음식 서빙 중]');
            resolve(`${progress}->음식 서빙 중`);
        }, 2500);
    });
}

const eat = (progress: string): Promise<string> =>{
    return new Promise((resolve, reject)=>{
        restaurant(()=>{
            console.log('[레스토랑 진행상황 - 음식 먹는 중]');
            resolve(`${progress}->음식 먹는 중`);
        },3000);
    });
}

order()
    .then(progress => cook(progress))
    .then(progress => serving(progress))
    .then(progress => eat(progress))
    .then(progress => console.log(progress));

    // 만약 catch를 만들려면 하나만 만들어도 됨!

    Promise.resolve(123)
    .then(res=>{
        throw new Error('에러 발생');
        return 456;
    })
    .then(res =>{
        console.log(res);
        return Promise.resolve(789);
    })
    .catch(error =>{
        console.log(error.message);
        
    });


    // async/await

    let asyncFunc1 = (msg: string): Promise<string> =>{
        return new Promise(resolve =>{
            setTimeout(()=>{
                resolve(`asyncFun1 - ${msg}`);
            }, 1000);
        });
    }

    let asyncFunc2 = (msg: string): Promise<string> =>{
        return new Promise( resolve =>{
            setTimeout(()=>{
                resolve(`asyncFun2 - ${msg}`);
            }, 1500);
        });
    }

    //함수명 - 인자 string Promise<string> 반환

    let promiseMain1 = (): void => {
        asyncFunc1('server part').then((result: string) =>{
            console.log(result);
            return asyncFunc2('김민욱');
        }).then((result: string)=>{
            console.log(result);
        });
    }


    const asyncMain = async () => {
        let result = await asyncFunc1(`server part`);
        console.log(result);
        result = await asyncFunc2('김민욱');
        console.log(result);
    }

    asyncMain();