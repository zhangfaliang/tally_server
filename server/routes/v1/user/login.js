const { get, isEmpty } = require("lodash");
const login = ({ router, app, pool }) => {
  router.post("/v1/user/login", async (ctx, next) => {
    const { username, password } = ctx.request.body;
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM user_table where username='${username}' and password ='${password}'`
    );
    client.release();
    const userInfo = get(result, "rows.0", {});
    if (!isEmpty(userInfo)) {
      const now = new Date();
      now.setDate(now.getDate() + 1);
      ctx.cookies.set(
        "token",
        JSON.stringify({ id: userInfo.userid, deadline: now.getTime() }),
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
