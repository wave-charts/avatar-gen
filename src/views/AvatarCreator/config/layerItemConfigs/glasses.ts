import { GenderType } from "./../../interface/avatar.interface";
import { LayerItemConfig } from "./../../interface/layer.interface";
const glassesConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: "Round",
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 80,
  },
];
export default glassesConfig;
