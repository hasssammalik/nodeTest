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

   	app.get('/db', function (req, res, next) {  
	  const pg = require('pg'); 
	  const conString = 'postgres://sevenapi:sevenapi@pgsql.internal';
	  pg.connect(conString, function (err, client, done) {
	    if (err) {
	      res.render('error.html');
	    }
	 	  res.render('connected.html');
	    })
	  });
}