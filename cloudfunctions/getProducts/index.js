const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

exports.main = async (event) => {
  const { category, isHot, page = 1, pageSize = 10 } = event;
  const _ = db.command;
  const where = {};

  if (category) {
    where.category = category;
  }
  if (isHot !== undefined) {
    where.isHot = isHot;
  }

  const skip = (page - 1) * pageSize;

  try {
    const countResult = await db.collection('products').where(where).count();
    const total = countResult.total;

    const { data } = await db.collection('products')
      .where(where)
      .orderBy('sort', 'desc')
      .skip(skip)
      .limit(pageSize)
      .get();

    return {
      success: true,
      data,
      total,
      page,
      pageSize,
      hasMore: skip + data.length < total
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
};
