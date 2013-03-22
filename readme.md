Confreaks scraper for Node.js
=============================

Installation
------------

	npm install confreaks

Usage
-----

	var confreaks = require('confreaks');

	confreaks.scrape('http://www.confreaks.com/videos/2234-html5tx2013-unfolding-the-box-model', function(err, data){
		console.log(data); // Object containing data
	});

Data will be returned in the following format:

	{
		title: "Title",
		presenters: "Sam Sample",
		description: "Lorem ipsum ..."
	}

License
-------
Copyright (c) 2013 Sebastian Porto
Licensed under the MIT license.