'use strict';

var koa = require('koa');
var serve = require('koa-static');

var app = koa();

app.use(serve('.'));

app.use(function*() {
  this.type = 'text/html';
  this.body = `<div id='root'></div>
  <script src='dist/bundle.js'></script>`;
});

app.listen(3000);
