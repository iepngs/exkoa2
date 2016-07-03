module.exports = route;

function route(ctx, next){
	const urlpath = ctx.path.substring(1);
	const inx = urlpath.indexOf('/');
	const targetController = inx > 0 ? urlpath.substr(0, inx) : urlpath;
	//const fs = require('fs');
	//const filestat = fs.statSync('controller/' + targetController + '.js');
	//console.log(filestat);
	return targetController;
	if(targetController !== 'favicon.ico'){
		//const reallController = require('../controller/' + targetController + '.js');
		//reallController.reallController(ctx, next);
	}
}