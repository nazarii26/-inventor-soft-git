// i've found it on the Internet

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }

function partialAny(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	var unArr = [];
	for (var i = 0; i < args.length; i++) {
		if (args[i] === undefined) unArr.push(i);
	}
	return function () {
		var j = 0;
		var args1 = Array.prototype.slice.call(arguments, 0);
		if (unArr.length > 0) {
			for (var i = 0; i < unArr.length; i++) {
				args[unArr[i]] = args1[j];
				j++;
			}
		}
		for (var i = 0; i < args1.length - unArr.length; i++) {
			args.push(args1[j]);
			j++;
		}
		return fn.apply(null, args);
	};
};

var test1_3 = partialAny(test, 1, undefined, 3);

console.log(test1_3(5)); // a=1,b=5,c=3

