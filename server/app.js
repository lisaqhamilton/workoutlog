var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var user = sequelize.import('./models/user');

user.sync();
// //DANGER!! drops the table completely
// // user.sync ({ force:true });  
app.use(bodyParser.json());

app.use(require('./middleware/header'));

app.use('/api/user', require('./routes/user'));

///login route
app.use('/api/login', require('./routes/session'));

app.use('/api/test', function(req,res) {
	res.send("Hello World");
});

app.listen(3000, function() {
	console.log("app is listening on 3000");
});


