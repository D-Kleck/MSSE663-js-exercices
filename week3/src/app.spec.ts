import { expect } from 'chai';
import 'mocha';
import { Party, Guest} from './app';

describe('Test for app.ts', () => {
    const guest = new Party('John', 30, 'Bill', 'Jerry');


    it('isAdult()', () => {
        expect(guest.isAdult()).to.be.true;
    });

    it('getAge()', () => {
        expect(guest.getAge()).to.be.true;
    });

    it('should return an array of Bill and Jerry', () => {
        expect(guest.getPluses()).to.eql(['Bill','Jerry']);
    });
});