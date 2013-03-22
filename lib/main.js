var request = require('request');
var loader = require('./loader');
var video = require('./video');

function scrape(url, cb) {
	'use strict';

	loader.run(url, function (err, body) {
		if (err) return cb(err);
		return video.run(body, cb);
	});

}

module.exports = {
	scrape: scrape
};