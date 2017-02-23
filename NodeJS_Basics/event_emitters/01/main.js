/**
* Callback vs. Events
*/

const request = require('request'),
	  EventEmitter = require('events').EventEmitter;

let emitter = new EventEmitter(),
	requestOptions = {
		url: 'https://api.github.com/orgs/nodejs/repos',
		headers: {
			'user-agent': 'node.js'
		}
	};

/**
* Callback
*/
function myCallback (err, response, body) {
	if (err) {
		console.log('=(');
		return false;
	}

	console.log(body.length);
};

request(requestOptions, myCallback);

/**
* Events
**/
let requestEvents = request(requestOptions);
let data = '';

requestEvents.on('data', function (response) {
	data += response;
});

requestEvents.on('end', function () {
	console.log(data.length);
});

requestEvents.on('error', function (error) {
	console.log('=(');
});

