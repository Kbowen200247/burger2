'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){
	var burgers = sequelize.define("burgers", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			len: [1, 50]
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		}
	}, {
		classMethods: {
			associated: function(models){

			}
		}
	});
	return burgers;
};