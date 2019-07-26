const Koa = require("koa");
const fs = require("fs");
var path = require("path");
const http = require("http");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8008;
}
const app = new Koa();
var cors = require("koa2-cors");
const Router = require("koa-router");
const proxy = require("koa-proxies");
let router = new Router();
app.use(
  require("koa-static")("dist", {
    //maxage:0,// Browser cache max-age in milliseconds. defaults to 0
    //hidden:false,// Allow transfer of hidden files. defaults to false
    index: "index.html" // Default file name, defaults to 'index.html'
    //defer:true If true, serves after return next(), allowing any downstream middleware to respond first.
    // gzip:true,// Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
    // br:true,// Try to serve the brotli version of a file automatically when brotli is supported by a client and if the requested file with .br extension exists (note, that brotli is only accepted over https). defaults to true.
    //setHeaders Function to set custom headers on response.
    //extensions Try to match extensions from passed to search for file when no extension is sufficed in URL. First found is served. (defaults to false)
  })
);

app.use(
  proxy("/api/v1/weather", {
    target: "https://api.seniverse.com/",
    changeOrigin: true,
    // agent: new httpsProxyAgent('http://1.2.3.4:88'),
    //rewrite: path => path.replace(/\/api/, ''),
    pathRewrite: {
      "^/api/v1/weather": "/v3/weather"
    },
    logs: true
  })
);

app.use(router.routes()).use(router.allowedMethods());
app.listen(port);
