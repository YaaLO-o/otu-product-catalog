# OTU 产品目录 — 微信小程序

> 科技消费电子展示目录。纯展示、无交易，用户浏览后一键复制微信号联系。83 款产品，12 个品类。

## 目录结构

```
miniprogram/
├── app.js / app.json / app.wxss    # 全局配置 + Dark Tech 主题
├── project.config.json              # 云函数根 cloudfunctions/
├── products.js                      # 83 款产品数据（预览 + 导入源）
├── preview.html                     # H5 浏览器预览
├── pages/
│   ├── index/       首页（Banner + 分类入口 + 热门推荐）
│   ├── category/    分类（横滑标签 + 2 列网格 + 分页）
│   ├── search/      搜索（输入即搜 + 热门标签）
│   ├── detail/      详情（轮播 + 规格表 + 复制微信号）
│   └── about/       关于（品牌 + 产品统计 + 联系方式）
├── components/
│   └── product-card/                # 产品卡片（列表/网格复用）
├── cloudfunctions/
│   ├── getProducts/                 # 按分类/热门/分页查询
│   └── searchProducts/              # 关键词搜索
├── utils/util.js                    # 工具函数
└── docs/                            # 设计文档 + SOP
```

## 技术栈

微信原生 WXML + WXSS + JS，微信云开发（云数据库 + 云函数 + 云存储），Dark Tech 深色主题（`#0a0a0f` 底色 `#00e5ff` 强调色）。

## 红线

- **云数据库集合名固定** — `products`（产品）、`config`（配置，含 `contact` 记录存微信号）
- **价格字段为数字** — `price: 299`，不是字符串；0 表示"询价"
- **分类来自 products.js** — 12 个品类，不是最初的 4 个
- **图片存云存储** — 数据库只存 `fileID`，渲染前用 `wx.cloud.getTempFileURL` 换取临时链接
- **微信号在 config 集合** — `config` 集合的 `contact` 记录，`wechatId` 字段，一处修改全局生效

## 数据模型

```
products 集合：_id, name, price, brand, model, category, description, specs[{k,v}], images[], isHot, sort, createdAt
config 集合：_id="contact", wechatId
```

## 命令速查

```bash
# 微信开发者工具：打开 miniprogram/ 目录 → 编译 → 预览
# 云函数部署：右键 cloudfunctions/getProducts → 上传并部署
# 数据库导入：云开发控制台 → 数据库 → products → 导入（JSON/CSV）
```

## 深入文档

- [设计规格书](docs/设计规格书.md) — 页面布局、交互、数据模型、技术要点
- [SOP 操作指引](docs/SOP-操作指引.md) — 注册 → 建库 → 部署 → 审核 → 发布全流程
- [实施计划](docs/实施计划.md) — 14 个 Task 的完整实施步骤和代码
