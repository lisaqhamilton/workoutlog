var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sequelize = require('../db.js');
var user = sequelize.import('../models/user.js');


router.post(' / ', function (req, res) {
	user.findOne({where: {username: req.body.user.username }}).then(
		function(user) {
			if(user) {
				bcrypt.compare(req.body.user.password, user.passwordhash, function(err,matches) {
					if(matches) {
					var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});	

						res.json({
							user: user,
							message: "successfully authenticated",
							sessionToken: token
							});
					} else {
					res.status(500).send({ error: "failed to authenicate"});
					}
				});
			} else {
				res.status(500).send({error: "failed to authenicate"});
			}
		},
		function(err) {
			res.json(err);
		}
	);
});

module.exports = router;
//1)First - a function that searches for a particular user that matches the incoming request
	//2) If the request is successful and the username matches, we need to do some stuff
		//Compare the password
			//if the pswd matches, show success and give a token
			//if the pswd doesn't match, show failure to authenticate
		//If the request is not successful and there is not a user that matches that request
		//thrown an error
		//If the request was not successful and user doesn't exist, throw an error