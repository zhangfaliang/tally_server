const { staticRouter } = require("./static/index");
const { getDashboard } = require("./v1/dashboard");
const { getUser } = require("./v1/user/index.js");
const { login } = require("./v1/user/login");
const { getRouters } = require("./v1/getRouter");
const { defaultRouter } = require("./default/index");
const loginOut = require("./v1/user/loginOut");

const initRouter = ({ app, router, pool }) => {
  staticRouter({ app, router, pool });
  defaultRouter({ app, router, pool });
  getDashboard({ app, router, pool });
  login({ app, router, pool });
  getUser({ app, router, pool });
  getRouters({ app, router, pool });
  loginOut({ app, router, pool });
};

module.exports = {
  initRouter
};
