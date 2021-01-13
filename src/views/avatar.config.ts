import { LayerConfig, LayerType } from "./avatar.type";
import { Color } from "./avatar.type";

export const colorLib: Record<string, Color[]> = {
  // 皮肤的可用色
  skin: [
    {
      weight: 10,
      value: "#F9C9B6",
    },
    {
      weight: 2,
      value: "#AC6651",
    },
    {
      weight: 2,
      value: "#77311D",
    },
  ],

  // 头发的可用色
  hair: [
    { weight: 1, value: "#000000" },
    { weight: 1, value: "#ffffff" },
    { weight: 1, value: "#F4D150" },
    { weight: 1, value: "#FC909F" },
    { weight: 1, value: "#6BD9E9" },
    { weight: 1, value: "#9287FF" },
  ],

  // 服装可用颜色
  shirt: [
    { weight: 1, value: "#000000" },
    { weight: 1, value: "#ffffff" },
    { weight: 1, value: "#F4D150" },
    { weight: 1, value: "#FC909F" },
    { weight: 1, value: "#6BD9E9" },
    { weight: 1, value: "#9287FF" },
  ],

  // 背景可用色
  background: [
    { weight: 1, value: "#E0DDFF" },
    { weight: 1, value: "#D2EFF3" },
    { weight: 1, value: "#FFEDEF" },
    { weight: 1, value: "#FFEBA4" },
    { weight: 1, value: "#F4D150" },
    { weight: 1, value: "#FC909F" },
    { weight: 1, value: "#6BD9E9" },
    { weight: 1, value: "#9287FF" },
  ],
};

export const avatarConfig: Record<LayerType, LayerConfig[]> = {
  // 头
  Base: [
    {
      id: 1,
      colorLib: colorLib.skin,
      weight: 5,
    },
  ],

  // 耳朵
  Ear: [
    {
      id: 1,
      colorRefer: "Base",
      weight: 1,
    },
    {
      id: 2,
      colorRefer: "Base",
      weight: 1,
    },
  ],

  // 耳环
  EarRing: [
    {
      id: 1,
      weight: 1,
    },
    {
      id: 2,
      weight: 1,
    },
    {
      id: 3,
      weight: 5,
    },
  ],

  // 眉毛
  Eyebrows: [
    {
      id: 1,
      weight: 1,
    },
    {
      id: 2,
      weight: 1,
    },
    {
      id: 3,
      weight: 1,
    },
    {
      id: 4,
      weight: 1,
    },
  ],

  // 眼睛
  Eyes: [
    {
      id: 1,
      weight: 1,
    },
    {
      id: 2,
      weight: 1,
    },
    {
      id: 3,
      weight: 1,
    },
    {
      id: 4,
      weight: 1,
    },
  ],

  // 胡子
  FacialHair: [
    // {
    //   id: 1,
    //   weight: 1,
    // },
    {
      id: 2,
      weight: 1,
    },
    {
      id: 3,
      weight: 5,
    },
  ],

  // 眼镜
  Glasses: [
    {
      id: 1,
      weight: 1,
    },
    {
      id: 2,
      weight: 1,
    },
    {
      id: 3,
      weight: 2,
    },
  ],

  // 头发
  Hair: [
    {
      // Danny Phantom
      id: 1,
      weight: 1,
      colorLib: colorLib.hair,
    },
    {
      // Doug Funny
      id: 2,
      weight: 1,
      colorLib: colorLib.hair,
    },
    {
      // Fonze
      id: 3,
      weight: 1,
      colorLib: colorLib.hair,
    },
    {
      // Full
      id: 4,
      weight: 1,
      colorLib: colorLib.hair,
      hide: ["FacialHair"],
    },
    {
      // Mr Clean
      id: 5,
      weight: 1,
      colorLib: colorLib.hair,
    },
    {
      // Mr T
      id: 6,
      weight: 1,
      colorLib: colorLib.hair,
    },
    {
      // Pixie
      id: 7,
      weight: 1,
      colorLib: colorLib.hair,
      hide: ["FacialHair"],
    },
    {
      // Turban
      id: 8,
      weight: 1,
      colorLib: colorLib.hair,
    },
  ],

  // 嘴巴
  Mouth: [
    {
      id: 1,
      weight: 10,
    },
    {
      id: 2,
      weight: 10,
    },
    {
      id: 3,
      weight: 10,
    },
    {
      id: 4,
      weight: 10,
    },
    {
      id: 5,
      weight: 10,
    },
    {
      id: 6,
      weight: 10,
    },
    {
      id: 7,
      weight: 10,
    },
    {
      id: 8,
      weight: 10,
    },
    {
      id: "qy01",
      weight: 5,
      congratulate: true,
    },
  ],

  // 鼻子
  Nose: [
    {
      id: 1,
      weight: 1,
    },
    {
      id: 2,
      weight: 1,
    },
    {
      id: 3,
      weight: 1,
    },
  ],

  // 衣服
  Shirt: [
    {
      id: 1,
      weight: 1,
      colorLib: colorLib.shirt,
    },
    {
      id: 2,
      weight: 1,
      colorLib: colorLib.shirt,
    },
    {
      id: 3,
      weight: 1,
      colorLib: colorLib.shirt,
    },
  ],

  // 面罩
  Mask: [
    {
      id: "Empty",
      weight: 1,
    },
  ],

  // 帽子
  Hat: [
    {
      id: "Empty",
      weight: 50,
    },
  ],
};

export const avatarZIndex: Record<string, number> = {
  Base: 1,
  Ear: 5,
  EarRing: 5,

  Eyebrows: 2,
  Eyes: 2,
  Glasses: 3,

  FacialHair: 2,
  Hair: 4,
  Mouth: 2,
  Nose: 2,
  Shirt: 2,
};
