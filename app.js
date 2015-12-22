var jsdom = require("jsdom");
var fs = require("fs");

var options = fs.readFileSync("C:\\Users\\iamhy_000\\freeSS\\freeSS.json", 'utf8');
	options = JSON.parse(options);

var config = fs.readFileSync(options.config_file, 'utf8');
	config = JSON.parse(config);
var configs = config.configs;

jsdom.env(
  "http://www.ishadowsocks.com/",
  ["http://code.jquery.com/jquery-latest.min.js"],
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
    fs.writeFileSync(options.config_file, config, 'utf8');
    console.log("Config Updated!");
  }
);