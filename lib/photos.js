var shuffle = require('lodash/shuffle')
var ids = ['9GafGxpxhF', '8sekCUJxkG', '0KWJKlJxoE','0KfUMUpxhT', '0iAvPRJxhR', '1l6mRhpxsP', '2ZI73cpxqx', '2ZIvL-pxqg', '3CJTePJxm9', '3CuZffpxo0', '3U_ICDJxlp', '43k4UIpxij', '4e-okqJxsb', '4td7hupxsi', '5ULthMJxm0', '5hiNCCpxu0', '6UdNeXpxhL', '6rupsMpxsC', '7vnOATpxrY', '836BkopxuN', '8quYYcJxp0',  'XeoqKSpxoz', 'Yiauo3Jxl-', 'ayzF_8JxkM', 'b6JVFCpxp5', 'b6jTYBJxtE', 'b6kI7spxuV', 'bFRB9kpxu9', 'b_MXPopxnY', 'bba989Jxu_', 'btKJaIJxqJ', 'bzE6ngJxhi', 'bzE87Bpxhm', 'cKRTtVJxgG', 'cKRxh_pxg7', 'cQ8RV5Jxqg', 'cRG6NQJxiy', 'cRGjcSpxic', 'cRGnI7pxid', 'cRHdCGpxjd', 'cRLy0LJxm4', 'cSYn-zpxiS', 'cZPB3opxhW', 'cgqknlJxkr', 'cjmtJwJxk-', 'dzIgKVJxtL', 'e0dWD-Jxpc', 'e9-puupxrm', 'eSHSrepxvJ', 'eVmjnPJxuX', 'eZychZpxlD', 'eaDcouJxot', 'ezbgAQpxmb', 'f7-BX6Jxs6', 'f765pdpxmg', 'f8ARSmJxg0', 'fA2Pe1JxuG', 'fAkkUSJxkd', 'fDGaqoJxgl', 'fK4rZrJxlB', 'fK4zNSpxlI', 'fM4VdSpxg0', 'fM4fjuJxg9', 'fM_2BDJxmg', 'fM_nZoJxmP', 'fM_tkhJxmW', 'fNWKkgJxto', 'fNoeWxpxk9', 'ffak-SJxvH', 'gQqyiVpxl_', 'gbMaZvJxh8', 'ggGtNPJxln', 'ggGxYMpxlu', 'ggHGs_pxmh', 'h6E495pxr0', 'ibuHZypxm_', 'iwGfCppxnH', 'jWfsbSpxh8', 'jWti-BJxkv', 'k7oy3cpxlc', 'k9P-lupxm2', 'k9cdiKJxhv', 'kFn0OaJxrl', 'kFtjUlpxjs', 'mnw487pxui', 'nP8hoCpxkc', 'nQbKlPJxsx', 'nQddWrJxhA', 'nQfktQJxkS', 'nQfxb2pxkm', 'nQglWvpxmI', 'nf4JJKpxo-', 'nftwPopxrS', 'ngFJG1pxu6', 'ngWuGYpxpa', 'nko-W1pxtL', 'nsw7Wipxpp', 'oDP2Yvpxi2', 'oEEdyspxuu', 'oqrRNXJxnt', 'p-AMfPpxtD', 'pEqvlKJxpo', 'pJ7JmHJxi0', 'pJ89jrpxni', 'pRG0qgJxvS', 'pRUGFNJxsB', 'pXBuvjpxpk', 'prDpAHJxo7', 'prEA_xJxpi', 'ps7mwYJxv5', 'ps9_Slpxh6', 'pv1s1mJxql', 'pwAw7Spxpq', 'pwCxJ7pxs2', 'pwHi9xJxkd', 'pwHjKeJxke', 'py17f7Jxiy', 'pyn99aJxoU', 'pyyGJmJxrf', 'pyzcgnJxuJ', 'pzZQToJxsM', 'qKtR9wJxuG', 'qmNl4ZJxgE', 'qoZ5dmJxo2', 'qorKosJxtp', 'r-K-ZhpxkN', 'r7Xgsbpxhn', 'rEZejspxrX', 'rsQaISpxtY', 's2n6LUJxjM', 'sCnEenJxrG', 'sCup3CJxmY', 'sFU4OHJxq9', 'sNV9EfJxqU', 'smeM62pxp3', 'tD1Jx4pxo8', 'tVXIm8JxiV', 'tiC60lJxv3', 'txQ1I8pxuK', 'u8IIqXpxlr', 'uAkKsIJxiW', 'uay8P_Jxk0', 'udLlUwJxnH', 'um9XFfJxgn', 'v3_v02pxkd', 'v4AOplpxpL', 'vD5530pxi-', 'vO-Kq8JxiV', 'vO9hvHpxuH', 'vauuDVJxgs', 'vyjNkBpxpr', 'vyneyApxpq', 'w1xoeKJxiS', 'wBWURGpxkK', 'wBWkmNJxlF', 'wRBKoxpxu2', 'wjugoIpxkw', 'wwlldnJxuO', 'xb6V3tpxtd', 'xq8znzpxjD', 'xrh67Tpxii', 'xrhqM2Jxh8', 'zH4jATJxvu', 'zHtpYLJxtM', 'zHucg8pxuc' ]

module.exports = function photoGrid (gridEl, speed) {
  if (!gridEl) return
  speed = speed || 800

  var w = gridEl.clientWidth
  var cols = Math.floor((w / 160) + 1)

  var logos = [
    { title: 'KitMapper', href: 'https://kitmapper.com', bg:'https://pbs.twimg.com/profile_images/640891936681934848/Ak23y-Og.png' },
    { title: 'Meteor London', href: 'http://www.meetup.com/Meteor-London/', bg:'/img/logo-meteor-partner.png' },
    { title: 'NodeBots', href: 'http://www.meetup.com/NodeBots-of-London/', bg:'https://raw.githubusercontent.com/voodootikigod/logo.js/master/nodebots/nodebots.png' }
  ]

  var data = shuffle(ids.map((id) => {
    return { bg:`http://instagram.com/p/${id}/media/?size=m` }
  }))
  data[0] = logos[0]
  data[2] = logos[1]
  data[4] = logos[2]

  var cells = data.map((obj) => {
    var el = document.createElement('a')
    el.style.backgroundImage = `url(${obj.bg})`
    el.className = 'cell'
    el.style.width = (100 / cols) + '%'
    if (obj.href) el.href = obj.href
    if (obj.title) el.title = obj.title
    return el
  })

  cells.forEach(el => gridEl.appendChild(el))
  var i = 0
  var id = setInterval(function(){
    cells[i++].className = 'cell yep'
    if (i >= cells.length -1) {
      window.clearInterval(id)
    }
  }, speed)
}
