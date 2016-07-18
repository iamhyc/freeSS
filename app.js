var fs = require("fs");
var path = require("path");
var __method = require("./method");

var options = require("./freeSS.json");

var config_file = path.join(process.env.HOMEPATH, options.config_file);
var __config = fs.readFileSync(config_file, 'utf8');
	__config = JSON.parse(__config);
var configs = new Array();

var SList = options.server_list;
var __flag = SList.length;

var writeConfigFile = function(){
    if(__flag === 0){
        __config.configs = configs;
        config = JSON.stringify(config);

        fs.writeFileSync(config_file, config, 'utf8');
        console.log("Config Updated!");
    }
    else{
        console.log("Task Remained: " + __flag);
    }
}

SList.forEach(function(website){
    switch(website.method){
        case "jsdom":
            method.jsdom.process(website, configs, writeConfigFile);
        break;
        case "self":
            method.users.process(website.url, configs, writeConfigFile);
        break;
        default:
        break;
    }
});