// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	const transformedArr = arr.map(String);
	return transformedArr;
}

console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]

// #2 Make an array of strings of the names
function namesOnly(arr) {
	const transformedArr = arr.map(function(arr) {
		return arr.name;
	});
	return transformedArr;
}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
	const transformedArr = arr.map(function(arr){
		return arr.age;
	}).filter(function(arr){
		return arr > 20;
	});
	return transformedArr;
}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]
