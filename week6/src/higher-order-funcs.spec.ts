import { thing } from './../../examples/testing/src/app';
import { expect } from 'chai';
import { objArr, things, firstThing} from './higher-order-funcs';
import 'mocha';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    const results = objArr(things);
    expect(results).to.eql([{ id: 1, name:'thing' }, { id: 2, name:'thing' }]);
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    const thing1 = firstThing('1');
    expect(thing1).to.eql([{id:1,name:'thing'}]);
  });
});
