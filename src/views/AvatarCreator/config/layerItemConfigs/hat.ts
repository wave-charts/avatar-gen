import { GenderType } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const hatConfig: LayerItemConfig[] = [
  
  // 圣诞节限定
  // {
  //   filename: 'Christmas',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 100,
  },
];

export default hatConfig;
