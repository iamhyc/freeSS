var path = require("path");
var jsdom = require("jsdom");
var jquery_path = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";

var process = function(para, configs, callback) {
	
	jsdom.env(para.url, [jquery_path], function(err, window) {
		var $ = window.$;
		for(var i = 0; i < para.number; i++) {
			var tmp = {};
			var data_section = para.section + ":eq("+i+") ";

			tmp.server = $(data_section + para.address.section)[0].innerHTML;
			tmp.server = tmp.server.slice(para.address.slice);

			tmp.server_port = $(data_section + para.port.section)[0].innerHTML;
			tmp.server_port = tmp.server_port.slice(para.port.slice);

			tmp.password = $(data_section + para.password.section)[0].innerHTML;
			tmp.password = tmp.password.slice(para.password.slice);

			tmp.method = $(data_section + para.encryption.section)[0].innerHTML;
			tmp.method = tmp.method.slice(para.encryption.slice);

			configs.push(tmp);
		}
		return callback();
	});
}

exports.process = process;