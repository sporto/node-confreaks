var fs = require('fs');
var subject = require('../lib/video');
var assert = require('chai').assert;

describe('video', function () {

	var html = "";
	var result = null;

	before(function (done) {
		fs.readFile(__dirname + '/video.html', 'utf8', function(err, body) {
			if (err) {
				console.log(err);
				return done();
			}

			// console.log(body);
			html = body;
			
			subject.run(html, function (err, res) {
				result = res;
				done();
			});

		});
	});

	it('finds the title', function () {
		assert.equal(result.title, 'Ruby vs. the world');
	});

	it('finds the presenters', function () {
		assert.equal(result.presenters, 'Matt Aimonetti');
	});

	it('finds the description', function () {
		assert.match(result.description, /Ruby is an awesome programming language/);
	});

});