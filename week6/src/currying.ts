import { bob } from './../../week4/src/spread';
// #1 Convert this javascript function to a curried function
export function curryMe(string1:string, string2:string, string3:string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}
// source code here
export const curryMe2 = (string1: string) => (string2: string) => (string3: string) => {
  return string1 + ' ' + string2 + ' ' + string3;
}

// #2 Hoist and convert nested functions to curried functions
export function doMath(a:number) {
  return function add(b:number) {
    return function subtract(c:number) {
      return a + b - c;
    };
  };
}

// source code here
export const doMath2 = (a: number) => (b: number) => (c: number) => {
  return subIt(addIt(a,b),c);
}

export const addIt = (a:number, b:number) => {
  return a + b;
}

export const subIt = (a:number, b:number) => {
  return a - b;
}


// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
//First I need an interface to sort the arrays (also love the list)
export interface ninjas {
  name:string;
  belt:string;
}

//Since 
export const mastaNinjas = (a1: Array<any>) => (a2: Array<any>) => {
  let combinedList = [...a1, ...a2]; //combine list (w/ dups)
  let blackbelts = new Array<any>();

  combinedList.forEach(element => {
    if(element.belt == 'black'){
      blackbelts.push(element);
    }
  });

  return blackbelts;

}




/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

export interface status {
  white: string,
  green: string,
  black: string
}

// source code here

export const ninjaTypes = (a1: Array<ninjas>) => (a2: Array<ninjas>) => (types:status) => {
  let combinedList = [...a1, ...a2]; //combine list (w/ dups)
  const typedNinjas =  new Array<any>();

  combinedList.forEach(element => {
    if(element.belt == 'white'){
      let tempObj = {...element, status:types.white};
      typedNinjas.push(tempObj);
    }

    if(element.belt == 'green'){
      let tempObj = {...element, status:types.green};
      typedNinjas.push(tempObj);
    }

    if(element.belt == 'black'){
      let tempObj = {...element, status:types.black};
      typedNinjas.push(tempObj);
    }
  });

  return typedNinjas;
}
