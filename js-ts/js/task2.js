function sequence(start = 0, step = 1) {
	let number = start;

	return function () {
		let outputNumber = number;
		number += step;
		return outputNumber
	}

}

function take(fn, count) {

	let arr = [];

	for (i = 0; i < count; i++) {
		let func = fn();
		arr.push(func);
	}
	return arr
}

let gen2 = sequence(0, 2);

console.log(take(gen2, 5));