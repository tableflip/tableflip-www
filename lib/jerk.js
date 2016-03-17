
// jerk is not a jquery replacement.

module.exports.addClass = function  (el, className) {
  el.className = el.className.split(' ').concat(className).join(' ')
}

module.exports.removeClass = function (el, className) {
  var classes = el.className.split(' ')
  el.className = classes.filter(function (c) {
    return c != className
  }).join(' ')
}

