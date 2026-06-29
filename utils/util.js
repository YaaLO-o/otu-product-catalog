// utils/util.js

function copyWechatId(wechatId) {
  wx.setClipboardData({
    data: wechatId,
    success() {
      wx.showToast({
        title: '微信号已复制',
        icon: 'success',
        duration: 2000
      });
    }
  });
}

function formatPrice(price) {
  return '¥' + price;
}

async function fetchConfig(db, key) {
  try {
    const { data } = await db.collection('config').doc(key).get();
    return data;
  } catch (err) {
    return null;
  }
}

module.exports = {
  copyWechatId,
  formatPrice,
  fetchConfig
};
