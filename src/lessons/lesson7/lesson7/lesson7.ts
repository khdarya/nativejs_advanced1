import './fc'
console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

// type TestType = {
//     name: string,
//     sayName?: Function,
// }
//
// function Foo(this: TestType, name: string):TestType {
//     this.name = name;
//     return this;
// }
//
// console.dir(Foo);
//
// Foo.prototype.sayName =  function () {
//     console.log(this.name);
// }
// console.dir(Foo);
//
// const test = new (Foo as any)('Eugene');
// console.log(test);
// console.log(test.sayName());
//
// const test2 = new test.__proto__.constructor('Elena');
// console.log(test2);
// console.log(test2.sayName());
//
// console.log(test2 instanceof Foo)

// class TestClass {
//     name:string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
//     sayBye() {
//
//     }
// }
//
// console.dir(TestClass)
// console.log(TestClass.prototype)
// const test = new TestClass('Yoyo');
// //@ts-ignore
// console.log(test.__proto__ === TestClass.prototype)

// console.log(test)
// //@ts-ignore
// const test2 = new test.__proto__.constructor('Bla')
// console.log(test2)

// //@ts-ignore
// Array.prototype.sayHi = function () {
//     console.log('Hi')
// }
// //@ts-ignore
// console.log([].sayHi());


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

// class Animal{
//     name: string
//     constructor(name: string = 'Animal') {
//         this.name = name
//     }
//     walk(): void {
//         console.log(`${this.name} walking`);
//     }
//     eat(): void {
//         console.log(`${this.name} eat`)
//     }
//     sleep(): void {
//         console.log(`${this.name} sleep`)
//     }
// }
//
// let animal = new Animal();
// console.log(animal);


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

// class Monkey extends Animal{
//   constructor(name: string = 'Monkey') {
//     super(name);
//     this.name = name
//   }
//   roar(): void{
//     console.log(`${this.name} roar!`);
//   }
//   climb(): void{
//     console.log(`${this.name} climb`);
//   }
// }
//
// let monkey = new Monkey();
// console.log(monkey);

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

// class Human extends Monkey{
//   constructor(name: string = 'Human') {
//     super(name);
//     this.name = name
//   }
//   speak(): void {
//     console.log(`${this.name} speak!`);
//   }
//   think(): void {
//     console.log(`${this.name} think...`);
//   }
// }
//
// let human = new Human();
// console.log(human);
// human.eat();

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование




// Task 05
// Используя метод Apply реализовать свой собственный метод bind




// just a plug
export default () => {};