const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
let router = new Router();
const { initRouter } = require("./routes/index.js");
const bodyParser = require("koa-bodyparser");
const { proxyFn } = require("./proxy/index");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8008;
}
initRouter({ app, router, pool });
proxyFn({ app, port });
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());
app.listen(port);
