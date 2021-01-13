/**
 * 可用图层类型
 */
export type LayerType =
  | "Base"
  | "Ear"
  | "EarRing"
  | "Eyebrows"
  | "Eyes"
  | "FacialHair"
  | "Glasses"
  | "Hair"
  | "Mouth"
  | "Nose"
  | "Shirt"
  | "Mask";

export interface Color {
  weight: number;
  value: string;
}

export interface LayerConfig {
  id: number | string;
  weight: number;
  colorLib?: Color[]; // 设置可用颜色
  colorRefer?: LayerType; // 设置颜色跟随
  hide?: LayerType[]; // 指定需要隐藏的图层
  congratulate?: boolean; // 是否显示彩蛋
}

export interface Layer {
  name: string;
  layerType: LayerType;
  fill?: string;
  colorRefer?: LayerType;
  zIndex?: number;
  config?: LayerConfig;
  hide?: boolean;
}
