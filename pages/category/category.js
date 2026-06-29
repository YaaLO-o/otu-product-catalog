Page({
  data: {
    categories: ['耳机', '鼠标', '键盘', '配件'],
    activeCategory: '耳机',
    products: [],
    total: 0,
    page: 1,
    pageSize: 10,
    hasMore: true,
    loading: false
  },

  onLoad() {
    const stored = wx.getStorageSync('activeCategory');
    if (stored && this.data.categories.includes(stored)) {
      this.setData({ activeCategory: stored });
      wx.removeStorageSync('activeCategory');
    }
    this.loadProducts();
  },

  onShow() {
    const stored = wx.getStorageSync('activeCategory');
    if (stored && this.data.categories.includes(stored) && stored !== this.data.activeCategory) {
      this.setData({ activeCategory: stored, products: [], page: 1, hasMore: true });
      wx.removeStorageSync('activeCategory');
      this.loadProducts();
    }
  },

  onPullDownRefresh() {
    this.setData({ products: [], page: 1, hasMore: true });
    this.loadProducts().then(() => wx.stopPullDownRefresh());
  },

  onReachBottom() {
    if (this.data.hasMore && !this.data.loading) {
      this.loadProducts();
    }
  },

  async loadProducts() {
    this.setData({ loading: true });

    try {
      const res = await wx.cloud.callFunction({
        name: 'getProducts',
        data: {
          category: this.data.activeCategory,
          page: this.data.page,
          pageSize: this.data.pageSize
        }
      });

      if (res.result.success) {
        const newList = this.data.products.concat(res.result.data);
        this.setData({
          products: newList,
          total: res.result.total,
          hasMore: res.result.hasMore,
          page: this.data.page + 1,
          loading: false
        });
      }
    } catch (err) {
      wx.showToast({ title: '加载失败', icon: 'none' });
      this.setData({ loading: false });
    }
  },

  onSwitchCategory(e) {
    const name = e.currentTarget.dataset.name;
    if (name !== this.data.activeCategory) {
      this.setData({
        activeCategory: name,
        products: [],
        page: 1,
        hasMore: true
      });
      this.loadProducts();
    }
  },

  onTapProduct(e) {
    const product = e.detail.product;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${product._id}`
    });
  }
});
