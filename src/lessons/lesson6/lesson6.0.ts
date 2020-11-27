
console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


// interface IPersonClass {
//     name: string;
//     age: number;
//     city: string;
// }
//
// class Person implements IPersonClass {
//     name: string;
//     age: number;
//     city: string;
//     constructor(name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
//     sayHi() {
//         console.log('Hi from Person');
//     }
//
// }
//
// interface ISpeakPerson  extends IPersonClass {
//     greeting: () => void;
// }
//
// interface ITest {
//     sayHi: () => void;
// }
//
// class AngryPerson extends Person implements ISpeakPerson, ITest {
//     constructor(name: string, age: number, city: string) {
//         super(name, age, city);
//     }
//     greeting() {
//         console.log('What do you want?');
//     }
//     sayHi() {
//         console.log('Hi');
//         super.sayHi()
//     }
// }
//
// class PolitePerson extends Person implements ISpeakPerson {
//     constructor(name: string, age: number, city: string) {
//         super(name, age, city);
//     }
//     greeting() {
//         console.log('Hi');
//     }
// }


// const testPerson = new Person('Yo', 10, 'Minsk');
// console.log(testPerson)
// const angryPerson = new AngryPerson('Yo', 10, 'Minsk');
// const politePerson = new PolitePerson('YoYo', 20, 'Minsk');
// console.log(angryPerson)
// angryPerson.greeting()
// //angryPerson.sayHi()
// console.log(politePerson)
// politePerson.greeting()
// angryPerson.sayHi()
//politePerson.sayHi()


// legacy code

// class SuperTest {
//     _name: string
//     constructor() {
//         this._name = '';
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
// }


// TS

// class SuperTest {
//     private _name: string
//     constructor() {
//         this._name = '';
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
// }
//
// let st = new SuperTest()
// st._name

// new JS
// in JS # the same private in TS

// class SuperTest {
//     # _name: string
//     constructor() {
//         this._name = '';
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
// }
//
// let st = new SuperTest()
// st._name

// interface IMan {
//     name: string;
//     sureName: string;
// }
//
// class Test implements IMan {
//     static greting = 'I am ';
//     name: string;
//     sureName: string;
//     constructor(name: string, sureName: string) {
//         this.name = name;
//         this.sureName = sureName;
//     }
//     static getFullName(obj: IMan) {
//         return this.greting + obj.name + ' ' + obj.sureName;
//     }
// }
//
// let testObj = new Test('Test', 'Testovich');
// console.log(testObj)
// console.log(Test.getFullName(testObj));



// Task 01
// Дан интерфейс класса транспортное средство. На его основе реализуйте класс vehicle.
// - максимальная скорость по умолчанию ограничена в 150
// - необходимо предусмотреть: нельзя завести рабочий двигатель, как и остановить не рабочий.
// - нельзя остановить стоящее транспортное средство и т.д. Чем больше тем лучше)
// - метод startMoving должен раз в секунду выводить текущую скорость, при это увеличивать ее на произвольное число
// скорость не должна увеличиться больше чем максимальная скорость. Выводить в консоль предупреждение о большой скорости,
// выводить в консоль сообщение о достижении максимальной скорости.
// - метод stopMoving должен раз в секунду выводить текущую скорость, при это уменьшать ее на произвольное число
// (можно на тоже что и метод startMoving), скорость не может быть меньше 0. Выводить сообщение о остановки.
// создайте экземпляр класса и проверьте что все работает

interface IVehicle {
    isStartEngine: boolean;
    isMoving: boolean;
    speed: number;
    startEngine: () => void;
    stopEngine: () => void;
    startMoving: (maxSpeed?: number) => void;
    stopMoving: () => void;
}

class Vehicle implements IVehicle {
    isStartEngine: boolean;
    isMoving: boolean;
    speed: number;
    constructor() {
        this.isStartEngine = false;
        this.isMoving = false;
        this.speed = 0;
    }
    startEngine() {
        if (this.isStartEngine) {
            console.log('Are you sure? The engine is working now!');
        } else {
            this.isStartEngine = true;
            console.log('The engine is working now!');
        }
    }
    stopEngine() {
        if (!this.isStartEngine) {
            console.log('Hmm... How to stop not working engine?!');
        } else if (this.isMoving) {
            console.log('It is not a good idea to stop the engine while moving!');
        } else {
            this.isStartEngine = false;
            console.log('Engine was stop');
        }
    }

