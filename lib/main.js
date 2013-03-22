'use strict';

var request = require('request');

function loadPage(url, cb) {
	request(url, function (err, resp, body) {
		if (err) return cb(err);
		return cb(null, body);
	});
}

function scrape(url, cb) {

	loadPage(url, function (err, body) {
		if (err) return cb(err);

		return cb(body);
	});

}

module.exports = {
	scrape: scrape
};