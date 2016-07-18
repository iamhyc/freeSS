
var fs = require("fs");

var process = function(uri, configs, callback) {
	var server_list = require(uri);
	server_list.forEach(function(server){
		var tmp = {};
		tmp.server = server.address;
		tmp.server_port = server.port;
		tmp.password = server.password;
		tmp.method = server.encryption;

		configs.push(tmp)
	});
	return callback();
}

exports.process = process;