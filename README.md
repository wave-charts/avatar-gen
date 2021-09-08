简体中文 | [English](./README-EN.md)

![](https://img.shields.io/node/v/html2canvas) ![](https://img.shields.io/npm/l/html2canvas) ![](https://img.shields.io/github/last-commit/wave-charts/avatar-gen)

# 头像生成器

## 简介

一个纯前端实现的头像生成器，并且支持导出与批量下载的功能;

在线演示： [https://avatar.gaoxiazhitu.com](https://avatar.gaoxiazhitu.com)

预览：

![](./assets/doc/mobile-preview.gif)

## 运行项目

> 该项目基于 `vue@2.x` 构建， 运行前，请确保您已安装了 `node` 环境

1. 克隆项目

```bash
git clone https://github.com/wave-charts/avatar-gen.git
cd chart-gen
```

2. 运行项目

**通过 Yarn 运行项目**

```bash
yarn
yarn serve
```

**通过 npm 运行项目**

```bash
npm install
npm run serve
```

## 更新说明

**版本 `1.0.0` 对头像生成的逻辑进行了重构，现在，头像的生成通过直接拼接 `SVG` 代码实现, 为 `SVG` 导出提供了支持, 此外还支持**：

- 每个图层素材支持 `性别` 的配置
- 每个图层素材支持 `权重` 的配置
- `DarkMode` 的支持
- `稀有物品` 的定义，触发时播放庆祝礼花 🎉

## 定制

> 项目的头像相关素材来自 Figma 社区：[https://www.figma.com/community/file/829741575478342595/Avatar-Illustration-System](https://www.figma.com/community/file/829741575478342595/Avatar-Illustration-System)

### 图层管理

图层指 `Base(头部)` 、 `Hair(头发)` ... 等;
头像由不同的图层构成，图层定义于 `src/views/AvatarCreator/config/refs.ts` 的 `layerList` 变量，是一个 **图层数组**，定义如下：

```ts
declare layerList: Array<LayerListItem>;

interface LayerListItem {
  id: LAYER_ID;  // 图层的唯一标识
  dir: string; // 对应素材文件夹所在目录
  zIndex: number; // 层级
  layers: Array<LayerItemConfig>; // 该图层的素材列表，请查看下方 **素材管理**
  description?: string; // 描述
}
```
### 素材管理
素材定义于 `src/views/AvatarCreator/config/layerItemConfigs` 目录下,
按图层分类命名文件，每个文件内配置了该图层可用的素材列表，以及每个素材的配置，定义如下：

```ts
export interface LayerItemConfig {
  // 性别
  genderType: GenderType;

  // 图层权重
  weight: number;

  // 文件名
  filename?: string;

  // 是否为空
  empty?: boolean;

  // 可用的颜色组
  avaiableColorGroups?: ColorGroup[];

  // 配置之后，不会使用随机色，会使用和指定 layer 一样的颜色组
  colorSameAs?: LAYER_ID;

  // 指定当前图层存在时，需要删除的图层类型
  removeLayers?: LAYER_ID[];

  // 颜色不能和指定的相同
  colorNotSameAs?: LAYER_ID[];

  // 是否播放 庆祝礼花 🎉
  congratulate?: boolean;
}
```


素材原始文件位于 `src/views/AvatarCreator/resource` 目录下，以**图层命名**分类到各自的文件夹，素材原始文件以 `.svg` 的形式存储，在图层配置中，会 存储 `filename` 字段，从而将配置与素材进行关联。

原始文件中，需要预先将 `SVG` 中需要使用变量的颜色替换，使用 `{{}}` 标记插值 如：

```xml
<path d="..." fill="{{color[0]}}" stroke="black" />
```

> 类型定义位于 `src/views/AvatarCreator/interface` 目录中
