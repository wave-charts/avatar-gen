[简体中文](./README.md) | English

![](https://img.shields.io/node/v/html2canvas) ![](https://img.shields.io/npm/l/html2canvas) ![](https://img.shields.io/github/last-commit/wave-charts/avatar-gen)

# Avatar Genrator

## Introduction

A web platform to create random avatar,

DEMO: [https://avatar.gaoxiazhitu.com](https://avatar.gaoxiazhitu.com)

## Run

> base on `vue@2.x`,  make sure that `node` has been installed on your device

1. clone repository

```bash
git clone https://github.com/wave-charts/avatar-gen.git
cd chart-gen
```

2. run project

**Run with Yarn**

```bash
yarn
yarn serve
```

**Run with npm**

```bash
npm install
npm run serve
```

## Custom

> These resource in project can be found at Figma community: [https://www.figma.com/community/file/829741575478342595/Avatar-Illustration-System](https://www.figma.com/community/file/829741575478342595/Avatar-Illustration-System)


```ts
export const avatarConfig: Record<LayerType, LayerConfig[]> = {
  // 头
  Base: [
    {
      id: 1,  // 素材文件夹下的文件名， eg: `src/views/resource/Base/1.vue`
      colorLib: colorLib.skin,  // 可用颜色的集合
      weight: 5,  // 权重，影响出现的概率
    },
  ],

  // 耳朵
  Ear: [
    {
      id: 1,  // eg: `src/views/resource/Ear/1.vue`
      colorRefer: "Base", // 设置颜色跟随， eg: Ear 的颜色跟随 Base (即耳朵的颜色和头保持一致)
      weight: 1,
    },
    {
      id: 2,  // eg: `src/views/resource/Ear/2.vue`
      colorRefer: "Base",
      weight: 1,
    },
  ],

  ...
};
```
