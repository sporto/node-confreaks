'use strict';

var main = require('../lib/main');
var assert = require('chai').assert;

describe('main', function () {

	it('has a scrape function', function () {
		assert.isFunction(main.scrape);
	});

});