const loginOut = ({ router, app }) => {
  router.get("/v1/user/logout", (ctx, next) => {
    try {
      ctx.cookies.set("token", JSON.stringify({ id: "", deadline: "" }), {
        maxAge: 0,
        httpOnly: true
      });
      ctx.body = JSON.stringify({ success: "ok", massage: "退出登录" });
    } catch (error) {
      ctx.body = JSON.stringify({ success: "error", massage: "服务异常" });
    }
  });
};
module.exports = loginOut;
