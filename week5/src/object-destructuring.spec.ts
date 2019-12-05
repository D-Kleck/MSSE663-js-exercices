import { expect } from 'chai';
import { person, job, user, address, id, nestedObject, newNestedObject, statement} from './object-destructuring';
import 'mocha';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(person).to.eql('elvis');
    expect(job).to.eql('hip swinger');
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(user).to.eql('elvis');
    expect(address).to.eql({ city: 'denver', state: 'colorado' });
    expect(id).to.equal(1);
    
  });

  it('#3 should create a new object given the destrutured variables from the nested object', () => {
    expect(newNestedObject).to.eql(nestedObject);    
  });

  it('#4 should construct a statement from the given object', () => {
    expect(statement).to.eql('hello, taylor');
  });
});
