import { thing } from './testing/app';
import { expect } from 'chai';
import 'mocha';

describe('truthy test', () => {
	it('should be true', () => {
		expect(thing()).to.be.true;
	});
});
