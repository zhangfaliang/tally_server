const { adminUsers } = require("./_utils");

const login = ({ router, app }) => {
  router.post("/v1/user/login", (ctx, next) => {
    app.use(async (ctx, next) => {
      ctx.loginFlag = true;
    });

    const { username, password } = ctx.request.body;
    const user = adminUsers.filter(item => item.username === username);

    if (user.length > 0 && user[0].password === password) {
      const now = new Date();
      now.setDate(now.getDate() + 1);
      ctx.cookies.set(
        "token",
        JSON.stringify({ id: user[0].id, deadline: now.getTime() }),
        {
          maxAge: 900000,
          httpOnly: true
        }
      );
      ctx.body = JSON.stringify({ success: true, message: "Ok" });
    } else {
      ctx.body = JSON.stringify({
        success: false,
        message: "用户或者密码不对"
      });
    }
  });
};

module.exports = {
  login
};
