/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
export const hoist = (e:string) => {
    const eName = e.slice(0, e.length-1);
    const elementId:number = new Number(e.slice(e.length-1)).valueOf();
    let temp = {id:elementId, name:eName};
    return temp;

}

export const objArr = (a:Array<string>) =>{
    return a.map(e => hoist(e));
}

export const things = ['thing1', 'thing2'];

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */

 


 export interface thingObject {
     id:number,
     name:string
 }

 export const firstThing = (key:string) =>{
     const arr = objArr(things);
     const k:number= new Number(key).valueOf();
     return arr.filter(e =>filterFunction(e,k));
 }

 export const filterFunction = (thing:thingObject, k:number) =>{
     return (thing.id == k);
 }