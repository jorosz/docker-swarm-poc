var shortid = require('shortid');
var requestp = require('request-promise');
var async = require('async');
var redis = require('promise-redis')();
var sleep = require('sleep');
var moment = require('moment');



var redis_client=redis.createClient('redis://localhost');

// THis is the main worker function which for this demonstration purpose is simulating a sinlge-thread 
// behaviour and is forced to run in a loop using the 'async' library. We need to invoke the callback 
// 'next' when we're done with an iteration and aync invokes the next run.
// Due to the nature of NodeJS we  need to control the number of parallel executions to prevent NodeJS 
// from flooding our server with requests, but in real life we would go beyond this one-task-at-a-time
// approach
function miner_task(next) {

	// Parameters for the HTTP request
	var data_source_request_options = {
		method: 'GET',
		uri: 'http://localhost:8080',
		json: true
	};


	// token for redis counter
	var token=moment().format('YYYYMMDDHHmmss'); // Start with current time
	token=token.substring(0,token.length-1); // cut off last digit to round it to 10s data
	var id = shortid.generate();
		
	requestp(data_source_request_options) // Start with a JSON GET to pull a number
	.then(function(res) {
		// Res is the parsed number from JSON
		console.log(id + ' got response ' + res);
		
		// we use blocking sleep to pretend as if we did some valuable calculation or operation
		sleep.usleep(300000); // in microseconds - should be 300ms (enables 3TPS max per worker)
		
		// Then we make redis increment our TPS counter
		var promise = redis_client.incr(token); 
		return promise; // Return as promise for next step
	}).then(function(value) {
		// REDIS response
		console.log(id+' redis counter is at '+value)
	}).catch(function(err) {
		// Something went wrong above
		console.log(id + ' ' + err.message);
	}).finally(function() {
		next(); // Trigger next iteration in async loop
	});
};


// Put miner_task in a single infinite loop
async.forever(miner_task);
