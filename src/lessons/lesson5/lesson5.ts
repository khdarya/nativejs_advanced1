console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

//
// console.log(this);
//
// function f(a) {
//   //есть this, он вычисляется в момент вызова ф-ии и смотрится от чьего имени она вызвана либо в рамках какого объекта она вызвана
//   console.log('this is function f', this);
//   setTimeout(() => console.log('this is setTimeout in func f', this));
//   console.log(a);
// }
//
// //не имеет своего this: this рассчитывается в момент вызова этой ф-ии и из той точки, где эта ф-я была определена
// let s = () => {
//   console.log('this is function f', this);
//   setTimeout(() => console.log('this is setTimeout in func s', this));
// };
//
// let obj = {
//   name: 'Eugene',
//   k() {
//     console.log('this is object method', this);
//     let self = this;
//     f(self);
//   },
//   t() {
//     setTimeout(() => console.log('this in setTimeout in object method', this, 0));
//     s();
//   },
//   l: f,
//   g: s,
//   u: () => console.log('this is setTimeout in func u', this),
//   i: function() {
//     return () => console.log('this in setTimeout in object method', this);
//   },
// };


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//   name: string;
//   age: number;
//   greeting?: Function;
// }
//
// let someObj: someObjType = {
//   name: 'Eugene',
//   age: 32,
// };
//
function greeting() {
  //@ts-ignore
  return `My name is ${this.name}. I am ${this.age}`;
}
// someObj.greeting = greeting;
// // someObj.greeting = function() {
// //   greeting();   //doesn't work this не передается внутрь. Обращается к глобальной области
// // }
// console.log(someObj.greeting());


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект


type CounterType = {
  count: number;
  getCurrentCount: () => number;
  increment: () => CounterType;
  decrement: () => CounterType;
  setCurrentCount: (n: number) => CounterType
  restCurrentCount: () => CounterType
}

let counterObj: CounterType = {
  count: 0,
  getCurrentCount() { return this.count},
  increment() {
    this.count += 1;
    return this;
  },
  decrement() {
    this.count -= 1;
    return this;
  },
  setCurrentCount(n) {
    this.count = n;
    return this;
  },
  restCurrentCount() {
    this.count = 0;
    return this;
  },
}
// counterObj.increment();
// counterObj.increment();
// counterObj.increment();
// console.log(counterObj.getCurrentCount());
// counterObj.decrement();
// console.log(counterObj.getCurrentCount());
// counterObj.restCurrentCount();
// console.log(counterObj.getCurrentCount());
// counterObj.setCurrentCount(10)
// console.log(counterObj.getCurrentCount());
//3,2,0,10


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
//console.log(counterObj.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount());



// Task 04
// Написать функцию конструктор MyFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function MyFirstConstructorFunc(name: string, age: number) {
//   //@ts-ignore
//   this.name = name;
//   //@ts-ignore
//   this.age = age;
//   //@ts-ignore
//   this.greeting = greeting();
//   //return {Yo: 'Yo'};
// }
// //@ts-ignore
// let tempObj = new MyFirstConstructorFunc('Vlad', 31);
// console.log(tempObj);
// console.log(tempObj instanceof MyFirstConstructorFunc);  //проверили является ли объект экземпляром ф-ии - конструктора


// let str = 'some string';
// let tem = new String(str);  //new Number(6)
// console.log(tem);



//function methods : bind, call, apply


// let cityObj = {
//     city: 'Minsk'
// };
// let cityObj2 = {
//     city: 'Moscow',
//     sayName (num: number, second: number) {
//         console.log(this.city);
//         console.log(num, second)
//     }
// }
// //@ts-ignore
// cityObj.sayName = cityObj2.sayName.bind(cityObj2, 5);
// let temFunc = cityObj2.sayName.bind(cityObj2, 6);
// //@ts-ignore
// cityObj.sayName(10);
// //@ts-ignore
// temFunc(20);
//
// cityObj2.sayName.apply(cityObj, [100, 200]);

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
type TypeOne = typeof One;
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
type TypeTwo = typeof Two;

// Two.sayHello.bind(One)();
// Two.sayHello.call(One);

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

const helperObj = {
  changeName (name: string) {
    //@ts-ignore
    this.name = name;
  },
  setAge (age: number) {
    //@ts-ignore
    this.age = age;
  },
  greeting: Two.sayHello,
}

type TypeHelp = typeof helperObj;

// Bind
// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
//     function foo(one: TypeOne, help: TypeHelp) {
//         return function (name: string) {
//             help.changeName.bind(one)(name);
//         }
//     }
//     foo(One, helperObj)('Yo');
//     console.log(One)

function foo(one: TypeOne, help: TypeHelp) {
  return function (name: string) {
    help.changeName.call(one, name);
  }
}
foo(One, helperObj)('Yo');
console.log(One)

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30

// helperObj.setAge.bind(Two)(30)
// console.log(Two)

helperObj.setAge.call(Two , 30);
console.log(Two)

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
//@ts-ignore
// One.hi = helperObj.greeting.bind(Two);

One.hi = function() {
  helperObj.greeting.call(Two);
}
//@ts-ignore
One.hi()

// Реализовать задачи 2-4 из Bind с помощью Call


// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a:number,b:number):number {return a + b};

function bindNum (f: Function, n: number) {
  return f.bind(null, n);
}

let bindTen = bindNum(sumTwoNumbers, 10);

console.log(bindTen(5));


// just a plug
export default () => {};




