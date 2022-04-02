var a = { a: 1, b: 2 };
var b = function () { };
var c = [1, 2, 3];
var d = [];

function count(obj) {
	return Object.keys(obj).length;
}
count(b);