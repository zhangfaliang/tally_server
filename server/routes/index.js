const { staticRouter } = require("./static/index");
const { getDashboard } = require("./v1/dashboard");
const { getUser } = require("./v1/user/index.js");
const { login } = require("./v1/user/login");
const { getRouters } = require("./v1/getRouter");


const initRouter = ({ app, router }) => {
  staticRouter({ app, router });
  getDashboard({ app, router });
  login({ app, router });
  getUser({ app, router });
  getRouters({ app, router });
};

module.exports = {
  initRouter
};
