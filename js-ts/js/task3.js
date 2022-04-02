function square(x) { return x * x; } // возведение в квадрат
function map(func, arr) {

	let newArr = [];

	for (let i = 0, arrLength = arr.length; i < arrLength; i += 1) {

		let eachItemOfArr = func(arr[i]);
		newArr.push(eachItemOfArr);


	}

	return newArr;
}


console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []