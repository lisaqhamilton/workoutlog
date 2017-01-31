var router = require('express').Router();
var sequelize = require('../db.js');
var user = sequelize.import('../models/user.js');

router.post('/', function(req, res) {
	var username = req.body.user.username;
	var pass = req.body.user.password;
	user.create ({
		username: 	username,
		passwordhash: 	""
	}).then(
		//Sequelize is going to return the object it created from db.
		function createSuccess(user) {
			//successful get this:
			res.json({
				user: user,
				message: 'create'
			});
		},
		function createError(err){
			res.send(500, err.message);
		}
	);
});

module.exports = router;