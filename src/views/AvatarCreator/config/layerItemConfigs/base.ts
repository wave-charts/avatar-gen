import { LAYER_ID, GenderType } from './../../interface/avatar.interface';
import { avaiableColors } from './../avaiable-colors';
import { LayerItemConfig } from './../../interface/layer.interface';
const baseConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: '1',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.BASE],
  },
];
export default baseConfig;
