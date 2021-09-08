import { LAYER_ID } from './../interface/avatar.interface';
import { ColorGroup } from './../interface/color.interface';

export const avaiableColors: Record<LAYER_ID, ColorGroup[]> = {
  // 皮肤的可用色
  [LAYER_ID.BASE]: [
    { weight: 20, value: ['#F9C9B6'] },
    { weight: 2, value: ['#AC6651'] },
    { weight: 2, value: ['#77311D'] },
    { weight: 1, value: ['#FFDACB'] },
  ],

  // 头发的可用色
  [LAYER_ID.HAIR]: [
    { weight: 1, value: ['#000000'] },
    { weight: 1, value: ['#ffffff'] },
    { weight: 1, value: ['#F4D150'] },
    { weight: 1, value: ['#FC909F'] },
    { weight: 1, value: ['#6BD9E9'] },
    { weight: 1, value: ['#9287FF'] },

    { weight: 1, value: ['#362100'] },
    { weight: 1, value: ['#562400'] },
    { weight: 1, value: ['#5B3800'] },
    { weight: 1, value: ['#FF4D6B'] },
    { weight: 1, value: ['#000056'] },
    { weight: 1, value: ['#CB7F50'] },
    { weight: 1, value: ['#F6CF45'] },
    { weight: 1, value: ['#876565'] },
  ],

  // 服装可用颜色
  [LAYER_ID.SHIRT]: [
    { weight: 1, value: ['#000000', '#AFAFAF'] },
    { weight: 1, value: ['#ffffff', '#A1A1A1'] },
    { weight: 1, value: ['#F4D150', '#FFEBA4'] },
    { weight: 1, value: ['#FC909F', '#FFEDEF'] },
    { weight: 1, value: ['#6BD9E9', '#D2EFF3'] },
    { weight: 1, value: ['#9287FF', '#E0DDFF'] },

    { weight: 1, value: ["#E97C17", "#d4975e"] },
    { weight: 1, value: ["#B4B0CD", "#e4e2f1"] },
    { weight: 1, value: ["#878787", "#b6b6b6"] },
    { weight: 1, value: ["#CA475A", "#d86072"] },
    { weight: 1, value: ["#0C4F2F", "#3d8160"] },
    { weight: 1, value: ["#354161", "#579b7a"] },
  ],

  // 胡子可用色
  [LAYER_ID.FACIAL_HAIR]: [
    { weight: 1, value: ['#222F37'] },
    { weight: 1, value: ['#612507'] },
    { weight: 1, value: ['#F3D010'] },
  ],

  // 背景可用色
  [LAYER_ID.BACKGROUND]: [
    { weight: 1, value: ['#E0DDFF'] },
    { weight: 1, value: ['#D2EFF3'] },
    { weight: 1, value: ['#FFEDEF'] },
    { weight: 1, value: ['#FFEBA4'] },
    { weight: 1, value: ['#F4D150'] },
    { weight: 1, value: ['#FC909F'] },
    { weight: 1, value: ['#6BD9E9'] },
    { weight: 1, value: ['#9287FF'] },
  ],

  [LAYER_ID.EAR]: [],
  [LAYER_ID.EAR_RING]: [],
  [LAYER_ID.EYES]: [],
  [LAYER_ID.EYE_BROWS]: [],
  [LAYER_ID.GLASSES]: [],
  [LAYER_ID.HAT]: [],
  [LAYER_ID.MOUTH]: [],
  [LAYER_ID.NOSE]: [],
  [LAYER_ID.MASK]: [],
  [LAYER_ID.HEADWEAR]: [],
};
