var main = require('../lib/main');
var assert = require('chai').assert;

describe('main', function () {

	it('has a scrape function', function () {
		assert.isFunction(main.scrape);
	});

	it('loads the page', function (done) {
		// main.scrape('http://www.confreaks.com/videos/1288-rubyconf2012-ruby-vs-the-world', function (err, res) {
		// 	assert.equal(res.title, 'Ruby vs. the world');
		// 	done();
		// });
	});

});