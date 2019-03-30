const Koa = require('koa');
const ejs = require('ejs');
const path = require('path');

const app = new Koa();

const assetsPath = path.join(__dirname, '../dist');
app.use(
  require('koa-static')(assetsPath, {})
);

app.use(async ctx => {
  const filename = path.join(__dirname, 'index.ejs');
  ejs.renderFile(filename, {}, {}, function(err, str){
    ctx.body = str;
  });
});

app.listen(3000);
