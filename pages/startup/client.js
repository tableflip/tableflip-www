var sentTpl = require('./sent.jade')

module.exports = function (page) {
  page('/startup', enter)
}

function enter (ctx, next) {
  if (ctx.querystring !== 'sent=true') return console.log(ctx, 'not true')
  var html = sentTpl()
  document.getElementById('startup-form').innerHTML = html
}
