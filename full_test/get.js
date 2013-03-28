main = require('../lib/main');

main.scrape('http://www.confreaks.com/videos/2244-erlangdc2013-cowboy-and-websockets', function (err, data) {
	console.log(data);
})