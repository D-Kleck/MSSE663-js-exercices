import { expect } from 'chai';
import 'mocha';
import { Party } from './app';

describe('Test for app.ts', () => {
    const guest = new Party('John', 30, 'Bill', 'Jerry');

    it('should return true', () => {
        expect(guest.isAdult()).to.equal(true);
    });

    it('should return true', () => {
        expect(guest.getAge()).to.equal(true);
    });

    it('should return Bill', () => {
        expect(guest.getPlus1()).to.equal('John');
    });

    it('should return an array of Bill and Jerry', () => {
        expect(guest.getPluses()).to.equal('Bill');
    });
});