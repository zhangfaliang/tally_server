const qs = require("qs");
const { getToken } = require("./_utils");
const { get, isEmpty } = require("lodash");

const getUser = ({ router, pool }) => {
  router.get("/v1/user", async (ctx, next) => {
    try {
      const { token } = getToken(ctx.headers);
      if (!token) {
        ctx.body = JSON.stringify({ message: "Not Login" });
        return;
      }
      const response = {};
      let user = {};
      response.success = token.deadline > new Date().getTime();
      const client = await pool.connect();
      const result = await client.query(
        `SELECT * FROM user_table where userid='${token.id}'`
      );
      client.release();
      const userInfo = get(result, "rows.0", {});
      if (!isEmpty(userInfo)) {
        const { password, ...other } = userInfo;
        response.user = other;
        ctx.body = JSON.stringify(response);
      } else {
        ctx.body = JSON.stringify({
          success: false,
          message: "请重新登录"
        });
      }
    } catch (error) {
      ctx.body = JSON.stringify({ success: false, message: "请重新登录" });
    }
  });
};

module.exports = {
  getUser
};
