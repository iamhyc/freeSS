var fs = require('fs');
var path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var config = '@echo off\nnode ' + path.join(process.cwd(), 'app.js')+'\necho,\necho "Process Restart..."\ntskill shadowsocks\nstart '+ path.join(process.env.HOMEPATH ,'Shadowsocks.exe')+'\necho,\necho "Successfull!"\nexit';

fs.writeFile('Timeup.bat', config, 'utf8', function(err){
	if(err){
		console.log("WRTE FILE ERROR");
		console.log("press ENTER KEY to exit...");
		rl.on('line', cmd =>{
			process.exit(1);
		});
	}
	process.exit(1);
});