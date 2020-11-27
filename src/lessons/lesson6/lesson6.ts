console.log('Lesson 6'); //11.25.2020

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
//
// class Preson implements IPersonClass {
//     name: string;
//     age: number;
//     city: string;
//
//     constructor(name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }
//
// interface ISpeakPerson extends IPersonClass {
//     greeting: () => void;
// }
//
//
// class AngryPerson extends Preson implements ISpeakPerson {
//     constructor(name: string, age: number, city: string) {
//         super(name, age, city);
//     }
//
//     greeting() {
//         console.log('What do you want?');
//     }
// }
//
// let test = new AngryPerson('Eugene', 32, 'Minsk');
// console.log(test);
// console.log(test.greeting());
//
// class PolitePerson extends Preson implements ISpeakPerson {
//     education: string;
//     constructor(name: string, age: number, city: string, education:string) {
//         super(name, age, city);
//         this.education = education;
//         //@ts-ignore
//         this.say = function () {
//             console.log('bla bla');
//         }
//         //@ts-ignore
//         this.bye = function () {
//             //@ts-ignore
//             this.say();
//         }
//
//     }
//     greeting() {
//         console.log('Hello! How can I help you?');
//         this.parting();
//     }
//     parting() {
//         console.log('Nice to meet you! Goodbye!');
//     }
// }
//
// let polite = new PolitePerson('Helen', 25, 'Minsk', 'high');
// console.log(polite);
// console.log(polite.greeting());
// console.log(polite.parting());
// //@ts-ignore
// console.log(polite.bye());

// class Test {
//     //@ts-ignore
//     _name: string;
//     //@ts-ignore
//     _age: string;
//
//     constructor(n: string, a:number) {
//         //@ts-ignore
//         this.n = n;
//         //@ts-ignore
//         this.a = a;
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         this._age = age;
//     }
// }
//
// let test = new Test('Eugene', 32);
// console.log(test)
// //@ts-ignore
// console.log(test.name('Lena'));
// console.log(test.name);


// class Test {
//     private _name: string;
//     constructor(name:string) {
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
// }
//
// let testC = new Test('Eugene');
// console.log(testC);
// console.log(testC.name);
// console.log(testC._name);
// testC._name = 'bla';
// console.log(testC._name);

// class Test {
//     #_name: string;
//     constructor(name:string) {
//         this.#_name = name;
//     }
//     get name() {
//         return this.#_name;
//     }
//     set name(name) {
//         this.#_name = name;
//     }
// }

interface IMan {
    name: string;
    sureName: string;
}

class Test implements IMan {
    static greting = 'I am ';
    name: string;
    sureName: string;

    constructor(name: string, sureName: string) {
        this.name = name;
        this.sureName = sureName;
    }
    static getFullName(testInstance: IMan) {
        return this.greting + testInstance.name + ' ' + testInstance.sureName;
    }
}

let test = new Test('Ivan', 'Ivanov');
console.log(test)

console.log(Test.getFullName(test));


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

// Task 02
// на базе класса Vehicle реализовать класс Motorbike у которого максимальная скорость 200 и
// есть свой метод burnOut который выводит в консоль 'Zoom zoom zoom zoom zoom...'

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

class Warrior implements IWarrior {
    static isBattle = false;
    static isFirst = false;
    health: number;
    damage: number;
    defence: number;
    constructor(health: number, damage: number, defence: number) {
        this.health = health;
        this.damage = damage;
        this.defence = defence;
    }

    attack() {
        return this.damage;
    }
    attackWithBonus() {
    }

    static battle(solder1: IWarrior, solder2: IWarrior) {
        if(!this.isBattle) {
            this.isFirst = Math.random() >= 0.5;
        }
        while (solder1.health > 0 && solder2.health > 0) {
            if (this.isFirst) {
                const damage = solder1.attackWithBonus() - solder2.defence;
                console.log(`The warrior One attack with ${damage}!`);
                solder2.health -= damage;
                console.log(`The warrior Two has left ${solder2.health} health!`);
                this.isFirst = !this.isFirst;
            } else {
                const damage = solder2.attackWithBonus() - solder1.defence;
                console.log(`The warrior Two attack with ${damage}!`);
                solder1.health -= damage;
                console.log(`The warrior One has left ${solder1.health} health!`);
                this.isFirst = !this.isFirst;
            }
        }
        if (solder1.health > 0 && solder2.health <= 0) {
            console.log('The One has won!!!!!');
        } else {
            console.log('The Two has won!!!!!');
        }
    }
}

class Solder extends Warrior {
    constructor(health: number, damage: number, defence: number) {
        super(health, damage, defence);
    }
    attackWithBonus() {
       if(Math.random() <= 0.1) {
           return this.attack() * 2;
       } else {
           return this.attack();
       }
    }
}

class Wizard extends  Warrior {
    constructor(health: number, damage: number, defence: number) {
        super(health, damage, defence);
    }
    attackWithBonus() {
        if(Math.random() >= 0.5) {
            return this.attack() + this.attack() * 0.2;
        } else {
            return this.attack();
        }
    }
}

const solder = new Solder(300, 30, 10);
const wizard = new Wizard(150, 20, 20);

Warrior.battle(solder, wizard);


// Task 05
// На базе класса из // Task 04 создать 2 класса Solder и Wizard
// реализовать обоим классам метод attackWithBonus
// у класса Solder есть вероятность (10%) нанести двойной урон
// у класса Wizard есть вероятность (50%) нанести тройной урон

// Task 06
// Устройте несколько драк. Подумайте о сложности нахождения баланса



// just a plug
export default () => {};