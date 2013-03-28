main = require('../lib/main');

main.scrape('http://www.confreaks.com/videos/222222244-erlangdc2013-cowboy-and-websockets', function (err, data) {
	console.log(data);
})

main.scrape('http://www.confreaks.com/videos/', function (err, data) {
	console.log(data);
})