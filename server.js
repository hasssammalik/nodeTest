//kill -9 `lsof -P | grep ':3000' | awk '{print $2}'`
var express    =    require('express');
var app        =    express();
const pg 	   =    require('pg');

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(3000,function(){
	
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server listening at http://%s:%s", host, port)
});