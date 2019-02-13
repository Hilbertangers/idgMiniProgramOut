class OneitfarmUtil {
  routeGo(name, params) {
    if (params) {
      let jsonParams = JSON.stringify(params)
      wx.navigateTo({
        url: `../${name}/${name}?params=${jsonParams}`
      })
    } else {
      wx.navigateTo({
        url: `../${name}/${name}`
      })
    }
  }
}
module.exports = {
  OneitfarmUtil
}
