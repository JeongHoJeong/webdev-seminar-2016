'use strict'

var koa = require('koa')
var send = require('koa-send')
var serve = require('koa-static')

var app = koa()

app.use(serve('./dist'))

app.use(serve('./assets'))

app.use(function* () {
  if (this.path.includes('bundle.js')) {
    yield send(this, './dist/bundle.js')
  } else {
    yield send(this, './dist/index.html')
  }
})

var port

if (process.argv.length > 2) {
  port = process.argv[2]
} else {
  port = 3000
}

app.listen(port)
