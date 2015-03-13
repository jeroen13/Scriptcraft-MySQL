/* BY JEROEN_13 


 USAGE:
	
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

*/


//MySQL Drivers
var DriverManager = java.sql.DriverManager;
var prepareStatement = java.sql.PreparedStatement;

//Storage for user etc.
var _store = {};

    function set_options(user, pass, ip, port, database, url){
        _store.user = user;
        _store.pass = pass;
        _store.ip = ip;
        _store.port = port;
        _store.database = database;
        _store.url = url;
        //console.log("Storage set");
    }

var mysql = plugin("mysql", { 

    options: function(options){
    	//console.log(options);
    	var options = JSON.parse(options);
    	
    	var user = options.user;
    	var pass = options.pass;
    	var ip = options.ip;
    	var port = options.port;
    	var database = options.database;
    	var url = "jdbc:mysql://"+ip+":"+port+"/"+database;
    	set_options(user, pass, ip, port, database, url);
    	
    	
    },
    exec: function(query){
    	//console.log("exec");
    	try {
    		var options = _store;

    		var user = options.user;
	    	var pass = options.pass;
	    	var ip = options.ip;
	    	var port = options.port;
	    	var database = options.database;
	    	var url = options.url;

			var connection = DriverManager.getConnection(url, user, pass);
	        var MySQL_Query = connection.prepareStatement(query);
	        MySQL_Query.executeUpdate();
	        MySQL_Query.close(); 
	        connection.close();
	        //console.log("Executed succesfully")

		} catch(e){
			console.log("[MySQL Error!] " + e);
		}

    }
  },
  true);

module.exports = mysql;