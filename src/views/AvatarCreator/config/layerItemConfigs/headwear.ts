import { avaiableColors } from "./../avaiable-colors";
import { GenderType, LAYER_ID } from "./../../interface/avatar.interface";
import { LayerItemConfig } from "./../../interface/layer.interface";
const headwearConfig: LayerItemConfig[] = [
  {
    empty: true,
    weight: 30,
    genderType: GenderType.UNSET,
  },

  // 牛年限定
  // {
  //   filename: "cowHorn",
  //   weight: 2,
  //   genderType: GenderType.UNSET,
  //   congratulate: true,
  // },
];

export default headwearConfig;
