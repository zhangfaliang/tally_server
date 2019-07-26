const Koa = require("koa");
const Router = require("koa-router");
const proxy = require("koa-proxies");
const app = new Koa();
let router = new Router();
const { initRouter } = require("./routes/index.js");
const { setCookies } = require("./setCookies");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8008;
}
initRouter({ app, router });
//setCookies({ app, router });
app.use(
  proxy("/api", {
    target: "http://localhost:8008",
    changeOrigin: true,
    // agent: new httpsProxyAgent('http://1.2.3.4:88'),
    rewrite: path => path.replace(/\/api/, ""),
    logs: true
  })
);

app.use(router.routes()).use(router.allowedMethods());
app.listen(port);
