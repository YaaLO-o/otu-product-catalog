const util = require('../../utils/util');
const db = wx.cloud.database();

Page({
  data: {
    productCount: 0,
    wechatId: '',
    brandName: '产品目录'
  },

  onLoad() {
    this.loadData();
    this.loadConfig();
  },

  async loadData() {
    try {
      const res = await db.collection('products').count();
      this.setData({ productCount: res.total });
    } catch (err) {
      // ignore
    }
  },

  async loadConfig() {
    const config = await util.fetchConfig(db, 'contact');
    if (config) {
      this.setData({ wechatId: config.wechatId });
    }
  },

  onCopyWechat() {
    util.copyWechatId(this.data.wechatId);
  }
});
