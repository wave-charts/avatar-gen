import { GenderType } from "./../../interface/avatar.interface";
import { LayerItemConfig } from "./../../interface/layer.interface";
const earRingConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: "Hoop",
    weight: 10,
  },

  {
    genderType: GenderType.UNSET,
    filename: "Stud",
    weight: 10,
    congratulate: true,
  },

  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 100,
  },
];
export default earRingConfig;
