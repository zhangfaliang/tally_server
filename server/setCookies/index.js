const setCookies = ({ router, app }) => {
  app.use(async (ctx, next) => {
    if (ctx.loginFlag) {
      const now = new Date();
      now.setDate(now.getDate() + 1);
      ctx.cookie.set(
        "token",
        JSON.stringify({ id: user[0].id, deadline: now.getTime() }),
        {
          maxAge: 900000,
          httpOnly: true
        }
      );
    }
    ctx.body = ctx.body;
  });
};

module.exports = {
  setCookies
};
