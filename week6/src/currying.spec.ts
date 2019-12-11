import { expect } from 'chai';
import { curryMe, curryMe2, doMath, doMath2, ninjasOne, ninjasTwo, mastaNinjas, statusTypes, gamerStatusTypes, ninjaTypes} from './currying';
import 'mocha';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    const a = 'I';
    const b = 'am';
    const c = 'David';
    const original = curryMe(a, b, c,);
    const curry = curryMe2(a)(b)(c);
    expect(original).to.eql(curry);
  });

  it('#2 should output the same result as the original function', () => {
    const a = 4;
    const b = 7;
    const c = 3; 
    const original = doMath(a)(b)(c); //should be 8
    const curry = doMath2(a)(b)(c);
    expect(original).to.eql(curry);
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const blackbelts = mastaNinjas(ninjasOne)(ninjasTwo);
    blackbelts.forEach(element => {
      expect(element.belt).to.eql('black');
    });
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const ninjaStatus = ninjaTypes(ninjasOne)(ninjasTwo)(statusTypes);
    const ninjaGamer = ninjaTypes(ninjasOne)(ninjasTwo)(gamerStatusTypes);

    ninjaStatus.forEach(element => {
      expect(element).to.haveOwnProperty('status');
      if(element.belt == 'white'){
        expect(element.status).to.eql('grasshopper');
      }
      if(element.belt == 'green'){
        expect(element.status).to.eql('warrior');
      }
      if(element.belt == 'black'){
        expect(element.status).to.eql('sensei');
      }
    });

    ninjaGamer.forEach(element => {
      expect(element).to.haveOwnProperty('status');
      if(element.belt == 'white'){
        expect(element.status).to.eql('Noob');
      }
      if(element.belt == 'green'){
        expect(element.status).to.eql('Choob');
      }
      if(element.belt == 'black'){
        expect(element.status).to.eql('Legend');
      }
    });

  });
});
