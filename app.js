var jsdom = require("jsdom");
var fs = require("fs");
var path = require("path");

var options = fs.readFileSync("./freeSS.json", 'utf8');
	options = JSON.parse(options);

var config_file = path.join(process.env.HOMEPATH ,options.config_file);
var config = fs.readFileSync(config_file, 'utf8');
	config = JSON.parse(config);
var configs = config.configs;

jsdom.env(
  "http://www.ishadowsocks.com/",
  [path.join(process.cwd(), "jquery-v1.11.1.min.js")],
  function (err, window) {
    var data = window.$("#free .row:nth-child(2)").children();
    for (var i = 0; i < data.length; i++){
    	configs[i] = {};
    	configs[i].server = 
    		data[i].children[0].innerHTML.slice(7);//X服务器地址:*******
    	configs[i].server_port = 
    		data[i].children[1].innerHTML.slice(3);//端口:****
    	configs[i].password = 
    		data[i].children[2].innerHTML.slice(4);//X密码:******
    	configs[i].method = 
    		data[i].children[3].innerHTML.slice(5);//加密方式:AES-256-CFB
    }
    config.configs = configs;
    config = JSON.stringify(config);
    fs.writeFileSync(config_file, config, 'utf8');
    console.log("Config Updated!");
  }
);