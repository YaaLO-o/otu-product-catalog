Page({
  data: {
    keyword: '',
    results: [],
    hotTags: ['蓝牙', '降噪', '无线', '机械键盘', '游戏鼠标', 'Type-C'],
    searched: false,
    loading: false
  },

  onLoad() {},

  onInput(e) {
    const keyword = e.detail.value;
    this.setData({ keyword });

    if (!keyword.trim()) {
      this.setData({ results: [], searched: false });
      return;
    }

    if (this._timer) clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.doSearch(keyword.trim());
    }, 300);
  },

  onClear() {
    this.setData({ keyword: '', results: [], searched: false });
  },

  onTapTag(e) {
    const tag = e.currentTarget.dataset.tag;
    this.setData({ keyword: tag });
    this.doSearch(tag);
  },

  async doSearch(keyword) {
    this.setData({ loading: true });

    try {
      const res = await wx.cloud.callFunction({
        name: 'searchProducts',
        data: { keyword }
      });

      if (res.result.success) {
        this.setData({
          results: res.result.data,
          searched: true,
          loading: false
        });
      }
    } catch (err) {
      wx.showToast({ title: '搜索失败', icon: 'none' });
      this.setData({ loading: false });
    }
  },

  onTapResult(e) {
    const product = e.currentTarget.dataset.product;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${product._id}`
    });
  }
});
