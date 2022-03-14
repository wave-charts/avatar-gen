import { GenderType } from "./../../interface/avatar.interface";
import { LayerItemConfig } from "./../../interface/layer.interface";
const maskConfig: LayerItemConfig[] = [
  {
    filename: "3M",
    genderType: GenderType.UNSET,
    weight: 10,
  },
  {
    filename: "Cyberpunk",
    genderType: GenderType.UNSET,
    weight: 5,
    congratulate: true,
  },
  {
    filename: "General",
    genderType: GenderType.UNSET,
    weight: 20,
  },
  {
    empty: true,
    genderType: GenderType.UNSET,
    weight: 100,
  },
];

export default maskConfig;
