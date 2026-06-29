const util = require('../../utils/util');
const db = wx.cloud.database();

Page({
  data: {
    product: null,
    wechatId: '',
    currentImageIndex: 0
  },

  onLoad(options) {
    const id = options.id;
    if (id) {
      this.loadProduct(id);
      this.loadConfig();
    }
  },

  async loadProduct(id) {
    try {
      const { data } = await db.collection('products').doc(id).get();
      this.setData({ product: data });

      wx.setNavigationBarTitle({
        title: data.name || '产品详情'
      });
    } catch (err) {
      wx.showToast({ title: '加载失败', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
    }
  },

  async loadConfig() {
    const config = await util.fetchConfig(db, 'contact');
    if (config) {
      this.setData({ wechatId: config.wechatId });
    }
  },

  onSwiperChange(e) {
    this.setData({ currentImageIndex: e.detail.current });
  },

  onPreviewImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.product.images;
    wx.previewImage({
      urls: images,
      current: images[index]
    });
  },

  onCopyWechat() {
    util.copyWechatId(this.data.wechatId);
  },

  onShareAppMessage() {
    const product = this.data.product;
    return {
      title: product ? product.name : '产品目录',
      path: `/pages/detail/detail?id=${product._id}`
    };
  }
});
