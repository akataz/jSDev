/**
 * Module dependencies.
 */

var render = require('./lib/render');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var koa = require('koa');
var app = module.exports = koa();

// "database"

var data = "dogs"
JSON.stringify("Allyourbasebelongtous");

// middleware

app.use(logger());

// route middleware

app.use(route.get('/', show));
app.use(route.get('/thatCoolThing', show));


// route definitions


/**
 * Show post :id.
 */

function *show() {
  if (!data) this.throw(404, 'there is no data');
  console.log("this point got hit congrats dude!")
  //this.body = yield render('show', { data: data });
  this.body = "dogs";
}

// listen

if (!module.parent) app.listen(3000);
console.log("Now listening on port 3000!")
