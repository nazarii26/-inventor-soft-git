function bind(fn, context) {
	let boundFunc = fn.bind(context);
	return boundFunc
}

window.x = 1;
let ctx = { x: 2 };

function testThis(a) {
	console.log("x=" + this.x + ", a=" + a);
}
console.log(testThis(100)); // x=1, a=100

let boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100