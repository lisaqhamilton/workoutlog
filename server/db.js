var Sequelize = require('sequelize');

var sequelize = new Sequelize('workoutlog', 'postgres', 'codequeen', {
	host: 	'localhost',
	dialect: 	'postgres'  
});

sequelize.authenticate().then(
	function() {
		console.log("connected to workoutlog postgres db");
	},
	function(err){
		console.log(err);
	}
);

var user = sequelize.import('./models/user.js');

module.exports = sequelize;