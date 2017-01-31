module.exports = function(sequelize, DataTypes){
//user model created using sequelize
//talks to the table user
// var user = 
	return sequelize.define('user', {
		username:  	DataTypes.STRING,
		passwordhash: 	DataTypes.STRING 
		});
		// return user;
};

//To define mappings between a model and a table, 
//use the .define method. 