var page = require('page')
require('../lib/scrolled')

var routes = [
  require('./home/client'),
  require('./startup/client')
]

routes.forEach(function (route) {
  route(page)
})

page({
  click: false
})
