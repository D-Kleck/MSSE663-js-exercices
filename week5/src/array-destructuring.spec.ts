import { expect } from 'chai';
import { a, b, a1, b1, others, statement} from './array-destructuring';
import 'mocha';

describe('Array destructuring tests', () => {
  it('#1 should return apple and banana in an array', () => {
    expect([a, b]).to.eql(['apple', 'banana']);
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(a1).to.eql('apple');
    expect(b1).to.eql('banana');
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(statement).to.eql('hello, taylor');
  });
});
