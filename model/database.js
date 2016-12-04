var pg = require('pg');

const conString = 'postgres://hassam:Bonds123@psql.internal:5432/test';

module.exports = function(pg){
	pg.connect(conString, function (err, client, done) {
		if (err) {
		  return  err;
		}else if (client){	
		  return client;
		}
	});
}