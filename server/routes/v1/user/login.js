const login = ({ router, app }) => {
  router.post("/v1/user/login", (ctx, next) => {
    app.use(async (ctx, next) => {
      ctx.loginFlag = true;
    });
    ctx.body = JSON.stringify({ success: true, message: "Ok" });
  });
};

module.exports = {
  login
};
