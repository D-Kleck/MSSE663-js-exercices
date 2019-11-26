import { expect } from 'chai';
import 'mocha';
import { numbers, originalNumbers, spreadNumbers } from './spread';
import { originalContenders, spreadContenders} from './spread';
import { originalPersons, spreadPersons} from './spread';
import { data, originalUpdates, spreadUpdates} from './spread';

describe('Test for spread.ts', () => {

    it('1a. Should return array numbers(original)', () => {
        expect(originalNumbers).to.eql(numbers);
    });
    it('1b. Should return array numbers(refactored)', () => {
        expect(spreadNumbers).to.eql(numbers);
    });

    it('2. Should return combined array', () => {
        expect(originalContenders).to.eql(spreadContenders.length);
    });

    it('3a. Should return combined(original)', () => {
        expect(originalPersons).to.eql({man:'Bob', boy:'Kyle'});
    });

    it('3a. Should return combined(refactored)', () => {
        expect(spreadPersons).to.eql({man:'Bob', boy:'Kyle'});
    });

    it('4a. Should return updated array of objects', () => {
        expect(spreadUpdates).to.eql(originalUpdates);
    });

    it('4b. Should return different array from data', () => {
        expect(spreadUpdates[1]).to.eql(data[1]);
    });


});