const defaultRouter = ({ router, app }) => {
  router.get("/en/dashboard", (ctx, next) => {
    ctx.redirect('/');
    ctx.status = 301;
  });
};

module.exports = {
  defaultRouter
};
