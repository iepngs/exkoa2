module.exports = reallController;

function reallController(ctx, next){
	console.log("11111@");
	const Router = require('koa-router');
	const router = new Router({
		prefix: '/user'
	});
	router.get('/user', function (ctx, next) {
		console.log("222");
		console.log(ctx.params);
	}); 
	
	router.get('/:search',  function (ctx, next) {
		console.log(ctx.params);
	});
	return router;
}
