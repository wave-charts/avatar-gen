import { GenderType } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const earRingConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: 'Hoop',
    weight: 10,
  },

  {
    genderType: GenderType.UNSET,
    filename: 'Stud',
    weight: 10,
  },

  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 100,
  },

  // 新年限定
  // {
  //   genderType: GenderType.UNSET,
  //   filename: "Firecrackers",
  //   weight: 10,
  // },

  // 新年限定
  // {
  //   genderType: GenderType.UNSET,
  //   filename: "lanterns",
  //   weight: 10,
  // }
];
export default earRingConfig;
