const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

exports.main = async (event) => {
  const { keyword = '', page = 1, pageSize = 20 } = event;
  const trimKey = keyword.trim();

  if (!trimKey) {
    return { success: true, data: [], total: 0 };
  }

  const _ = db.command;
  const regex = db.RegExp({
    regexp: trimKey,
    options: 'i'
  });

  const skip = (page - 1) * pageSize;

  try {
    const countResult = await db.collection('products')
      .where(_.or([{ name: regex }, { description: regex }]))
      .count();

    const { data } = await db.collection('products')
      .where(_.or([{ name: regex }, { description: regex }]))
      .orderBy('sort', 'desc')
      .skip(skip)
      .limit(pageSize)
      .get();

    return {
      success: true,
      data,
      total: countResult.total,
      keyword: trimKey
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
};
