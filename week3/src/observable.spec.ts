import {source, data} from './observable';
import { expect } from 'chai';
import 'mocha';

describe('Testing datastream', () => {
    it('should ouput source stream List of Animals', () => {
		source.subscribe(list => {
			expect(list).to.eql(data);
		});
	});
})