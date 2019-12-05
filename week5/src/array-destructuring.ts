// #1 Variable swapping
export const fruits = ['apple', 'banana'];

export const [a, b] = fruits;

// Currently, I would get the following returns:
console.log(a); // 'apple'
console.log(b); // 'banana'


// deconstruct here

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

export const [a1, b1, ...others] = food;



// deconstruct here

console.log(a1); // 'apple'
console.log(b1); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
const [x, y] = ['hello', 'taylor'];


export const statement = x + ', ' + y;


// 'hello, taylor!'
