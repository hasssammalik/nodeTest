var redis = require('redis');

var port = '6379';
var host = '127.0.0.1';
//var client = redis.createClient(port, host);

module.exports = function(client){
		client.on('connect', function() {
		    return client;
		});

		client.on('error', function() {
		    return client;
		});
}