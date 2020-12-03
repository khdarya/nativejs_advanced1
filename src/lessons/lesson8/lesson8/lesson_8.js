// Task 02
// Напишите функцию-генератор, которая генерирует числа в диапазоне от start до end.

function* range(start, end) {
	let current = start;
	while (current < end) {
		yield current++;
	}
}

// function* range(start, end) {
// 	for(start < end; start++;){
// 		yield start
// 	}
// }

// let generator = range(0, 5);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


// Task 03
// Создать массив из чисел от 1 до 1000.
// Реализовать функцию-генератор для формирования всех пар из этого массива.
// Результат [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]

// let arr = [];
// for (let i = 0; i <= 10; i++) {
// 	arr.push(i);
// }

// const arr = Array.from(Array(100),(value, i) => i);


// function* getLongSequences(arr) {
// 	let fist = 0;
// 	let second = 0;
// 	let end = arr.length - 1;
// 	while (fist <= end && second <= end) {
// 		yield  [arr[fist], arr[second]];
// 		second++;
// 		if(fist === end && second > end) return;
// 		if(second > end) {
// 			fist ++;
// 			second = arr[0];
// 		}
// 	}
// }
//
// let gn = getLongSequences(arr);

// let i = 0;
// while (i < 121) {
// 	console.log(gn.next().value);
// 	i++;
// }

//console.log(...gn)

// function getPair(arr){
// 	return arr.reduce((acc,elem) => acc.concat([...helper(elem)]),[]);
// 	function* helper(num){
// 		const {length} = arr;
// 		for(let start = num; start <= length; start++){
// 			yield [num, start];
// 		}
// 	}
// }


// Task 04
// Реализуйте функцию генерации чисел Фибоначчи до бесконечности

// function* fib() {
// 	let first = 0;
// 	yield first;
// 	let second = 1;
// 	yield second;
// 	while (true) {
// 		let temp = first + second;
// 		first = second;
// 		second = temp;
// 		yield temp;
// 	}
// }
//
// let fgn = fib();
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);
// console.log(fgn.next().value);

// Task 05
// Реализуйте функцию-генератор, которая будет генерировать последовательность
// символов от 0 до 9, затем от a до z, затем от A до Z. Воспользуйтесь функцией генератором
// generateSequence, реализованой выше, String.fromCharCode(code), и диапазоном чисел от 48 до 57,
// от 65 до 90 и от 97 до 122

function* sequences() {
	yield* range(48, 57);
	yield* range(65, 90);
	yield* range(97, 120);
}

let sgn = sequences();

let i = 0;
while (i < 100) {
	console.log(String.fromCharCode(sgn.next().value));
	i++;
}


// Task 06
// Создайте-функцию генератор multipleByTwo, которая принимает массив чисел,
// умножает каждое число на 2 и возвращает их по одному
// Создайте-функцию генератор minusOne, которая принимает массив чисел,
// отнимает 1 и возвращает их по одному
// Создайте-функцию генератор isMultipleOfThree, которая принимает массив чисел,
// и возвращает только те, которые делятся на 3 без остатка по одному
// Объявите массив от 0 до 9
// Вызовите первую функцию и передайте ей массив, результат этой функции передайте второй
// а затем результат второй передайтетретей.
// Примените спред оператор к резульату третей функции и создайте массив тех чисел,
// которые останутся