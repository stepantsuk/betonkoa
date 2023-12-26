const Koa = require("koa");
const router = require("./router");
const path = require("path");
const render = require("@koa/ejs");
const serve = require("koa-static");

const app = new Koa();

// define staticDirPath
const staticDirPath = path.join(__dirname, "views");

// render template 
render(app, {
  root: path.join(staticDirPath),
  layout: "layout",
  viewExt: "html",
  cashe: false,
  debug: false,
  async: true
});

// Router Middleware
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(staticDirPath));

app.listen(8000, () => console.log("Server is started ==>>>"));
