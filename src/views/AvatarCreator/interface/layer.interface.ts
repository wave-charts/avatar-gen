import { GenderType, LAYER_ID } from "./avatar.interface";
import { ColorGroup } from "./color.interface";
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

export interface LayerListItem {
  id: LAYER_ID;
  dir: string;
  zIndex: number;
  layers: Array<LayerItemConfig>;
  description?: string;
}
