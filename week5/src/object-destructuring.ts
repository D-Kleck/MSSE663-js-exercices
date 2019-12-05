// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here
export const {"name": person, "title": job} = object;

console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here
export const {user:user,address:address,id:id} = nestedObject;

// #4 Create a new object given the destrutured values above
export const newNestedObject = {
  user: user,
  address: address,
  id: id
};

// reconstruct here

// #3 Object with key value pairs: construct a statement
export const {greeting, name} = { greeting: 'hello', name: 'taylor' };

export const statement = (greeting + ", " + name);

// 'hello, taylor!'
