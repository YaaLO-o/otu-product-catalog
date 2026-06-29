// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env: 'product-catalog',
      traceUser: true
    });
  }
});
