const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
let router = new Router();
const { initRouter } = require("./routes/index.js");
const bodyParser = require("koa-bodyparser");
const { setCookies } = require("./setCookies");
const { proxyFn } = require("./proxy/index");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8008;
}
initRouter({ app, router });
proxyFn({ app, port });
//setCookies({ app, router });
app.use(bodyParser());


app.use(router.routes()).use(router.allowedMethods());
app.listen(port);
