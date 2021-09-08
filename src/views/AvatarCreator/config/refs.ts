import { LayerListItem } from "./../interface/layer.interface";
import { LAYER_ID } from "./../interface/avatar.interface";

import baseConfig from "./layerItemConfigs/base";
import earConfig from "./layerItemConfigs/ear";
import earRingConfig from "./layerItemConfigs/earRing";
import eyesConfig from "./layerItemConfigs/eyes";
import facialHairConfig from "./layerItemConfigs/facialHari";
import glassesConfig from "./layerItemConfigs/glasses";
import hatConfig from "./layerItemConfigs/hat";
import mouthConfig from "./layerItemConfigs/mouth";
import noseConfig from "./layerItemConfigs/nose";
import shirtConfig from "./layerItemConfigs/shirt";
import backgroundConfig from "./layerItemConfigs/background";
import hairConfig from "./layerItemConfigs/hair";
import eyeBrowsConfig from "./layerItemConfigs/eyeBrows";
import maskConfig from "./layerItemConfigs/mask";
import headwearConfig from "./layerItemConfigs/headwear";

export const layerList: Array<LayerListItem> = [
  {
    id: LAYER_ID.BASE,
    dir: "Base",
    description: "头部",
    zIndex: 100,
    layers: baseConfig,
  },

  {
    id: LAYER_ID.EAR,
    dir: "Ear",
    description: "耳朵",
    zIndex: 500,
    layers: earConfig,
  },

  {
    id: LAYER_ID.EAR_RING,
    dir: "Ear Ring",
    description: "耳环",
    zIndex: 501,
    layers: earRingConfig,
  },

  {
    id: LAYER_ID.EYE_BROWS,
    dir: "Eyebrows",
    description: "眉毛",
    zIndex: 200,
    layers: eyeBrowsConfig,
  },

  {
    id: LAYER_ID.EYES,
    dir: "Eyes",
    description: "眼睛",
    zIndex: 200,
    layers: eyesConfig,
  },

  {
    id: LAYER_ID.FACIAL_HAIR,
    dir: "Facial Hair",
    description: "胡子",
    zIndex: 201,
    layers: facialHairConfig,
  },

  {
    id: LAYER_ID.GLASSES,
    dir: "Glasses",
    description: "眼镜",
    zIndex: 600,
    layers: glassesConfig,
  },

  {
    id: LAYER_ID.HAIR,
    dir: "Hair",
    description: "头发",
    zIndex: 400,
    layers: hairConfig,
  },

  {
    id: LAYER_ID.HEADWEAR,
    dir: "Headwear",
    description: "头戴饰物",
    zIndex: 450,
    layers: headwearConfig,
  },

  {
    id: LAYER_ID.HAT,
    dir: "Hat",
    description: "帽子",
    zIndex: 401,
    layers: hatConfig,
  },

  {
    id: LAYER_ID.MOUTH,
    dir: "Mouth",
    description: "嘴巴",
    zIndex: 202,
    layers: mouthConfig,
  },

  {
    id: LAYER_ID.NOSE,
    dir: "Nose",
    description: "鼻子",
    zIndex: 203,
    layers: noseConfig,
  },

  {
    id: LAYER_ID.SHIRT,
    dir: "Shirt",
    description: "衣服",
    zIndex: 200,
    layers: shirtConfig,
  },

  {
    id: LAYER_ID.BACKGROUND,
    dir: "Background",
    description: "背景图层",
    zIndex: 0,
    layers: backgroundConfig,
  },

  {
    id: LAYER_ID.MASK,
    dir: "Mask",
    description: "口罩",
    zIndex: 501,
    layers: maskConfig,
  },
];
