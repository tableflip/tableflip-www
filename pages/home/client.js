var photoGrid = require('../../lib/photos')
var sentTpl = require('./sent.jade')

module.exports = function (page) {
  page('/', sent, enter)
}

function enter (ctx, next) {
  var gridEl = document.getElementById('sketchpad')
  photoGrid(gridEl)
}

function sent (ctx, next) {
  if (ctx.querystring !== 'sent=true') return next()
  var el = document.getElementById('enquiry-form')
  var top = el.getBoundingClientRect().top - 144
  el.innerHTML = sentTpl()
  window.scrollTo(0, top)
  document.getElementById('sent-message').style.color = 'black'
}
