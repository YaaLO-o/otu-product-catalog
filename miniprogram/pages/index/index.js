const util = require('../../utils/util');
const db = wx.cloud.database();

Page({
  data: {
    banners: [],
    categories: [
      { name: '耳机', icon: '🎧' },
      { name: '鼠标', icon: '🖱️' },
      { name: '键盘', icon: '⌨️' },
      { name: '配件', icon: '🔌' }
    ],
    hotProducts: [],
    wechatId: ''
  },

  onLoad() {
    this.loadData();
    this.loadConfig();
  },

  onPullDownRefresh() {
    this.loadData().then(() => wx.stopPullDownRefresh());
  },

  async loadData() {
    try {
      const res = await wx.cloud.callFunction({
        name: 'getProducts',
        data: { isHot: true, page: 1, pageSize: 4 }
      });

      if (res.result.success) {
        const hotProducts = res.result.data;
        this.setData({
          banners: hotProducts.slice(0, 3),
          hotProducts
        });
      }
    } catch (err) {
      wx.showToast({ title: '加载失败', icon: 'none' });
    }
  },

  async loadConfig() {
    const config = await util.fetchConfig(db, 'contact');
    if (config) {
      this.setData({ wechatId: config.wechatId });
    }
  },

  onTapSearch() {
    wx.navigateTo({ url: '/pages/search/search' });
  },

  onTapCategory(e) {
    const name = e.currentTarget.dataset.name;
    wx.switchTab({ url: '/pages/category/category' });
    wx.setStorageSync('activeCategory', name);
  },

  onTapProduct(e) {
    const product = e.detail.product;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${product._id}`
    });
  },

  onTapBanner(e) {
    const product = e.currentTarget.dataset.product;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${product._id}`
    });
  },

  onCopyWechat() {
    util.copyWechatId(this.data.wechatId);
  }
});
