/**
* Created with REST-API.
* User: jhayotte
* Date: 2014-08-06
* Time: 04:13 PM
* To change this template use Tools | Templates.
*/
var express = require('express'),
    wine = require('./routes/wines');
 
var app = express();
 
//app.configure(function() {
   // configure stuff here
//    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
//    app.use(express.bodyParser());
//});
 
app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');