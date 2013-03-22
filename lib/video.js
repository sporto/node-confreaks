var cheerio = require('cheerio');

function run(body, cb) {
	'use strict';

	var $ = cheerio.load(body, {
		ignoreWhitespace: true
	});

	var title = $('.video-title').text();
	title = title.replace(/\n/gi, '');

	var presenters = $('.video-presenters').text();

	var description = $('.video-abstract').text();

	cb(null, {
		title: title,
		presenters: presenters,
		description: description
	});
}

module.exports = {
	run: run
}