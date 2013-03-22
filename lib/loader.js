var request = require('request');

function run(url, cb) {
	'use strict';

	request(url, function (err, resp, body) {
		if (err) return cb(err);
		return cb(null, body);
	});
}

module.exports = {
	run: run
};