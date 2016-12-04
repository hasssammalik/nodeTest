const pg = require('pg');
var redis = require('redis');

module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html')
     });

     app.get('/about',function(req,res){
        res.render('about.html');
   	 });

   	app.post('/process_get', function (req, res) {
	   // Prepare output in JSON format
	   response = {
	      first_name:req.query.first_name,
	      last_name:req.query.last_name
	   };
	   console.log(response);
	   res.end(JSON.stringify(response));
	});

   	//Check Databse
   	app.get('/db', function (req, res, next) { 
   		require("../model/database.js")(pg);

   		pg.on('error', function(e, client) {
   			 res.render('error.html');
		});

		setTimeout(function(){
			res.render('connected.html');
		 }, 5000);
	});

   	//CheckRedis
   	app.get('/redis', function (req, res, next) { 
   		require("../model/redis.js");

   		var port = '6379';
		var host = 'redis.internal';
   		var client = redis.createClient(port, host);


   		client.on('connect', function() {
		    res.render('connected.html');
		});

		client.on('error', function() {
		    res.render('error.html');
		});
   		

	});



   	
}