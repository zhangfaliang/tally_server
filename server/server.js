const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
let router = new Router();
const { initRouter } = require("./routes/index.js");
const bodyParser = require("koa-bodyparser");
const { proxyFn } = require("./proxy/index");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://qejtxswazxllqx:ab1cdef2d2f857855314747214cf9e6a13de5f106485100fb7418d5d69e19e1a@ec2-23-21-160-38.compute-1.amazonaws.com:5432/dbsetdrftrsmb",
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
