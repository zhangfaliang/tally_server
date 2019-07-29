const proxy = require("koa-proxies");

const proxyFn = ({ app, port }) => {
  app.use(
    proxy("/test/v1/weather", {
      target: "https://api.seniverse.com/",
      changeOrigin: true,
      pathRewrite: { "^/api/v1/weather": "/v3/weather" }
    })
  );
  app.use(
    proxy("/api", {
      // target: "https://glacial-headland-51596.herokuapp.com",
      target: `http://localhost:${port}`,
      changeOrigin: true,
      // agent: new httpsProxyAgent('http://1.2.3.4:88'),
      rewrite: path => path.replace(/\/api/, ""),
      logs: true
    })
  );
};

module.exports = {
  proxyFn
};
