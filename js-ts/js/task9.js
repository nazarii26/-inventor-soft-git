var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; }

function filter(arr, fn) {
	return arr.filter(fn)
}

filter(input, isEven);