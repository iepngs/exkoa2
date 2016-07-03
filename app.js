const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
//const router = new Router();
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const koastaic = require('koa-static')(__dirname + '/public');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(koastaic));

app.proxy = true;

// logger
app.use(async (ctx, next) => {
	const start = new Date;
	await next();
    const ms = new Date - start;
    console.log(`${ctx.ip} - ${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use((ctx, next) => {
	const targetController = require('./router/index')(ctx, next);
	const router = require('./controller/' + targetController + '.js')(ctx, next);
	//app.use(router());
	//app.use(router.allowedMethods());
});
console.log(typeof router);



// response
/*app.use(ctx => {
  ctx.body = 'Hello World';
});*/

app.on('error', function(err, ctx){
	console.log(err);
	logger.error('server error', err, ctx);
});

app.listen(3000);
console.log('listening on port 3000');
exports.app = app;
