function sequence(start = 0, step = 1) {
	let number = start;

	return function () {
		let outputNumber = number;
		number += step;
		return outputNumber;
	}

}

function square(x) {
	return x * x;
}

function add(a, b) {
	return a + b;
}

function fmap(a, gen) {
	let el;
	let argsForFunc;

	return function () {
		let arrOfArgs = [];
		for (let i = 0; i < arguments.length; i++) {
			arrOfArgs[i] = arguments[i];
		}
		el = gen.apply(null, arrOfArgs);
		argsForFunc = a(el);
		return argsForFunc;
	}

}

let squareAdd = fmap(square, add);

console.log(squareAdd(2, 3)) // 25 