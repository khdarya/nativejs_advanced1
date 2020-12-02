// function Foo(name) {
// 	this.name = name;
// 	return this;
// }
//
// let proto = {
// 	cunstructor: function () {
// 		console.log('Ooops!');
// 	},
// 	property: 'bla',
// 	method: function () {
// 		console.log('Method');
// 	}
// }
//
// Foo.prototype = proto;
// console.dir(Foo);
//
// const test = new Foo('Vlad');
// console.log('test',test);
// console.log('test',test.property);
// console.log('test',test.method());
//console.log('test',new test.__proto__.constructor());

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

// function Animal(name = 'Animal') {
// 	this.name = name;
// }
//
// Animal.prototype.walk = function () {
// 	console.log(`${this.name} eat`);
// }
//
// let animal = new Animal();
// console.log(animal);
//
// function Monkey(name = 'Monkey') {
// 	this.name = name;
// }
// // Monkey.prototype = Animal.prototype;
// // Monkey.prototype.constructor = Monkey;
// Monkey.prototype = Object.assign(Animal.prototype, {constructor: Monkey});
//
// Monkey.prototype.roar = function () {
// 	console.log(`${this.name} roar!`);
// }
//
// let monkey = new Monkey();
// console.log(monkey);
//
// let tset3 = new monkey.__proto__.constructor();
// console.log(tset3)
//
// function Human(name = 'Human') {
// 	this.name = name;
// }
//
// Human.prototype = Object.assign(Monkey.prototype, {constructor: Human});
// Human.prototype.speak = function () {
// 	console.log(`${this.name} speak!`);
// }
//
// let human = new Human();
// console.log(human);

// Task 05
// Используя метод Apply реализовать свой собственный метод bind

let obj = {
	name: 'Eugene',
	sayName: function () {
		console.log(this.name);
	}
}

let obj2 = {
	name: 'Vlad',
}

let obj3 = {
	name: 'Mike',
}

// Function.prototype.customBind = function (contex, ...args) {
// 	return (...rest) => {
// 		this.apply(contex, [...args, ...rest]);
// 	}
// }

// Function.prototype.customBind = function (contex, ...args) {
// 	const _this = this;
// 	return function(...rest) {
// 		_this.apply(contex, [...args, ...rest]);
// 	}
// }

Array.flat()

Function.prototype.customBind = function (contex, ...args) {
	console.log(this)
	contex.__temp__ = this;
	return function(...rest) {
		return contex.__temp__([...args, ...rest]);
	}
}

let temp = obj.sayName.customBind(obj2);
console.log(obj2);
temp();

let test100500 = Array.concat(arr1, arr2);
let test100600 = [...arr1, ...arr2];


