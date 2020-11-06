import { log } from 'util';

console.log('lesson 4');

//Task 1

setTimeout(()=> console.log(1), 0);
console.log(2);
(() => console.log(3))();
Promise.resolve(console.log(4));

//Task 2

new Promise((res, rej) => {
    console.log(1);
})
new Promise((res, rej) => {
    setTimeout(()=> console.log(2), 0);
})
Promise.resolve(setTimeout(()=> console.log(3), 0));
console.log(4);
Promise.reject(console.log(5));

//Task 3

(function(){
    setTimeout(()=> console.log(1), 100);
})();
console.log(2);
new Promise((res, rej) => {
    setTimeout(()=> console.log(3), 50);
})
function f() {
    console.log(4);
}
Promise.resolve(console.log(5));

//Task 4

function b(num:number) {
    console.log(num);
}
Promise.resolve(1)
    .then(b);
(function(){
    console.log(2);
})();
console.log(3);
new Promise((res, rej) => {
    console.log(4);
});
setTimeout(b, 0, 5);




// const pr = new Promise((res, rej) => {
//    // do some code
//    if (true) {
//        res([1, 2, 3]);
//    } else {
//        rej([5,2,3]);
//    }
// });
// //@ts-ignore
// pr.finally(dt => dt).then(data => console.log(data), err => console.log(err))



// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const task1 = new Promise((res, rej) => {
    console.log('Привет!');
});
//console.log(task1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const task2 = new Promise((res, rej) => {
    res('Yo');
});
//task2.then(console.log);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const task3 = new Promise((res, rej) => {
    rej('Yo');
});
//task3.then(null, console.log);
//task3.then(console.log).catch(console.log);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const task4 = new Promise((res, rej) => {
    setTimeout(res, 3000, 'Yo');
});
//task4.then(console.log);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type testObjType = {
    promise: null | Promise<any>;
    resolve: null | Function;
    reject: null | Function;
    onSuccess:(p: string) => void;
    onError:(p: string) => void;
};

const handelPromise: testObjType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (param: string) => console.log(`Promise is resolved with data: ${param}`),
    onError: (error: string) => console.log(`Promise is rejected with error: ${error}`),
};

export const createPromise = () => {
    //handelPromise.promise = new Promise((res,rej) => {
    const somePromise: Promise<any> = new Promise((res,rej) => {
        handelPromise.resolve = res;
        handelPromise.reject = rej;
    });
    handelPromise.promise = somePromise;
    handelPromise.promise
        .then(handelPromise.onSuccess)
        .catch(handelPromise.onError);
    console.log(somePromise);
}

export const resolvePromise = () => {
    handelPromise.resolve && handelPromise.resolve('1');
}

export const rejectPromise = () => {
    handelPromise.reject && handelPromise.reject('0');
}
//@ts-ignore
window.handelPromise = handelPromise;

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const myName: Promise<string> = new Promise((res, rej) => setTimeout(res, 1000, 'My name is '));

const onSuccess = (string: string): string => `${string}Eugene`;
const print = (string: string): void => console.log(string);

myName.then(onSuccess).then(print);

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let prom1: Promise<Object> = new Promise(res => {
   setTimeout(()=> {
       res({name: 'Lena'})
   }, 2000);
});

let prom2: Promise<Object> = new Promise(res => {
    setTimeout(()=> {
        res({age: 25})
    }, 3000);
});

let prom3: Promise<Object> = new Promise(res => {
    setTimeout(()=> {
        res({city: 'Minsk'})
    }, 4000);
});

// let result:Promise<Array<Object>> = Promise.all([prom1, prom2, prom3]);
// //result.then(([a,b,c]:Array<Object>) => ({...a, ...b, ...c})).then(console.log);
// result.then((data:Array<Object>) => {
//     return data.reduce((acc, item) => {
//         return Object.assign(acc,item);
//     }, {})
// }).then(console.log);

// just a plug
export default ()=>{};

function getDataFromPromiseAll (...args:Array<Promise<any>>) {
    let result = {};
    return Promise.all(args.map( prom => {
        return prom.then(data => Object.assign(result, data))
    })).then(() => result);
}
//@ts-ignore
getDataFromPromiseAll(prom1, prom2, prom3).then(console.log)