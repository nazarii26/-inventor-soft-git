function sequence(start = 0, step = 1) {
	let number = start;

	return function () {
		let outputNumber = number;
		number += step;
		return outputNumber
	}

}

let generator = sequence(5, 3);

console.log(generator());
console.log(generator());

let generator2 = sequence(3, 1);

console.log(generator2());
console.log(generator2());

var generator3 = sequence();

console.log(generator3());
console.log(generator3());

