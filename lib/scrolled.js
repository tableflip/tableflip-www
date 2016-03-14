var jerk = require('./jerk')
var html = document.getElementsByTagName('html')[0]
var scrolled = false
setTimeout(function () { window.onscroll() })
window.onscroll = function () {
  if (window.scrollY > 0 && !scrolled) {
    jerk.addClass(html, 'scrolled')
    scrolled = true
  } else if (window.scrollY <= 0 && scrolled) {
    jerk.removeClass(html, 'scrolled')
    scrolled = false
  }
}
