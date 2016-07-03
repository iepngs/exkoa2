const Router = require('koa-router');
const router = new Router({
	prefix: '/news'
});

router.get('/category/:category', (ctx, next) =>{
	// responds to "/news/category/:category"
	console.log(ctx.params);
}); 
router.get('/author/:author', (ctx, next) =>{
	// responds to "/news/author/:author"
	console.log(ctx.params);
}); 