    startMoving2() {
        this.isMoving = this.isStartEngine && this.speed > 0 &&  this.speed < 150;
        console.log('go')
    }


    startMoving(maxSpeed = 150) {
        if(!this.isStartEngine) {
            console.log('Cannot move!');
        } else if (this.isMoving) {
            console.log('We are already moving!');
        } else {
            this.isMoving = true;
            let i = 1;
            while (this.speed <= maxSpeed) {
                setTimeout((speed) => {
                    if (speed > 120) {
                        console.log(`The speed is ${speed}! We are moving too fast!`);
                    } else {
                        console.log(`The speed is ${speed}!`)
                    }
                }, i * 1000, this.speed);
                this.speed += 15;
                i++;
            }
            this.speed = maxSpeed;
            setTimeout(() => console.log(`The speed is ${this.speed}!!! We are going to die!!!`), i * 1000);
        }
    }
    stopMoving() {
        if (this.speed === 0) {
            console.log('We are not moving, dude!!!');
        } else {
            let i = 1;
            while (this.speed > 0) {
                setTimeout((speed) => {
                    if (speed < 40) {
                        console.log(`The speed is ${speed}! Huh we won't die!!!`);
                    } else {
                        console.log(`The speed is ${speed}!`);
                    }
                }, i*1000, this.speed);
                this.speed -= 15;
                i++
            }
            setTimeout(() => console.log(`The speed is ${this.speed}!!! We arrived`), i * 1000);
            this.isMoving = false;
        }
    }

    startEngine2(): void {
        this.isStartEngine = true;
    }
    getStatus() {
        console.log(this.isStartEngine);
    }

}


const vehicle = new Vehicle();
//@ts-ignore;
window.vehicle = vehicle;

// Task 02
// на базе класса Vehicle реализовать класс Motorbike у которого максимальная скорость 200 и
// есть свой метод burnOut который выводит в консоль 'Zoom zoom zoom zoom zoom...'

class Motorbike extends Vehicle {

    burnOut() {
        if (!this.isStartEngine) {
            console.log('Start the engine bro!!!')
        } else {
            console.log('Zoom');
        }
    }

    startMoving() {
        super.startMoving(200);
    }
}

const bike = new Motorbike();
bike.startEngine();
bike.startMoving();

class Car extends Vehicle {
    startMoving() {
        super.startMoving(180);
    }
}

const car = new Car();
car.startEngine();
car.startMoving();

// Task 03
// на базе класса Vehicle реализовать класс Car у которого максимальная скорость 180 и
// есть свой метод beep который выводит в консоль 'Beeeeeeeeeeeep...'
// Приведите в движение мотоцикл и автомобиль одновременно


// Task 04
// Создать класс Warrior который реализует интерфейс IWarrior.
// метод attack возвращает значение damage
// метод attackWithBonus оставить пустым
// у класса должен быть статический метод battle который принимает 2 аргумента (объекты с интерфейсом IWarrior)
// метод battle должен реализовывать поочередные ходы до тех пор пока не останется в живых только один.
// выбор кто ходит первым должен быть случайным.
// на каждом ходе должна выводиться информация о нанесенном уроне и остатке здоровья у противника
// в конце написать кто победил

interface IWarrior {
    health: number;
    damage: number;
    defence: number;
    attack: () => number;
    attackWithBonus: Function
}


// Task 05
// На базе класса из // Task 04 создать 2 класса Solder и Wizard
// реализовать обоим классам метод attackWithBonus
// у класса Solder есть вероятность (10%) нанести двойной урон
// у класса Wizard есть вероятность (50%) нанести тройной урон

// Task 06
// Устройте несколько драк. Подумайте о сложности нахождения баланса



// just a plug
export default () => {};