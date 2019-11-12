/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

let monkey = {
    name: "George",
    owner : "The Man in the Yellow Hat",
    trait : "Curious",
    
    fullTitle : function() {
      return this.trait + " " + this.name;
    },

    whoOwnsWho : function() {
        return this.owner + " is the owner of " + this.name;
      }
  };

const title = monkey.fullTitle();
console.log(title);
const owner = monkey.whoOwnsWho();
console.log(owner);

console.log("NOW THE CLASS");

class Monkey {
    constructor(obj) {
      obj && Object.assign(this, obj);
    }
  
    getFullTitle() {
      return `${this.trait} ${this.name}`;
    }
    getOwner() {
        return `${this.owner} is the owner of ${this.name}`;
      }


  }

let monkeyC = {name: "George",trait : "Curious", owner : "The Man in the Yellow Hat"};

let newMonkey = new Monkey(monkeyC);
console.log(newMonkey.getFullTitle());
console.log(newMonkey.getOwner());
