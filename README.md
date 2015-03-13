# Scriptcraft-MySQL
MySQL Library for ScriptCraft

Download and place the file in the: /plugins/scriptcraft/modules/ folder


Sample usage: 

	
	//Import the MySQL Lib
	var mysql = require("mysql");
	//Edit this
	var options = {
			user : "scriptcraft_user",
			pass : "scriptcraftiscool",
			ip : "123.456.789.012",
			port : "3306",
			database : "scriptcraft_stuff"
	}
	//Parse the options to the lib
	mysql.options(JSON.stringify(options));

	//Create table etc
	mysql.exec("CREATE TABLE IF NOT EXISTS `scriptcraft` (`playername` VARCHAR(30) NOT NULL, `uuid` CHAR(36) NOT NULL, `password` VARCHAR(32) NOT NULL, `perms` VARCHAR(255) NOT NULL) ")




- Jeroen
