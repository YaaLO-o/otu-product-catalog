// components/product-card/product-card.js
const util = require('../../utils/util');

Component({
  properties: {
    product: {
      type: Object,
      value: {}
    }
  },

  data: {
    displayImage: ''
  },

  lifetimes: {
    attached() {
      this.setDisplayImage();
    }
  },

  observers: {
    'product'() {
      this.setDisplayImage();
    }
  },

  methods: {
    setDisplayImage() {
      const product = this.properties.product;
      if (product.images && product.images.length > 0) {
        this.setData({ displayImage: product.images[0] });
      } else {
        this.setData({ displayImage: '' });
      }
    },

    formatPrice(price) {
      return util.formatPrice(price);
    },

    onTap() {
      this.triggerEvent('tap', { product: this.properties.product });
    }
  }
});
