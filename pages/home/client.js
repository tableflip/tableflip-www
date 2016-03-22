var photoGrid = require('../../lib/photos')

module.exports = function (page) {
  page('/', enter)
}

function enter (ctx, next) {
  var gridEl = document.getElementById('sketchpad')
  photoGrid(gridEl)
}
