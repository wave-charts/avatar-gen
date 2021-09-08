import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const backgroundConfig: LayerItemConfig[] = [
  {
    filename: 'clean',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  }
];

export default backgroundConfig;
