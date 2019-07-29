const qs = require("qs");
const { adminUsers } = require("./_utils");
const getUser = ({ router,pool }) => {
  router.get("/v1/user", async (ctx, next) => {

    // const client = await pool.connect()
    // const result = await client.query('SELECT * FROM test_table');
    // console.log(result,'---------000000000')
  
    // client.release();

    const cookie = ctx.headers.cookie || "";
    const cookies = qs.parse(cookie.replace(/\s/g, ""), { delimiter: ";" });
    const response = {};
    let user = {};
    if (!cookies.token) {
      ctx.body = JSON.stringify({ message: "Not Login" });
      return;
    }
    const token = JSON.parse(cookies.token);
    if (token) {
      response.success = token.deadline > new Date().getTime();
    }
    if (response.success) {
      const userItem = adminUsers.find(_ => _.id === token.id);
      if (userItem) {
        const { password, ...other } = userItem;
        user = other;
      }
    }
    response.user = user;
    ctx.body = JSON.stringify(response);
  });
};

module.exports = {
  getUser
};
