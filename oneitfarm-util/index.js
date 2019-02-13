class OneitfarmUtil {
  routeGo(name, params) {
    if (params) {
      let jsonParams = JSON.stringify(params)
      wx.navigateTo({
        url: `../page${name}/page${name}?params=${jsonParams}`
      })
    } else {
      wx.navigateTo({
        url: `../page${name}/page${name}`
      })
    }
  }
}
module.exports = {
  OneitfarmUtil
}
