let characters = [
	{ name: 'barney', age: 36 },
	{ name: 'fred', age: 40 }
];

function pluck(objects, fieldName) {
	result = objects.map(x => x[fieldName])
	return result 
}
console.log(pluck(characters, 'name'));