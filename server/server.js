'use strict'

var koa = require('koa')
var send = require('koa-send')
var serve = require('koa-static')

var app = koa()

app.use(serve('./dist'))

app.use(function* () {
  if (this.path.includes('bundle.js')) {
    yield send(this, './dist/bundle.js')
  } else {
    yield send(this, './dist/index.html')
  }
})

app.listen(3000)
