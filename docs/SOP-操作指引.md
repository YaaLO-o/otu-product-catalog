# 微信小程序产品展示 — 操作 SOP

> 以下步骤需要你在微信后台和开发者工具中手动操作。

---

## 第一步：注册小程序账号

1. 访问 https://mp.weixin.qq.com
2. 点击「立即注册」→「小程序」
3. **账号类型**：
   - 有营业执照 → 选「企业」或「个体工商户」
   - 暂无执照 → 先用测试号（微信开发者工具 → 创建项目 → 选「测试号」）
4. 注册完成后，后台 → 开发管理 → 开发设置 → 复制 **AppID**

---

## 第二步：开通云开发

1. 小程序后台 → 开发 → 云开发 → 开通
2. 创建环境，环境名填 `product-catalog`
3. 选择「按量付费」（免费额度内不收费：2GB 数据库 + 5GB 存储 + 5GB 云函数资源）

---

## 第三步：用开发者工具打开项目

1. 下载安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开工具 → 导入项目
   - 目录：选择 `C:\Users\Yangy\miniprogram`
   - AppID：填入第一步获取的 AppID
3. 点击工具栏「云开发」图标，确认环境已连接

---

## 第四步：创建云数据库

1. 开发者工具 → 云开发控制台 → 数据库
2. 添加集合 `products`，权限设为「所有用户可读，仅创建者可写」
3. 添加集合 `config`，权限同上
4. 在 `config` 集合中添加记录：
   - `_id` 填 `contact`
   - `wechatId` 填你的微信号
5. 导入示例产品（在 `products` 集合中逐条添加，或 JSON 批量导入）：

```json
[
  {
    "name": "Pro X1 降噪耳机",
    "price": 299,
    "brand": "声阔",
    "model": "X1",
    "category": "耳机",
    "description": "40dB主动降噪，60小时续航，Hi-Res金标认证",
    "specs": [
      { "key": "驱动单元", "value": "40mm" },
      { "key": "频率响应", "value": "20Hz-20kHz" },
      { "key": "连接方式", "value": "蓝牙5.3 / 有线" },
      { "key": "续航", "value": "60小时" }
    ],
    "images": [],
    "isHot": true,
    "sort": 100,
    "createdAt": "2026-06-14T00:00:00Z"
  },
  {
    "name": "G Pro 无线游戏鼠标",
    "price": 199,
    "brand": "雷蛇",
    "model": "G Pro",
    "category": "鼠标",
    "description": "轻量级68g，26000DPI光学传感器",
    "specs": [
      { "key": "传感器", "value": "Focus Pro 26K" },
      { "key": "DPI", "value": "26000" },
      { "key": "重量", "value": "68g" }
    ],
    "images": [],
    "isHot": true,
    "sort": 90,
    "createdAt": "2026-06-14T00:00:00Z"
  },
  {
    "name": "K3 机械键盘",
    "price": 349,
    "brand": "Keychron",
    "model": "K3",
    "category": "键盘",
    "description": "75%配列，矮轴热插拔，RGB背光",
    "specs": [
      { "key": "配列", "value": "75% (84键)" },
      { "key": "轴体", "value": "佳达隆矮轴 茶轴" },
      { "key": "背光", "value": "RGB 18种灯效" }
    ],
    "images": [],
    "isHot": false,
    "sort": 80,
    "createdAt": "2026-06-14T00:00:00Z"
  }
]
```

---

## 第五步：部署云函数

1. 在开发者工具左侧文件树中，右键 `cloudfunctions/getProducts`
2. 选择「上传并部署：云端安装依赖」
3. 同样操作 `cloudfunctions/searchProducts`
4. 部署完成后，在云开发控制台 → 云函数 → 点击函数名 → 测试，验证返回数据正常

---

## 第六步：上传产品图片

1. 云开发控制台 → 存储 → 上传图片
2. 复制每张图片的 **fileID**（形如 `cloud://product-catalog.xxx.png`）
3. 回到数据库，更新 `products` 集合中对应产品的 `images` 字段：
```json
{
  "images": [
    "cloud://product-catalog.7072-xxx/headphones-1.png",
    "cloud://product-catalog.7072-xxx/headphones-2.png"
  ]
}
```

---

## 第七步：填充产品数据

使用云开发控制台的「导入」功能，准备一个 JSON 文件批量导入全部 50+ 款产品。每条记录格式参照第四步示例。

---

## 第八步：真机预览测试

1. 开发者工具点击「预览」→ 生成二维码
2. 手机微信扫码，测试：
   - 首页轮播和分类入口
   - 分类页切换和下拉刷新
   - 搜索功能
   - 详情页轮播和规格表
   - 复制微信号按钮
   - 底部 tab 切换

---

## 第九步：提交审核发布

1. 确认类目：「工具 > 信息查询」（纯展示无需特殊资质）
2. 开发者工具 → 上传 → 版本号 `1.0.0`，备注「首次提交」
3. 小程序后台 → 版本管理 → 提交审核
4. 准备 3 张截图（首页、详情页、分类页）
5. 审核通常 1-3 天，通过后点击「发布」
